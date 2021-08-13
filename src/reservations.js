import API from './API.js';

const reservationPopup = document.querySelector('.reservations-popup');

const setCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    reservationPopup.classList.add('hidden');
    reservationPopup.innerHTML = '';
  });
};

const openPopup = (cardID) => {
  API.pokemon.getCardbyId(cardID)
    .then((card) => {
      const pokemonCard = card.data[0];
      const pokemonPrices = pokemonCard.tcgplayer.prices;
      reservationPopup
        .innerHTML = `
          <div class="reservation-content">
          <img src="${pokemonCard.images.large}" alt="${pokemonCard.name}">  
          <div class="card-info">
          <button class="btn btn-close">Close</button>
          <div class="name-class">
            <h2>${pokemonCard.name}</h2>
            <p class="card-supertype">${pokemonCard.supertype}</p>
            <p class="card-subtype">${pokemonCard.subtypes[0]}</p>
          </div>
          <div class="set-info">
            <p class="card-number">Number: ${pokemonCard.number}</p>
            <p class="card-rarity">Rarity: ${pokemonCard.rarity} </p>
          </div>
          <ul>
            <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].low}</li>
            <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].mid}</li>
            <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].high}</li>
            <li>${pokemonPrices[Object.keys(pokemonPrices)[0]].market}</li>
          </ul>
          </div>
          </div>
          `;
      reservationPopup.classList.remove('hidden');
      API.involvement.getReservations(cardID)
        .then((reservations) => {
          if (!('error' in reservations)) {
            const reservationContent = document.querySelector('.reservation-content');
            reservationContent.innerHTML += `
          <div class="reservations-container">
            <div class="reservation-data-container">
              <p class="reservations-count">Reservations: X</p>
              <ul class="reservations-data"></ul>
            </div>          
          </div>
        `;
            const reservationsData = document.querySelector('.reservations-data');
            reservations.forEach((reservation) => {
              reservationsData.innerHTML += `
            <li>${reservation.date_start} - ${reservation.date_end} by ${reservation.username}</li>
          `;
            });
          }
          setCloseBtnListener(document.querySelector('.btn-close'));
        });
    });
};

const setReservationListeners = () => {
  const reservationButtons = document.querySelectorAll('.btn-reservations');
  reservationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openPopup(button.dataset.id);
    });
  });
};

export { setReservationListeners as default };