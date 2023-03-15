import '../css/Button.css'


export default function Button(props) {

  const esOperador = v => {
    return isNaN(v) && (!['.', '=', 'Clear'].includes(v))
  }

  const isToClear = v => {
    return (v === 'Clear')
  }

  return <div className={`button-contenedor ${esOperador(props.children) ? 'operador': ''} ${isToClear(props.children)  ? 'clear': ''}`.replace(/\s+/g, ' ').trim()}>{props.children}</div>;
}

