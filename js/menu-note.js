const menuNote = (function () {
  'use strict';

  const storageKey = 'bonnas.menu-note.v1';
  const toggle = document.getElementById('note-toggle');
  const panel = document.getElementById('note-panel');
  const options = document.getElementById('note-options');
  const optionLabel = document.getElementById('note-option-label');
  const optionSelect = document.getElementById('note-option');
  const list = document.getElementById('note-items');
  const empty = document.getElementById('note-empty');
  const total = document.getElementById('note-total');
  const clear = document.getElementById('note-clear');
  const close = document.getElementById('note-close');
  const widget = toggle.parentElement;
  const copy = document.getElementById('note-copy');
  const status = document.getElementById('note-status');
  const fallback = document.getElementById('note-copy-fallback');
  const money = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });
  const format = pence => money.format(pence / 100);
  const choicesByDish = new Map();
  const catalogue = new Map();
  let pending = [];
  let opener = toggle;

  for (const [category, dishes] of Object.entries(menu)) {
    for (const [name, , price] of dishes) {
      const minimum = category === 'Kebabs' ? 5 : 1;
      const needsConfirmation = category === 'Kebabs' || category === 'Snacks';
      const choices = price.split(' / ').map((part, index) => {
        const [, amount, portion] = part.match(/^£([\d.]+)(?: \((.+)\))?$/);
        const label = name === 'Haleem' ? ['Lamb', 'Beef'][index] : portion;
        const id = JSON.stringify([category, name, label ?? '']);
        const item = {
          id, minimum, name: label ? `${name} (${label})` : name,
          pence: needsConfirmation ? null : Math.round(Number(amount) * 100),
        };
        catalogue.set(id, item);
        return item;
      });
      choicesByDish.set(name, choices);
    }
  }

  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      return new Map(Object.entries(saved ?? {}).filter(([id, quantity]) =>
        catalogue.has(id) && Number.isInteger(quantity) && quantity >= 1 && quantity <= 99)
        .map(([id, quantity]) => [id, Math.max(quantity, catalogue.get(id).minimum)]));
    } catch {
      return new Map();
    }
  }

  const quantities = load();

  function setOpen(open, source = toggle, restoreFocus = true) {
    if (open) opener = source;
    const returnFocus = restoreFocus && !open && panel.contains(document.activeElement);
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (!open) {
      options.hidden = true;
      if (returnFocus) {
        (opener.isConnected ? opener : toggle).focus();
      }
    }
  }

  function update(item, quantity) {
    if (quantity >= item.minimum) quantities.set(item.id, quantity);
    else quantities.delete(item.id);
    save();
  }

  function save() {
    render();
    try {
      localStorage.setItem(storageKey, JSON.stringify(Object.fromEntries(quantities)));
    } catch {
      status.textContent = 'Your browser could not save this note for the next visit.';
    }
  }

  function summary() {
    let pence = 0;
    let unpriced = 0;
    for (const [id, quantity] of quantities) {
      const item = catalogue.get(id);
      if (item.pence === null) unpriced++;
      else pence += item.pence * quantity;
    }
    if (!quantities.size) return '';
    if (unpriced === quantities.size) return 'Estimated total: price to confirm';
    return `Estimated total: ${format(pence)}${unpriced ? ' (excludes items with prices to confirm)' : ''}`;
  }

  function quantityButton(item, quantity, delta) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pill';
    button.textContent = delta > 0 ? '+' : '−';
    const decreaseLabel = quantity === item.minimum ? `Remove ${item.name} from note` : `Remove one ${item.name}`;
    button.setAttribute('aria-label', delta > 0 ? `Add one ${item.name}` : decreaseLabel);
    button.disabled = delta > 0 && quantity === 99;
    button.addEventListener('click', () => {
      const index = [...list.children].indexOf(button.closest('li'));
      update(item, quantity + delta);
      const row = list.children[index];
      const replacement = row?.querySelectorAll('button')[delta > 0 ? 1 : 0];
      if (replacement && !replacement.disabled) replacement.focus();
      else (row?.querySelector('button') ?? close).focus();
    });
    return button;
  }

  function render() {
    list.replaceChildren();
    let count = 0;
    for (const [id, quantity] of quantities) {
      const item = catalogue.get(id);
      const row = document.createElement('li');
      row.innerHTML = '<div><strong></strong><small></small></div><div class="note-quantity"><span></span></div>';
      row.querySelector('strong').textContent = item.name;
      row.querySelector('small').textContent = item.pence === null ? (item.minimum > 1 ? 'Price to confirm · 5-piece minimum' : 'Price to confirm') :
        `${format(item.pence)} each · ${format(item.pence * quantity)}`;
      row.querySelector('span').textContent = quantity;
      const controls = row.querySelector('.note-quantity');
      controls.prepend(quantityButton(item, quantity, -1));
      controls.append(quantityButton(item, quantity, 1));
      list.append(row);
      count += quantity;
    }
    toggle.textContent = `My menu note · ${count}`;
    empty.hidden = count > 0;
    total.textContent = summary();
    clear.disabled = copy.disabled = count === 0;
    status.textContent = '';
    fallback.hidden = true;
  }

  function selectDish(name, source) {
    const choices = choicesByDish.get(name);
    setOpen(true, source);
    options.hidden = choices.length === 1;
    if (choices.length === 1) {
      const [item] = choices;
      if (!quantities.has(item.id)) update(item, item.minimum);
      return;
    }
    pending = choices;
    optionLabel.textContent = `Choose an option for ${name}`;
    optionSelect.replaceChildren(...choices.map((item, index) =>
      new Option(`${item.name} · ${item.pence === null ? 'Price to confirm' : format(item.pence)}`, index)));
    optionSelect.focus();
  }

  options.addEventListener('submit', event => {
    event.preventDefault();
    const item = pending[Number(optionSelect.value)];
    options.hidden = true;
    if (!quantities.has(item.id)) update(item, item.minimum);
    (opener.isConnected ? opener : toggle).focus();
  });

  toggle.addEventListener('click', () => setOpen(panel.hidden));
  close.addEventListener('click', () => setOpen(false));
  clear.addEventListener('click', () => {
    quantities.clear();
    options.hidden = true;
    save();
    close.focus();
  });
  document.addEventListener('click', event => {
    if (!panel.hidden && !event.composedPath().includes(widget) && !event.target.closest('.card-note-action')) {
      setOpen(false, toggle, false);
    }
  });
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') setOpen(false);
  });

  copy.addEventListener('click', async () => {
    const lines = [...quantities].map(([id, quantity]) => {
      const item = catalogue.get(id);
      return `${quantity} × ${item.name} — ${item.pence === null ? 'price to confirm' : format(item.pence * quantity)}`;
    });
    const text = ['Hi Bonna’s! I’d like to check availability for:', '', ...lines, '', summary(), 'Preferred collection date:'].join('\n');
    try {
      await navigator.clipboard.writeText(text);
      fallback.hidden = true;
      status.textContent = 'Order note copied.';
    } catch {
      fallback.value = text;
      fallback.hidden = false;
      fallback.focus();
      fallback.select();
      status.textContent = 'Select Copy on your device to copy this note.';
    }
  });

  render();
  return { selectDish };
})();
