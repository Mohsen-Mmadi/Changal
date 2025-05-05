import React, { useState } from "react";
import { useModalStore } from "../Store";

function LoginForm() {
  const { isOpen, type , closeModal } = useModalStore();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("فرمت ایمیل معتبر نیست.");
      return;
    }

    // API endpoint for login
    const endpoint = `${process.env.REACT_APP_API_URL}/login.php`;

    // Prepare the payload
    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "ورود با موفقیت انجام شد!");
        // Handle successful login (e.g., save user data or redirect)
        console.log("اطلاعات کاربر:", data.user);
        setTimeout(() => {
          closeModal();
        }, 2000);
      } else {
        setMessage(data.error || "خطایی رخ داده است.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("اتصال به سرور با مشکل مواجه شد.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-md rounded-lg p-6 relative">
        <button
          className="absolute top-2 right-2 text-xl text-gray-600"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">ورود به حساب کاربری</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ایمیل"
            className="border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="رمز عبور"
            className="border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded"
          >
            ورود
          </button>
        </form>
        {message && (
          <p className="text-center text-red-500 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}

export { LoginForm };