
const tabs = document.querySelectorAll('.ads__tab');
const panels = document.querySelectorAll('.ads__panel');
const dropdown = document.querySelector('.ads__dropdown');
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownLabel = document.getElementById('dropdownLabel');

function switchTab(tabName) {
  tabs.forEach(t => t.classList.remove('active'));
  panels.forEach(p => p.classList.remove('active'));

  document.querySelector(`.ads__tab[data-tab="${tabName}"]`)?.classList.add('active');
  document.querySelector(`.ads__panel[data-content="${tabName}"]`)?.classList.add('active');

  dropdownLabel.textContent =
    document.querySelector(`.ads__tab[data-tab="${tabName}"]`)?.textContent;
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    switchTab(tab.dataset.tab);
  });
});

dropdownToggle.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

dropdownMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    switchTab(btn.dataset.tab);
    dropdown.classList.remove('open');
  });
});

