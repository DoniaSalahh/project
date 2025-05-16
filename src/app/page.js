"use client";
import Image from "next/image";
import { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import AcademyLogo from "../Assets/Outlook-4n2yii3h (1).gif";

const Login = () => {
  // Admin credentials
  const ADMIN_CREDENTIALS = {
    email: "Admin@vision.com",
    password: "admin123",
  };

  // Employee credentials
  const EMPLOYEE_CREDENTIALS = [
    { email: "employee1@vision.com", password: "emp123" },
    { email: "employee2@vision.com", password: "emp456" },
    { email: "employee3@vision.com", password: "emp789" },
  ];

  // State management
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // تحقق من بيانات الاعتماد
      let redirectUrl = null;

      // تحقق من بيانات المدير
      if (
        formData.email === ADMIN_CREDENTIALS.email &&
        formData.password === ADMIN_CREDENTIALS.password
      ) {
        redirectUrl = "/admin-dashboard";
      }
      // تحقق من بيانات الموظفين
      else {
        const employee = EMPLOYEE_CREDENTIALS.find(
          (emp) =>
            emp.email === formData.email && emp.password === formData.password
        );
        if (employee) {
          redirectUrl = "/employee-dashboard";
        } else {
          setErrors({
            email: "Invalid credentials",
            password: "Invalid credentials",
          });
          setIsSubmitting(false);
          return;
        }
      }

      // انتظر لمدة ثانيتين مع عرض Spinner
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // التوجيه إلى الصفحة المطلوبة
      window.location.href = redirectUrl;
    } else {
      setIsSubmitting(false);
    }
  };

  // Check if button should be disabled
  const isButtonDisabled =
    !formData.email || !formData.password || isSubmitting;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Logo Container */}

      <form
        className="bg-white p-6 shadow-2xl rounded-xl w-96 "
        onSubmit={handleSubmit}
      >
        <div className="mb-8 flex flex-col items-center">
          <Image
            width={250}
            height={180}
            src={AcademyLogo} // تأكد من وضع الصورة في مجلد public أو استخدم مسارًا صحيحًا
            alt="Site Logo"
            className=" object-contain mb-4" // يمكنك تعديل الأبعاد حسب الحاجة
          />
          <h1 className="text-4xl font-bold text-Royal-Green">Login</h1>
        </div>
        {/* باقي كود الفورم كما هو */}
        <div className="mb-4">
          <label
            className="block text-Royal-Green text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-Royal-Green text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className={`bg-Royal-Green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
            isButtonDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-Midnight-Green cursor-pointer"
          }`}
          disabled={isButtonDisabled}
        >
          {isSubmitting ? <SyncLoader color="#fff" size={8} /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
