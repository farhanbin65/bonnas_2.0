(function () {
  'use strict';

  const tabs = document.getElementById('tabs');
  const grid = document.getElementById('grid');
  const categories = Object.keys(menu);

  function card([name, description, price]) {
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = '<h3></h3><p></p><strong class="card-price"></strong>';
    article.querySelector('h3').textContent = name;
    article.querySelector('p').textContent = description;
    article.querySelector('strong').textContent = price;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'card-note-action';
    button.setAttribute('aria-label', `Open menu note for ${name}`);
    button.setAttribute('aria-controls', 'note-panel');
    button.addEventListener('click', () => menuNote.selectDish(name, button));
    article.append(button);
    return article;
  }

  function showCategory(selected) {
    grid.replaceChildren(...menu[selected].map(card));
    for (const button of tabs.children) {
      button.setAttribute('aria-pressed', String(button.textContent === selected));
    }
  }

  for (const category of categories) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'pill';
    button.textContent = category;
    button.addEventListener('click', () => showCategory(category));
    tabs.append(button);
  }

  showCategory(categories[0]);
})();
