// @flow

//type returnTypes = {
//  arr: Array<Object>,
//  storage: ?string
//}


// type typesArr = {
//   avg: string,
//   buy_price: string,
//   high: string,
//   last_trade: string,
//   low: string,
//   pair: string,
//   sell_price: string,
//   updated: number,
//   vol: string,
//   vol_curr: string
// }

const getTicketsData = (): ?Object => (
  JSON.parse(localStorage.getItem('pairs'))
);

const setTicketsData = (arr: Array<Object>):?Object => (
  localStorage.setItem('pairs', JSON.stringify(arr))
);

export { getTicketsData, setTicketsData };
