import React, { useEffect, useState } from "react";
import { GiSupersonicArrow } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import { setUser } from "../redux/slices/userSlice";
import BtnLoader from "../components/BtnLoader";

function LoginPage() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async (e) => {
      try {
         e.preventDefault();
         setError("");
         setIsLoading(true);
         const response = await axios.post("/users/login", {
            email,
            password,
         });

         dispatch(setUser(response.data));
         setIsLoading(false);
         navigate("/");
      } catch (err) {
         if (err?.response?.data?.error === "Invalid credentials") {
            setError("You have given incorrect email or password");
         } else {
            err?.response?.data?.status === 500
               ? setError("Something went wrong!!!")
               : setError(err?.response?.data?.error);
         }
         setIsLoading(false);
      }
   };

   const { isLoggedIn } = useSelector((state) => state.users);

   useEffect(() => {
      if (isLoggedIn) {
         navigate("/");
      }
   }, [isLoggedIn, navigate]);
   
   return (
      <section className="relative bg-gray-600 h-screen pt-24 lg:py-44">
         <img
            className="hidden lg:block absolute top-0 left-0 h-full w-1/2"
            src="https://shuffle.dev/trizzle-assets/images/placeholder-laptop-dark-light.png"
            alt=""
         />
         <div className=" px-4 mx-auto">
            <div className="lg:w-1/2 ml-auto">
               <div className="relative max-w-xs lg:max-w-md mx-auto text-center">
                  <div className="flex justify-center items-center mb-4">
                     <p className="h-16 w-16 bg-blue-500 rounded-lg text-gray-200 text-3xl flex justify-center items-center">
                        <GiSupersonicArrow />
                     </p>
                  </div>
                  <h2 className="text-2xl text-gray-100 font-semibold mb-2">
                     Log in to your account
                  </h2>
                  <p className="text-gray-300 font-medium mb-10">
                     Welcome back! Please enter your details.
                  </p>
                  <form onSubmit={handleSubmit}>
                     <div className="relative w-full h-14  px-3 mb-8 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-600">
                           Email
                        </span>
                        <input
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-100 font-medium"
                           id="signInInput3-1"
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div className="relative w-full h-14  px-3 mb-6 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                        <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-600">
                           Password
                        </span>
                        <input
                           className="block w-full h-full outline-none bg-transparent text-sm text-gray-100 font-medium"
                           id="signInInput3-2"
                           type="password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                     </div>
                     {error && <p className="text-xs text-red-500">{error}</p>}
                     <button className="block w-full py-4 mb-4 leading-6 text-white font-semibold bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200">
                        {isLoading ? <BtnLoader /> : "Sign In"}
                     </button>
                     <p className="font-medium">
                        <span className="text-gray-300">
                           Don’t have an account?
                        </span>
                        <Link to="/register" className="inline-block text-blue-500 hover:underline">
                           Sign up
                        </Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
         <img
            className="lg:hidden mt-24"
            src="trizzle-assets/images/placeholder-laptop-dark-light.png"
            alt=""
         />
      </section>
   );
}

export default LoginPage;
