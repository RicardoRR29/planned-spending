import { useState } from "react";

export function Incrementar({ nome }) {
  const [soma, setSoma] = useState(0);

  function incrementar(event) {
    setSoma(soma + 1);
  }

  return (
    <>
      <p>{nome}</p>
      <div>{soma}</div>
      <button className="button" onClick={(event) => incrementar(event)}>
        incrementar
      </button>
    </>
  );
}
