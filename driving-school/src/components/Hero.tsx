function Hero() {
    return (
        <div className="flex flex-col h-screen bg-hero bg-cover">
             <div className="flex items-center h-20">
            <div className="mx-auto relative px-5 max-w-screen-xl w-full flex items-center justify-end">
                <div className=" text-xl text-orange-400 font-semibold  absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">DrivePass</div>
                <nav className=" flex gap-5 absolute font-medium  text-white ">
                    <a className="text-orange-400 ">Home</a>
                    <a>Book Lessons</a>
                    <a>Book Tests</a>
                </nav>
            </div>
        </div>
        
        <div className="flex-1 flex items-center ">
               {/* Hero Section */}
        <div className="text-center mx-auto">
            <h1 className="text-6xl font-bold text-white">Helping You</h1>
            <h1 className="text-6xl font-bold text-white">Become An Expert Driver</h1>
            <p className="text-2xl text-white font-light mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <a className="px-5 py-2 inline-block bg-orange-500 rounded text-white hover:bg-orange-400 transition-colors mt-10">Get Started</a>
        </div>
        </div>
        </div>



    
       
    )
}

export default Hero;