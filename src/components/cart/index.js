const Cart = ({ currentSale, discountValue }) => {
  return (
    <div>
      <h2>Carrinho : </h2>
      <h3>
        {" "}
        Total:{" "}
        {currentSale
          .reduce((acc, item) => {
            return acc + (item.price / 100) * discountValue;
          }, 0)
          .toFixed(2)}
      </h3>
      {currentSale.map((item, index) => (
        <div key={index}>
          <p>Nome do Produto: {item.name}</p>
          <p> Preço original: {item.price} </p>
          <p> Porcentagem do desconto: {discountValue}% </p>
          <p>
            Valor do desconto :
            {(item.price - (item.price / 100) * discountValue).toFixed(2)}
          </p>
          <p>
            Preço a ser pago: {((item.price / 100) * discountValue).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
