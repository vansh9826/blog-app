
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
   import {CircleChevronLeft} from "lucide-react"

const LandingCard = () => {
  
  return (
    <div className="max-w-7xl  m-auto grid lg:grid-cols-3 gap-x-8 mt-32">
       <Card className=" transform transition-transform duration-200 hover:translate-y-[-10px]  ">
        <CardHeader>
            <CardTitle><CircleChevronLeft/></CardTitle>
            <CardDescription className="font-bold">2023/case Study</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl font-bold">
            skip the bank borrow from those you trust
        </CardContent>
        <CardFooter>
        FamilyFund is a crowdfunding platform for friends and family. Allowing users to take personal loans from their network without a traditional financial institution.
        </CardFooter>
    </Card>
    <Card className=" transform transition-transform duration-200 hover:translate-y-[-10px]  ">
        <CardHeader>
            <CardTitle><CircleChevronLeft/></CardTitle>
            <CardDescription className="font-bold">2023/case Study</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl font-bold">
        Get a hodl of your health
        </CardContent>
        <CardFooter>
        Unseal is the first NFT platform where users can mint and trade NFTs of their own personal health records, allowing them to take control of their data.
        </CardFooter>
    </Card>
    <Card className=" transform transition-transform duration-200 hover:translate-y-[-10px]  ">
        <CardHeader>
            <CardTitle><CircleChevronLeft/></CardTitle>
            <CardDescription className="font-bold">2023/case Study</CardDescription>
        </CardHeader>
        <CardContent className="text-3xl font-bold">
        Overcome your fears, find your match
        </CardContent>
        <CardFooter>
        Find love in the face of fear — Phobia is a dating app that matches users based on their mutual phobias so they can be scared together.
        </CardFooter>
    </Card>
   
    </div>
  )
}

export default LandingCard
