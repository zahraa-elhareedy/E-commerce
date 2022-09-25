import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
import ShoppingCart from "./shoppingCart";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Footer from './footer';
import ProductDetails from './productDetails';
import NotFound from './notFound';

class App extends Component {
  state = {
    products: [
      { id: 1, name: "The Silent Patient", count: 10, cart: 0, author: "Alex Michaelides", price: 50, img: "assets/book.jfif", category: "Fiction" },
      { id: 2, name: "Your Story is Worth Telling", count: 8, cart: 0, author: "Kenneth J. Mackay III", price: 70, img: "assets/book2.jfif", category: "Biography" },
      { id: 3, name: "To Sleep in a Sea of Stars", count: 5, cart: 0, author: "Christopher Paolini", price: 80, img: "assets/book3.jpg", category: "Science Fiction" },
      { id: 4, name: "A Tale of Two Cities", count: 3, cart: 0, author: "Charles Dickens", price: 90, img: "assets/book4.jfif", category: "Fiction" },
      { id: 5, name: "Murder on The Orient Express", count: 3, cart: 0, author: "Agatha Christie", price: 100, img: "assets/book5.jpg", category: "Thriller" },
    ],
  };
  IncrementHandler = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    if (products[index].count !== 0) {
      products[index].cart++;
      products[index].count--;
    }
    this.setState({ products });
  };
  deleteHandler = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].count += products[index].cart;
    products[index].cart = 0;
    this.setState({ products });
  };
  
  cartCount = () => {
    const newProducts = this.state.products.filter(c => c.cart > 0);
    var element = 0;
    for (let index = 0; index < newProducts.length; index++) {
      element+=newProducts[index].cart;
    }
    return element;
  }
  render() {
    return (
      <React.Fragment>
        <Navbar productsCount={this.cartCount} />
        <main className="container">
          <Routes>
            <Route path="/home" element={<Home 
              products={this.state.products}
              onIncrement={this.IncrementHandler}
              onDelete={this.deleteHandler}
            />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={
                <ShoppingCart
                  products={this.state.products}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.deleteHandler}
                  
                />
            }
            />
            <Route path="/product/:id" element={
                <ProductDetails 
                products={this.state.products}
                onIncrement={this.IncrementHandler}
                onDelete={this.deleteHandler}
                />
            } 
            />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
