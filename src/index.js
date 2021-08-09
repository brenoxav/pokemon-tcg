import './style.css';

function component() {
  const container = document.createElement('div');
  const header = document.createElement('h1');

  header.textContent = 'Webpack Boilerplate';
  container.appendChild(header);

  return container;
}

document.body.appendChild(component());