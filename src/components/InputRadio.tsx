export default function InputRadio({id, name, label}:{label:string ,id:string, name:string}) {
  return (
    <label htmlFor={id} className="rounded-md mt-3 border border-slate-700 py-2 px-3 flex gap-2 cursor-pointer">
        <input type="radio" name={name} id={id} />
        <p className="text-slate-900 font-bold">{label}</p>
    </label>
  )
}
