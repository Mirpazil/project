import React from 'react';
import "./check.css";


function Check({ isOpen, onClose, checkinDate, onCheckinChange, checkoutDate, onCheckoutChange }) {
  const closeModal = () => {
    onClose(); 
  };
  return (
    isOpen && (
      <div className="check">
        <div className="check-content">
          <h2>Выберите даты</h2>
          <label htmlFor="checkinDate">Дата заезда:</label>
          <input
            type="date"
            id="checkinDate"
            value={checkinDate}
            onChange={onCheckinChange}
          />
          <br />
          <label className='data' htmlFor="checkoutDate">Дата выезда:</label>
          <input
            type="date"
            id="checkoutDate"
            value={checkoutDate}
            onChange={onCheckoutChange}
          />
          <br />
          <button onClick={closeModal}>Закрыть</button>
        </div>
      </div>
    )
  );
}

export default Check;
