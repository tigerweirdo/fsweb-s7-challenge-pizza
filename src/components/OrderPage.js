import React from 'react';
import OrderForm from './OrderForm';


const OrderPage = () => {
  return (
    <div>
      <h1>Sipariş Sayfası</h1>
        <OrderForm />
      {/* Sipariş işlemleri tamamlandıktan sonra bu düğme ile onay sayfasına geçebilirsiniz */}
      
    </div>
  );
};

export default OrderPage;
