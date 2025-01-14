import { useNavigate } from "react-router-dom"


const Create = ( ) => {
    const navigate = useNavigate();
    return(
        <div className="w-full h-full">
            <div className="w-full h-16 flex items-center bg-white justify-between px-5 z-50 border-b border-gray-300">
                <button className="w-9 h-9 hover:bg-gray-200 rounded-full flex justify-center items-center"><img src="https://i.ibb.co/r2YV3K2/logo.webp" className="w-6 h-6" /></button>
                <button className="w-[70px] py-2 bg-white text-black rounded-full outline-white" onClick={() => navigate('/home')}>Home</button>
                <button className="w-[70px] py-2 rounded-full bg-black text-white outline-white">Create</button>
                <div className="bg-gray-100 rounded-full flex item-center hover:bg-gray-200 w-[calc(100%-(36px*4)-(70px*2)-60px)]">
                    <button className="px-2 justify-center"><i class='bx bx-search bx-flip-horizontal translate-y-0 text-gray-500 text-xl' ></i></button>
                    <input className="bg-inherit rounded-full px-1 outline-none py-2 w-full" type="text" placeholder="Search"/>
                </div>
                <button className="w-9 h-9 hover:bg-gray-200 rounded-full"><i class='bx bx-bell bx-flip-horizontal text-2xl' ></i></button>
                <button className="w-8 h-8"><img src="https://i.ibb.co/xqJjpZr/Screenshot-2024-11-06-201000.png" alt="" className="w-8 h-8 rounded-full"/></button>
                <button className="w-9 h-9 hover:bg-gray-200 rounded-full"><i class='bx bx-chevron-down bx-flip-horizontal text-3xl'></i></button>
            </div>
            <div className="w-full h-[calc(100%-64px)] flex flex-row">
                <div className="w-[82px] h-full border-r border-gray-300 flex flex-col space-y-8 pt-8 items-center">
                    <button className="text-3xl font-bold w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-200"><i class='bx bxs-chevrons-right' ></i></button>
                    <button className="text-3xl font-bold w-11 h-11 flex items-center justify-center rounded-full hover:bg-gray-200"><i class='bx bx-plus' ></i></button>
                </div>
                <div className="w-[calc(100%-82px)]">
                    <div className="w-full h-[70px] p-5 flex items-center justify-between border-b border-gray-300">
                        <h1 className="text-xl font-semibold">Create Pin</h1>
                        <button className="py-3 px-5 bg-red-600 text-white rounded-full font-bold">Publish</button>
                    </div>
                    
                    <div class="w-[60%] px-4 flex items-center justify-center h-auto mx-[20%] mt-20">
                        <div className="w-[370px] mr-[10px] h-[450px] bg-gray-200 outline-dashed rounded-3xl outline-2 outline-gray-300 flex items-center justify-center text-center cursor-pointer relative">
                            <div>
                                <i class='bx bxs-up-arrow-circle text-[40px]' ></i>
                                <h1 className="text-3xl font-bold text-gray-800 text-lg font-medium">Choose a file or drag and drop<br />it here</h1>
                            </div>
                            <div className="w-full h-20 absolute bottom-0 left-0 flex items-center justify-center text-base">
                                <p className="w-[90%]">We recommend using high quality .jpg files less than 20 MB or .mp4 files less than 200 MB.</p>
                            </div>  
                        </div>
                        <div className="w-[calc(50%-10px)] ml-[10px] flex flex-col">
                            <div className="mb-4 w-full flex flex-col">
                                <b className="text-black font-normal mb-2">Title </b>
                                <input type="text" className="outline-none border-2 border-gray-200 h-10 px-3 py-2 rounded-xl" placeholder="Add a title"/>
                            </div>
                            <div className="mb-4 w-full flex flex-col ">
                                <b className="text-black font-normal mb-2">Description </b>
                                <textarea name="" id="" className="outline-none border-2 border-gray-200 h-10 px-3 py-2 rounded-xl min-h-[90px] max-h-[150px]" placeholder="Add a detailed description"/>
                            </div>
                            <div className="mb-4 w-full flex flex-col">
                                <b className="text-black font-normal mb-2">Link </b>
                                <input type="url" className="outline-none border-2 border-gray-200 h-10 px-3 py-2 rounded-xl" placeholder="Add a Link"/>
                            </div>
                            <div className="mb-4 w-full flex flex-col">
                                <b className="text-black font-normal mb-2">Tagged topics (0) </b>
                                <input type="url" className="outline-none border-2 border-gray-200 h-10 px-3 py-2 rounded-xl" placeholder="Search for a tag"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Create