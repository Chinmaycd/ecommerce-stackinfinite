"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Triangle } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import API_BASE_URL from "@/Apiconfig";
// Interface for form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Component definition
export default function Signup() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  // State for password visibility toggle
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  // Function to toggle password visibility
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  // Validation function for form fields
  const validate = (values: FormData) => {
    const errors: Partial<FormData> = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 50 || values.name.length < 3) {
      errors.name = "Must be 3 to 50 characters";
    }

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
      name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values: FormData) => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.post(
          `${API_BASE_URL}/auth/sign-up`,
          values
        );
        // console.log("Signup success", response.data);
        toast.success("Signup successful!", {
          position: "top-right",
        });
        router.push("/");
      } catch (error) {
        console.error("Signup error:", error);
        toast.error("Signup failed. Please try again.", {
          position: "top-right",
        });
      } finally {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    },
  });
  return (
    <div className="h-[100vh] flex justify-center items-center bg-blue-950">
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
      <div className="p-10 backdrop-blur-sm bg-white/30 rounded-2xl">
        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <h1 className="font-sans font-bold text-3xl text-white">Signup</h1>
          <input
            className="p-3 md:w-[350px] sm:w-[200px] rounded"
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600">{formik.errors.name}</div>
          ) : null}{" "}
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
            Signup
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
