import { useState, useCallback} from "react";

export function Counter(){
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return (
    <div>
      <h1> Contador: {count} </h1>
      <button onClick={increment}>ADICIONAR</button>
      <button onClick={decrement}>REMOVER</button>
      </div>
  );
}