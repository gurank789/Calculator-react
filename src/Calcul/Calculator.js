import React, { useState } from 'react';
import styles from './Calculator.module.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum.toString());
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(difference.toString());
  };

  const handleMultiplication = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product.toString());
  };

  const handleDivision = () => {
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient.toString());
  };

  const handleDelete = () => {
    setResult('');
  };

  return (
    <div className={styles.container}>
      <h1>Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1Change} className={styles.input} />
      <input type="number" value={num2} onChange={handleNum2Change} className={styles.input} />

      <button onClick={handleAddition} className={styles.button}>Addition</button>
      <button onClick={handleSubtraction} className={styles.button}>Subtraction</button>
      <button onClick={handleMultiplication} className={styles.button}>Multiplication</button>
      <button onClick={handleDivision} className={styles.button}>Division</button>
      <button onClick={handleDelete} className={styles.button}>Delete</button>

      {result && <h2 className={styles.result}>Result: {result}</h2>}
    </div>
  );
}

export default Calculator;