import { randomUUID } from "crypto";

export interface ConfigLayer {
  value: string;
  source: string;
  profile?: string | null;
  file: string;
  uri: string;
  line: number;
  active: boolean;
}

export interface ConfigDirective {
  name: string;
  layers: ConfigLayer[];
}

export interface ConfigPreview {
  process: string;
  labels: string[];
  profiles: string[];
  activeProfiles: string[];
  directives: ConfigDirective[];
}

export function buildConfigPreview(data: ConfigPreview): string {
  const nonce = randomUUID();
  const csp = [
    "default-src 'none'",
    `script-src 'nonce-${nonce}'`,
    "style-src 'unsafe-inline'"
  ].join("; ");

  return `
<html>
  <head>
    <meta http-equiv="Content-Security-Policy" content="${csp}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${style}
  </head>
  <body>
    <h3 id="title"></h3>
    <div id="controls" class="controls">
      <p id="labels" class="labels"></p>
      <div id="profiles" class="profiles"></div>
      <label id="filter" class="filter">
        Hide overridden settings: <input type="checkbox" id="hide-overridden">
      </label>
      <label id="search-label" class="search-label">
        Filter: <input type="search" id="search" class="search">
      </label>
    </div>
    <p id="empty" class="subtle" hidden>No config settings apply to this process.</p>
    <table id="directives">
      <thead>
        <tr><th>Directive</th><th>Value</th><th>Source</th><th>Defined in</th></tr>
      </thead>
      <tbody></tbody>
    </table>
    <p class="subtle docs">
      <a href="https://docs.seqera.io/nextflow/config#process-configuration">How process configuration works</a>
      &middot;
      <a href="https://docs.seqera.io/nextflow/reference/process/directives">Process directive reference</a>
    </p>
    <script nonce="${nonce}">
      const vscode = acquireVsCodeApi();
      ${render}
      render(${encode(data)});
      document.getElementById('hide-overridden').addEventListener('change', (event) => {
        document.getElementById('directives').classList.toggle('hide-overridden', event.target.checked);
      });
      document.getElementById('search').addEventListener('input', renderTable);
      window.addEventListener('message', (event) => {
        if (event.data.type === 'update') render(event.data.data);
      });
    </script>
  </body>
</html>`;
}

/** `<` is escaped so that a directive value cannot close the script tag. */
function encode(data: ConfigPreview): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const style = `<style>
  body {
    margin: 0 16px 16px;
    font-family: var(--vscode-font-family, sans-serif);
    color: var(--vscode-foreground);
  }
  .subtle {
    color: var(--vscode-descriptionForeground);
  }
  .controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
    margin-bottom: 16px;
  }
  /* one control per line, until there is room for more */
  .controls > * {
    flex: 1 1 100%;
    margin: 0;
  }
  @media (min-width: 560px) {
    .controls > * {
      flex: 1 1 calc(50% - 12px);
    }
  }
  /* wide enough for one line, with the slack spread between the controls
     rather than swallowed by the filter */
  @media (min-width: 1000px) {
    .controls {
      justify-content: space-between;
    }
    .controls > * {
      flex: 0 1 auto;
    }
    .controls > .search-label {
      flex: 0 1 32ch;
    }
  }
  .profiles, .labels {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }
  /* Profiles apply in the order they were added, so they are a list rather
     than a set of checkboxes */
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 1px 8px;
    border-radius: 10px;
    background: var(--vscode-badge-background);
    color: var(--vscode-badge-foreground);
  }
  .pill button {
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font-size: 1.1em;
    line-height: 1;
    cursor: pointer;
  }
  .profile-input, .search {
    box-sizing: border-box;
    padding: 3px 6px;
    font-family: inherit;
    font-size: inherit;
    color: var(--vscode-input-foreground);
    background: var(--vscode-input-background);
    border: 1px solid var(--vscode-input-border, transparent);
  }
  .profile-input:focus, .search:focus {
    outline: 1px solid var(--vscode-focusBorder);
  }
  .profile-input {
    width: 100%;
  }
  .picker {
    position: relative;
    display: inline-block;
    /* grows into whatever the pills leave, down to its own width */
    flex: 1 1 16ch;
    min-width: 0;
  }
  .options {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    min-width: 100%;
    max-height: 200px;
    margin: 2px 0 0;
    padding: 2px 0;
    overflow-y: auto;
    list-style: none;
    color: var(--vscode-dropdown-foreground, var(--vscode-foreground));
    background: var(--vscode-dropdown-background, var(--vscode-input-background));
    border: 1px solid var(--vscode-dropdown-border, #8884);
  }
  .options li {
    padding: 2px 8px;
    white-space: nowrap;
    cursor: pointer;
  }
  .options li.active {
    color: var(--vscode-list-activeSelectionForeground);
    background: var(--vscode-list-activeSelectionBackground);
  }
  .filter, .search-label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--vscode-descriptionForeground);
    white-space: nowrap;
  }
  .filter {
    cursor: pointer;
  }
  .search {
    flex: 1;
    min-width: 0;
  }
  .docs {
    margin-top: 16px;
    font-size: 0.9em;
    text-align: center;
  }
  table.hide-overridden tr.overridden {
    display: none;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    text-align: left;
    padding: 6px 12px 6px 0;
    border-bottom: 1px solid var(--vscode-panel-border, #8884);
  }
  td {
    padding: 4px 12px 4px 0;
    vertical-align: top;
  }
  tr.first td {
    border-top: 1px solid var(--vscode-panel-border, #8884);
  }
  /* An overridden setting reads like a struck-out CSS rule in a browser inspector */
  tr.overridden td {
    color: var(--vscode-descriptionForeground);
    text-decoration: line-through;
  }
  td.name, td.value, td.source {
    font-family: var(--vscode-editor-font-family, monospace);
  }
  /* A closure or a deeply nested config file would otherwise stretch the table off-screen */
  td.value, td.source, td.file {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  td.value, td.source {
    max-width: 40ch;
  }
  /* The file name and line matter more than the leading directories, so the
     cell is laid out right to left to put the ellipsis at the front */
  td.file {
    max-width: 20ch;
    direction: rtl;
    text-align: left;
  }
  .note, .profile-tag {
    font-family: var(--vscode-font-family, sans-serif);
    color: var(--vscode-descriptionForeground);
  }
  .note {
    font-size: 0.9em;
    font-style: italic;
  }
  /* The link rather than the cell is truncated, so that the ellipsis is
     drawn in the link color */
  a.location {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--vscode-textLink-foreground);
    cursor: pointer;
    text-decoration: none;
  }
  a.location span {
    direction: ltr;
    unicode-bidi: embed;
  }
  a.location:hover {
    text-decoration: underline;
  }
  /* the controls set a display, which would otherwise outrank [hidden] */
  [hidden] {
    display: none !important;
  }
</style>`;

/**
 * Rendered in the webview, so it is built with the DOM rather than markup:
 * directive values are arbitrary source text.
 */
const render = `
let current;

/**
 * The selected profiles, which are updated as soon as a profile is added or
 * removed. The pills stay live while the preview is being resolved, so a
 * click has to build on the pending selection rather than the rendered one.
 */
let selected = [];

/** Adding a profile re-renders the row, which would otherwise drop focus. */
let focusPicker = false;

function render(data) {
  current = data;
  selected = data.activeProfiles;
  document.getElementById('title').textContent = data.process + ' config';
  const labels = document.getElementById('labels');
  labels.replaceChildren(heading('Labels:'));
  for (const label of data.labels) labels.append(pill(label));
  labels.hidden = !data.labels.length;

  const profiles = document.getElementById('profiles');
  profiles.replaceChildren(heading('Profiles:'));
  for (const profile of data.activeProfiles) {
    profiles.append(
      pill(profile, () =>
        setProfiles(selected.filter((p) => p !== profile))
      )
    );
  }
  const remaining = data.profiles.filter((p) => !data.activeProfiles.includes(p));
  if (remaining.length) {
    const added = profiles.appendChild(picker(remaining));
    if (focusPicker) added.querySelector('input').focus();
  }
  focusPicker = false;
  profiles.hidden = !data.profiles.length;
  renderTable();
}

function renderTable() {
  const query = document.getElementById('search').value.trim().toLowerCase();
  // the label directive is already listed above the table
  const directives = current.directives.filter((d) => d.name !== 'label');

  const table = document.getElementById('directives');
  const body = table.querySelector('tbody');
  body.replaceChildren();
  for (const directive of directives) {
    if (!matches(directive, query)) continue;
    // a directive that appends rather than overrides has no losing layer
    const repeats =
      directive.layers.length > 1 && directive.layers.every((l) => l.active);
    directive.layers.forEach((layer, index) => {
      const row = document.createElement('tr');
      row.className = index === 0 ? 'first' : layer.active ? '' : 'overridden';
      row.append(
        cell(
          index === 0 ? directive.name : '',
          'name',
          repeats && index === 0 ? ' (accumulates)' : null,
          'note'
        ),
        cell(layer.value, 'value'),
        cell(layer.source, 'source', layer.profile && ' (' + layer.profile + ')', 'profile-tag'),
        locationCell(layer)
      );
      body.append(row);
    });
  }
  const empty = !body.children.length;
  table.hidden = empty;
  document.getElementById('filter').hidden = !directives.length;
  document.getElementById('search-label').hidden = !directives.length;
  const controls = document.getElementById('controls');
  controls.hidden = [...controls.children].every((el) => el.hidden);
  const message = document.getElementById('empty');
  message.textContent = query
    ? 'No directives match the filter.'
    : 'No config settings apply to this process.';
  message.hidden = !empty;
}

/** A directive is matched on its name and on the text of every layer. */
function matches(directive, query) {
  if (!query) return true;
  if (directive.name.toLowerCase().includes(query)) return true;
  return directive.layers.some((layer) =>
    [layer.value, layer.source, layer.profile, layer.file]
      .join(' ')
      .toLowerCase()
      .includes(query)
  );
}

function heading(text) {
  const span = document.createElement('span');
  span.className = 'subtle';
  span.textContent = text;
  return span;
}

/** A label is a fact about the process, so its pill has nothing to remove. */
function pill(text, onRemove) {
  const span = document.createElement('span');
  span.className = 'pill';
  span.append(text);
  if (onRemove) {
    const remove = document.createElement('button');
    remove.textContent = '\u00d7';
    remove.title = 'Remove ' + text;
    remove.addEventListener('click', onRemove);
    span.append(remove);
  }
  return span;
}

/**
 * A combobox rather than a datalist: the native dropdown is a widget that
 * the page cannot drive, and its arrow keys do not work in a webview.
 */
function picker(remaining) {
  const input = document.createElement('input');
  input.className = 'profile-input';
  input.placeholder = 'Add profile';
  input.setAttribute('autocomplete', 'off');
  input.setAttribute('role', 'combobox');

  const list = document.createElement('ul');
  list.className = 'options';
  list.hidden = true;

  let matches = [];
  let index = 0;

  function close() {
    list.hidden = true;
    input.setAttribute('aria-expanded', 'false');
  }

  function choose(profile) {
    focusPicker = true;
    setProfiles([...selected, profile]);
  }

  function draw() {
    const query = input.value.trim().toLowerCase();
    matches = remaining.filter((p) => p.toLowerCase().includes(query));
    if (index >= matches.length) index = 0;
    list.replaceChildren();
    matches.forEach((profile, i) => {
      const item = document.createElement('li');
      item.textContent = profile;
      item.setAttribute('role', 'option');
      if (i === index) item.className = 'active';
      // mousedown, because blur would close the list before a click lands
      item.addEventListener('mousedown', (event) => {
        event.preventDefault();
        choose(profile);
      });
      list.append(item);
    });
    list.hidden = !matches.length;
    input.setAttribute('aria-expanded', String(!list.hidden));
    // 'nearest' scrolls the list only when the active item is out of view
    if (!list.hidden) list.children[index].scrollIntoView({ block: 'nearest' });
  }

  // a new query highlights its first match
  input.addEventListener('input', () => {
    index = 0;
    draw();
  });
  input.addEventListener('focus', draw);
  input.addEventListener('blur', close);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      close();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (!list.hidden && matches[index]) choose(matches[index]);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (list.hidden) return draw();
      if (!matches.length) return;
      const step = event.key === 'ArrowDown' ? 1 : matches.length - 1;
      index = (index + step) % matches.length;
      draw();
    }
  });

  const wrapper = document.createElement('span');
  wrapper.className = 'picker';
  wrapper.append(input, list);
  return wrapper;
}

// The cascade has to be resolved again for a new selection, and the order
// decides the winner the same way -profile docker,test does.
function setProfiles(profiles) {
  selected = [...new Set(profiles)];
  vscode.postMessage({ type: 'profiles', profiles: selected });
}

/** The cell is truncated by the stylesheet, so it is always given a title. */
function cell(text, className, suffix, suffixClass) {
  const td = document.createElement('td');
  td.textContent = text;
  if (className) td.className = className;
  if (suffix) {
    const span = document.createElement('span');
    span.className = suffixClass;
    span.textContent = suffix;
    td.append(span);
  }
  td.title = td.textContent;
  return td;
}

function locationCell(layer) {
  const text = layer.file + ':' + layer.line;
  const link = document.createElement('a');
  link.className = 'location';
  // the path reads left to right inside a cell that is laid out right to left
  const path = document.createElement('span');
  path.textContent = text;
  link.append(path);
  link.addEventListener('click', () => {
    vscode.postMessage({ type: 'open', uri: layer.uri, line: layer.line });
  });
  const td = document.createElement('td');
  td.className = 'file';
  td.title = text;
  td.append(link);
  return td;
}
`;
