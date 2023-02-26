import { Good } from "./classes.js";
import { selectOne, save, getGoodsToBuy } from "./generalFunctions.js";
import { renderBasketGoods } from "./renderFunctions.js";

const goodsAmount = selectOne("#goodsAmount");
let goodsToBuy = getGoodsToBuy();

function getGoodsAmount() {
  goodsAmount.innerHTML = goodsToBuy.length;
};

function pushGoodToArray(currentGood) {
  goodsToBuy.push(
    new Good(currentGood.id, currentGood.innerText, 1)
  );
};

function addToBasket(currentGood) {
  if (goodsToBuy.length) {
    console.log(goodsToBuy.length)
    let existingElIndex = goodsToBuy.findIndex(el => el.id === currentGood.id);
    console.log(existingElIndex);
    if (existingElIndex > -1) {
      if (confirm("Wait a minute. One more?")) {
        let elFound = goodsToBuy[existingElIndex];
        elFound = { ...elFound, amount: ++elFound.amount };
      } else return;
    } else pushGoodToArray(currentGood);
  } else pushGoodToArray(currentGood);

  save(goodsToBuy);
  renderBasketGoods();
};

function deleteGood(currentGoodId) {
  goodsToBuy = goodsToBuy.filter(good => good.id !== currentGoodId);
  save(goodsToBuy);
  renderBasketGoods();
};

export { getGoodsAmount, addToBasket, deleteGood };