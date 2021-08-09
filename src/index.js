import './style.css';

function component() {
  const container = document.createElement('div');
  const header = document.createElement('h1');

  header.textContent = 'Pokémon TCG';
  container.appendChild(header);

  return container;
}

document.body.appendChild(component());