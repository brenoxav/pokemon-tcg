/**
 * @jest-environment jsdom
 */

import { describe, expect, test } from '@jest/globals';
import { countReservations } from '../reservations.js';

describe('Counts the reservations in the popup', () => {
  test('Returns the number of reservations in the popup', () => {
    document.body.innerHTML = `
      <div class="reservation-data-container">
        <p class="reservations-count">Reservations: X</p>
        <ul class="reservations-data"></ul>
      </div>
    `;

    expect(countReservations()).toBe(0);

    document.body.innerHTML = `
      <div class="reservation-data-container">
        <p class="reservations-count">Reservations: X</p>
        <ul class="reservations-data">
          <li>2021-11-13 - 2021-11-15 by Abel</li>
          <li>2021-8-13 - 2021-8-15 by Bruno</li>
        </ul>
      </div>
    `;

    expect(countReservations()).toBe(2);
  });
});
