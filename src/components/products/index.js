const Products = ({
  useProduct,
  discountValue,
  setCurrentSale,
  currentSale,
}) => {
  const handleSelectItem = (item) => {
    setCurrentSale([...currentSale, item]);
  };

  return (
    <div>
      <h2> Produto com desconto: </h2>
      {useProduct.map((item, index) => (
        <div key={index}>
          <p>Nome do Produto: {item.name}</p>
          <p> Preço original: {item.price} </p>
          <p> Porcentagem do desconto: {discountValue}% </p>
          <p>
            Valor do desconto :
            {(item.price - (item.price / 100) * discountValue).toFixed(0)}
          </p>
          <p>
            Preço a ser pago: {((item.price / 100) * discountValue).toFixed(2)}
          </p>
          <button onClick={() => handleSelectItem(item)}>
            Adicionar ao carrinho
          </button>
        </div>
      ))}
    </div>
  );
};
export default Products;
