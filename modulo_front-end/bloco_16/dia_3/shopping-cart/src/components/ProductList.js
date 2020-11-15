import React from 'react';
import PropTypes from 'prop-types';
import products from '../products';

class ProductList extends React.Component {
  // validateQuantity(product, cart, addToCart) {
  //   const productsInCart = cart.filter((item) => item.name === product.name);
  //   if (productsInCart.length === product.stockQuantity) return false;

  //   addToCart(product);
  //   return true;
  // }

  render() {
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
                  <button type="button">Adicionar</button>
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

export default ProductList;
