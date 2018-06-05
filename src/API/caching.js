const getTicketsData = () => (
  JSON.parse(localStorage.getItem('pairs'))
);

const setTicketsData = arr => (
  localStorage.setItem('pairs', JSON.stringify(arr))
);

export { getTicketsData, setTicketsData };
