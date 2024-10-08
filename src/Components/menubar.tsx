import { AlignJustify } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "../Components/ui/sheet"
import { Link } from "react-router-dom"
  
  const Menubar = ()=>{
    
    return(
        <Sheet>
            <SheetTrigger><AlignJustify/></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menubar</SheetTitle>
                    <SheetDescription>The best way to predict your future is to create it</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col items-center   mt-8 text-3xl gap-y-6">

                <Link to="/"><div className="border-b border-slate-600 cursor-pointer">home</div></Link>
                <Link to="/blogs"><div className="border-b border-slate-600 cursor-pointer">blogs</div></Link>
                <Link to="/About us"><div className="border-b border-slate-600 cursor-pointer">About us</div></Link>
                <Link to="/publish"><div className="border-b border-slate-600 cursor-pointer">Write</div></Link>

              
                </div>
            </SheetContent>

        </Sheet>
    )
  }

  export default Menubar