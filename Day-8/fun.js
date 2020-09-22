let products = [
    {
      id: 111,
      name: "White shirt",
      size: "xxl",
      color: "black", 
      price: 1200,
      image: "product1.jpeg",
      description: "Good looking white tshirt",
    },
    {
      id: 112,
      name: "Black Shirt",
      size: "l",
      color: "white",
      price: 1500,
      image: "product2.jpeg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.png",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpeg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpeg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },
    {
        id: 7,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      },
      {
        id: 8,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      },
      {
        id: 9,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      },
      {
        id: 10,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      },
      {
        id: 11,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      },
      {
        id: 12,
        name: "Indian Dress",
        size: "M",
        color: "Henna",
        price: 1500,
        image: "product6.jpg",
        description: "Good looking Traditional Dress",
      }
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="productimages/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description ;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  function searchPrice(searchValue) {
    let searchedPrices = products.filter(function (product, index) {
      let searchStrinm =
      product.name + " " +product.price;
  
      return searchStrinm.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedPrices);
  }
  // 
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
    if(id==pro.id){
        console.log("Same");
    }
    //   putting in cart
    cart.push(pro);
    
    displayProducts(cart, "cart");
  }
  //
  function totalcount(id){
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
  }