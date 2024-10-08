
import { useNavigate } from "react-router-dom"
import Card  from "../Components/Card"
import Example from "../Components/Example"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useBlogs } from "../hooks"



const Mainpage = () => {
const {loading , blogs} = useBlogs()
const navigate = useNavigate()
const handleEvent = () =>{
  navigate("/publish")
}
  return (
    <>
    <Navbar logs={<ButtonComponent onClick={handleEvent}/>} />
    <div >
          <div className="max-w-7xl m-auto flex flex-col mt-28 p-2" >
        <span>Blog</span>
        <span className="mt-4 text-5xl">The Latest Articles And News</span>
        <p className="text-2xl mt-3">Stay up-to-date with the latest industry news as our marketing teams finds <br/>new ways to repurpose old
            CSS and articles
        </p>
   </div>
  
  {loading?(
      <div className="mt-20">
       <Example  />
      </div>
    ):(blogs.map(blog => <Card id={blog.id}  key={blog.id}  heading={blog.title} description={blog.content.slice(0 , 300)+"..." }></Card>))}
    
 
  
    </div>
    
   
    <Footer/>
    </>
  )
}
const ButtonComponent = ({onClick}:any)=>{
return(
  <button className="border border-slate-600 py-2 px-4 hover:bg-black hover:text-white rounded-full" onClick={onClick}>Write</button>
)
}


export default Mainpage
