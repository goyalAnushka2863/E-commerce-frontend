// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axiosInstance from '../../utils/AxiosInstance';
// import { validateEmail } from '../../utils/helper';
// const Form = () => {
//     useEffect(() => {
//         // Scroll to the top when the component is mounted
//         window.scrollTo(0, 0);
//     }, []);
//     const [isSelected, setIsSelected] = useState(true)
//     const handleRadioChange = () => {
//         setIsSelected((prev) => !prev);
//     };
//     const navigate = useNavigate()
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     })
//     const handleEmail = (e) => {
//         setFormData((form) => ({
//             ...form,
//             email: e.target.value
//         }))
//     }
//     const handlePasswrod = (e) => {
//         setFormData((form) => ({
//             ...form,
//             password: e.target.value
//         }))
//     }
//     const [isEmail, setIsEmail] = useState(false)
//     const [isPassword, setIsPassword] = useState(false)
//     const [error, setError] = useState(null)

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         if (!formData.email) {
//             setError('Please enter email')
//         }
//         if (!validateEmail(formData.email)) {
//             setError('Please enter valid email id')
//         }
//         if (!formData.password) {
//             setError('Please enter password')
//         }
//         setError('')
//         try {
//             const response = await axiosInstance('/login', {
//                 email: formData.email,
//                 password: formData.password
//             })
//             if (response.data && response.data.accessToken) {
//                 localStorage.setItem('token', response.data.accessToken)
//                 navigate('/')
//             }

//         } catch (error) {
//             if (error.response && error.response.data && error.response.data.message) {
//                 setError(error.response.data.message)
//             }
//             else {
//                 setError('An unexpected error occured. Please try again.')
//             }
//         }
//     }
//     return (
//         <div className='mx-36 flex mt-16 mb-32 justify-center'>
//             <div className="w-[60%] flex flex-col items-center gap-10 h-fit">
//                 <form action="" className='flex flex-col gap-10 w-[80%]' onSubmit={handleSubmit}>
//                     <div className='flex flex-col gap-5 w-full'>
//                         <span>Email address</span>
//                         <input type="email" className={`px-5 py-3 outline-none rounded-full  ${isEmail ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsEmail(formData.email !== '') }} onFocus={() => { setIsEmail(true) }} name='email' value={formData.email} onChange={handleEmail} />
//                     </div>
//                     <div className='flex flex-col gap-5 w-full'>
//                         <span>Password</span>
//                         <input type="password" className={`px-5 py-3 outline-none rounded-full ${isPassword ? 'border border-[#00CC96]' : 'border'}`} onBlur={() => { setIsPassword(formData.password !== '') }} onFocus={() => { setIsPassword(true) }} name='password' value={formData.password} onChange={handlePasswrod} />
//                     </div>
//                     {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

//                     <div className="flex gap-10 items-center">
//                         <input type="radio" name="" id="" className="appearance-none w-8 h-8 rounded-full border-2 border-gray-400 cursor-pointer" style={{
//                             backgroundColor: !isSelected ? '#00CC96' : 'transparent',
//                             accentColor: !isSelected ? '#00CC96' : 'transparent',
//                             borderColor: isSelected ? '#00CC96' : '',
//                         }} checked={!isSelected}
//                             onClick={handleRadioChange} />
//                         <span className='font-light text-xl'>Remember me</span>
//                     </div>
//                     <button type="submit" className="w-full flex items-center justify-center border py-3 px-5  font-semibold text-xl rounded-full bg-[#00CC96] text-white">Login</button>

//                     <div className="flex justify-between items-center">
//                         <button type="button" className="w-1/2 flex items-center justify-center  py-3 px-5 border font-semibold text-xl rounded-full" onClick={()=>{navigate('/signup')}}>Create Account</button>
//                         <Link to={navigate('/login')} className='underline font-light text-xl'>Forgot Password?</Link>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Form




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';
import { validateEmail } from '../../utils/helper';

const Form = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isSelected, setIsSelected] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [error, setError] = useState(null);

    const handleEmail = (e) => {
        setFormData({ ...formData, email: e.target.value });
    };

    const handlePassword = (e) => {
        setFormData({ ...formData, password: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (!formData.email) {
            setError('Please enter your email');
            return;
        }
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address');
            return;
        }
        if (!formData.password) {
            setError('Please enter your password');
            return;
        }

        setError(''); // Clear previous errors
        try {
            const response = await axiosInstance.post('/login', {
                email: formData.email,
                password: formData.password,
            });

            if (response.data && response.data.accessToken) {
                localStorage.setItem('token', response.data.accessToken);
                navigate('/');
            }
        } catch (err) {
            const errorMsg =
                err.response?.data?.message || 'An unexpected error occurred. Please try again.';
            setError(errorMsg);
        }
    };

    return (
        <div className="mx-36 flex mt-16 mb-32 justify-center">
            <div className="w-[60%] flex flex-col items-center gap-10 h-fit">
                <form className="flex flex-col gap-10 w-[80%]" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5 w-full">
                        <span>Email address</span>
                        <input
                            type="email"
                            className={`px-5 py-3 outline-none rounded-full ${
                                isEmail ? 'border border-[#00CC96]' : 'border'
                            }`}
                            onBlur={() => setIsEmail(formData.email !== '')}
                            onFocus={() => setIsEmail(true)}
                            name="email"
                            value={formData.email}
                            onChange={handleEmail}
                        />
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <span>Password</span>
                        <input
                            type="password"
                            className={`px-5 py-3 outline-none rounded-full ${
                                isPassword ? 'border border-[#00CC96]' : 'border'
                            }`}
                            onBlur={() => setIsPassword(formData.password !== '')}
                            onFocus={() => setIsPassword(true)}
                            name="password"
                            value={formData.password}
                            onChange={handlePassword}
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

                    <div className="flex gap-10 items-center">
                        <input
                            type="checkbox"
                            className="w-8 h-8 rounded border-gray-400 cursor-pointer"
                            checked={isSelected}
                            onChange={() => setIsSelected(!isSelected)}
                        />
                        <span className="font-light text-xl">Remember me</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center border py-3 px-5 font-semibold text-xl rounded-full bg-[#00CC96] text-white"
                    >
                        Login
                    </button>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            className="w-1/2 flex items-center justify-center py-3 px-5 border font-semibold text-xl rounded-full"
                            onClick={() => navigate('/signup')}
                        >
                            Create Account
                        </button>
                        <Link to="/forgot-password" className="underline font-light text-xl">
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
