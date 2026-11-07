import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const template = readFileSync(new URL('index.template.html', root), 'utf8');
const html = template.replace(/^<!-- include ([\w./-]+) -->\r?\n/gm, (_, path) => {
  return readFileSync(new URL(path, root), 'utf8');
});

writeFileSync(new URL('index.html', root), html);
