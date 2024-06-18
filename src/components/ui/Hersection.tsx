// "use client";
// import Image from "next/image";
// import ali from "/public/ali.jpg"
// import { Badge } from "@/components/ui/badge"
// import { ShoppingBagIcon } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link";
// export function Herosection() {
//     return (
     
//       <main className="top-4 ">
         
//              <Image
//         src={ali}
//         alt="boys"
//         width={450}
//         height={400}
//       className="boys justify-center m- p-1 bg-white"
//       />
      
//         <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200 m-6 mt-9" variant="outline">Sale 50% Off</Badge>
//         <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-9 space-y-4 m-6 ">
//         Make Your Outfit Cool
//       </h1>
//       <p className="leading-7 [&:not(:first-child)]:mt-9 m-6">
//        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo magnam  voluptates possimus <br /> similique. Perspiciatis aspernatur laudantium inventore <br /> est rerum dolores labore natus, sed odio similique? Odit similique consectetur quas.
//       </p>
//       <Button className="mt-9 px-8 m-4">
//       <ShoppingBagIcon className="mr-2 h-4 w-4 " /> Start Shopping
//     </Button>
//     <center>
//     {/* right Div */}
// <br /><br /><br /><br /><br />
// <center>
//     <div className="flex flex-col items-center justify-between gap-8 md:flex-row m-8">
//         <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border bg-blue-100">
//           <Link
//             href="/Man"
//             className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
//           >
//             Men
//           </Link>
//           <Link
//             href="/Kids"
//             className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
//           >
//            Kids
//           </Link>
//           <Link
//             href="/Shoes"
//             className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
//           >
//             Shoes
//           </Link>
//         </div>
//       </div>
//       </center>
//       </center>
//     <div>

//     </div>
//       </main>
    
   
       
//     )
//   }
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import Link from "next/link";
import ali from "/public/ali.jpg"
import { Button } from "./button";
import {ShoppingBagIcon} from "lucide-react"
import { Badge } from "@/components/ui/badge"
async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <main className="top-4  ">

        <Image
        src={ali}
        alt="boys"
        width={450}
        height={400}
      className="boys justify-center m- p-1 bg-white"
    />
  
    <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200 m-6 mt-9" variant="outline">Sale 50% Off</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-9 space-y-4 m-6 ">
      Make Your Outfit Cool
      </h1>
       <p className="leading-7 [&:not(:first-child)]:mt-9 m-6">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quo magnam  voluptates possimus <br /> similique. Perspiciatis aspernatur laudantium inventore <br /> est rerum dolores labore natus, sed odio similique? Odit similique consectetur quas.
       </p>
     <Button className="mt-9 px-8 m-4">
       <ShoppingBagIcon className="mr-2 h-4 w-4 " /> Start Shopping
     </Button>
          <br /><br /><br /><br />
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Man"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="Kids"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          
          >
            Kids
          </Link>
          <Link
            href="/Shoes"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
             Shoes
          </Link>
        </div>
      </div>
    </main>
  );
}