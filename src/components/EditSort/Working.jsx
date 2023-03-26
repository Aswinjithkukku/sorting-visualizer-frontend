import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import RichTextEditor from "../RichTextEditor";
import { useImageChange } from "../../hooks";
import { AiFillDelete } from "react-icons/ai";
import PageLoader from "../PageLoader";

function Working() {
   const params = useParams();

   const [isBtnLoading, setIsBtnLoading] = useState(false);
   const [data, setData] = useState([]);

   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [subHeading, setSubHeading] = useState("");
   const [text, setText] = useState("");
   const [section, sestSection] = useState(0);

   const { image, handleImageChange, error: imageError } = useImageChange();

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         console.log(params.id);
         setError("");
         setIsLoading(true);
         const formData = new FormData();
         formData.append("subHeading", subHeading);
         formData.append("text", text);
         formData.append("section", section);
         formData.append("sort", params.id);
         formData.append("image", image);

         const response = await axios.post("/admin/addworking", formData);
         console.log(response);
         setData([response?.data?.newWorking, ...data]);
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

   const fetchData = async () => {
      try {
         setIsLoading(true);
         const response = await axios.get(`/admin/working/${params.id}`);
         setData(response?.data?.work);
         setIsLoading(false);
      } catch (err) {
         console.log(err?.response?.data?.error);
         setIsLoading(false);
      }
   };

   const deleteData = async (id) => {
      try {
         await axios.delete(`/admin/working/${id}/delete`);
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
                                 <th className="pb-2">Section</th>
                                 <th className="pb-2">Heading</th>
                                 <th className="pb-2">Action</th>
                              </tr>
                           </thead>
                           <tbody className="text-gray-300 ">
                              {data?.map((item, index) => (
                                 <tr key={item?._id} className="border-t">
                                    <td className="py-3">{item?.section}</td>
                                    <td className="py-3">{item?.subHeading}</td>
                                    <td className="py-3">
                                       <button
                                          className="text-xl text-red-500"
                                          onClick={() => deleteData(item?._id)}
                                       >
                                          <AiFillDelete />
                                       </button>
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
                     <h3 className="text-gray-300">Section</h3>
                     <div className="mt-2">
                        <input
                           type="number"
                           name="section"
                           value={section}
                           onChange={(e) => sestSection(e.target.value)}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>
                  <div className="">
                     <h3 className="text-gray-300">Heading</h3>
                     <div className="mt-2">
                        <input
                           type="text"
                           name="subHeading"
                           value={subHeading}
                           onChange={(e) => setSubHeading(e.target.value)}
                           className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        />
                     </div>
                  </div>

                  <div className=" mt-2">
                     <h3 className="font-medium text-gray-300">Text</h3>
                     <div className="mt-2">
                        <div className="border border-t-0">
                           <RichTextEditor
                              getValue={(value) => {
                                 setText(value);
                              }}
                              initialValue={text || ""}
                           />
                        </div>
                     </div>
                  </div>

                  <div className="">
                     <h3 className="text-gray-300">Image</h3>
                     <input
                        type="file"
                        className="w-full py-2 rounded outline-none  bg-gray-400 text-white px-2"
                        onChange={handleImageChange}
                        required
                     />
                     {imageError && (
                        <span className="block text-sm text-red-500 mt-2">
                           {imageError}
                        </span>
                     )}
                     {image && (
                        <div className="mt-4 w-[50px] h-[50px]">
                           <img
                              src={URL.createObjectURL(image)}
                              alt=""
                              className="w-[100%] h-[100%] object-cover"
                           />
                        </div>
                     )}
                  </div>
                  {error && (
                     <p className="text-center text-red-500 text-[12px]">
                        {error}
                     </p>
                  )}
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
      </>
   );
}

export default Working;
