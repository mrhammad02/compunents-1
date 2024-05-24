export default function Inputt (props : any){
    const {onChange,className} = props
    return <input type="text" className={className} onChange={onChange}  placeholder="search-here" />
}