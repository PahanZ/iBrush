// @flow

import axios from 'axios';

type returnTypes = {
  ask: Array<[string, string, string]>,
  bid: Array<[string, string, string]>,
}

const getOrderBook = (pair: string): Promise<returnTypes> => (
  axios.get(`https://api.exmo.com/v1/order_book/?pair=${pair}`)
    .then((res: Object) => res.data[pair])
    .then((res: Object) => {
      const response = Object.assign({}, res);
      response.ask.length = 50;
      response.bid.length = 50;
      const ask: [string, string, string] = response.ask;
      const bid: [string, string, string] = response.bid;
      return { ask, bid };
    })
);

export { getOrderBook };
