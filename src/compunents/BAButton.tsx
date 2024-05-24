export default  function BARbutton(props : any){
    const { btnVal,onClick,className } = props
    return <button onClick={onClick} className={className}>{btnVal} </button>
}
