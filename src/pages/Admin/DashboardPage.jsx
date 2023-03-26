import React from "react";
import { FaUserEdit, FaUserFriends, FaUserShield } from "react-icons/fa";
import { BsArrowsFullscreen, BsArrowsMove } from "react-icons/bs";
import { Link } from "react-router-dom";

function DashboardPage() {
   return (
      <div className="bg-gray-500 min-h-[100vh]">
         <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 gap-10 pt-10">
               <div className="flex justify-between items-center bg-gray-700 shadow rounded-2xl p-5 text-gray-300">
                  <div className="space-y-2">
                     <h3 className="uppercase font-[700]">All Users</h3>
                     <p className="text-xl font-[700]">30</p>
                     <Link
                        to="/dashboard/users"
                        className="underline text-xs cursor-pointer"
                     >
                        View All Details
                     </Link>
                  </div>
                  <div className="h-14 w-14 flex justify-center items-center bg-gray-900 rounded-xl shadow">
                     <p className="text-3xl">
                        <FaUserFriends />
                     </p>
                  </div>
               </div>
               <div className="flex justify-between items-center bg-gray-700 shadow rounded-2xl p-5 text-gray-300">
                  <div className="space-y-2">
                     <h3 className="uppercase font-[700]">Edit Users</h3>
                     <p className="text-xl font-[700]">30</p>
                     <Link
                        to="/dashboard/users/edit"
                        className="underline text-xs cursor-pointer"
                     >
                        View All Details
                     </Link>
                  </div>
                  <div className="h-14 w-14 flex justify-center items-center bg-gray-900 rounded-xl shadow">
                     <p className="text-3xl">
                        <FaUserEdit />
                     </p>
                  </div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-10 pt-10">
               <div className="flex justify-between items-center bg-gray-700 shadow rounded-2xl p-5 text-gray-300">
                  <div className="space-y-2">
                     <h3 className="uppercase font-[700]">Sort System</h3>
                     <p className="text-xl font-[700]"> 6 Algorithms</p>
                     <Link
                        to="/dashboard/sort"
                        className="underline text-xs cursor-pointer"
                     >
                        View All Details & Edit All Details
                     </Link>
                  </div>
                  <div className="h-14 w-14 flex justify-center items-center bg-gray-900 rounded-xl shadow">
                     <p className="text-3xl">
                        <BsArrowsFullscreen />
                     </p>
                  </div>
               </div>
               <div className="flex justify-between items-center bg-gray-700 shadow rounded-2xl p-5 text-gray-300">
                  <div className="space-y-2">
                     <h3 className="uppercase font-[700]">Add Sort</h3>
                     <p className="text-xl font-[700]"> 6 Algorithms</p>
                     <Link
                        to="/dashboard/sort/add"
                        className="underline text-xs cursor-pointer"
                     >
                        Add All Details
                     </Link>
                  </div>
                  <div className="h-14 w-14 flex justify-center items-center bg-gray-900 rounded-xl shadow">
                     <p className="text-3xl">
                        <BsArrowsMove />
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DashboardPage;
