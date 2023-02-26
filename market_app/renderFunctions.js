import availableGoods from "./goods.json" assert {type: "json"};
import { selectOne, create, getGoodsToBuy } from "./generalFunctions.js";
import { GoodElement } from "./classes.js";
import { getGoodsAmount, deleteGood } from "./otherFunctions.js";

const basketGoodsEl = selectOne("#basketGoods");
const marketGoodsEl = selectOne("#marketGoods");

function renderGoods(goodsToRender, parentEl, shouldAddOverflow = true) {
  parentEl.innerHTML = "";
  getGoodsAmount();
  goodsToRender.forEach(good => {
    const goodEl = new GoodElement(good.id, good.title, good.amount);
    parentEl.append(goodEl);
    shouldAddOverflow && addOverflow(goodEl);
  })
};

function renderAvailableGoods() {
  return renderGoods(availableGoods, marketGoodsEl, false);
};

function renderBasketGoods() {
  renderGoods(getGoodsToBuy(), basketGoodsEl);
};

function addOverflow(currentGood) {
  const overflow = create("div");
  overflow.className = "overflow";
  overflow.append("Delete");
  overflow.addEventListener("click", () => deleteGood(currentGood.id));
  currentGood.append(overflow);
};

export { renderAvailableGoods, renderBasketGoods };