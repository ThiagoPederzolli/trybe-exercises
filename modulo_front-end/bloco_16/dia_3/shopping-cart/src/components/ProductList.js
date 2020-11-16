import React from 'react';
import PropTypes from 'prop-types';
import products from '../products';
import addToCart from '../actions';
import { connect } from 'react-redux';

class ProductList extends React.Component {
  // validateQuantity(product, cart, addToCart) {
  //   const productsInCart = cart.filter((item) => item.name === product.name);
  //   if (productsInCart.length === product.stockQuantity) return false;

  //   addToCart(product);
  //   return true;
  // }

  render() {
    const { addToCartAction } = this.props;
    return (
      <div>
        <h2>Produtos disponíveis</h2>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Estoque</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>
                  R$
                  {product.price}
                </td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => addToCartAction(product)}
                  >
                    Adicionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ProductList.propTypes = {
  addToCartAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addToCartAction: product => dispatch(addToCart(product)),
});
export default connect(null, mapDispatchToProps)(ProductList);
