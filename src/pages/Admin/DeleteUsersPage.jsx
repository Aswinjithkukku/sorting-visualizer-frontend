import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { AiFillDelete, AiOutlineLeft } from "react-icons/ai";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import PageLoader from "../../components/PageLoader";

function DeleteUsersPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/users/admin/all");
      setData(response?.data);
      setLoading(false);
    } catch (err) {
      console.log(err?.response?.data?.error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`/users/admin/${id}/delete`);

      const filteredData = data?.filter((item) => {
        return id !== item?._id;
      });
      setData(filteredData);
    } catch (err) {
      console.log(err?.response?.data?.error);
    }
  };

  useEffect(() => {
    fetchData();
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
              <FaUsers />
            </p>
            <h2 className="text-3xl text-gray-300 hover:underline uppercase font-[800]">
              All Users
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
                    <th className="pb-2">#</th>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Email</th>
                    <th className="pb-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300 ">
                  {data?.map((item, index) => (
                    <tr className="border-t" key={item?._id}>
                      <td className="py-3">{index + 1}</td>
                      <td className="py-3">{item?.name}</td>
                      <td className="py-3">{item?.email}</td>
                      <td className="py-3 text-red-400 text-xl">
                        <p onClick={() => deleteUser(item?._id)} className="">
                          <AiFillDelete />
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

export default DeleteUsersPage;
