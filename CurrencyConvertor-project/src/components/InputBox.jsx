import React from 'react';

function InputBox({ label, amount, currencyOptions, onCurrencyChange, selectCurrency, onAmountChange, amountDisable }) {
  return (
    <div>
      <label>{label}</label>
      <div className="input-box">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
