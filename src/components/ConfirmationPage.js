import React, { useContext } from 'react';
import { PizzaContext } from './PizzaContext';

const ConfirmationPage = () => {
  const { orderDetails } = useContext(PizzaContext);
  const { pizzaSize, toppings, quantity,hamurTipi,siparisNotu} = orderDetails;

  return (
    <div>
      <h1>Onay Sayfası</h1>
      <h2>Sipariş Detayları</h2>
      <p>Pizza Boyutu: {pizzaSize}</p>
      <p>Ekstra Malzemeler: {toppings.join(', ')}</p>
      <p>Adet: {quantity}</p>
      <p>Hamur Seçimi: {hamurTipi}</p>
      <p>Sipariş Notu: {siparisNotu}</p>
    </div>
  );
};

export default ConfirmationPage;

