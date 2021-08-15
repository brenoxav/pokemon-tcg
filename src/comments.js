import API from './API.js';

const commentsPopup = document.querySelector('.comments-popup');

const setCommentsCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    commentsPopup.classList.add('hidden');
    commentsPopup.innerHTML = '';
  });
};

const countComments = () => {
  const numOfComments = document.querySelectorAll('.comments-number').length;
  document.querySelector('.comments-counter').textContent = `(${numOfComments})`;
  return numOfComments;
};

const openCommentsPopup = (cardID) => {
  API.pokemon.getCardbyId(cardID)
    .then((card) => {
      const pokemonCard = card.data[0];
      const pokemonPrices = pokemonCard.tcgplayer.prices;
      commentsPopup.innerHTML = `
      <div class="popup-content">
      <button class="btn-close material-icons">close</button>
      <div class="popup-image-wrapper">
        <img class="popup-image" src="${pokemonCard.images.large}" alt="${pokemonCard.name}">  
      </div>
      <div class="popup-info">
        <h2 class="popup-name">${pokemonCard.name}</h2>
        <h3 class="popup-type">
          <span class="popup-supertype">${pokemonCard.supertype}</span> - 
          <span class="popup-subtype">${pokemonCard.subtypes[0]}</span>
        </h3>
        <div class="info-wrapper">
          <span class="popup-number">Number: ${pokemonCard.number}</span>
          <span class="popup-rarity">Rarity: ${pokemonCard.rarity}</span>
        </div>
        <h3>Prices from TCG Player</h3>
        <ul class="prices-list">
          <li class="popup-price">Market: ${pokemonPrices[Object.keys(pokemonPrices)[0]].market}</li>
          <li class="popup-price">Low: ${pokemonPrices[Object.keys(pokemonPrices)[0]].low}</li>
          <li class="popup-price">Mid: ${pokemonPrices[Object.keys(pokemonPrices)[0]].mid}</li>
          <li class="popup-price">High: ${pokemonPrices[Object.keys(pokemonPrices)[0]].high}</li>
        </ul>
        <div class="comments-generate">
        </div>
      </div>
    </div>
          `;
      commentsPopup.classList.remove('hidden');
      API.involvement.getComments(cardID)
        .then((comments) => {
          if (!('error' in comments)) {
            const commentsContent = document.querySelector('.comments-generate');
            commentsContent.innerHTML += `
          <div class="comments-container">
            <div class="comments-data-container">
              <h3 class="popup-counter comments-count">Comments:<span class="comments-counter"></span></h3>
              <ul class="comments-data"></ul>
            </div>          
          </div>
          <div class="comments-post">
          <form id="post-comment" action="">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="fname" required><br>
            <label for="comment">Comment:</label><br>
            <textarea id="commentText" rows="4" cols="50" name="comment" form="post-comment" required></textarea>
            <input class="btn" id="commentBtn" type="submit" value="Submit">
          </form> 
          </div>
        `;
            const commentsData = document.querySelector('.comments-data');
            comments.forEach((comment) => {
              commentsData.innerHTML += `
            <li class="comments-number">${comment.creation_date} - ${comment.comment} by ${comment.username}</li>
          `;
            });
          }
          const submitComment = document.getElementById('commentBtn');
          submitComment.addEventListener('click', (e) => {
            e.preventDefault();
            const commentObject = {
              item_id: pokemonCard.id,
              username: document.getElementById('name').value,
              comment: document.getElementById('commentText').value,
            };
            API.involvement.postComment(commentObject).then(() => {
              API.involvement.getComments(cardID).then((comments) => {
                const lastComment = comments[comments.length - 1];
                const date = lastComment.creation_date.split('-');
                const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
                document.querySelector('.comments-data').insertAdjacentHTML('beforeend',
                  `<li>${dateFormated} - ${lastComment.comment} by ${lastComment.username}</li>`);
              });
              document.getElementById('post-comment').reset();
            });
          });
          countComments();
          setCommentsCloseBtnListener(document.querySelector('.btn-close'));
        });
    });
};

const setCommentsListeners = () => {
  const commentsButtons = document.querySelectorAll('.btn-comments');
  commentsButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openCommentsPopup(button.dataset.id);
    });
  });
};

export { countComments, setCommentsListeners as default };