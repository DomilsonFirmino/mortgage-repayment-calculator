export default function InputComponent({label,id,styles=""}:{label:string, id:string, styles?:string}) {
  return (
    <div className={`grid ${styles}`}>
        <label htmlFor={id} className="text-slate-700 font-semibold">{label}</label>
        <input type="text" id={id} name={id} className="mt-2 p-2 w-full border border-slate-700 rounded-sm"/>
    </div>
  )
}
