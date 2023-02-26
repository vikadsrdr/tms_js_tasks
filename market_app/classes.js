import { create } from "./generalFunctions.js";

class Good {
  constructor(id, title, amount) {
    this.id = id;
    this.title = title;
    this.amount = amount;
  }
};

class GoodElement extends Good {
  constructor(id, title, amount) {
    super(id, title, amount);
    const divEl = create("div");
    const figureEl = create("figure");
    const imgParapraph = create("p");
    const imgEl = create("img");

    divEl.className = "good";
    divEl.id = this.id;
    imgEl.src = "./images/meat.jpg";

    imgParapraph.append(imgEl);
    figureEl.append(imgParapraph, create("figcaption"));

    divEl.append(figureEl);
    divEl.append(this.title);
    this.amount && divEl.append(` (${this.amount})`);
    return divEl;
  }
};

export { Good, GoodElement };