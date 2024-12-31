import { errorsType, formEventType, formEventTypeInput, setErrorsType, setResultType, setStateString, setTypeType, valueType } from "../types/StateTypes";

export function handleSetFunction(e: formEventTypeInput, setState: setStateString){
    const inputValue = e.currentTarget.value;
    if (/^-?\d*\.?\d*$/.test(inputValue)) {
      setState(inputValue);
    }
}

export   function handleSubmit(e: formEventType, rate: string, term:string, amount:string, setResult: setResultType,type: valueType,errors: errorsType , setErrors: setErrorsType){
    e.preventDefault()
    //errors check;

    const newErrors: errorsType = {
      termError: "",
      amountError: "",
      rateError: "",
      typeError: ""
    };

    if(rate.length == 0){
      newErrors.rateError = "This field is required"
    }else if(isNaN(Number(rate))){
      newErrors.rateError = "This must be a valid number"
    }
    
    if (term.length === 0) {
      newErrors.termError = "This field is required";
    } else if (isNaN(Number(term))) {
      newErrors.termError = "This must be a valid number";
    }

    if (amount.length === 0) {
      newErrors.amountError = "This field is required";
    } else if (isNaN(Number(amount))) {
      newErrors.amountError = "This must be a valid number";
    }
  
    if (type.length === 0) {
      newErrors.typeError = "This field is required";
    }

    const hasErrors = Object.values(newErrors).some((error) => error.length > 0);

    setErrors(newErrors);
    
    if (hasErrors) {
      return; // Interrompe a execução se houver erros
    }
    
    const monthlyRate = Number(rate) / 100 / 12; 
    const totalPayments = Number(term) * 12;
    const monthlyRepayment = (Number(amount) * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
    if(isNaN(monthlyRepayment)){
      newErrors.amountError = "Amount is to big";
      newErrors.termError = "Term to big";

      setErrors(newErrors);
      return 
    }

    const totalRepaid = monthlyRepayment * totalPayments;

    const monthy = monthlyRepayment.toFixed(2);
    const total = totalRepaid.toFixed(2)

    setResult({monthy, total});
}

export function resetStates(setRate:  setStateString,setTerm:  setStateString,setAmount:  setStateString, setType:  setTypeType, setResult: setResultType){
  setRate("")
  setTerm("")
  setType("")
  setAmount("")
  setResult(0)
}

export function handleSetType(value: valueType, setType: setTypeType){
  setType(value)
}