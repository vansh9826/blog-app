import axios from "axios"
import { useEffect, useState } from "react"
interface Blog {
    id: string;
    title: string;
    content: string;
    author: string;
  }
  
  // Define the structure of the useBlogs return type
  interface UseBlogsReturn {
    loading: boolean;
    blogs: Blog[];
  }

export const useBlog = ({id}:{id:string})=>{
    const [loading , setLoading]= useState(true)
    const [blog, setBlog] = useState()

    useEffect(()=>{
        axios.get(`https://medium1.vanshchabra786.workers.dev/api/v1/blog/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        }).then(Response=>{
            setBlog(Response.data)
            setLoading(false)
        })
    },[id])
    return {loading,
        blog
    }
}

export const useBlogs =():UseBlogsReturn=>{
    const [blogs , setBlogs] = useState<Blog[]>([])
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        axios.get("https://medium1.vanshchabra786.workers.dev/api/v1/blog/bulk",{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(Response=>{
            setBlogs(Response.data)
            setLoading(false)
        })
    },[])
    return {loading,
        blogs
    }
}