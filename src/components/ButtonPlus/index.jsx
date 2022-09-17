import "./ButtonPlus.css";

export function ButtonPlus({ onClick }) {
  return (
    <button onClick={onClick} className="plus-btn">
      +
    </button>
  );
}
