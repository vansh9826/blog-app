import { useParams } from "react-router-dom"
import Blog from "../Components/Blog"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useBlog } from "../hooks"
import Example from "../Components/Example"


const BlogPage = () => {
const {id}= useParams()
const{loading , blog}:any = useBlog({id:id || ""})
  return (
    <>
    <Navbar/>
    {loading?(<div><Example/> </div>):
    (<Blog title={blog.blog.title} content={blog.blog.content}/>)}
    <Footer/>
    </>
  )
}

export default BlogPage
