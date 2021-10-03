const Button = ({ setDiscountItem, useProduct, setDiscountValue }) => {
  const randomDiscount = () => {
    return parseInt(Math.random() * (90 - 40) + 40);
  };
  const randomProduct = () => {
    return parseInt(Math.random() * 6 + 1);
  };

  const handlePromo = () => {
    const random = randomProduct();
    const filtredProduct = useProduct.filter(
      (item) => Number(item.id) === Number(random)
    );

    setDiscountItem(filtredProduct);

    setDiscountValue(randomDiscount);
  };

  return (
    <div>
      <button onClick={handlePromo}>Gerar promoção</button>
    </div>
  );
};

export default Button;
