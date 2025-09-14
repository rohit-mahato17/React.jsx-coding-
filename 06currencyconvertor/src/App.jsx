import { useState } from 'react'
import { InputBox} from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
   const [from, setFrom] = useState("usd");
   const [to, setTo] = useState("inr");
   const [convertedAmount, setConvertedAmount] = useState(0);

   const currencyInfo = useCurrencyInfo(from);

   const options = Object.keys(currencyInfo);

   const swap =()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
   }

   const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to]); 
    }

  return (
     <div className="w-full h-screen flex-wrap jsustify-center items-center bg-cover bg-no-repeat"
     style={{
      backgroundImage:"url(https://images.unsplash.com/photo-1508385082359-fbc7c0f4b43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
      }}
    >
      </div>
  )
}

export default App
