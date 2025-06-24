import { useState,useEffect } from 'react'
import { Footer,InputBox,RightPart,Navbar } from '../components';
import useCurrencyInfo from '../hooks/CurrencyInfo';


function App() {

  const [amount, setAmount] = useState("")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  

  const currencyData = useCurrencyInfo(from)
  const options = Object.keys(currencyData)
  
  

  const convert = () => {
    let numericValue = parseFloat(amount) || 0
    setConvertedAmount((numericValue * (currencyData[to].value)).toFixed(2))
    
  }


  const swap = () => {
    const tempConverted = convertedAmount;
    setFrom(to)
    setTo(from)
    setAmount(0);
    setConvertedAmount(0);
  }
  
  const clearAll = () => {
    setAmount(0)
    setConvertedAmount(0)
    setFrom("USD")
    setTo("INR")
  }
  

  return (
    <>
      <Navbar />
      <div className="flex lg:flex-row flex-col">
        <div
          id="currency-container"
          className=" lg:w-1/2  xl:w-1/3 w-screen bg-zinc-700 lg:min-h-screen"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="w-fit flex flex-col px-8 py-14 bg-[#1B1D22] shadow-lg shadow-blue-950 items-center justify-center my-8 md:my-10 lg:mt-4 mx-3 md:mx-auto rounded-md"
          >
            <div className="mb-1.5">
              <InputBox
                label="From"
                amount={amount}
                changeAmount={(amount) => setAmount(amount)}
                currencyList={options}
                selectedCurrency={from}
                changeCurrency={(from) => setFrom(from)}
              />
            </div>
            <div className="relative w-full mb-1">
              <button
                className="bg-rose-600 hover:bg-rose-700 rounded-lg px-5 py-3 border-3 border-gray-50 text-white font-medium absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                onClick={swap}
              >
                SWAP
              </button>
            </div>
            <div className="mb-1.5">
              <InputBox
                isReadOnly
                label="To"
                amount={convertedAmount}
                changeAmount={(convertedAmount) =>
                  setConvertedAmount(convertedAmount)
                }
                currencyList={options}
                selectedCurrency={to}
                changeCurrency={(to) => setTo(to)}
              />
            </div>
            <div className=" w-full ">
              <button className="px-6 py-3 w-full rounded-md text-white font-semibold  mt-4 bg-rose-600 hover:bg-rose-700">
                Convert {from} to {to}
              </button>
              <button
                className="px-6 py-3 w-full rounded-md text-white font-semibold  mt-2 bg-rose-600 hover:bg-rose-700"
                onClick={clearAll}
              >
                Clear All
              </button>
            </div>
          </form>
        </div>
        <div className="lg:min-h-screen pt-14 lg:pt-20 px-8 py-5 md:px-20 md:py-8 bg-zinc-700 lg:w-1/2 xl:w-2/3">
          <RightPart />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
