// @flow

type returnTypes<typesArr> = {
  arr: Array<typesArr>,
  storage: ?string
}

type typesArr = {
  avg: string,
  buy_price: string,
  high: string,
  last_trade: string,
  low: string,
  pair: string,
  sell_price: string,
  updated: number,
  vol: string,
  vol_curr: string
}

const getTicketsData = () => (
  JSON.parse(localStorage.getItem('pairs'))
);

const setTicketsData = (arr: returnTypes<typesArr>) => (
  localStorage.setItem('pairs', JSON.stringify(arr))
);

export { getTicketsData, setTicketsData };
