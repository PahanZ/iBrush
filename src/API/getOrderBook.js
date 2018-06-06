import axios from 'axios';

const getOrderBook = pair => (
  axios.get(`https://api.exmo.com/v1/order_book/?pair=${pair}`)
    .then(res => res.data[pair])
    .then((res) => {
      const response = Object.assign({}, res);
      response.ask.length = 50;
      response.bid.length = 50;
      return { ask: response.ask, bid: response.bid };
    })
);

export default getOrderBook;
