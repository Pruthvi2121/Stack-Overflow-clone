import React, { useEffect, useState } from "react";
import axios from "axios";
import {FiThumbsUp ,FiArrowRightCircle} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import {BiComment} from 'react-icons/bi'

const Question = () =>{
    const [data, setData] = useState([])
    const [tag, settag] = useState("")
    
    useEffect(()=>{
     axios.get(`https://api.stackexchange.com/2.3/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&pagesize=10&order=desc&sort=activity&tagged=${tag}&filter=default`)
        .then((res)=>{
            console.log(res)
            setData(res.data.items)
        
        })
        .catch((err)=>{
            console.log(err)
        })

    },[tag])



    function calculateTimeDifference(lastActivityDate) {
        const currentTime = new Date().getTime();
        const lastActivityTime = new Date(lastActivityDate * 1000).getTime();
        const timeDifference = currentTime - lastActivityTime;
      
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
      
        if (days > 0) {
          return `${days} days ago`;
        } else if (hours > 0) {
          return `${hours} hours ago`;
        } else if (minutes > 0) {
          return `${minutes} minutes ago`;
        } else {
          return `${seconds} seconds ago`;
        }
      }
      


          
    return(
        <div className="h-full px-4 py-4 text-gray-400">
            <h1 className="mt-6 mx-4 font-semibold text-lg">Questions</h1>
            <div className="flex pl-4 mt-8  gap-2  ">
                <button className="border bg-white  rounded-full px-2 ">interesting</button>
                <button className="border bg-white rounded-full px-2 ">featured</button>
                <button className="border bg-white  rounded-full px-2 ">hot</button>
                <button className="border bg-white rounded-full px-2 ">week</button>
                <button className="border bg-white rounded-full px-2 ">month</button>
                <div className="ml-auto mr-2 flex">
                    <input type="text" className="border bg-white rounded-full px-4 outline-none" placeholder="search" onChange={(e)=>{settag(e.target.value)}}/>
                </div>
                
           </div>
           {
             data.map((d, index)=>(
                <div className="mt-4  text-sm border-t grid   grid-cols-2" key={index}>
                <div className="mx-6 w-[100%]  mt-4">
                    <h1 className="text-blue-400 text-md font-bold">{d.title}</h1>
                    <div className="flex my-2 gap-2">
                        {
                            d.tags.map((tag, index2)=>(
                                <span className="border bg-white rounded-full px-2 " key={index2}>{tag}</span>
                            ))
                        }
                        
                    </div>
                    <div className="">
                        <span>modified {calculateTimeDifference(d.last_activity_date)}</span> 
                        <span className="font-semibold mx-2">{d.owner.display_name}</span>
                    </div>
                </div>
                <div className="ml-auto mr-2 flex gap-4">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <span>{d.score}</span> <span>votes</span> <span><FiThumbsUp/></span>
                        </div>
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <span>{d.answer_count}</span> <span>answer</span> <span><BiComment/></span>
                        </div>
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <span>{d.view_count}</span> <span>views</span> <span><AiOutlineEye/></span>
                        </div>
                </div>
            </div>
             ))
           }

           
        </div>
    )
}

export default Question