import API from './API.js';

const commentsPopup = document.querySelector('.comments-popup');

const setCommentsCloseBtnListener = (closeBtn) => {
  closeBtn.addEventListener('click', () => {
    commentsPopup.classList.add('hidden');
    commentsPopup.innerHTML = '';
  });
};

const openCommentsPopup = (cardID) => {
  API.pokemon.getCardbyId(cardID)
    .then((card) => {
      const pokemonCard = card.data[0];
      const pokemonPrices = pokemonCard.tcgplayer.prices;
      commentsPopup.innerHTML = `
          <div class="comments-content">
            <img src="${pokemonCard.images.large}" alt="${pokemonCard.name}">  
            <div class="comments-card-info">
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
      commentsPopup.classList.remove('hidden');
      API.involvement.getComments(cardID)
        .then((comments) => {
          if (!('error' in comments)) {
            const commentsContent = document.querySelector('.comments-content');
            commentsContent.innerHTML += `
          <div class="comments-container">
            <div class="comments-data-container">
              <p class="comments-count">Comments: X</p>
              <ul class="comments-data"></ul>
            </div>          
          </div>
          <div class="comments-post">
          <form id="post-comment" action="">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="fname" placeholder="Enter your name..."><br>
            <label for="comment">Comment:</label><br>
            <textarea id="commentText" rows="4" cols="50" name="comment" form="post-comment" placeholder="Add a comment here..."></textarea>
            <input id="commentBtn" type="submit" value="Submit">
          </form> 
          </div>
        `;
            const commentsData = document.querySelector('.comments-data');
            comments.forEach((comments) => {
              commentsData.innerHTML += `
            <li>${comments.creation_date} - ${comments.comment} by ${comments.username}</li>
          `;
            });
          }
          const submitComment = document.getElementById('commentBtn');
          submitComment.addEventListener('click' , () => {
            const commentObject = {
              item_id: pokemonCard.id, 
              username: document.getElementById('name').value, 
              comment: document.getElementById('commentText').value,
            }
            API.involvement.postComment(commentObject);
          });
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

export { setCommentsListeners as default };