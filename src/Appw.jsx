import "./App.css";
import { Incrementar } from "./Incrementar";

export default function App() {
  const lista = ["João", "Juliana", "Roberto"];

  return (
    <>
      {lista.map((nome) => (
        <>
          <Incrementar nome={nome} />
        </>
      ))}
    </>
  );
}
