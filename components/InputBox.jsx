import React,{useId} from 'react'


const InputBox = ({
  label,
  amount,
  changeAmount,
  selectedCurrency,
  changeCurrency,
  currencyList = [],
  amountDisable = false,
  currencyDisable = false,
  isReadOnly = false
}) => {

  const amountInputId = useId();
  return (

    <>
      <div
        className="w-full px-4 py-6 rounded-md border border-gray-300 
      flex justify-between items-center gap-2 bg-gray-50"
      >
        {/* left part of the input box  */}

        <div
          id="left"
          className="flex flex-col gap-6 items-start justify-between text-left w-1/2"
        >
          <label htmlFor={amountInputId} className='text-gray-600'>{label}</label>
          <input
            readOnly={isReadOnly}
            id={amountInputId}
            type="number"
            placeholder='Amount'
            value={amount}
            disabled={amountDisable}
            onChange={(e) =>
              changeAmount && changeAmount((e.target.value))
            }
            className="px-4 py-2  rounded-md border w-2/3 border-gray-300"
          />
        </div>

        {/* Right part of the input box  */}

        <div
          id="right"
          className="flex flex-col gap-6 items-end justify-between text-right w-1/2"
        >
          <span className='text-lg text-gray-600'>Currency Type</span>
          <select 
            className='px-4 py-2 outline-gray-400 bg-gray-200 cursor-pointer rounded-md border border-gray-300 shadow'
            disabled = {currencyDisable}
            value={selectedCurrency}
            onChange={(e)=>changeCurrency && changeCurrency(e.target.value)}
          >

            {currencyList.map((currency) => (
              <option key={currency} value={currency} >{currency }</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox
