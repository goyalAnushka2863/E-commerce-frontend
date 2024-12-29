import React, { useState, useEffect } from 'react'
import MyCart from './MyCart';

const PaymentDetails = ({ setPaymentDetails, createOrder }) => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
        
        
    }, []);
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        CVV: '',
        country: '',
        ZIPcode: ''
    })
    useEffect(() => {
        formData.cardNumber !== "" && formData.expiryDate !== "" && formData.CVV !== "" && formData.country !== "" && formData.ZIPcode !== "" ? setIsDisabled(false) : setIsDisabled(true)
    
    }, [formData])
    const [isDisabled, setIsDisabled] = useState(true)

    const [isSelected, setIsSelected] = useState(true)
    const handlecardNumber = (e) => {
        setFormData((form) => ({
            ...form,
            cardNumber: e.target.value
        }))
    }
    const handleexpiryDate = (e) => {
        setFormData((form) => ({
            ...form,
            expiryDate: e.target.value
        }))
    }
    const handleCVV = (e) => {
        setFormData((form) => ({
            ...form,
            CVV: e.target.value
        }))
    }
    const handleCountry = (e) => {
        setFormData((form) => ({
            ...form,
            country: e.target.value
        }))
    }
    const handleZIPcode = (e) => {
        setFormData((form) => ({
            ...form,
            ZIPcode: e.target.value
        }))
    }
    const [iscardNumber, setIscardNumber] = useState(false)
    const [isExpiryDate, setIsExpiryDate] = useState(false)
    const [isCVV, setIsCVV] = useState(false)
    const [isCountry, setIsCountry] = useState(false)
    const [isZIPcode, setIsZIPcode] = useState(false)
    const handleSubmit = () => {

    }
    const handleRadioChange = () => {
        setIsSelected((prev) => !prev);
    };
    // console.log('selected', isSelected)
    return (
        <div className='mx-36 grid grid-cols-2 my-16 gap-24'>
            <div className="border rounded-3xl py-20 flex flex-col items-center gap-10 h-fit">
                <h1 className='text-3xl font-semibold w-[80%]'>Payment Details</h1>
                <div className="flex w-[80%] gap-20">
                    <div className="flex gap-5 w-full">
                        <input
                            type="radio"
                            name="billing"
                            id="sameAddress"
                            className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer"
                            style={{
                                backgroundColor: !isSelected ? '#00CC96' : 'transparent',
                                borderColor: isSelected ? '#00CC96' : '',
                            }}

                            checked={!isSelected}
                            onClick={handleRadioChange}
                        />
                        <span className='font-light'>Credit Card</span>
                    </div>
                    <div className="flex gap-5 w-full ">
                        <input
                            type="radio"
                            name="billing"
                            id="sameAddress"
                            className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer"
                            style={{
                                backgroundColor: isSelected ? '#00CC96' : 'transparent',
                                borderColor: !isSelected ? '#00CC96' : '',
                            }}

                            checked={isSelected}
                            onClick={handleRadioChange}
                        />
                        <span className='font-light'>PayPal</span>
                    </div>

                </div>
                {!isSelected && <div className='flex flex-col gap-10 w-[80%]' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5 w-full'>
                        <span>Card Number</span>
                        <input type="text" className={`px-5 py-3 outline-none rounded-full  ${iscardNumber ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIscardNumber(formData.cardNumber !== '') }} onFocus={() => { setIscardNumber(true) }} name='cardNumber' value={formData.cardNumber} onChange={handlecardNumber} />
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className='flex flex-col gap-5 w-full'>
                            <span>Expiry Date</span>
                            <input type="number" className={`px-5 py-3 outline-none rounded-full ${isExpiryDate ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsExpiryDate(formData.expiryDate !== '') }} onFocus={() => { setIsExpiryDate(true) }} name='expiryDate' value={formData.expiryDate} onChange={handleexpiryDate} />
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            <span>CVV</span>
                            <input type="text" className={`px-5 py-3 outline-none rounded-full ${isCVV ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsCVV(formData.CVV !== '') }} onFocus={() => { setIsCVV(true) }} name='CVV' value={formData.CVV} onChange={handleCVV} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='flex flex-col gap-5 w-full'>
                            <span>Country</span>
                            <input type="text" className={`px-5 py-3 outline-none rounded-full ${isCountry ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsCountry(formData.country !== '') }} onFocus={() => { setIsCountry(true) }} name='country' value={formData.country} onChange={handleCountry} />
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            <span>ZIP Code</span>
                            <input type="number" className={`px-5 py-3 outline-none rounded-full ${isZIPcode ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsZIPcode(formData.ZIPcode !== '') }} onFocus={() => { setIsZIPcode(true) }} name='ZIPcode' value={formData.ZIPcode} onChange={handleZIPcode} />
                        </div>
                    </div>
                    <button disabled={isDisabled} onClick={createOrder} className={`flex items-center justify-center ${isDisabled ? 'text-gray-500' : 'text-white'} bg-[#00CC96] py-3 px-5  font-semibold text-xl rounded-full`}>Place Order</button>
                </div>}
                {isSelected && <button onClick={createOrder} className="w-[80%] flex items-center justify-center bg-[#00CC96] py-3 px-5 text-white font-semibold text-xl rounded-full">Continue with PayPal</button>}

            </div>
            <MyCart />
        </div>
    )
}

export default PaymentDetails
