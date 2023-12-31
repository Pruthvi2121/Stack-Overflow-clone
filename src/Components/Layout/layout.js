import React, { useEffect } from "react";
import { useState } from "react";
import {BsStackOverflow} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {MdMonitor} from 'react-icons/md'
import {FiHelpCircle} from 'react-icons/fi'



import { Sidebardata } from "./Sidebardata";
// import axios from "axios";

import { useNavigate } from "react-router-dom";
import RightSidebar from "./RightSidebar";
import Foot from "./Foot";


const Layout =({children})=>{
    const navigate = useNavigate()
    
    const [open, Setopen] =useState(true)
    const [name, setName] =useState("")

    
    
    // useEffect( ()=>{
    //     (
    //         async()=>{
    //             const {data} = await axios.get("http://127.0.0.1:8000/api/user/profile/")
    //             console.log("data --",data)
    //             setName(data.name)
    //         } 
    //     )()
       
    // }
    // ,[])

    return(
        
        <>
        
        
        
        <div className="flex h-full">
        
                <div className=" text-gray-500 absolute   h-16 w-full">
                    <div className="flex justify-between items-center">
                        <div className="flex"></div>
                        <div className="flex items-center gap-4 py-2 px-4">
                            <span className="flex items-center gap-1  px-2 "><FiHelpCircle/>Help</span>
                            <span className="flex items-center gap-1  px-2 "><MdMonitor/>Tour</span>
                            <span><img className="h-10 w-10 object-cover rounded-full" src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" alt="" /></span>
                        </div>
                    </div>
                </div>
        
                <div  className="text-gray-500 ">
                <span className="text-orange-400">
                    <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg" className={` h-8 top-4 left-8 absolute ${open?"":"hidden "}`} alt="" />
                    <div className={` top-4 left-6 absolute ${open?"hidden ":""}`}><BsStackOverflow size={"30px"}/></div>
                </span>
                
                    
                    <div className={`  shadow-2xl  ${open? "w-60":"w-20 "}  h-full pt-24 duration-300 relative `}>
                        {/* <h1 className={` w-full text-3xl font-bold text-[#4cc69f] absolute pt-2 pl-6 ${open? " ":"hidden"}`}>FINANCE. </h1> */}
                        
                        <svg  onClick={()=>{Setopen(!open)}}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className={` h-6 w-6 mt-2  border absolute right-0  ${open? "rotate-180 rounded-r-full ":"rounded-l-full "}`} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                        

                    
                        <ul className={`  px-2 ${open?"pt-2 duration-300":"pt-16 duration-300"}`}>
                        
                        
                        {Sidebardata.map((data, index)=>
                        <li key={index} className={` pl-6 py-1 px-2 group flex  hover:text-black hover:font-normal font-light  cursor-pointer ${open?"":"pt-[8px]  "}`} onClick={()=>{navigate(data.path)}} >
                            
                                <span className="mt-1 group-hover:text-orange-500 " >
                            {data.icon} 
                                </span>
                                <span className={` pl-6  ${open?"":"hidden "}`} >{data.title}</span>
                            </li>
                        )}
                        
                        
                       
                
                            
                        </ul>

                        
                    </div>
                    


                    
                </div>

            <div className="pt-16 h-full w-full    " >
                    
                    
                  
                    <div className="flex h-full ">
                        <div className="flex-1 w-[70%]">
                        {children}
                        <img src="" alt="" />
                        </div>

                    <div className="flex-2  w-[30%] bg-[#FAFAFA] border">
                            <RightSidebar/>
                    </div>
                    </div>
                    
            </div>

        </div>
    
        <Foot/>
        </>
        
    )
}

export default Layout