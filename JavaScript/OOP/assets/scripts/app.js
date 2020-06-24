//define a product object: like a struct or object in java
class Product {
  constructor (title, imgURL, description, price) {
    this.title = title;
    this.imgURL = imgURL;
    this.description = description;
    this.price = price;
  }
}

// class to define an actual list to render to the DOM
class ProductList {
  productList = [
    //this array mimics a database
    new Product (
      'Pillow',
      'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'Plush pillow',
      34.99
    ),
    new Product (
      'RVCA Hat',
      'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      'RVCA cap',
      40.99
    ),
    new Product (
      'Ocean Painting',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
      'Ocean painting',
      10.99
    ),
  ];

  //creates the ul to be put in the app and renders out all products in the 'database' and returns the list to the caller
  getShoppingList () {
    const prodList = document.createElement ('ul');
    prodList.className = 'product-list';

    for (const product of this.productList) {
      const productItem = new ProductItem (product);
      const productElement = productItem.createElement ();
      prodList.append (productElement);
    }
    return prodList;
  }
}

// creates a shopping cart and handles the change of price and also returning the html of the cart to be seen in the UI
class ShoppingCart {
  //fields
  cart = [];

  addProduct (product) {
    this.cart.push (product);
    this.totalOutput = `<h2>Total: \$${1}</h2>`;
  }

  getTotal () {
    const cartElement = document.createElement ('section');
    cartElement.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order</button>
    `;

    this.totalOutput = cartElement.querySelector ('h2');
    cartElement.className = 'cart';
    return cartElement;
  }
}

//render the shopping cart itself (the main app div we render in to )
class Shop {
  render () {
    const renderHook = document.getElementById ('app'); // grab the app div we will be appending all our html to
    const cart = new ShoppingCart (); //create the shopping cart
    const cartTotal = cart.getTotal ();
    const productList = new ProductList (); //create the shopping list
    const prodList = productList.getShoppingList (); //render the shopping list

    renderHook.append (cartTotal);
    renderHook.append (prodList);
  }
}

// creates a product item card
class ProductItem {
  // accepts a product to be rendered to the DOM
  constructor (product) {
    this.product = product;
  }

  addItemToCart () {
    console.log (this.product);
  }

  createElement () {
    const productElement = document.createElement ('li');
    productElement.className = 'product-item';

    //gather all the data for this product (the one passed into the constructor in the product list render method) and render it with some html : style.css will style this []
    productElement.innerHTML = ` 
      <div>
        <img src="${this.product.imgURL}" alt="${this.product.title}"/>
        <div class="product-item__content">
          <h2>${this.product.title}</h2>   
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>   
          <button>Add to Cart</button>
        </div>
      </div>
    `;

    const addToCart = productElement.querySelector ('button'); //put an event listener on the button in the product element
    addToCart.addEventListener ('click', this.addItemToCart.bind (this)); //add product to cart: bind the method to this particular products context (the instance calling the method)
    return productElement;
  }
}

// this class is the driver: notice static keyword. this creates a static method such that we need not an instance to use it, therefore, it is nice to
//initialize the app and render the UI
class App {
  static init () {
    const shop = new Shop ();
    shop.render ();
  }
}

App.init ();
