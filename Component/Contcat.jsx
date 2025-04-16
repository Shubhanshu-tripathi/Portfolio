import email from "../assets/email.png"
import address from "../assets/address.png"
import phone from "../assets/phone.png"
import linkdin from "../assets/linkdin.png"
import  github from "../assets/github.png"



function Contact() {
    
    return (<>
    
        <div className="h-[100%] w-[100%] " >
            <div className="h-[100%] w-[100%] bg-black flex items-center justify-evenly" >
                      
                <div className="h-[90%] w-[50%] ">
                        <div className='mt-28 font-serif font-light text-white' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis omnis voluptates totam iure, obcaecati, suscipit, magnam vero esse soluta aliquid quam molestias quasi possimus modi repudiandae. Incidunt corrupti velit quidem.
                        Expedita rerum eius soluta impedit repellendus enim culpa deserunt ullam iusto ex! Beatae error debitis veniam natus repudiandae odit nihil veritatis ex laboriosam possimus libero cum dicta, maiores deleniti culpa!
                        us quo molestias atque, laboriosam similique perspiciatis voluptates?
                        </div>
                    <div className="text h-[5%] w-[35%] flex items-center justify-start mt-24  bg-zinc-900" >
                         <img className="h-8 w-8" src={phone} alt="" />
                       <h1 className="font-bold  text-white"  >9131694200</h1>
                    </div>
                    <div className="text h-[5%] w-[35%] mt-3 flex item-center justify-around  bg-zinc-900" >
                          <img src={email} alt="" />
                        <h1 className="font-bold  text-white" >Jigyansu17tripathi@gmail.com</h1></div>
                    <div className="text h-[5%] w-[35%] mt-3 flex item-center justify-start  bg-zinc-900" >
                        <img src={address} alt="" />
                        <h1 className="font-bold  text-white" >Bhopal MadhyaPradesh</h1></div>
                    <div className="text h-[5%] w-[35%] mt-3 flex item-center justify-start  bg-zinc-900">
                        <img src={ linkdin} alt="" />
                          <h1 className="font-bold  text-white" >linkdin:-</h1>
                        </div>
                    <div className="text h-[5%] w-[35%] mt-3 flex item-center justify-start  bg-zinc-900">
                        <img src={github} alt="" />
                         <h1 className="font-bold  text-white" >Github:-</h1>
                    </div>
                  </div>
            <form className="h-[60%] w-[50%] " action="">
                  <input className=" h-[10%] w-[85%] rounded-sm mt-2 ml-8 bg-zinc-900 " type="text" placeholder="Enter Your Name" /> <br />
                  <input className=" h-[10%] w-[85%] rounded-sm mt-2 ml-8 bg-zinc-900 " type="email" placeholder="Enter Your Email" /> <br />
                  <input className=" h-[20%] w-[85%] rounded-sm mt-2 ml-8 bg-zinc-900 " type="text" placeholder="Enter Your Message" /> <br />
             <button className=" h-12 w-44 rounded-md font-semibold text-white bg-white  bg-gradient-to-r from-purple-500 to-pink-500  mt-6 ml-8 " >Submit</button>
                     
                </form>
               </div>
             </div>
    
         
    
    </>)

}

export default Contact;