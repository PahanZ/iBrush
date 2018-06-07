import axios from 'axios';
import { getTicketsData, setTicketsData } from './caching';

const getTicker = () => (
  axios.get('https://api.exmo.com/v1/ticker/')
    .then(response => JSON.parse(response.request.response))
    .then((res) => {
      const arr = Object.keys(res).map(el => Object.assign({}, res[el], { pair: el }));
      const storage = getTicketsData();
      let statistics = [];
      if (storage === null) {
        setTicketsData(arr);
        statistics.length = arr.length;
        statistics.fill('without changes');
      } else {
        statistics = arr.map((el, i) => {
          const buyPrice = Number(el.buy_price);
          const storageBuyPrice = Number(storage[i].buy_price);
          return buyPrice !== storageBuyPrice ? buyPrice > storageBuyPrice : 0;
        });
      }
      return { arr, statistics };
    })
);

export default { getTicker };
