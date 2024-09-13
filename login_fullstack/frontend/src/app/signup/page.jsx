"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [userDetail, setUserDetail] = useState({});
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/login");
    console.log(userDetail);
  };

  return (
    <div className="flex justify-center py-10">
      <form onSubmit={handleSubmit}>
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
