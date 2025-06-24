import React from 'react'

const RightPart = () => {
  return (
    <>
      <div className="bg-zinc-700 w-full">
        {/* Contents of the card */}
        <div className="">
          <h1 className="text-3xl font-semibold text-white">
            The Best <span className="text-rose-700">Currency Converter</span>{" "}
            Platform
          </h1>
          <p className="text-gray-300 text-sm mt-4">
            Our currency converter app gives you up-to-date exchange rates from
            around the world. Whether you're traveling, trading, or just
            curious, get accurate conversions instantly — fast, simple, and
            free.
          </p>
          <button className="text-xl font-semibold text-white rounded-md bg-rose-700 px-5 py-3 mt-10">
            How to convert
          </button>
        </div>

        {/* Images of currency  */}

        <div className="w-full flex justify-end p-3 relative">
          <img
            src="https://cdn.pixabay.com/photo/2018/03/15/11/29/bitcoin-3227945_640.png"
            className='ml-10 xl:absolute xl:-translate-y-12'
          />
        </div>
      </div>
    </>
  );
}

export default RightPart
