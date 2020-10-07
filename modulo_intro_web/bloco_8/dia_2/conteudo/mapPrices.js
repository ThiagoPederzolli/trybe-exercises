const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const createObjectPrices = (produtos, precos) => {
  return produtos.map((produto, index) => (
    {[produto]: precos[index]}
  ));
};

const listProducts = createObjectPrices(products, prices);
console.log(listProducts);