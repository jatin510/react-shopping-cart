import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };

    // this.testing();
  }

  increaseQuantity() {
    /// setState form 1
    this.setState({
      qty: this.state.qty + 1,
    });

    // setState form 2
    // this.setState((prevState) => {
    //   return {
    //     qty: prevState.qty + 1,
    //   };
    // });

    // both 1 and 2
    // this.setState(
    //   (prevState) => {
    //     return {
    //       qty: prevState.qty + 1,
    //     };
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  }

  decreaseQuantity = () => {
    this.setState({
      qty: this.state.qty === 0 ? 0 : this.state.qty - 1,
    });
  };

  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });

  //   promise.then(() => {
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log("state", this.state);
  //   });
  // }

  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>rs {price}</div>
          <div style={{ color: "#777" }}>Qty : {qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}

            <img
              alt="decrease"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/659/659892.svg"
              onClick={this.decreaseQuantity}
            ></img>
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={this.increaseQuantity.bind(this)}
            ></img>
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1345/1345874.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
