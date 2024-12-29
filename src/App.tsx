import Calculator from "./components/icons/Calculator"
import Results from "./components/icons/Results"
import InputComponent from "./components/InputComponent"
import InputRadio from "./components/InputRadio"

function App() {

  return (
    <div className="md:px-0 md:flex bg-white md:w-[80%] md:mx-auto rounded-md md:overflow-hidden">
      <div className="md:w-[45%] p-8 mx-4">
        <div className="md:flex gap-10 justify-between">
          <h1 className="font-bold text-xl">Mortgage Calculator</h1>
          <p className="underline text-slate-300">Clear all</p>
        </div> 
        <form>
          <InputComponent label={"Mortgage Amount"} id={"amount"} styles="mt-4"/>
          <div className="md:flex gap-4 mt-4">
            <InputComponent label={"Mortgage Term"} id={"term"} />
            <InputComponent label={"Interest Rate"} id={"rate"} />
          </div>
          <div className="mt-4">
            <h2 className="text-slate-700 font-semibold">Mortgage Type</h2>
            <InputRadio id="repayment" name="Type" label="Repayment"/>
            <InputRadio id="interest" name="Type" label="Interest only"/>
          </div>
          <button className="mt-5 flex gap-2 sm:justify-normal justify-center lg:w-auto w-full rounded-full bg-Lime px-4 py-2">
              <Calculator />
              <p className="font-bold text-slate-900">calculate repayments</p>
          </button>
        </form>
      </div>
      <div className="md:w-[55%] grid place-content-center px-4 py-8 bg-slate-900 md:rounded-bl-[5rem]">
        <div className="text-center">
          <Results />
          <h2 className="text-slate-100 font-bold mt-3">Results Shown here</h2>
          <p className="mt-3 text-sm font-semibold text-slate-300">
            Complete the form and click “calculate repayments” to see what
            your monthly repayments would be.
          </p>
        </div>
        <div className="text-center hidden">
          <h2>Your results</h2>
          <p>
            Your results are shown below based on the information you provided. 
            To adjust the results, edit the form and click “calculate repayments” again.
          </p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
