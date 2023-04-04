import React, { useRef, useState } from "react";
import { GiSupersonicArrow } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useHandleClickOutside } from "../../hooks";
import { logoutUser } from "../../redux/slices/userSlice";

function Navbar() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [viewProfile, setViewProfile] = useState(false);
   const profileRef = useRef();
   useHandleClickOutside(profileRef, () => setViewProfile(false));
   const { user } = useSelector((state) => state.users);
   return (
      <div className="bg-gray-700 text-gray-300  ">
         <nav className="max-w-screen-2xl flex justify-between items-center h-24 mx-auto">
            <div className="flex gap-2 items-center">
               <p className="text-2xl ">
                  <GiSupersonicArrow />
               </p>
               <Link to={"/"}>
                  <p className="uppercase font-[800] text-2xl">SortMate</p>
               </Link>
            </div>

            <div ref={profileRef} className="relative">
               <div className="h-9 w-9" onClick={() => setViewProfile(true)}>
                  <img
                     src={`https://avatars.dicebear.com/api/avataaars/abcde.svg`}
                     alt="pro"
                     className="w-full h-full object-contain"
                  />
               </div>
               {viewProfile && (
                  <div className="absolute w-[10rem] bg-gray-500 right-0 block  text-center py-3 rounded-lg">
                     <p
                        className="text-gray-200 uppercase text-sm font-[600] tracking-wide cursor-pointer"
                        onClick={() => {
                           dispatch(logoutUser());
                           setViewProfile(false);
                        }}
                     >
                        Logout
                     </p>
                     <br />
                     {user?.role === "admin" && (
                        <p
                           className="text-gray-200 uppercase text-sm font-[600] tracking-wide cursor-pointer"
                           onClick={() => {
                              navigate("/dashboard");
                              setViewProfile(false);
                           }}
                        >
                           Dashboard
                        </p>
                     )}
                  </div>
               )}
            </div>
         </nav>
      </div>
   );
}

export default Navbar;
