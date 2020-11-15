import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ShoppingCart extends React.Component {
  render() {
    const { products, totalPrice } = this.props;
    const CASAS_DECIMAIS_PARA_ARREDONDAR = 2;

    return (
      <div>
        <h2>Carrinho de compras</h2>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name}</li>
          ))}
        </ul>
        <div>
          Total: R$
          {totalPrice.toFixed(CASAS_DECIMAIS_PARA_ARREDONDAR)}
        </div>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      stockQuantity: PropTypes.number,
    }),
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  products: state.reducer.cart,
  totalPrice: state.reducer.totalPrice,
});

export default connect(mapStateToProps)(ShoppingCart);
