import React, { useState, useEffect } from 'react'
import MyCart from './MyCart'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const BillingDetails = ({ setBillingDetails }) => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
            // Scroll to the top when the component is mounted
            window.scrollTo(0, 0);
            
        },[]);
        const [formData, setFormData] = useState({
            fullName: '',
            streetName: '',
            houseNo: '',
            city: '',
            country: '',
            ZIPcode: ''
        })
        const {billingDetails} = location.state || {}
        const [isSelected, setIsSelected] = useState(true)
        useEffect(() => {
            if (isSelected && billingDetails) {
                setBillingDetails(billingDetails); // Update state when `isSelected` is true
            }
        }, [isSelected, billingDetails]);
        useEffect(() => {
            formData.fullName!=="" && formData.streetName!=="" && formData.houseNo!==""&& formData.city!==""&& formData.country!==""&& formData.ZIPcode!==""?setIsDisabled(false):setIsDisabled(true)
        }, [formData]) 
        useEffect(() => {
            isSelected?setIsDisabled(false):setIsDisabled(true)
        }, [isSelected]) 
    const handleFullName = (e) => {
        setFormData((form) => ({
            ...form,
            fullName: e.target.value
        }))
    }
    const handleStreetName = (e) => {
        setFormData((form) => ({
            ...form,
            streetName: e.target.value
        }))
    }
    const handleHouseNo = (e) => {
        setFormData((form) => ({
            ...form,
            houseNo: e.target.value
        }))
    }
    const handleCity = (e) => {
        setFormData((form) => ({
            ...form,
            city: e.target.value
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
            const [isDisabled, setIsDisabled] = useState(true)
    
    const [isFullName, setIsFullName] = useState(false)
    const [isStreetName, setIsStreetName] = useState(false)
    const [isHouse, setIsHouse] = useState(false)
    const [isCity, setIsCity] = useState(false)
    const [isCountry, setIsCountry] = useState(false)
    const [isZIPcode, setIsZIPcode] = useState(false)
    const handleSubmit = (e) => {
        navigate('/checkout/paymentDetails')
    }
    const handleRadioChange = () => {
        setIsSelected((prev) => !prev);
    };
    useEffect(() => {
            setBillingDetails(formData);
        }, [formData, setBillingDetails]);
    
    // console.log('selected', isSelected)
    return (
        <div className='mx-36 grid grid-cols-2 my-16 gap-24'>
            <div className="border rounded-3xl py-20 flex flex-col items-center gap-10 h-fit">
                <h1 className='text-3xl font-semibold w-[80%]'>Billing Details</h1>
                <div className="flex gap-5 w-[80%]  ">
                <input
                        type="radio"
                        name="billing"
                        id="sameAddress"
                        className="appearance-none w-5 h-5 rounded-full border-2 border-gray-400 cursor-pointer"
                        style={{
                            backgroundColor: isSelected ? '#00CC96' : 'transparent',
                            borderColor: !isSelected ? '#00CC96' : '',
                            accentColor:isSelected?'white':''
                        }}

                        checked={isSelected}
                        onClick={handleRadioChange}
                    />
                    <span className='font-light'>Same as shipping address</span>
                </div>
                <div  className='flex flex-col gap-10 w-[80%]'>
                    {!isSelected && <><div className='flex flex-col gap-5 w-full'>
                        <span>Full Name</span>
                        <input type="text" className={`px-5 py-3 outline-none rounded-full  ${isFullName ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsFullName(formData.fullName !== '') }} onFocus={() => { setIsFullName(true) }} name='fullName' value={formData.fullName} onChange={handleFullName} />
                    </div>
                    <div className='flex flex-col gap-5 w-full'>
                        <span>Street Name</span>
                        <input type="text" className={`px-5 py-3 outline-none rounded-full ${isStreetName ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsStreetName(formData.streetName !== '') }} onFocus={() => { setIsStreetName(true) }} name='streetName' value={formData.streetName} onChange={handleStreetName} />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='flex flex-col gap-5 w-full'>
                            <span>House Number</span>
                            <input type="number" className={`px-5 py-3 outline-none rounded-full ${isHouse ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsHouse(formData.houseNo !== '') }} onFocus={() => { setIsHouse(true) }} name='houseNo' value={formData.houseNo} onChange={handleHouseNo} />
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            <span>City</span>
                            <input type="text" className={`px-5 py-3 outline-none rounded-full ${isCity ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsCity(formData.city !== '') }} onFocus={() => { setIsCity(true) }} name='city' value={formData.city} onChange={handleCity} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className='flex flex-col gap-5 w-full'>
                            <span>Country</span>
                            <input type="text" className={`px-5 py-3 outline-none rounded-full ${isCountry ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => {setIsCountry(formData.country !== '') }} onFocus={() => {setIsCountry(true) }} name='country' value={formData.country} onChange={handleCountry} />
                        </div>
                        <div className='flex flex-col gap-5 w-full'>
                            <span>ZIP Code</span>
                            <input type="number" className={`px-5 py-3 outline-none rounded-full ${isZIPcode ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsZIPcode(formData.ZIPcode !== '') }} onFocus={() => { setIsZIPcode(true) }} name='ZIPcode' value={formData.ZIPcode} onChange={handleZIPcode} />
                        </div>
                    </div></>}
                    <button disabled={isDisabled} onClick={handleSubmit} className={`flex items-center justify-center ${isDisabled?'text-gray-500':'text-white'} bg-[#00CC96] py-3 px-5  font-semibold text-xl rounded-full`}>Continue</button>                </div>
            </div>
            <MyCart/>
        </div>
    )
}

export default BillingDetails
