'use strict';
import { selectAll, selectOne } from "./generalFunctions.js";
import { renderAvailableGoods, renderBasketGoods } from "./renderFunctions.js";
import { addToBasket } from "./otherFunctions.js";

let currentGood = null;

renderAvailableGoods();
renderBasketGoods();

const goods = selectAll(".good");
const images = selectAll("img");
const basket = selectOne("#basket");

goods.forEach(good => {
  good.draggable = true;
  good.addEventListener("dragstart", () => dragToBasket(good));
});

images.forEach(image => {
  image.draggable = false;
});

const dragToBasket = good => {
  currentGood = good;
}

basket.addEventListener("dragover", e => e.preventDefault());
basket.addEventListener("drop", () => addToBasket(currentGood));