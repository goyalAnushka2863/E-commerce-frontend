import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import axiosInstance from '../../utils/AxiosInstance';
const MyCart = () => {
    const [products, setProducts] = useState([]);  
    // const 
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchCartItems = async () => {
            try {
                const response = await axiosInstance.get('/get-cart-items');
                if (response.data && response.data.products) {
                    setProducts(response.data.products);
                    console.log(response.data.products);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };
        fetchCartItems();
    }, []);
    const fetchCartItems = async () => {
        try {
            const response = await axiosInstance.get('/get-cart-items');
            if (response.data && response.data.products) {
                setProducts(response.data.products);
                console.log(response.data.products);
            }
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };
    const deleteFromCart = async (id) => {
        try {
            const response = await axiosInstance.delete('/delete-from-cart', {
                data: { productId: id },
            });
            if (response.data && response.data.message) {
                console.log(response.data.message);
                fetchCartItems(); // Refresh the cart
            }
        } catch (error) {
            console.error('Error deleting product from cart:', error);
        }
    };
    const navigate = useNavigate()
    return (
        <>
            <div className="border rounded-3xl py-20 flex flex-col items-center gap-10 h-fit">
                <span className='text-3xl w-[80%] font-semibold'>My Cart</span>
                {products.map(({product,quantity},index)=>(
                    <div className="col-span-2 flex gap-20 w-[80%]" key={index}>
                        <img src={product.image} alt="product" className='bg-gray-100 rounded-3xl w-32 h-32' />
                        <div className="flex flex-col gap-5 w-[60%]">
                            <span className='text-xl font-medium'>{product.label}</span>
                            <span className='text-lg font-semibold'>${product.discountedPrice}</span>
                        </div>
                        <RxCross2 size={60} className='border p-1 w-fit h-fit rounded-full cursor-pointer' onClick={()=>{deleteFromCart(product._id)}} />
                    </div>

                ))}
                <div className="flex justify-between w-[80%] text-2xl font-semibold">
                    <span>Total:</span>
                    <span>${products.length===0?0:products.reduce(
                                (acc, { product, quantity }) =>
                                    Math.round(( acc + product.discountedPrice * quantity + product.discountedPrice * 0.18*quantity) * 100) / 100,
                                0
                            )+ 15}</span>
                </div>
                <button type="submit" className="w-[80%] flex items-center justify-center py-3 px-5 text-black border font-semibold text-xl rounded-full" onClick={()=>{navigate('/cart')}}>Edit Cart</button>

            </div>
        </>
    )
}

export default MyCart
