


const SideImage = () => {
  return (
    <div className="bg-[url('/authentication/background.svg')] bg-no-repeat bg-cover h-screen w-1/2 flex items-center justify-center">
        <div className="flex-col items-center justify-center gap-3">
            <img src="/vite.svg" alt="logo" className="m-auto" />
            <div className="text-center">
            <h1 className="text-white text-[40px] font-bold">Furni<span className="text-blue-400">Flex</span></h1>
            <p className="text-white text-[16px] font-medium mx-28">Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
            </div>
        </div>
    </div>
  )
}

export default SideImage