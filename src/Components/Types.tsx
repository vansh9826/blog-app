

const Types = () => {
  return (
    <div className="max-w-7xl  m-auto grid lg:grid-cols-2  flex mt-28">
        <div className="max-h-[600px]  flex items-center">
            <img className="h-full w-full object-cover hover:scale-105 duration-300" src="/laptop.jpg"></img>
        </div>
        <div className="flex flex-col pl-6">
            <div className=" border-b pb-14 mt-5"> 
                <p className="text-xl"><span className="font-semibold "> web devlopment</span> We specialise in crafting beautiful, high quality marketing pages. The rest of the website will be a shell that uses lorem ipsum everywhere.</p>
            </div>
            <div className=" border-b pb-14 mt-5"> 
                <p className="text-xl"><span className="font-semibold "> Application development</span> We have a team of skilled developers who are experts in the latest app frameworks, like Angular 1 and Google Web Toolkit.</p>
            </div> 
            <div className=" border-b pb-14 mt-5"> 
                <p className="text-xl"><span className="font-semibold "> E-commerce</span> We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years.</p>
            </div> 
            <div className=" border-b pb-14 mt-5"> 
                <p className="text-xl"><span className="font-semibold "> Custom Content Mangement</span> At Studio we understand the importance of having a robust and customised CMS. That’s why we run all of our client projects out of a single, enormous Joomla instance.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Types
