import API from './API.js'

const reservationPopup = document.querySelector('.reservations-popup');

const setCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', ()=>{
    reservationPopup.classList.add('hidden');
    reservationPopup.innerHTML = '';
  });
}

const openPopup = (cardID) => {
  API.pokemon.getCardbyId(cardID)
    .then((card)=>{
      const pokemonCard = card.data[0];
      reservationPopup
        .innerHTML = `
          <div class="reservation-content">
          <figure>
            <img src="${pokemonCard.images.large}" alt="">
          </figure>
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
            <li>${pokemonCard.tcgplayer.prices.holofoil.low}</li>
            <li>${pokemonCard.tcgplayer.prices.holofoil.mid}</li>
            <li>${pokemonCard.tcgplayer.prices.holofoil.high}</li>
            <li>${pokemonCard.tcgplayer.prices.holofoil.market}</li>
          </ul>
          </div>
          </div>
          `;
    reservationPopup.classList.remove('hidden');
    setCloseBtnListener(document.querySelector('.btn-close'));
    });
}

const setReservationListeners = () => {
  const reservationButtons = document.querySelectorAll('.btn-reservations');
  console.log('buttons listeners');
  console.log(reservationButtons);
  reservationButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
      openPopup(button.dataset.id);
    });
  });
}

export { setReservationListeners as default };