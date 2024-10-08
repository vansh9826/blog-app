import { Link } from "react-router-dom"


const Card = ( {heading , description , id}:any) => {
  
    return (
      <Link to={`/blog/${id}`}>
      <div className=" max-w-7xl m-auto mt-32 flex">
       <div className="w-1/3">
         <p>Date</p>
         <div> badge</div>
       </div>
       <div className="w-2/3 flex flex-col gap-y-3 border-t border-b">
        <h1>{heading}</h1>
        <p>
        {description}</p>
        <div className=" w-132">
          <button className="bg-black rounded-full text-white p-3 hover:pointer">Read more</button>
        </div>
         </div>
  
     </div>
      </Link>
    )
  
}

export default Card

