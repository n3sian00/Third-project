import React from 'react';

function OrderForm() {
  return (
    <div>
      <h2>Order Form</h2>
      {/* Lisätään tilauksen lomakekenttiä tarpeen mukaan */}
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <br />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default OrderForm;
