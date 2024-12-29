import React, { useState, useEffect } from 'react'
import MyCart from './MyCart';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from '../../utils/AxiosInstance';
const DetailsPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    },[]);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    useEffect(() => {
        formData.email!=="" && formData.password!==""?setIsDisabled(false):setIsDisabled(true)
    
    }, [formData])
    const handleEmail = (e) => {
        setFormData((form) => ({
            ...form,
            email: e.target.value
        }))
    }
    const handlePasswrod = (e) => {
        setFormData((form) => ({
            ...form,
            password: e.target.value
        }))
    }
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const [error, setError] = useState(null);
    const handleSubmit = async() => {
        // e.preventDefault();
        setError(''); // Clear previous errors
        try {
            const response = await axiosInstance.post('/checkout', {
                email: formData.email,
                password: formData.password,
            });
            navigate('/checkout/shippingDetails')
        } catch (err) {
            const errorMsg =
            err.response?.data?.message;
            setError(errorMsg);
        }
    }
    
    return (
        <div className='mx-36 grid grid-cols-2 mt-16 gap-24'>
            <div className="border rounded-3xl py-20 flex flex-col items-center gap-10 h-fit">
                <h1 className='text-3xl font-semibold w-[80%]'>Details</h1>
                <div  className='flex flex-col gap-10 w-[80%]'>
                    <div className='flex flex-col gap-5 w-full'>
                        <span>Email address</span>
                        <input type="email" className={`px-5 py-3 outline-none rounded-full  ${isEmail ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsEmail(formData.email !== '') }} onFocus={() => { setIsEmail(true) }} name='email' value={formData.email} onChange={handleEmail} />
                    </div>
                    <div className='flex flex-col gap-5 w-full'>
                        <span>Password</span>
                        <input type="password" className={`px-5 py-3 outline-none rounded-full ${isPassword ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsPassword(formData.password !== '') }} onFocus={() => { setIsPassword(true) }} name='password' value={formData.password} onChange={handlePasswrod} />
                    </div>
                    {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                    <button onClick={handleSubmit} disabled={isDisabled} className={`flex items-center justify-center ${isDisabled?'text-gray-500':'text-white'} bg-[#00CC96] py-3 px-5  font-semibold text-xl rounded-full`}>Continue</button>
                </div>
            </div>
            <MyCart/>
        </div>
    )
}

export default DetailsPage
