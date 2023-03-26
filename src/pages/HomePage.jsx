import React, { useEffect, useState } from "react";
import Visualizer from "../components/visualizer";
import { FaQuoteLeft, FaQuoteRight, FaStudiovinari } from "react-icons/fa";
import axios from "../axios";
import { Link } from "react-router-dom";

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
                  src="/images/HeroImage.png"
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
               <div className="first__element">
                  <div className="rounded-3xl bg-gray-500 w-full p-6 hover:-rotate-1 shadow transition-all duration-500 hover:animate-wiggle group h-full">
                     <div className="flex gap-3 items-center pb-5 border-b">
                        <p className="w-14 h-14 bg-gray-900 font-[900] text-4xl flex justify-center items-center text-gray-400 rounded-lg uppercase">
                           B
                        </p>
                        <p className="capitalize font-[700] text-2xl text-gray-300  group-hover:underline transition-all duration-300">
                           Bubble Sort
                        </p>
                     </div>
                     <div className="pt-5">
                        <p className="text-white text-lg">
                           Bubble sort is a simple sorting algorithm. This
                           sorting algorithm is comparison-based algorithm in
                           which each pair of adjacent elements is compared and
                           the elements are swapped if they are not in order.
                           This algorithm is not suitable for large data sets as
                           its average and worst case complexity are of Ο(n2)
                           where n is the number of items.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="second__element">
                  <div className="rounded-3xl bg-gray-500 w-full p-6 hover:-rotate-1 shadow transition-all duration-500 hover:animate-wiggle group h-full">
                     <div className="flex gap-3 items-center pb-5 border-b">
                        <p className="w-14 h-14 bg-gray-900 font-[900] text-4xl flex justify-center items-center text-gray-400 rounded-lg uppercase">
                           S
                        </p>
                        <p className="capitalize font-[700] text-2xl text-gray-300 group-hover:underline duration-300 transition-all">
                           Selection Sort
                        </p>
                     </div>
                     <div className="pt-5">
                        <p className="text-white text-lg">
                           In the selection sort technique, the list is divided
                           into two parts. In one part all elements are sorted
                           and in another part the items are unsorted. At first,
                           we take the maximum or minimum data from the array.
                           After getting the data (say minimum) we place it at
                           the beginning of the list by replacing the data of
                           first place with the minimum data. After performing
                           the array is getting smaller. Thus this sorting
                           technique is done.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="third__element">
                  <div className="rounded-3xl bg-gray-500 w-full p-6 hover:-rotate-1 shadow transition-all duration-500 hover:animate-wiggle group h-full">
                     <div className="flex gap-3 items-center pb-5 border-b">
                        <p className="w-14 h-14 bg-gray-900 font-[900] text-4xl flex justify-center items-center text-gray-400 rounded-lg uppercase">
                           I
                        </p>
                        <p className="capitalize font-[700] text-2xl text-gray-300 group-hover:underline duration-300 transition-all">
                           Insertion Sort
                        </p>
                     </div>
                     <div className="pt-5">
                        <p className="text-white text-lg">
                           This sorting technique is similar with the card
                           sorting technique, in other words, we sort cards
                           using insertion sort mechanism. For this technique,
                           we pick up one element from the data set and shift
                           the data elements to make a place to insert back the
                           picked up an element into the data set.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="fourth__element">
                  <div className="rounded-3xl bg-gray-500 w-full p-6 hover:-rotate-1 shadow transition-all duration-500 hover:animate-wiggle group h-full">
                     <div className="flex gap-3 items-center pb-5 border-b">
                        <p className="w-14 h-14 bg-gray-900 font-[900] text-4xl flex justify-center items-center text-gray-400 rounded-lg uppercase">
                           M
                        </p>
                        <p className="capitalize font-[700] text-2xl text-gray-300 group-hover:underline duration-300 transition-all">
                           Merge Sort
                        </p>
                     </div>
                     <div className="pt-5">
                        <p className="text-white text-lg">
                           Merge sort is a sorting technique based on divide and
                           conquer technique. With worst-case time complexity
                           being Ο(n log n), it is one of the most respected
                           algorithms. Merge sort first divides the array into
                           equal halves and then combines them in a sorted
                           manner.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="fifth__element">
                  <div className="rounded-3xl bg-gray-500 w-full p-6 hover:-rotate-1 shadow transition-all duration-500 hover:animate-wiggle group h-full">
                     <div className="flex gap-3 items-center pb-5 border-b">
                        <p className="w-14 h-14 bg-gray-900 font-[900] text-4xl flex justify-center items-center text-gray-400 rounded-lg uppercase">
                           Q
                        </p>
                        <p className="capitalize font-[700] text-2xl text-gray-300 group-hover:underline duration-300 transition-all">
                           Quick Sort
                        </p>
                     </div>
                     <div className="pt-5">
                        <p className="text-white text-lg">
                           The quicksort technique is done by separating the
                           list into two parts. Initially, a pivot element is
                           chosen by partitioning algorithm. The left part of
                           the pivot holds the smaller values than the pivot,
                           and right part holds the larger value. After
                           partitioning, each separate lists are partitioned
                           using the same procedure.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="sixth__element">
                  <div className="rounded-3xl bg-gray-500 w-full p-6 hover:-rotate-1 shadow transition-all duration-500 hover:animate-wiggle group h-full">
                     <div className="flex gap-3 items-center pb-5 border-b">
                        <p className="w-14 h-14 bg-gray-900 font-[900] text-4xl flex justify-center items-center text-gray-400 rounded-lg uppercase">
                           H
                        </p>
                        <p className="capitalize font-[700] text-2xl text-gray-300 group-hover:underline duration-300 transition-all">
                           Heap Sort
                        </p>
                     </div>
                     <div className="pt-5">
                        <p className="text-white text-lg">
                           Heap sort is performed on the heap data structure. We
                           know that heap is a complete binary tree. Heap tree
                           can be of two types. Min-heap or max heap. For min
                           heap the root element is minimum and for max heap the
                           root is maximum. After forming a heap, we can delete
                           an element from the root and send the last element to
                           the root. After these swapping procedure, we need to
                           re-heap the whole array. By deleting elements from
                           root we can sort the whole array.
                        </p>
                     </div>
                  </div>
               </div>
               {data?.map((item) => (
                  <Link to="/sort/:id" key={item?._id} className="sixth__element">
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
