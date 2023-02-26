const selectAll = el => document.querySelectorAll(el);
const selectOne = elId => document.querySelector(elId);
const create = el => document.createElement(el);
const save = goodsToBuy => localStorage.setItem("goodsToBuy", JSON.stringify(goodsToBuy));
const getGoodsToBuy = () => JSON.parse(localStorage.getItem("goodsToBuy")) || [];

export { selectAll, selectOne, create, save, getGoodsToBuy };