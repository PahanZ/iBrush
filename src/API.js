import axios from 'axios';

export default () => (
  axios.get('https://api.exmo.com/v1/ticker/')
    .then(response => JSON.parse(response.request.response))
    .then((res) => {
      const arr = Object.keys(res).map(el => Object.assign({}, res[el], { pair: el }));
      const storage = JSON.parse(localStorage.getItem('pairs'));
      let statistics = [];
      if (storage === null) {
        localStorage.setItem('pairs', JSON.stringify(arr));
        statistics.length = arr.length;
        statistics.fill('without changes');
      } else {
        statistics = arr.map((el, i) => {
          if (el.buy_price > storage[i].buy_price) {
            return 'up';
          } else if (el.buy_price < storage[i].buy_price) {
            return 'down';
          }
          return 'without changes';
        });
      }
      return { arr, statistics };
    })
);
