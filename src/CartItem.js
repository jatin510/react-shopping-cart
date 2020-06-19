import React from "react";

class CartItem extends React.Component {
  increaseQuantity() {
    /// setState form 1
    this.setState({
      qty: this.state.qty + 1,
    });
  }

  decreaseQuantity = () => {
    this.setState({
      qty: this.state.qty === 0 ? 0 : this.state.qty - 1,
    });
  };

  render() {
    const { price, title, qty } = this.props.product;
    const { onDeleteProduct, product } = this.props;
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
              onClick={() => this.props.onDecreaseQuantity(this.props.product)}
            ></img>
            <img
              alt="increase"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/992/992651.svg"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
            ></img>
            <img
              alt="delete"
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/1345/1345874.svg"
              onClick={() => onDeleteProduct(product.id)}
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
