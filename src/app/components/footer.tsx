const Footer = () => {
    return (
        <div className="absolute bottom-0 items-center w-full">
            <div className="flex justify-center text-white">
                <div className="order-first font-Helvetica">
                    <h1 className="text-2xl font-bold"><span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?</h1>
                    <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                </div>
                <div className="flex rounded- order-last">
                    <p className="pl-2 px-7 pr-20 py-2 h-8 bg-[#FF9F0D] text-white text-xs">Enter Your Email</p>
                    <p className="px-5 py-2 h-8 bg-white text-[#FF9F0D] text-xs">Subscribe Now</p>
                </div>
            </div>
        </div>
    )
}

export default Footer