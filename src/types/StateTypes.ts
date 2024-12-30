export type setResultType =  React.Dispatch<React.SetStateAction<0 | {
    monthy: string;
    total: string;
}>>;

export type formEventType = React.FormEvent<HTMLFormElement>;

export type setStateString = React.Dispatch<React.SetStateAction<string>>;

export type setTypeType = React.Dispatch<React.SetStateAction<"" | "repayment" | "interest">>;

export type valueType = "repayment" | "interest" | "" ;

export type setErrorsType =  React.Dispatch<React.SetStateAction<{
    termError: string;
    amountError: string;
    rateError: string;
    typeError: string;
}>>

export type errorsType = {
    termError: string;
    amountError: string;
    rateError: string;
    typeError: string;
}

export type formEventTypeInput = React.FormEvent<HTMLInputElement>