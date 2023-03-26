import React, { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsSortDownAlt } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
   BaseAlgorithm,
   OptimisedAlgorithm,
   Sort,
   Working,
} from "../../components/EditSort";

function EditSortPage() {
   const navigate = useNavigate();
   const [section, setSection] = useState(1);

   const [searchParams] = useSearchParams();

   useEffect(() => {
      if (searchParams.get("section")) {
         setSection(Number(searchParams.get("section")));
      }
   }, []);
   return (
      <div className="min-h-screen bg-gray-500">
         <div className="max-w-screen-xl mx-auto">
            <div className="flex gap-7 items-center pt-10 ">
               <div
                  className="flex items-center w-12 h-12 bg-gray-800 rounded-full text-gray-200 justify-center text-2xl"
                  onClick={() => navigate(-1)}
               >
                  <AiOutlineLeft />
               </div>
               <div className="flex items-center gap-3">
                  <p className="text-5xl text-gray-300 hover:underline">
                     <BsSortDownAlt />
                  </p>
                  <h2 className="text-3xl text-gray-300 hover:underline uppercase font-[800]">
                     Edit Sort
                  </h2>
               </div>
            </div>
            <div className=" w-full grid grid-cols-4 gap-0 place-items-center rounded-lg overflow-hidden mt-4">
               <div
                  className={` ${
                     section === 1
                        ? " border-b text-blue-500 "
                        : " text-gray-200 "
                  }  w-full text-center bg-gray-700 hover:bg-gray-700/80 py-3  border-blue-500 cursor-pointer `}
                  onClick={() => {
                     setSection(1);
                     navigate("?section=1", { replace: true });
                  }}
               >
                  Sort
               </div>
               <div
                  className={` ${
                     section === 2
                        ? " border-b text-blue-500 "
                        : " text-gray-200 "
                  }  cursor-pointer w-full text-center bg-gray-700 hover:bg-gray-700/80 py-3 text-gray-200 border-blue-500`}
                  onClick={() => {
                     setSection(2);
                     navigate("?section=2", { replace: true });
                  }}
               >
                  Working
               </div>
               <div
                  className={` ${
                     section === 3
                        ? " border-b text-blue-500 "
                        : " text-gray-200 "
                  } cursor-pointer w-full text-center bg-gray-700 hover:bg-gray-700/80 py-3 text-gray-200 border-blue-500`}
                  onClick={() => {
                     setSection(3);
                     navigate("?section=3", { replace: true });
                  }}
               >
                  Algorithm
               </div>
               <div
                  className={` ${
                     section === 4
                        ? " border-b text-blue-500 "
                        : " text-gray-200 "
                  } cursor-pointer w-full text-center bg-gray-700 hover:bg-gray-700/80 py-3 text-gray-200 border-blue-500`}
                  onClick={() => {
                     setSection(4);
                     navigate("?section=4", { replace: true });
                  }}
               >
                  Optimised Algorithm
               </div>
            </div>
            {section === 1 && <Sort />}
            {section === 2 && <Working />}
            {section === 3 && <BaseAlgorithm />}
            {section === 4 && <OptimisedAlgorithm />}
         </div>
      </div>
   );
}

export default EditSortPage;
