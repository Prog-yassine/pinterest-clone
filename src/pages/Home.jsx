const Home = ( ) => {
    return(
        <div className="w-full h-full">
            <div className="w-full h-16 flex items-center fixed top-0 left-0 bg-white justify-between px-5 z-50">
                <button className="w-9 h-9 hover:bg-gray-200 rounded-full flex justify-center items-center"><img src="https://i.ibb.co/r2YV3K2/logo.webp" className="w-6 h-6" /></button>
                <button className="w-[70px] py-2 bg-black text-white rounded-full outline-white">Home</button>
                <button className="w-[70px] py-2 rounded-full">Create</button>
                <div className="bg-gray-100 rounded-full flex item-center hover:bg-gray-200 w-[calc(100%-(36px*4)-(70px*2)-60px)]">
                    <button className="px-2 justify-center"><i class='bx bx-search bx-flip-horizontal translate-y-0 text-gray-500 text-xl' ></i></button>
                    <input className="bg-inherit rounded-full px-1 outline-none py-2 w-full" type="text" placeholder="Search"/>
                </div>
                <button className="w-9 h-9 hover:bg-gray-200 rounded-full"><i class='bx bx-bell bx-flip-horizontal text-2xl' ></i></button>
                <button className="w-8 h-8"><img src="https://i.ibb.co/xqJjpZr/Screenshot-2024-11-06-201000.png" alt="" className="w-8 h-8 rounded-full"/></button>
                <button className="w-9 h-9 hover:bg-gray-200 rounded-full"><i class='bx bx-chevron-down bx-flip-horizontal text-3xl'></i></button>
            </div>
            

            <div class="grid grid-cols-2 md:grid-cols-6 gap-6 mt-20 w-full px-4">
                <div class="space-y-5">
                    <div className="cursor-pointer group relative">
                        <img
                            className="h-auto w-full rounded-lg"
                            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                            alt=""
                        />
                        
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/474x/a5/52/ea/a552eae3a1577c8bd4998251b23261fa.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/236x/bb/10/37/bb1037c83fea23c174a6ef4b3c9ac805.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-5">
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/474x/a5/52/ea/a552eae3a1577c8bd4998251b23261fa.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-5">
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/236x/d9/11/74/d91174cd86dfffe93bea12cd1b85cf0e.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/236x/44/8e/7a/448e7ad06d1606eaaa875613c72419ac.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-5">
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto max-w-full w-full rounded-lg" src="https://i.pinimg.com/236x/4c/e5/f3/4ce5f3a5c00c7f7e4872e7373f74f520.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-5">
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="space-y-5">
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/236x/cc/6e/3b/cc6e3b72e4dbceeb3d54fad2d324fd03.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer group relative">
                        <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/236x/5e/a2/90/5ea2908abaebe80ef47e7f3fe51c2474.jpg" alt=""/>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between rounded-lg"
                        >
                            <div className="flex justify-end p-4">
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-800 transition">
                                    Save
                                </button>
                            </div>

                            <div className="flex justify-between items-center px-4 py-4">
                                <p className="text-white text-sm flex items-center bg-white rounded-full text-black px-2 py-1 hover:bg-gray-200"><i class='bx bx-right-top-arrow-circle translate-y-0.5 mr-1'></i> pintrest.com/wu...</p>
                                
                                <div className="flex gap-2">
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-download' ></i></button>
                                    <button className="w-7 h-7 bg-white text-black rounded-full flex justify-center items-center hover:bg-gray-200"><i class='bx bx-dots-horizontal-rounded' ></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Home