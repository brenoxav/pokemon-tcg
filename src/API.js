class Api {
  pokemon = {
    callApi: async (query) => {
      const url = `https://api.pokemontcg.io/v2/cards?q=${query}`;
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, options);
      return response.json();
    },

    getAllCards: () => this.pokemon.callApi('set.id:base1'),

    getCardbyId: (cardId) => this.pokemon.callApi(`id:${cardId}`),
  };

  involvement = {
    callApi: async (method, query, bodyObj) => {
      const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/T2tWRpfkFNscSG5pGg0V/${query}`;
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyObj),
      };
      const response = await fetch(url, options);
      return method === 'POST' ? response : response.json();
    },

    getLikes: () => this.involvement.callApi('GET', 'likes'),

    postLike: (cardId) => {
      const bodyObj = {
        item_id: cardId,
      };
      return this.involvement.callApi('POST', 'likes', bodyObj);
    },

    getComments: (cardId) => this.involvement.callApi('GET', `comments?item_id=${cardId}`),

    postComment: (commentObj) => this.involvement.callApi('POST', 'comments', commentObj),

    getReservations: (cardId) => this.involvement.callApi('GET', `reservations?item_id=${cardId}`),

    postReservation: (reservationObj) => this.involvement.callApi('POST', 'reservations', reservationObj),
  }
}

const API = new Api();
export { API as default };