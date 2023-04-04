import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit, AiOutlineLeft } from "react-icons/ai";
import axios from "../../axios";
import { Link, useNavigate } from "react-router-dom";
import PageLoader from "../../components/PageLoader";
import { BsSortDownAlt } from "react-icons/bs";
import formatDate from "../../utils/formatDate";

function SortListPage() {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);

   const fetchData = async () => {
      try {
         setLoading(true);
         const response = await axios.get("/admin/getsort");
         setData(response?.data?.sortData);
         setLoading(false);
      } catch (err) {
         console.log(err?.response?.data?.error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   const deleteSort = async (id) => {
      try {
        const response = await axios.delete(`/admin/sort/${id}/delete`);
  
        const filteredData = data?.filter((item) => {
          return id !== item?._id;
        });
        setData(filteredData);
      } catch (err) {
        console.log(err?.response?.data?.error);
      }
    };
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
                     Sorts
                  </h2>
               </div>
            </div>
            {loading ? (
               <PageLoader />
            ) : (
               <div className="max-w-screen-md pt-5">
                  <div className="bg-gray-700 p-5 rounded-xl">
                     <table className="w-full">
                        <thead className="p-5 text-left text-white">
                           <tr className="">
                              <th className="p-3">#</th>
                              <th className="p-3">Sort</th>
                              <th className="p-3">UpdatedAt</th>
                              <th className="p-3">Actions</th>
                           </tr>
                        </thead>
                        <tbody className="text-gray-300 ">
                           {data?.map((item, index) => (
                              <tr className="border-t" key={item?.id}>
                                 <td className="p-3">{index + 1}</td>
                                 <td className="p-3">{item?.title}</td>
                                 <td className="p-3">
                                    {formatDate(item?.updatedAt)}
                                 </td>
                                 <td className="p-3">
                                    <p className="flex gap-3 items-center text-xl">
                                       <Link to={`/dashboard/sort/${item?._id}/edit`} className="text-green-400">
                                          <AiFillEdit />
                                       </Link>
                                       <span
                                       onClick={() => deleteSort(item?._id)}
                                       className="text-red-400">
                                          <AiFillDelete />
                                       </span>
                                    </p>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}

export default SortListPage;
