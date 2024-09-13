"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Page = () => {
  const [userDetail, setUserDetail] = useState({});
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user", {
        email: userDetail.email,
        password: userDetail.password,
      });
      console.log(response);

      alert("Burtgel amjilttai");
      router.push("/login");
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }

    // console.log(userDetail);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 p-20">
      <h1 className="text-2xl flex justify-start">Sign up Page</h1>
      <form
        className="flex flex-col gap-4 border border-cyan-400 p-5 bg-slate-400"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border"
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
