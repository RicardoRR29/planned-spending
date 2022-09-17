import { useState } from "react";
import "./App.css";
import { ButtonPlus } from "./components/ButtonPlus";
import { ModalMoney } from "./components/ModalMoney";

export default function App() {
  const [shouldShow, setShouldShow] = useState(false);
  const [totalAmount, setTotalAmount] = useState(500.0);
  const [amountSpended, setAmountSpended] = useState(0);
  const width = "80vw";
  console.log(amountSpended);
  return (
    <div className="app">
      <div className="title">
        R$ {amountSpended.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
      </div>
      <div className="progress-bar" style={{ width: width }}>
        <div
          className="progress"
          style={{
            width: `calc(${width} * (1 - ${amountSpended / totalAmount}))`,
          }}
        ></div>
      </div>
      <ButtonPlus
        onClick={() => {
          setShouldShow(true);
        }}
      >
        +
      </ButtonPlus>
      <ModalMoney
        shouldShow={shouldShow}
        setShouldShow={setShouldShow}
        amountSpended={amountSpended}
        setAmountSpended={setAmountSpended}
      />
    </div>
  );
}
