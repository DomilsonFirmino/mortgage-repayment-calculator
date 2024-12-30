import { useState } from "react"
import Calculator from "./components/icons/Calculator"
import Results from "./components/icons/Results"
import InputComponent from "./components/InputComponent"
import InputRadio from "./components/InputRadio"
import { handleSetFunction, handleSetType, handleSubmit, resetStates } from "./utils/Func"
import { valueType } from "./types/StateTypes"

function App() {

  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState<valueType>("");
  const [result, setResult] = useState<{monthy: string, total: string} | 0>(0);
  const [errors, setErrors] = useState({amountError: "",termError:  "", rateError: "", typeError: ""});


  return (
    <div className="md:px-0 md:flex bg-white md:w-[55rem] md:mx-auto rounded-md md:overflow-hidden">

      <div className="md:w-[45%] p-8 mx-4">
        
        <div className="md:flex justify-between">
          <h1 className="font-bold text-xl">Mortgage Calculator</h1>
          <button className="underline text-slate-300" onClick={()=>resetStates(setRate, setTerm, setAmount,setType, setResult)}>Clear all</button>
        </div>

        <form onSubmit={(e)=>handleSubmit(e,rate, term, amount, setResult, type, errors, setErrors)}>
          
          <InputComponent error={errors.amountError} handleChange={(e) => handleSetFunction(e,setAmount)} label={"Mortgage Amount"} id={"amount"} styles="mt-4" state={amount}/>
          
          <div className="md:flex gap-4 mt-4">
            <InputComponent error={errors.termError} handleChange={(e) => handleSetFunction(e, setTerm)} label={"Mortgage Term"} id={"term"} state={term} />
            <InputComponent error={errors.rateError} styles="mt-4 md:mt-0" label={"Interest Rate"} id={"rate"} state={rate} handleChange={(e) => handleSetFunction(e, setRate)} />
          </div>

          <div>
            <div className="mt-4">
              <h2 className="text-slate-700 font-semibold">Mortgage Type</h2>
              <InputRadio styles="mt-4" id="repayment" name="Type" label="Repayment" state={type} handleClick={()=>handleSetType("repayment", setType)}/>
              <InputRadio styles="mt-4" id="interest" name="Type" label="Interest only" state={type} handleClick={()=>handleSetType("interest", setType)} />
            </div>
            <p className="text-Red mt-2">{errors.typeError}</p>
          </div>

          <button className="mt-4 flex gap-1 sm:justify-normal justify-center lg:w-auto w-full rounded-full bg-lime-400 px-4 py-2">
              <Calculator />
              <p className="font-bold text-slate-900">Calculate Repayments</p>
          </button>
        </form>
      </div>

      <div className={`md:w-[55%] px-8 py-8 bg-slate-900 md:rounded-bl-[5rem] ${(result == 0) && "grid place-content-center"}`}>
        {
          result != 0 &&
          <div>
            <h2 className="font-bold text-slate-100">Your results</h2>
            <p className="mt-2 text-slate-300">
              Your results are shown below based on the information you provided. 
              To adjust the results, edit the form and click “calculate repayments” again.
            </p>
            <div className="mt-4 p-5 rounded-md border-t-2 border-t-lime-400 bg-slate-1000">
              
              {
                type == "repayment" && 
                <>  
                  <div>
                  
                    <h3 className="text-slate-300">Your monthly repairemnts</h3>
                    <p className="text-5xl mt-2 text-lime-400 font-bold">
                      &#8356;{result.monthy}
                    </p>
                  
                  </div>
                  <div className="border-t-2 border-slate-900 my-4"></div>
                </>
              }


              <div>
                
                <h3 className="text-slate-300">Total your will repay over the term</h3>
                
                <p className="text-xl mt-2 text-white font-bold">
                  &#8356;{result.total}
                </p>

              </div>

            </div>
          </div>
        }

        {
          result == 0 &&
          <div className="text-center">
            <Results />
            <h2 className="text-slate-100 font-bold mt-3">Results Shown here</h2>
            <p className="mt-3 text-sm font-semibold text-slate-300">
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
         </div>
        }

      </div>

    </div>
  )
}

export default App
