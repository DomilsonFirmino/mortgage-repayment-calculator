export default function InputComponent({error, label,id,styles="",state,handleChange, symbol, order="order-2"}:{label:string, id:string,error: string, styles?:string, state: string,handleChange: (e: React.FormEvent<HTMLInputElement>)=>void, symbol:string, order?: string}) {
  return (
    <div>
      <div className={`grid ${styles}`}>
        <label htmlFor={id} className="text-slate-700 font-semibold">{label}</label>
        <div className={`grid ${order == "order-2" ? "grid-cols-[auto,1fr]" : "grid-cols-[1fr,auto]"} border focus-within:border-lime-400 pointer-events-none rounded-sm overflow-hidden focus:bg-lime-100 mt-2 w-full  ${ error.length > 0 ? "border-Red" : "border-slate-700 "}`}>
          <input type="text" id={id} name={id} className={`${order} font-semibold cursor-pointer peer focus:border-none focus-visible:outline-none p-2 w-full pointer-events-auto`} value={state} onChange={handleChange}/>
          <p className={`grid py-2 px-3 content-center peer-focus-within:bg-lime-400 font-semibold ${ error.length > 0 ? "bg-Red" : "bg-slate-300"}`}>{symbol}</p>
        </div>
      </div>
      <p className="text-Red mt-1">{error}</p>
    </div>
  )
}