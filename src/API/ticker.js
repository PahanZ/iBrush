// @flow

import axios from 'axios';
import { getTicketsData, setTicketsData } from './caching';

type returnTypes = {
  arr: Array<Object>,
  statistics: Array<number | bool>
}

// type typesArr = {
//  avg: string,
//  buy_price: string,
//  high: string,
//  last_trade: string,
//  low: string,
//  pair: string,
//  sell_price: string,
//  updated: number,
//  vol: string,
//  vol_curr: string
//}

const getTicker = (): Promise<returnTypes> => (
  axios.get('https://api.exmo.com/v1/ticker/')
    .then((response: Object) => JSON.parse(response.request.response))
    .then((res: Object) => {
      const arr = Object.keys(res).map((el: string) => Object.assign({}, res[el], { pair: el }));
      const storage = getTicketsData();
      let statistics = [];
      if (storage === null) {
        setTicketsData(arr);
        statistics.length = arr.length;
        statistics.fill(0);
      } else {
        statistics = arr.map((el, i) => {
          const buyPrice: number = Number(el.buy_price);
          const storageBuyPrice: number = Number(storage[i].buy_price);
          return buyPrice !== storageBuyPrice ? buyPrice > storageBuyPrice : 0;
        });
      }
      return { arr, statistics };
    })
);

export { getTicker };
