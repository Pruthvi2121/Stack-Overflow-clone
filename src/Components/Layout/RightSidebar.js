import React from "react";
import {MdLocationOn, MdModeComment} from 'react-icons/md'
import {BsStackOverflow} from 'react-icons/bs'
import {TbBadgeFilled} from 'react-icons/tb'
import {BiCodeCurly} from 'react-icons/bi'
const RightSidebar =()=>{
 
    
    return(
        <>  
            <div className=" px-8 text-gray-400 ">
                <h1 className=" mt-8 font-semibold text-lg ">Looking out for...</h1>
                <div className="flex mt-8 relative flex-col ">
                    <span className="absolute  top-1 border p-2 rounded-full" type="checkbox"></span>
                    <h1 className=" ml-8 text-blue-400 text-sm font-bold">Front End Developer with Angular</h1>
                    <h1 className="ml-8 my-1">WalletHub</h1>
                    <div className="flex ml-7 my-1 gap-2">
                        <span className="flex justify-center items-center gap-2"><MdLocationOn/> Washington, DC</span>
                        <span className="flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                            </svg>
                            Remote
                        </span>
                    </div>
                    <div className="flex ml-8 mt-1 gap-2 border-b pb-6">
                            <button className="border bg-white  rounded-full px-2 ">angular js</button>
                            <button className="border bg-white rounded-full px-2 ">cordova</button>

                            <hr />
                    </div>
                </div>
                <div className="flex mt-8 relative flex-col ">
                    <span className="absolute  top-1 border p-2 rounded-full" type="checkbox"></span>
                    <h1 className=" ml-8 text-blue-400 text-sm font-bold">Senior iOS/iPhone Engineer</h1>
                    <h1 className="ml-8 my-1">Perk.com INC.</h1>
                    <div className="flex ml-7 my-1 gap-2">
                        <span className="flex justify-center items-center gap-2"><MdLocationOn/> Bengaluru, India</span>
                        <span className="flex justify-center items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-2 mr-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                        </svg>
                            In Office
                        </span>
                    </div>
                    <div className="flex ml-8 mt-1 gap-2 border-b pb-6">
                            <button className="border bg-white  rounded-full px-2 ">iOS</button>
                            <button className="border bg-white rounded-full px-2 ">iPhone</button>

                            <hr />
                    </div>
                </div>
                <div className="flex mt-8 relative flex-col ">
                    <span className="absolute  top-1 border p-2 rounded-full" type="checkbox"></span>
                    <h1 className=" ml-8 text-blue-400 text-sm font-bold">Software Engineer</h1>
                    <h1 className="ml-8 my-1">SparkNET Technologies</h1>
                    <h2 className= "ml-8 text-green-600">$25,500 - $40,000</h2>
                    <div className="flex ml-7 my-1 gap-2">
                        <span className="flex justify-center items-center gap-2"><MdLocationOn/> Washington, DC</span>
                        <span className="flex justify-center items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4  ml-2 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                            </svg>
                            Remote
                        </span>
                    </div>
                    <div className="flex ml-8 mt-1 gap-2 border-b pb-6">
                            <button className="border bg-white  rounded-full px-2 ">iOS</button>
                            <button className="border bg-white rounded-full px-2 ">ruby on rails</button>

                            <hr />
                    </div>
                </div>

                {/* Network questions */}
                <div>
                   <h1 className=" my-8 font-semibold text-lg ">Network questions</h1>
                    <div className="flex my-4 border-b pb-4">
                        <MdModeComment className="text-blue-400 mt-[2px] ml-1" size={"20px"}/>
                        <h1 className=" ml-8 text-blue-400 text-sm font-bold">Why does everybody typedef over standard C types?</h1>
                    </div>
                    <div className="flex my-4 border-b pb-4">
                        <BsStackOverflow className="text-orange-400 mt-[2px] ml-1" size={"20px"}/>
                        <h1 className=" ml-8 text-blue-400 text-sm font-bold">An English word describing a pseudo-job</h1>
                    </div>
                    <div className="flex my-4 border-b pb-4">
                        <TbBadgeFilled className="text-red-600 rotate-180 mt-[2px] ml-1" size={"30px"}/>
                        <h1 className=" ml-8 text-blue-400 text-sm font-bold">When flying on a very tight schedule, are you obligated to run to make it to the next gate on a connection?</h1>
                    </div>
                    <div className="flex my-4 border-b pb-4">
                        <BiCodeCurly className="text-blue-700 mt-[2px] ml-1" size={"20px"}/>
                        <h1 className=" ml-8 text-blue-400 text-sm font-bold">Does 1 pixel have a standard size?</h1>
                    </div>
                </div>

                <button className="flex  text-sm font-bold text-blue-400  justify-center items-center">VIEW ALL JOBS 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1 ">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                </svg>

                </button>
                

            </div>
        </>
    )
}

export default RightSidebar