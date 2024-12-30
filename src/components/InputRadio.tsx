export default function InputRadio({handleClick,state,id,name,label, styles}:{label:string ,id:string, name:string,styles?: string, state: "repayment" | "interest" | "", handleClick: ()=>void}) {
  return (
    <div className={`${styles}`}>
      <label htmlFor={id} className={`rounded-md border border-slate-700 py-2 px-3 flex gap-2 cursor-pointer ${state == id ? "bg-lime-100":""}`}>
          <input type="radio" name={name} id={id} checked={state == id} onChange={handleClick}/>
          <p className="text-slate-900 font-bold">{label}</p>
      </label>
    </div>
  )
}
