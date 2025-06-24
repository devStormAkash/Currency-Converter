import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [currencydata, setCurrencydata] = useState("")
  useEffect(() => {
    fetch(
      `https://api.currencyapi.com/v3/latest?apikey=fca_live_bTnKi2xTYEkqXG45JImla2BntVSMklsjcxpCojyW&base_currency=${currency}`
    )
      .then(res => res.json())
      .then(res => setCurrencydata(res.data))
  }, [currency])
  return currencydata
}

export default useCurrencyInfo