export default function InputComponent({error, label,id,styles="",state,handleChange}:{label:string, id:string,error: string, styles?:string, state: string,handleChange: (e: React.FormEvent<HTMLInputElement>)=>void}) {
  return (
    <div>
      <div className={`grid ${styles}`}>
        <label htmlFor={id} className="text-slate-700 font-semibold">{label}</label>
        <input type="text" id={id} name={id} className={`focus:bg-lime-100 mt-2 p-2 w-full border ${ error.length > 0 ? "border-Red" : "border-slate-700 focus-visible:border-lime-300"}  rounded-sm`} value={state} onChange={handleChange}/>
      </div>
      <p className="text-Red mt-1">{error}</p>
    </div>
  )
}