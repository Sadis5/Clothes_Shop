import ProductService from "@/components/Services/product_service.js";
import { makeAutoObservable } from "mobx";
import { toJS } from "mobx";
export default class Store {
  basket = [
    {
      id: 1,
      is_favourite: false,
      choosen_card: false,

      img: "./img/black_crown.jpg",
      name: "Кепка",

      price: 50,
      count: 1,
      active_color: "black",
      colors: [
        {
          color: "#000",
          color_img: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          ],
          color_name: "Black",
        },
        {
          color: "red",
          color_img: [
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          ],
          color_name: "Red",
        },
      ],
    },
  ];
  favourite = [];
  products = {
    total: 0,
    items: [],
  };
  cards_shop = {
    total: 0,
    items: [],
  };

  sum = 0;

  /**
   *
   */
  async methodLoadPosts(limit = 10, page = 1) {
    ProductService.getProducts(limit, page)
      .then((res) => {
        console.log(res);
        this.products = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  MetodAddFavourite(product) {
    this.favourite.push(product);
  }
  MetodRemoveFavourite(id) {
    let temp = this.favourite.findIndex((elem) => {
      if (elem.id === id) {
        return true;
      } else {
        return false;
      }
    });
    this.favourite.splice(temp, 1);
  }

  addBasket(product) {
    this.basket.push(product);
  }
  removeBasket(id) {
    let indexOfElement = this.basket.findIndex((elem) => {
      if (elem.id === id) {
        return true;
      } else {
        return false;
      }
    });

    if (this.basket[indexOfElement].choosen_card) {
      this.sum -=
        +this.basket[indexOfElement].price * this.basket[indexOfElement].count;
    }
    this.basket.splice(indexOfElement, 1);
  }
  addCountThings(id) {
    let element = this.basket.find((elem) => id === elem.id);
    for (let i = 0; i < this.basket.length; i++) {
      if (id == this.basket[i].id) {
        this.sum += +this.basket[i].price;
        this.basket[i].count += 1;
        break;
      }
    }
  }

  removeCountThings(id) {
    for (let i = 0; i < this.basket.length; i++) {
      if (id == this.basket[i].id) {
        if (this.basket[i].count > 1) {
          this.basket[i].count -= 1;
          this.sum -= +this.basket[i].price;
        }
        break;
      }
    }
  }

  chooseBasket(id) {
    for (let i = 0; i < this.basket.length; i++) {
      if (id == this.basket[i].id) {
        this.basket[i].choosen_card = !this.basket[i].choosen_card;
        if (!this.basket[i].choosen_card) {
          this.sum -= +this.basket[i].price;
        } else {
          this.sum += +this.basket[i].price;
        }
        break;
      }
    }
  }

  sortFavorite() {
    this.products.sort((prod_1, prod_2) => {
      return prod_2.is_favourite - prod_1.is_favourite;
    });
    console.log("Сортировка", toJS(this.products));
  }
  // написать сортировку для цены

  sortMin() {
    this.products.sort((prod_1, prod_2) => {
      return prod_1.price - prod_2.price;
    });
  }
  sortMax() {
    this.products.sort((prod_1, prod_2) => {
      return prod_2.price - prod_1.price;
    });
  }

  async filter(
    size = "",
    category = "",
    tags = "",
    color = "",
    inStock = "",
    minprice = "",
    maxprice = ""
  ) {
    ProductService.filterProducts(
      size,
      category,
      tags,
      color,
      inStock,
      minprice,
      maxprice
    )
      .then((res) => {
        console.log(res);
        this.products.items = res.data;
        this.products.total = res.data.length;
      })

      .catch((err) => {
        console.error(err);
      });
  }

  // функция сброса тэгов

  chooseAll(checked) {
    this.basket = this.basket.map((card) => {
      card.choosen_card = checked;
      return card;
      // return (card.choosen_card = checked);
    });
    console.log(toJS(this.basket));
    if (checked) {
      this.sum = this.basket.reduce((sum, card) => {
        return +sum + +card.price;
      }, 0);
    } else {
      this.sum = 0;
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}
