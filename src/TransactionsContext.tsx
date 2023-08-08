import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";


interface Transaction {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: string;
    createAt: string


}
interface TransactionsProviderProps {
children: ReactNode;
}


interface TransactionsInput{
    title: string;
    category: string;
    amount: number;
    type: string;

}


interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionsInput) => void;

}
export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)


export function TransactionsProvider({children}: TransactionsProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions));

    }, []);

    function createTransaction(transaction: TransactionsInput){
  

        api.post('/transactions', transaction)

    }

    return(
        <TransactionsContext.Provider value={{transactions,createTransaction }}>

        {children}

        </TransactionsContext.Provider>

    )

}