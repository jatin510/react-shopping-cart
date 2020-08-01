import React from "react";
import Cart from "./Cart";
import Navbar from "./navbar.js";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };

    this.db = firebase.firestore();
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     console.log("products", products);
    //     console.log(products[0].qty);
    //     console.log(products[0].price);
    //     this.setState({
    //       products,
    //       loading: false,
    //     });
    //   });

    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        console.log("products", products);
        console.log(products[0].qty);
        console.log(products[0].price);
        this.setState({
          products,
          loading: false,
        });
      });
  }

  handleIncreaseQuantity = (product) => {
    console.log("increase quantity");
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({ qty: products[index].qty + 1 })
      .then(() => console.log("document updated"))
      .catch((err) => console.log("error updating increase", err));
  };

  handleDecreaseQuantity = (product) => {
    console.log("decrease");
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) return;

    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({ qty: products[index].qty - 1 })
      .then(() => console.log("document updated"))
      .catch((err) => console.log("error updating decrease", err));
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: items,
    // });
    const docRef = this.db.collection("products").doc(id);

    docRef
      .delete()
      .then(() => console.log("deleted successfully"))
      .catch((err) => console.log("error deleting data", err));
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => (count += product.qty));
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;

    products.map((product) => (total += product.qty * product.price));

    return total;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 900,
        qty: 1,
        title: "Computer",
      })
      .then((docRef) => {
        console.log("proudct docref", docRef);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button
          style={{
            padding: 10,
          }}
          onClick={this.addProduct}
        >
          Add a product
        </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        {loading && <h1>Loading Products...</h1>}
        <div> Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
