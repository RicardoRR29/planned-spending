import { useState } from "react";
import "./style.css";
export function ModalMoney({
  shouldShow,
  setShouldShow,
  amountSpended,
  setAmountSpended,
}) {
  const [name, setName] = useState("");
  const [montante, setMontante] = useState(0);

  return (
    <div className={`modal-money ${shouldShow ? "appear" : ""}`}>
      <div></div>
      <input
        type="text"
        className="modal-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="modal-input"
        type="number"
        onChange={(e) => setMontante(parseInt(e.target.value))}
        value={montante}
      />
      <button
        className="confirm-btn"
        onClick={() => {
          setAmountSpended(amountSpended + montante);
          setShouldShow(false);
        }}
      >
        Confirmar
      </button>
    </div>
  );
}
