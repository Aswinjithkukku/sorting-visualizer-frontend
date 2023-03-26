import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsSortDownAlt } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "../RichTextEditor";
import axios from "../../axios";
import Swal from "sweetalert2";

function Sort() {
   const navigate = useNavigate();

   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState({
      title: "",
      description: "",
      alogorithm: "",
      tcBest: "",
      tcWorst: "",
      tcAverage: "",
      spaceComplexity: "",
      stability: "",
   });

   const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setError("");
         setIsLoading(true);
         const response = await axios.post("/admin/creatsort", data);
         console.log(response);
         setIsLoading(false);
         Swal.fire({
            title: "Success!",
            text: "The sort added successfully",
            icon: "success",
            confirmButtonText: "Cool",
         });
      } catch (err) {
         setError(err?.response?.data?.error);
         setIsLoading(false);
         Swal.fire({
            title: "Error!",
            text: "The sort didnt added as expected",
            icon: "error",
            confirmButtonText: "Cool",
         });
      }
   };
   return (
      <div className="pt-10 bg-gray-500">
         <div className="max-w-screen-xl mx-auto">
            <form onSubmit={handleSubmit} className="">
               <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="">
                     <h3 className="text-gray-300">Title</h3>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="title"
                           value={data?.title}
                           onChange={handleChange}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>

                  <div className="">
                     <h3 className="text-gray-300">Time Complexity Best</h3>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="tcBest"
                           value={data?.tcBest}
                           onChange={handleChange}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>
                  <div className="">
                     <h3 className="text-gray-300">Time Complexity Worst</h3>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="tcWorst"
                           value={data?.tcWorst}
                           onChange={handleChange}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>
                  <div className="">
                     <h3 className="text-gray-300">Time Complexity Average</h3>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="tcAverage"
                           value={data?.tcAverage}
                           onChange={handleChange}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>
                  <div className="">
                     <h3 className="text-gray-300">Space Complexity</h3>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="spaceComplexity"
                           value={data?.spaceComplexity}
                           onChange={handleChange}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>
                  <div className="">
                     <h3 className="text-gray-300">Stabliity</h3>
                     <div className="mt-2">
                        <select
                           name="stability"
                           value={data?.stability}
                           onChange={handleChange}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        >
                           <option hidden>Choose</option>
                           <option value={"yes"}>Yes</option>
                           <option value={"no"}>No</option>
                        </select>
                     </div>
                  </div>
               </div>
               <div className="mt-2">
                  <h3 className="font-medium text-gray-300">Description</h3>
                  <div className="mt-2">
                     <div className="border border-t-0">
                        <RichTextEditor
                           getValue={(value) => {
                              setData({ ...data, description: value });
                           }}
                           initialValue={data?.description || ""}
                        />
                     </div>
                  </div>
               </div>
               <div className=" mt-2">
                  <h3 className="font-medium text-gray-300">Algorithm</h3>
                  <div className="mt-2">
                     <div className="border border-t-0">
                        <RichTextEditor
                           getValue={(value) => {
                              setData({ ...data, alogorithm: value });
                           }}
                           initialValue={data?.alogorithm || ""}
                        />
                     </div>
                  </div>
               </div>
               <div className="flex justify-center py-3">
                  <button
                     type="submit"
                     className="px-6 py-3 hover:bg-gray-700 hover:text-gray-400 bg-gray-800 rounded shadow text-gray-300"
                  >
                     Create
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default Sort;
