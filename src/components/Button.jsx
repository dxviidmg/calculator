import "../css/Button.css";

export default function Button(props) {
  const isOperator = (v) => {
    return isNaN(v) && ![".", "=", "Clear"].includes(v);
  };

  const isToClear = (v) => {
    return v === "Clear";
  };

  return (
    <div
      className={`button-contenedor ${
        isOperator(props.children) ? "operador" : ""
      } ${isToClear(props.children) ? "clear" : ""}`
        .replace(/\s+/g, " ")
        .trim()}
      onClick={() => props.onClick(props.children)}
    >
      {props.children}
    </div>
  );
}
