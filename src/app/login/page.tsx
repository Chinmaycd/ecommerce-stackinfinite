'use client'
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import Cookies from "universal-cookie";
import API_BASE_URL from "@/Apiconfig";
// Interface for form data
interface FormData {
  email: string;
  password: string;
}
export default function Login() {
  let cookies = new Cookies();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const[logindata,setLogindata]=useState({})
//eye show/hide
const [password, setPassword] = useState("");
const [type, setType] = useState('password');
const [icon, setIcon] = useState(eyeOff);
const handleToggle = () => {
  if (type==='password'){
     setIcon(eye);
     setType('text')
  } else {
     setIcon(eyeOff)
     setType('password')
  }
}
// useEffect(() => {
//   const verify = cookies.get('loggedin');
//   console.log(verify);
  
//  if(verify===true){
//     router.push('/home')
//   }
// }, []);
   // Validation function for form fields
   const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 16 || values.password.length < 8) {
      errors.password = "Must be 8 to 16 characters";
    }
    return errors;
  };

  // Formik configuration
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values: FormData) => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.post(
          `${API_BASE_URL}/auth/sign-in`,
          values
        );
        // console.log("login success", response.data);
        setLogindata(response.data)
       
        toast.success("login successful!", {
          position: "top-right",
        });
        router.push("/home");
        cookies.set("loggedin",true)
        setLogindata(response.data)
        cookies.set("userid",response.data._id)
        // console.log(cookies.get('loggedin'));
      } catch (error) {
        console.error("login error:", error);
        toast.error("login failed. Please try again.", {
          position: "top-right",
        });
      } finally {
        setLoading(false);
        setFormData({
          email: "",
          password: "",
        });
      }
    },
  });
 
  // console.log("userid",logindata);
  return (
    <div className="h-[100vh] flex justify-center items-center bg-blue-950  bg-[80%,100%] relative">
      {isLoading && (
        <div className="flex justify-center items-center bg-black opacity-80 w-full h-full absolute z-10">
          <Triangle
            visible={true}
            height="100"
            width="100"
            color="white"
            ariaLabel="vortex-loading"
          />
        </div>
      )}
          
      <div className="p-10 backdrop-blur-sm bg-white/30 rounded-2xl ">
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <h1 className="font-sans font-bold text-3xl text-white">User Login</h1>
          <input
            className="p-3 md:w-[350px] sm:w-[200px] rounded"
            placeholder="Enter Email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}
                 <div className="relative">
            <input
              className="p-3 md:w-[350px] sm:w-[200px] rounded"
              placeholder="Enter Password"
              type={type}
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={handleToggle}
            >
              <Icon icon={icon} size={20} className="text-gray-600" />
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
          <button
            className="bg-blue-950 p-3 text-white font-sans font-bold hover:bg-blue-600 duration-1000"
            type="submit"
          >
            Login
          </button>
          <p className="text-white text-center">Dont have an account? <span className=" cursor-pointer text-blue-950"
    onClick={()=> router.push("/signup")}
    >Signup</span></p>
          
        </form>
      </div>
      
      <ToastContainer />
    </div>
  );
}
