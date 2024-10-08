const Black = () => {
    return (
      <div className=" max-w-7xl m-auto bg-black rounded-3xl py-36  px-5 my-28">
        <div className="max-w-4xl m-auto">
            <div className="max-w-xl flex flex-col text-white ">
                <h1 className="mb-6"> Tell us about your project</h1>
                 <div className="border-b pb-12 "> <button className="bg-white text-black rounded-full py-1  px-3">say heg</button></div>
                 <h3 className="mt-6"> offices</h3>
                
                    <ul className="flex  justify-between gap-8 " >
                       <address>
                       <li>
                        <strong>Copenhagen</strong>
                        <br/>
                        1 Carlsberg Gate
                        <br/>
                        1260, København, Denmark
                       </li>
                       </address>
                      <address>
                      <li>
                        <strong>Billund</strong>
                        <br/>
                        24 Lego Allé
                        <br/>
                        7190, Billund, Denmark
                       </li>
                      </address>
                    </ul>
             
            </div>
        </div>
      </div>
    )
  }
  
  export default Black;
  