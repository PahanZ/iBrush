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
          if (Number(el.buy_price) > Number(storage[i].buy_price)) {
            return true;
          } else if (Number(el.buy_price) < Number(storage[i].buy_price)) {
            return false;
          }
          return null;
        });
      }
      return { arr, statistics };
    })
);

export default getTicker;
