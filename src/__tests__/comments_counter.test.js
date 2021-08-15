/**
 * @jest-environment jsdom
 */

import { countComments } from '../comments.js';

describe('Count comments on the comment pop up', () => {
  test('Returns the number of comments loaded in the comment pop up', () => {
    document.body.innerHTML = `
    <span class="comments-counter"></span>
     <ul class="comments-data">
        <li class="comments-number">2021-08-13 - This is a good pokemon by Red</li>
        <li class="comments-number">2021-08-13 - I saw one of those at the pokémon center. by Noob</li>
        <li class="comments-number">2021-08-10 - Alakazam is nice! by Ash</li>
        <li class="comments-number">2021-08-10 - I prefer water type pokémon! by Misty</li>
        <li class="comments-number">2021-08-12 - Alakazam is cooooooooooooooooooooool! by Topster</li>
     </ul>
     `;
    expect(countComments()).toBe(5);
  });

  test('Returns the number of comments loaded in the comment pop up', () => {
    document.body.innerHTML = `
    <span class="comments-counter"></span>
    <ul class="comments-data"></ul>
     `;

    expect(countComments()).toBe(0);
  });
});