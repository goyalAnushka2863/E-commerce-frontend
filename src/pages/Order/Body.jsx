// import React, { useState, useEffect } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { RxCross2 } from 'react-icons/rx';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../utils/AxiosInstance';

// const Body = () => {
//     const [orders, setOrders] = useState([]);
//     const navigate = useNavigate();
//     // Fetch cart items on mount
//     useEffect(() => {
//         window.scrollTo(0, 0);
//         const getOrders = async()=>{
//             try {
//                 const response = await axiosInstance.get('/get-orders')
//                 setOrders(response.data.orders)
//                 console.log("Orders fetched")
//             } catch (error) {   
//                 if(error.response && error.response.data && error.response.data.message){
//                     console.log(error.response.data.message)
//                 }
//             }
//         }

//         getOrders();
//         getOrders();
//     }, []);

//     return (
//         <div className="flex flex-col mt-16 mb-32 mx-36 gap-5">
//             <span className="heading">- Your Orders</span>
//             <div className="flex items-center justify-between">
//                 <span className="text-[40px] font-semibold">Orders</span>

//             </div>
//             <div className="grid grid-cols-3 grid-rows-2 gap-12">
//                 <div className="col-span-2 flex flex-col gap-10">
//                     {orders.map((order, index)=>(
//                         order?.cartId?.items?.map((product, index)=>(
//                         <div>{product._id}</div>
//                         ))
//                     ))}
//                     {/* {products.map(({ product, quantity }, index) => (
//                         <div key={index} className="flex gap-20 border rounded-[40px] p-12">
//                             <img
//                                 src={product.image}
//                                 alt={product.label}
//                                 className="bg-gray-100 rounded-3xl"
//                             />
//                             <div className="flex flex-col gap-5">
//                                 <span className="text-3xl font-medium">{product.label}</span>
//                                 <span className="text-2xl font-semibold">
//                                     ${product.discountedPrice}
//                                 </span>
//                                 <div className="flex items-center gap-7">
//                                     <div className="flex gap-5 border px-5 py-3 rounded-full items-center w-40">
//                                         <IoIosArrowBack
//                                             size={25}
//                                             onClick={() =>
//                                                 updateQuantity(product._id, quantity - 1)
//                                             }
//                                             className="w-[25%] cursor-pointer"
//                                         />
//                                         <span className="text-2xl font-semibold w-[50%] text-center">
//                                             {quantity}
//                                         </span>
//                                         <IoIosArrowForward
//                                             size={25}
//                                             onClick={() =>
//                                                 updateQuantity(product._id, quantity + 1)
//                                             }
//                                             className="w-[25%] cursor-pointer"
//                                         />
//                                     </div>
//                                     <RxCross2
//                                         size={60}
//                                         className="border p-3 rounded-full cursor-pointer"
//                                         onClick={() => deleteFromCart(product._id)}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     ))} */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Body;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';

const Body = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    // Fetch orders on mount
    const getOrders = async () => {
        try {
            const response = await axiosInstance.get('/get-orders');
            setOrders(response.data.orders);
            console.log("Orders fetched", response.data.orders);
            console.log('items', response.data.orders.items)
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message);
            }
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);

        getOrders();
    }, []);
    const cancelOrder = async(id)=>{
        try {
            const response = await axiosInstance.put(`/orders/${id}/cancel`)
            console.log(response)
            getOrders()
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="flex flex-col mt-16 mb-32 mx-36 gap-5">
            <span className="heading">- Your Orders</span>
            <div className="flex items-center justify-between">
                <span className="text-[40px] font-semibold">Orders</span>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <div className="col-span-2 flex flex-col gap-10">
                    {orders.length > 0 ? orders.map((order, index) => (
                        <div key={order._id} className="border p-5 rounded-xl shadow-lg">
                            <div className="flex justify-between">
                                <span className="font-semibold text-xl">Order ID: {order._id}</span>
                                <span className="text-lg font-medium text-gray-600">Status: {order.orderStatus}</span>
                            </div>
                            <div className="mt-4">
                                <div className="text-lg font-medium">Shipping Details:</div>
                                <div>{order.shippingDetails.fullName}</div>
                                <div>{order.shippingDetails.streetName}, {order.shippingDetails.houseNumber}</div>
                                <div>{order.shippingDetails.city}, {order.shippingDetails.country}</div>
                                <div>{order.shippingDetails.ZIPcode}</div>
                            </div>

                            <div className="mt-4">
                                <div className="text-lg font-medium">Billing Details:</div>
                                <div>{order.billingDetails.fullName}</div>
                                <div>{order.billingDetails.streetName}, {order.billingDetails.houseNumber}</div>
                                <div>{order.billingDetails.city}, {order.billingDetails.country}</div>
                                <div>{order.billingDetails.ZIPcode}</div>
                            </div>

                            <div className="mt-4">
                                <div className="text-lg font-medium">Payment Status: {order.paymentDetails.status}</div>
                                <div>Payment Method: {order.paymentDetails.method}</div>
                            </div>
                            
                            {/* Loop through each product in the order */}
                            {order.items.map((productItem, index) => (
                                <div key={productItem._id} className="flex gap-8 items-center mt-6 border-t pt-6">
                                    <img
                                        src={productItem.productId.image}
                                        alt={productItem.productId.label}
                                        className="w-16 h-16 object-cover rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-xl font-semibold">{productItem.productId.label}</span>
                                        <span className="text-lg font-medium text-gray-500">Tag: {productItem.productId.tag}</span>
                                        <span className="text-lg font-semibold text-[#00CC96]">
                                            ${productItem.productId.discountedPrice} (Discounted from ${productItem.productId.price})
                                        </span>
                                        <span className="text-xl font-semibold">Quantity: {productItem.quantity}</span>

                                    </div>
                                </div>
                            ))}

                            

                            <div className="mt-4 flex justify-between">
                                <span className="text-xl font-bold">Total Price: ${order.totalPrice}</span>
                                <button disabled={order.orderStatus==='Cancelled'} className='bg-[#00CC96] text-white py-2 px-4 rounded-3xl font-semibold disabled:text-gray-500' onClick={()=>{cancelOrder(order._id)}}>Cancel Order</button>
                            </div>
                        </div>
                    )) : (
                        <div>No orders available.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Body;