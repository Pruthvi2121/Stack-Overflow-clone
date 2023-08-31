import React from "react";


const Foot =()=>{

    return<>
     <div className="w-full h-screen border-t  text-gray-400">
        <div className="flex gap-6 px-16 justify-start mt-4 py-4  pb-6  border-b">
            <span>about us</span>
            <span>tour</span>
            <span>help</span>
            <span>blog</span>
            <span>chat</span>
            <span>data</span>
            <span>legal</span>
            <span>privacy policy</span>
            <span>mobil</span>
            <span>feedback</span>
        </div>

        <div className="grid border-b py-8  grid-cols-4 px-16 mt-8 item">
            <div className="flex flex-col">
                <h1 className="font-bold ">Product</h1>
                <span>Team</span>
                <span>Collectives</span>
                <span>Talent</span>
                

            </div>
            <div className="flex flex-col">
                <h1 className="font-bold ">STACK OVERFLOW</h1>
                <span>Question</span>
                <span>Help</span>
        
                

            </div>
            <div className="flex flex-col">
                <h1 className="font-bold ">COMPANY</h1>
                
                    <span>About</span>
                    <span>Press</span>
                    <span>Work Here</span>
                    <span>Legal</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Contact Us</span>
                    <span>Cookie Settings</span>
                    <span>Cookie Policy</span>

            </div>
            <div className="flex flex-col">
                <h1 className="font-bold">STACK EXCHANGE NETWORK</h1>
                
                <span>Technology</span>
                <span>Culture &amp; recreation</span>
                <span>Life &amp; arts</span>
                <span>Science</span>
                <span>Professional</span>
                <span>Business</span>
                <span>API</span>
                <span>Data</span>

            </div>

        </div>

     </div>
    </>
}

export default Foot