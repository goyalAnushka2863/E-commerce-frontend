import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';

const Body = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    // Fetch cart items on mount
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
        fetchCartItems();
    }, []);
    // const [total, setTotal] = useState
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

    const clearCart = async () => {
        try {
            const response = await axiosInstance.delete('/clear-cart'); // Ensure this endpoint exists
            if (response.data && response.data.message) {
                console.log(response.data.message);
                setProducts([]); // Clear cart locally
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
        fetchCartItems()
    };

    const updateQuantity = async (id, quantity) => {
        try {
            const response = await axiosInstance.put(`/update-cart/${id}`, {
                quantity: quantity
            });
            if (response.data && response.data.message) {
                console.log(response.data.message);
                // console.log(products)
                fetchCartItems()
                
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message);
            } else {
                console.log("An unexpected error occurred");
            }
        }
    };
    
    
    

    return (
        <div className="flex flex-col mt-16 mb-32 mx-36 gap-5">
            <span className="heading">- Your Cart</span>
            <div className="flex items-center justify-between">
                <span className="text-[40px] font-semibold">Shopping Cart</span>
                <button
                    className="text-xl py-3 px-5 rounded-full font-bold border"
                    onClick={clearCart}
                >
                    Clear All
                </button>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <div className="col-span-2 flex flex-col gap-10">
                    {products.map(({ product, quantity }, index) => (
                        <div key={index} className="flex gap-20 border rounded-[40px] p-12">
                            <img
                                src={product.image}
                                alt={product.label}
                                className="bg-gray-100 rounded-3xl"
                            />
                            <div className="flex flex-col gap-5">
                                <span className="text-3xl font-medium">{product.label}</span>
                                <span className="text-2xl font-semibold">
                                    ${product.discountedPrice}
                                </span>
                                <div className="flex items-center gap-7">
                                    <div className="flex gap-5 border px-5 py-3 rounded-full items-center w-40">
                                        <IoIosArrowBack
                                            size={25}
                                            onClick={() =>
                                                updateQuantity(product._id, quantity - 1)
                                            }
                                            className="w-[25%] cursor-pointer"
                                        />
                                        <span className="text-2xl font-semibold w-[50%] text-center">
                                            {quantity}
                                        </span>
                                        <IoIosArrowForward
                                            size={25}
                                            onClick={() =>
                                                updateQuantity(product._id, quantity + 1)
                                            }
                                            className="w-[25%] cursor-pointer"
                                        />
                                    </div>
                                    <RxCross2
                                        size={60}
                                        className="border p-3 rounded-full cursor-pointer"
                                        onClick={() => deleteFromCart(product._id)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row-span-1 flex flex-col p-12 gap-16 border rounded-[40px]">
                    <span className="text-3xl font-medium">Cart Total</span>
                    <div className="font-light text-2xl flex justify-between">
                        <span>Subtotal:</span>
                        <span>
                            $
                            {products.reduce(
                                (acc, { product, quantity }) =>
                                    acc + product.discountedPrice * quantity,
                                0
                            )}
                        </span>
                    </div>
                    <div className="font-light text-2xl flex justify-between">
                        <span>Tax:</span>
                        <span>${products.length===0?0:products.reduce(
                                (acc, { product, quantity }) =>
                                     Math.round((acc + product.discountedPrice * 0.18*quantity) * 100) / 100,
                                0
                            )}</span>
                    </div>
                    <div className="font-light text-2xl flex justify-between">
                        <span>Shipping:</span>
                        <span>${products.length===0?0:15}</span>
                    </div>
                    <div className="font-medium text-2xl flex justify-between">
                        <span>Total:</span>
                        <span>
                            $
                            {products.length===0?0:products.reduce(
                                (acc, { product, quantity }) =>
                                    Math.round(( acc + product.discountedPrice * quantity + product.discountedPrice * 0.18*quantity) * 100) / 100,
                                0
                            )+ 15}
                        </span>
                    </div>
                    <button
                        className="bg-[#01D099] w-full flex items-center justify-center text-[20px] px-5 py-3 text-white font-semibold rounded-full"
                        onClick={() => navigate('/checkout/details')}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Body;
