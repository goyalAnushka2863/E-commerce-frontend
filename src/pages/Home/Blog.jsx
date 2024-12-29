import React,{useEffect} from 'react'
const Blog = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
    const blogs = [
        { image: '/assets/images/blog-pic-1.jpg', label: 'Morning Skincare Routine: 10 Top Tips for you', tag: 'TOP TIPS', fill: '#fef9c3', color: '#eab308', isRecent:true, isPopular:false},
        { image: '/assets/images/blog-pic-2.jpg', label: 'New Collection is Out', tag: 'NEW IN',fill: '#E9F1FF', color: '#3C82FF'  , isRecent:false, isPopular:false},
        { image: '/assets/images/blog-pic-3.jpg', label: 'Always Stay Fresh', tag: 'HOW TO', fill: '#FFEFF5', color: '#FF69A2', isRecent:false, isPopular:true},
        { image: '/assets/images/blog-pic-4.jpg', label: 'Improve your Skin now', tag: 'MASKS', fill: '#E5FAF4', color: '#04CD98', isRecent:false, isPopular:false},
        { image: '/assets/images/blog-pic-5.jpg', label: 'Stay Safe in the Sun', tag: 'SUN CARE', fill: '#fef9c3', color: '#eab308', isRecent:false, isPopular:false},
        { image: '/assets/images/blog-pic-6.jpg', label: 'Explore our Bestselling Products', tag: 'BESTSELLERS', fill: '#E9F1FF', color: '#3C82FF' , isRecent:false, isPopular:false},
        { image: '/assets/images/blog-pic-7.jpg', label: '5 Great Tips to Get that Perfect Skin', tag: 'TOP TIPS', fill: '#FFEFF5', color: '#FF69A2', isRecent:false, isPopular:false},
    ];
    return (
        <div className='flex flex-col mx-36 mt-32'>
            <span className="heading">- Our Blog</span>
            <span className="text-[40px] font-semibold">Check Out our Blog</span>
            <div className="grid grid-cols-6 grid-rows-3 gap-12">
                {blogs.map((product, index) => (
                    <div className={`flex flex-col gap-5 relative mt-16 ${index===0?'col-span-4':'col-span-2'} ${index===5 || index===6?'col-span-3':'col-span-2'}`} key={index}>

                        <img src={product.image} alt="" className={`cursor-pointer bg-gray-100 rounded-[32px] }`}/>
                        {product.isPopular && <div className="bg-[#fe0808] text-white font-bold w-28 h-10 rounded-3xl flex items-center justify-center absolute top-6 left-72">POPULAR</div>}
                        {product.isRecent && <div className="bg-[#01D099] text-white font-bold w-28 h-10 rounded-3xl flex items-center justify-center absolute top-6 left-[90%]">RECENT</div>} 
                        <span className='cursor-pointer text-2xl font-medium'>{product.label}</span>
                        <div className="flex items-center gap-8">
                            <span className={`py-2 px-4 font-bold rounded-full`} style={{ color: product.color, backgroundColor: product.fill }}>{product.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center bg-[#00CC96] mx-auto my-16 py-5 px-10 text-white font-semibold text-xl rounded-full cursor-pointer">View All</div>
        </div>
    )
}

export default Blog
