import Cart from "./Cart.ts";

export default class Product {
  private _id: number;
  private _name: string;
  private _category: string;
  private _price: number;
  private _imageUrl: string;
  private _quantity: number;
  private quantityElement: HTMLElement | null = null;

  constructor(
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    category: string
  ) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._imageUrl = imageUrl;
    this._quantity = 0;
    this._category = category;
  }

  render(cart: Cart) {
    const productElement = document.createElement("div");

    productElement.innerHTML = `
        <h2>${this.name}</h2>
        <p>${this.category}</p>
        <span>$${this.price.toFixed(2)}</span>
        <button class="appendItem">Add to Cart</button>
        <button class="removeItem">Remove from Cart</button>
        <span class="quantity">${this.quantity}</span>
    `;

    const buttonAdd = productElement.querySelector(".appendItem");
    if (buttonAdd) {
        buttonAdd.addEventListener("click", () => this.addItem(cart));
    }

    const buttonDel = productElement.querySelector(".removeItem");
    if (buttonDel) {
        buttonDel.addEventListener("click", () => this.removeItem(cart));
    }

    this.quantityElement = productElement.querySelector(".quantity");
    
    return productElement;
}


  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }
  get imageUrl(): string {
    return this._imageUrl;
  }
  get quantity(): number {
    return this._quantity;
  }
  get category(): string {
    return this._category;
  }
  set name(name: string) {
    this._name = name;
  }
  set price(price: number) {
    this._price = price;
  }
  set imageUrl(imageUrl: string) {
    this._imageUrl = imageUrl;
  }
  set quantity(quantity: number) {
    this._quantity = quantity;
  }

  addItem(cart: Cart): void {
    this.quantity++;
    if (this.quantityElement) {
      this.quantityElement.textContent = `${this.quantity}`;
    }

    cart.render();
  }

  removeItem(cart: Cart): void {
    if (this.quantity > 0) {
      this.quantity--;
    }

    if (this.quantityElement) {
      this.quantityElement.textContent = `${this.quantity}`;
    }

    cart.render();
  }
}
