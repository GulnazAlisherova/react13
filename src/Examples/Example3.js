function Example3() {
  const [num, setNum] = useState(1)

  const incrementCount = () => {
    setNum(num + 1);
  };
  const deccrementCount = () => {
    setNum(num - 1);
  };

  return (
    <div className="example3">
      <button onClick={deccrementCount}>-</button>
      <span className="number">{num}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default Example3;