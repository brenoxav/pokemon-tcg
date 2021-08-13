/**
 * @jest-environment jsdom
 */

import { countCards } from '../home.js';

describe('Count cards on the homepage', () => {
  test('Returns the number of cards rendered on the homepage', () => {
    document.body.innerHTML = `
      <span class="cards-counter"><span>
      <div class="card">
        <span class="card-name">Alakazam</span>
        <button class="btn-comments">Comments</button>
        <button class="btn-reservations">Reservations</button>
      </div>
      <div class="card">
        <span class="card-name">Alakazam</span>
        <button class="btn-comments">Comments</button>
        <button class="btn-reservations">Reservations</button>
      </div>
      <div class="card">
        <span class="card-name">Alakazam</span>
        <button class="btn-comments">Comments</button>
        <button class="btn-reservations">Reservations</button>
      </div>
    `;

    expect(countCards()).toBe(3);
  });

  test('Returns the mumber of cards rendered on the homepage', () => {
    document.body.innerHTML = `
      <span class="cards-counter"><span>
    `;

    expect(countCards()).toBe(0);
  });
});