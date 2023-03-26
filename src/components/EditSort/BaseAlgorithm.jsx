import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import RichTextEditor from "../RichTextEditor";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import BtnLoader from "../BtnLoader";
import PageLoader from "../PageLoader";

function BaseAlgorithm() {
   const params = useParams();

   const [error, setError] = useState("");
   const [isBtnLoading, setIsBtnLoading] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [data, setData] = useState([]);
   const [language, setLanguage] = useState("");
   const [code, setCode] = useState("");

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setError("");
         setIsBtnLoading(true);
         const response = await axios.post("/admin/addlanguage", {
            sort: params.id,
            language,
            code,
         });
         console.log(response);
         setData([response?.data, ...data]);
         console.log(data);
         setIsBtnLoading(false);
         Swal.fire({
            title: "Success!",
            text: "The base language added successfully",
            icon: "success",
            confirmButtonText: "Cool",
         });
      } catch (err) {
         setError(err?.response?.data?.error);
         setIsBtnLoading(false);
         Swal.fire({
            title: "Error!",
            text: "The base language didnt added as expected",
            icon: "error",
            confirmButtonText: "Cool",
         });
      }
   };

   const fetchData = async () => {
      try {
         setIsLoading(true);
         const response = await axios.get(`/admin/basecode/${params.id}`);
         setData(response?.data?.codeData);
         setIsLoading(false);
      } catch (err) {
         console.log(err?.response?.data?.error);
         setIsLoading(false);
      }
   };

   const deleteData = async (id) => {
      try {
         await axios.delete(`/admin/basecode/${id}/delete`);
         let filteredData = data.filter((item) => {
            return item?._id !== id;
         });
         console.log(filteredData);
         setData(filteredData);
      } catch (err) {
         console.log(err?.response?.data?.error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <>
         <div className="max-w-screen-md pt-5">
            <div className="bg-gray-700 p-5 rounded-xl">
               {isLoading ? (
                  <div className="flex justify-center py-14">
                     <PageLoader />
                  </div>
               ) : (
                  <>
                     {data?.length < 1 ? (
                        <div className="flex items-center justify-center">
                           <p className="text-gray-200 uppercase">
                              ...No Data Found...
                           </p>
                        </div>
                     ) : (
                        <table className="w-full">
                           <thead className="p-5 text-left text-white">
                              <tr className="">
                                 <th className="pb-2">#</th>
                                 <th className="pb-2">code</th>
                                 <th className="pb-2">actions</th>
                              </tr>
                           </thead>
                           <tbody className="text-gray-300 ">
                              {data?.map((item, index) => (
                                 <tr key={item?._id} className="border-t">
                                    <td className="py-3">{index + 1}</td>
                                    <td className="py-3">{item?.language}</td>
                                    <td className="py-3">
                                       <div className="flex gap-2 items-center">
                                          <button
                                             className="text-xl text-red-500"
                                             onClick={() =>
                                                deleteData(item?._id)
                                             }
                                          >
                                             <AiFillDelete />
                                          </button>
                                       </div>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     )}
                  </>
               )}
            </div>
         </div>

         <div className="pt-10 bg-gray-500">
            <div className="max-w-screen-xl mx-auto">
               <form onSubmit={handleSubmit} className="">
                  <div className="">
                     <h3 className="text-gray-300">Language</h3>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="language"
                           value={language}
                           onChange={(e) => setLanguage(e.target.value)}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>

                  <div className=" mt-2">
                     <h3 className="font-medium text-gray-300">Code</h3>
                     <div className="mt-2">
                        <div className="border border-t-0">
                           <RichTextEditor
                              getValue={(value) => {
                                 setCode(value);
                              }}
                              initialValue={code || ""}
                           />
                        </div>
                     </div>
                  </div>
                  {error && (
                     <p className="text-center text-[12px] text-red-500">
                        {error}
                     </p>
                  )}
                  <div className="flex justify-center py-3">
                     <button
                        type="submit"
                        className="px-6 py-3 hover:bg-gray-700 hover:text-gray-400 bg-gray-800 rounded shadow text-gray-300"
                     >
                        {isBtnLoading ? <BtnLoader /> : "Create"}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </>
   );
}

export default BaseAlgorithm;
