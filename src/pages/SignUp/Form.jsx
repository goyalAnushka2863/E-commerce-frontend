import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';
import { validateEmail } from '../../utils/helper';
const Form = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    const [isSelected, setIsSelected] = useState(true)
    const handleRadioChange = () => {
        setIsSelected((prev) => !prev);
    };
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
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
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isSelected) {
            setError('Check the terms and conditions')
            return
        }
        if (!formData.email) {
            setError('Please enter your email')
        }
        if (!validateEmail(formData.email)) {
            setError('Please enter valid email id')
        }
        if (!formData.password) {
            setError('Please enter password')
        }
        setError('')
        // sign up api call
        try {
            const response = await axiosInstance.post('/signup', {
                email: formData.email,
                password: formData.password
            })
            if (response.data && response.data.error) {
                setError(response.data.message)
                return
            }
            if (response.data && response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken)
                navigate('/')
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message)
            }
            else {
                setError('An unexpected error occured. Please try again.')
            }
        }
    }
    return (
        <div className='mx-36 flex mt-16 mb-32 justify-center'>
            <div className="w-[60%] flex flex-col items-center gap-10 h-fit">
                <form action="" className='flex flex-col gap-10 w-[80%]' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-5 w-full'>
                        <span>Email address</span>
                        <input type="email" className={`px-5 py-3 outline-none rounded-full  ${isEmail ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsEmail(formData.email !== '') }} onFocus={() => { setIsEmail(true) }} name='email' value={formData.email} onChange={handleEmail} />
                    </div>
                    <div className='flex flex-col gap-5 w-full'>
                        <span>Create Password</span>
                        <input type="password" className={`px-5 py-3 outline-none rounded-full ${isPassword ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsPassword(formData.password !== '') }} onFocus={() => { setIsPassword(true) }} name='password' value={formData.password} onChange={handlePasswrod} />
                    </div>
                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
                    <div className="flex gap-10 items-center">
                        <input type="checkbox" name="" id="" className="w-8 h-8 rounded border-gray-400 cursor-pointer"
                            style={{
                                backgroundColor: !isSelected ? '#00CC96' : 'transparent',
                                borderColor: isSelected ? '#00CC96' : '',
                            }} checked={!isSelected}
                            onClick={handleRadioChange} />
                        <span className='font-light text-xl'>I have read and agree to <Link to={'/terms'} className='font-medium underline'>terms & conditions</Link></span>
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="w-[45%] flex items-center justify-center bg-[#00CC96] py-3 px-5 text-white font-semibold text-xl rounded-full">Create Account</button>
                        <button type="" className="w-[45%] flex items-center justify-center border py-3 px-5  font-semibold text-xl rounded-full" onClick={() => { navigate('/login') }}>Login</button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Form
