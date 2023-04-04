import React, { useEffect, useState } from "react";
import Visualizer from "../components/visualizer";
import { FaQuoteLeft, FaQuoteRight, FaStudiovinari } from "react-icons/fa";
import axios from "../axios";
import { Link } from "react-router-dom";
import HeroImage from '../images/HeroImage.png';

function HomePage() {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");
   const [data, setData] = useState([]);

   const fetchData = async () => {
      try {
         setIsLoading(true);
         const response = await axios.get("/getsort");
         setData(response?.data?.sortData);
         setIsLoading(false);
      } catch (err) {
         console.log(err);
         setError(err?.response?.data?.error);
         setIsLoading(false);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="bg-gray-700">
         <div className="md:grid grid-cols-2 gap-5 py-7">
            <div className="first__section h-[60vh] w-full">
               <img
                  className="object-contain w-full h-full"
                  src={HeroImage}
                  alt="Hero"
               />
            </div>
            <div className="second__section flex items-center">
               <div className="space-y-5">
                  <h2 className="capitalize font-[500] text-[17px] text-gray-300 tracking-wide">
                     We introducing the best sorting visualizer
                  </h2>
                  <h1 className="capitalize font-[800] text-[55px] text-gray-100 tracking-wide leading-[3rem]  ">
                     Sortmate Visualizer
                  </h1>
                  <p className="text-[15px] text-gray-400 md:w-[30vw]">
                     A Sorting Algorithm is used to rearrange a given array or
                     list of elements according to a comparison operator on the
                     elements. The comparison operator is used to decide the new
                     order of elements in the respective data structure.
                  </p>
               </div>
            </div>
         </div>
         <div className=" bg-gray-800">
            <div className="max-w-screen-2xl mx-auto p-12 flex items-center gap-10 flex-wrap">
               <p className="text-gray-300 text-[100px]">
                  <FaStudiovinari />
               </p>
               <div>
                  <p className="text-gray-400">
                     This Website is made in the vision for the development in
                     the kknowledge of Coding in different languages
                  </p>
                  <p className="text-3xl font-[800] text-gray-100">
                     Let's Roll Here..!
                  </p>
               </div>
            </div>
         </div>
         <div className="bg-gray-700">
            <div className="max-w-screen-2xl mx-auto py-10">
               <p className=" font-[900] flex justify-center gap-2 text-gray-200">
                  <span className="">
                     <FaQuoteLeft />
                  </span>
                  <span className="uppercase text-3xl">Visualizer</span>
                  <span className="">
                     <FaQuoteRight />
                  </span>
               </p>
            </div>
         </div>
         <div className="">
            <Visualizer />
         </div>
         <h1 className="text-center text-4xl font-[800] text-white pt-10 hover:underline">
            Documentation
         </h1>
         <p className="text-gray-300 text-xs text-center ">
            You can see the details. Tap on sort card you want.!
         </p>
         <div className="flex justify-center items-center max-w-screen-xl mx-auto py-10">
            <div className="grid grid-cols-2 gap-20 w-full">

               {data?.map((item) => (
                  <Link to={`/sort/${item?._id}`} key={item?._id} className="sixth__element">
                     <div className="rounded-3xl bg-gray-500 w-full p-6 hover:-rotate-1 shadow transition-all duration-500 hover:animate-wiggle group h-full">
                        <div className="flex gap-3 items-center pb-5 border-b">
                           <p className="w-14 h-14 bg-gray-900 font-[900] text-4xl flex justify-center items-center text-gray-400 rounded-lg uppercase">
                              {item?.title?.charAt(0)}
                           </p>
                           <p className="capitalize font-[700] text-2xl text-gray-300 group-hover:underline duration-300 transition-all">
                           {item?.title}
                           </p>
                        </div>
                        <div className="pt-5">
                           <p
                              dangerouslySetInnerHTML={{
                                 __html: item?.description,
                              }}
                              className="text-white text-lg"
                           ></p>
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}

export default HomePage;
