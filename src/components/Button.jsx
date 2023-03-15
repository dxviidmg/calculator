import '../css/Button.css'


export default function Button(props) {

  const esOperador = v => {
    return isNaN(v) && (!['.', '='].includes(v))
  }

  return <div className={`button-contenedor ${esOperador(props.children)  ? 'operador': ''}`.trim()}>{props.children}</div>;
}
