import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PizzaContext } from './PizzaContext';
import axios from 'axios';


function OrderForm() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [size, setSize] = useState('');
  const [extraToppings, setExtraToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { setOrderDetails } = useContext(PizzaContext);
  const history = useHistory();
  const [hamurTipi, setHamurTipi] = useState('');
  const [siparisNotu, setSiparisNotu] = useState('');
  const [orderResponse, setOrderResponse] = useState(null);

  const prices = {
    S: 0,
    M: 20,
    L: 40,
    extraToppings: {
      Sucuk: 5,
      Pepperoni: 5,
      Mantar: 5,
      Sosis: 5,
      'Kanada Jambonu': 5,
      'Tavuk Izgara': 5,
      'Soğan': 5,
      'Domates': 5,
      'Mısır': 5,
      'Jalepeno': 5,
      'Sarımsak': 5,
      'Biber': 5,
      'Ananas': 5,
      'Kabak': 5,
    },
  };

  const isNameValid = (inputName) => {
    return inputName.length >= 2;
  };

  const totalToppingsPrice = extraToppings.reduce((total, topping) => {
    return total + prices.extraToppings[topping];
  }, 0);
  const sizePrice = prices[size] || 0;
  const totalPrice = (sizePrice + totalToppingsPrice) * quantity + 79;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isNameValid(name)) {
      setNameError('İsim en az 2 karakter olmalıdır');
      return;
    } else {
      setNameError('');
    }

    const orderData = {
        pizzaSize: size,
        toppings: extraToppings,
        quantity: quantity,
        hamurTipi: hamurTipi,
        siparisNotu: siparisNotu,
        totalPrice: totalPrice,
      };
    
      try {
        const response = await axios.post('https://reqres.in/api/orders', orderData);
        setOrderResponse(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Sipariş gönderilirken hata oluştu:', error);
      }
    
      localStorage.setItem('orderDetails', JSON.stringify(orderData));
      setOrderDetails(orderData);
      history.push('/onay');
    };
  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setExtraToppings((prevToppings) => [...prevToppings, value]);
    } else {
      setExtraToppings((prevToppings) =>
        prevToppings.filter((topping) => topping !== value)
      );
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <h2>Pizza Siparişi</h2>
      <div>
        <label htmlFor="name-input">İsim:</label>
        <input
          type="text"
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div>{nameError}</div>}
      </div>
      <div>
        <label htmlFor="size">Pizza Boyutu:</label>
        <select
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>




      <div>
  <label htmlFor="hamur">Hamur Seçimi:</label>
  <select id="hamur" value={hamurTipi} onChange={(e) => setHamurTipi(e.target.value)}>
    <option value="">Seçiniz</option>
    <option value="Süper İnce">Süper İnce</option>
    <option value="İnce">İnce</option>
    <option value="Normal">Normal</option>
  </select>
</div>
      <div>
        <label>Ekstra Malzemeler:</label>
       
        
        <div>
            <div>

          <input
            type="checkbox"
            id="Sucuk"
            value="Sucuk"
            checked={extraToppings.includes('Sucuk')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Sucuk">Sucuk</label>
          </div>
          
          <div>
          <input
            type="checkbox"
            id="Pepperoni"
            value="Pepperoni"
            checked={extraToppings.includes('Pepperoni')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Pepperoni">Pepperoni</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Mantar"
            value="Mantar"
            checked={extraToppings.includes('Mantar')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Mantar">Mantar</label>
        </div>

          <div>
          <input
            type="checkbox"
            id="Sosis"
            value="Sosis"
            checked={extraToppings.includes('Sosis')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Sosis">Sosis</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="KanadaJambonu"
            value="Kanada Jambonu"
            checked={extraToppings.includes('Kanada Jambonu')}
            onChange={handleToppingChange}
          />
          <label htmlFor="KanadaJambonu">Kanada Jambonu</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="TavukIzgara"
            value="Tavuk Izgara"
            checked={extraToppings.includes('Tavuk Izgara')}
            onChange={handleToppingChange}
          />
          <label htmlFor="TavukIzgara">Tavuk Izgara</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Sogan"
            value="Soğan"
            checked={extraToppings.includes('Soğan')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Sogan">Soğan</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Domates"
            value="Domates"
            checked={extraToppings.includes('Domates')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Domates">Domates</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Misir"
            value="Mısır"
            checked={extraToppings.includes('Mısır')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Misir">Mısır</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Jalepeno"
            value="Jalepeno"
            checked={extraToppings.includes('Jalepeno')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Jalepeno">Jalepeno</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Sarımsak"
            value="Sarımsak"
            checked={extraToppings.includes('Sarımsak')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Sarımsak">Sarımsak</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Biber"
            value="Biber"
            checked={extraToppings.includes('Biber')}
            onChange={handleToppingChange}
          />
          <label htmlFor="Biber">Biber</label>
          </div>
          
    <div>
      <input
        type="checkbox"
        id="Ananas"
        value="Ananas"
        checked={extraToppings.includes('Ananas')}
        onChange={handleToppingChange}
      />
      <label htmlFor="Ananas">Ananas</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="Kabak"
        value="Kabak"
        checked={extraToppings.includes('Kabak')}
        onChange={handleToppingChange}
      />
      <label htmlFor="Kabak">Kabak</label>
    </div>
  </div>
        
        {/* Buraya daha fazla ekstra malzeme ekleyebilirsiniz. */}
      </div>
      <div>
  <label htmlFor="siparisNotu">Sipariş Notu:</label>
  <textarea id="siparisNotu" value={siparisNotu} onChange={(e) => setSiparisNotu(e.target.value)} />
</div>
      <div>
        <label htmlFor="quantity">Adet:</label>
        <input
  type="number"
  id="quantity"
  min="1"
  max="10"
  value={quantity}
  onChange={(e) => setQuantity(parseInt(e.target.value))}
/>
      </div>
      <div>
      <div>
  <label>Toplam Fiyat: {isNaN(totalPrice) === 0 ? "Seçim Yapılmadı" : totalPrice + " TL"}</label>
</div>

      </div>
      <button type="submit" id="order-button">Sipariş Onayı</button>
    </form>
  );
}

export default OrderForm;
