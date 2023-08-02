import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = async () => {
    let data = await fetch("http://localhost:5000/signup", {
      method: "post",
      body: JSON.stringify({ username, email, phone, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    data = await data.json();
    console.log(data);
    if (data.token) {
      localStorage.setItem("user", JSON.stringify(data.result));
      localStorage.setItem("token", JSON.stringify(data.token));
      console.log(data);
    }
    setUsername("")
    setEmail("")
    setPassword("")
    setPhone("")
  };

  return (
    // <div>
    //   <h1>Sign Up</h1>
    //   <label>Username : </label>
    //   <input
    //     type="text"
    //     placeholder="Enter Username"
    //     value={username}
    //     onChange={(e) => {
    //       setUsername(e.target.value);
    //     }}
    //   />
    //   <div></div>
    //   <label className="  text-red-500">Email : </label>
    //   <input
    //     type="text"
    //     placeholder="Enter email"
    //     value={email}
    //     onChange={(e) => {
    //       setEmail(e.target.value);
    //     }}
    //   />
    //   <div></div>
    //   <label>Phone No. : </label>
    //   <input
    //     type="Number"
    //     placeholder="Enter phone no."
    //     value={phone}
    //     onChange={(e) => {
    //       setPhone(e.target.value);
    //     }}
    //   />
    //   <div></div>
    //   <label>Password : </label>
    //   <input
    //     type="password"
    //     placeholder="Enter Password"
    //     value={password}
    //     onChange={(e) => {
    //       setPassword(e.target.value);
    //     }}
    //   />
    //   <div></div>
    //   <button onClick={clickHandler}>Sign Up</button>
    //   <p>Already register ? <Link to={"/login"} >Login here</Link></p>
    // </div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
      <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
    </div> */}
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:mx-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 text-center">Sign Up</h2>
          <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">Username</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }} />
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }} />
          </div>
          <div className="relative mb-4">
            <label for="phone" className="leading-7 text-sm text-gray-600">Phone No.</label>
            <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }} />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }} />
          </div>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={clickHandler}>Sign Up</button>
          <p className="mt-3 inline-flex items-center">Already register ? <Link className="text-indigo-500  px-3" to={"/login"} >Login here</Link></p>
          {/* <a href={"login"} >Learn More</a> */}
        </div>
      </div>
    </section>
  );
};

export default SignUp;