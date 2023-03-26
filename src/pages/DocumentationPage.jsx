import React from "react";

function DocumentationPage() {
   return (
      <div className="bg-gray-700 py-10">
         <div className="max-w-screen-lg mx-auto">
            <div className="text-center py-7">
               <h2 className="font-[800] text-5xl text-gray-300">
                  Bubble Sort Algorithm
               </h2>
            </div>
            <div className="pb-7">
               <p className="text-gray-200  text-lg">
                  Bubble sort is a simple sorting algorithm. This sorting
                  algorithm is comparison-based algorithm in which each pair of
                  adjacent elements is compared and the elements are swapped if
                  they are not in order. This algorithm is not suitable for
                  large data sets as its average and worst case complexity are
                  of Ο(n2) where n is the number of items.
               </p>
            </div>
            <div className="text-3xl font-[600] text-gray-300 text-center py-7 border-t border-gray-400">
               Working of Bubble Sort
            </div>
            <div className="space-y-2">
               <p className="text-gray-200 text-lg">
                  Suppose we are trying to sort the elements in ascending order.
               </p>
               <p className="text-gray-300">
                  1. First Iteration (Compare and Swap)
               </p>
               <ol className="list-decimal list-inside text-gray-300">
                  <li>
                     Starting from the first index, compare the first and the
                     second elements.
                  </li>
                  <li>
                     If the first element is greater than the second element,
                     they are swapped.
                  </li>
                  <li>
                     Now, compare the second and the third elements. Swap them
                     if they are not in order.
                  </li>
               </ol>
               <div className="w-1/3 h-full mt-5 bg-gray-900 rounded-2xl overflow-hidden">
                  <img
                     className="w-full h-full object-contain"
                     src="/images/sortimage.png"
                     alt="sort"
                  />
               </div>
               <div className="pt-5 ">
                  <h3 className="font-[700] text-2xl text-gray-200 pb-3">
                     Bubble Sort Algorithm
                  </h3>
                  <p className=" p-7 bg-gray-900 text-gray-300 rounded-xl">
                     bubbleSort(array) for i {"<-"} 1 to <br />
                     indexOfLastUnsortedElement-1 if leftElement {">"} <br />
                     rightElement swap leftElement and rightElement
                     <br /> end
                     <br />
                     bubbleSort
                  </p>
               </div>
               <div className="pt-5 ">
                  <h3 className="font-[700] text-2xl text-gray-200 pb-3">
                     Optimized Bubble Sort Algorithm
                  </h3>
                  <p className="text-gray-200 pb-3">
                     In the above algorithm, all the comparisons are made even
                     if the array is already sorted. This increases the
                     execution time. To solve this, we can introduce an extra
                     variable swapped. The value of swapped is set true if there
                     occurs swapping of elements. Otherwise, it is set false.
                     After an iteration, if there is no swapping, the value of
                     swapped will be false. This means elements are already
                     sorted and there is no need to perform further iterations.
                     This will reduce the execution time and helps to optimize
                     the bubble sort.
                  </p>
                  <p className=" p-7 bg-gray-900 text-gray-300 rounded-xl">
                     bubbleSort(array) for i {"<-"} 1 to <br />
                     indexOfLastUnsortedElement-1 if leftElement {">"} <br />
                     rightElement swap leftElement and rightElement
                     <br /> end
                     <br />
                     bubbleSort
                  </p>
               </div>
               <div className="pt-5 ">
                  <h3 className="font-[700] text-2xl text-gray-200 pb-3">
                     Bubble Sort Complexity
                  </h3>
                  <div className="w-full bg-gray-500 text-gray-300 rounded-2xl py-2 px-3 mb-7">
                     <p className="flex border-b py-2">
                        <span className="font-medium w-1/2 p-2 ">
                           Time Complexity
                        </span>
                        <span className="w-1/2 p-2 "></span>
                     </p>
                     <p className="flex border-b py-2">
                        <span className=" w-1/2 p-2 ">Best</span>
                        <span className="w-1/2 p-2 ">O(n)</span>
                     </p>
                     <p className="flex border-b py-2">
                        <span className=" w-1/2 p-2 ">Worst</span>
                        <span className="w-1/2 p-2 ">O(n2)</span>
                     </p>
                     <p className="flex border-b py-2">
                        <span className=" w-1/2 p-2 ">Average</span>
                        <span className="w-1/2 p-2 ">O(n2)</span>
                     </p>
                     <p className="flex border-b py-2">
                        <span className=" w-1/2 p-2 ">Space Complexity</span>
                        <span className="w-1/2 p-2 ">O(1)</span>
                     </p>
                     <p className="flex border-b py-2">
                        <span className=" w-1/2 p-2 ">Stability</span>
                        <span className="w-1/2 p-2 ">Yes</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DocumentationPage;
