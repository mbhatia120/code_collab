// src/pages/Home/Home.js
import { Link,useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./home.scss";


import { motion } from "framer-motion";

import { ToastContainer, toast } from 'react-toastify';
const Home = () => {

  // const [joke, setjoke] = useState("Hello uncle");
  // async function dadJokesApi() {
  //   const data = await fetch("https://icanhazdadjoke.com/slack");
  //   const fetching = data.json();
  //   // const joke = fetching.then((data) => setjoke(data.attachments[0].text));
  //   // console.log(joke)
  //   // setjoke(joke);
  // }

  // useEffect(() => {
  //   dadJokesApi();
  // }, []);

  const location = useLocation();
  console.log(location)
  useEffect(() => {
    if (location.state?.message) {
      toast.error(location.state.message);
      location.state.message="";
    }
  }, [location.state]);

  //framer motion css
  const variants={
    initial:{
      y:-100,
      opacity:0
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
        delay:0.5,
      }
    },
    btn:{
      y:[-6,0,6,0,-6],
      opacity:0.8,
      transition:{
        duration:2,
        opacity:0.9,
        repeat:Infinity
      }
    },
  }

  const otherVariants={
    initial:{
      y:50,
      opacity:0.5
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const aboutVariants={
    initial:{
      y:50,
      opacity:0.5
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:1,

      }
    }
  }

  
const initialAnimation = () => {
  const particleContainer = document.querySelector(".particles");
  const starBackground = document.querySelector(".star-background");

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particleContainer.appendChild(particle);
  }

  for (let i = 0; i < 300; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    starBackground.appendChild(star);
  }
};

useEffect(() => {
  // initialAnimation();

}, []);

  return (
    <div className="homeanimationwrap">
        <div className="particles"></div>
        {/* <div className="star-background"></div> */}
      {/* home section */}
      <motion.div className="home" >
        <motion.div className="container">
          <motion.div className="textcont" variants={variants} initial="initial" animate="animate">
            <h1>Where Code Meets Collaboration.</h1>
            <h2 style={{ color: "red" }}>
              {/* {joke == "" ? <p>Loading...</p> : joke} */}
            </h2>
            <h2>
              Solve, Teach, and Interview: The Online Code Editor for Every
              Occasion...
            </h2>
            <motion.h3  variants={variants} animate="btn">
              <Link to={"/createRoom"} className="sharebtn" variants={variants} animate="btn" >Create New Room</Link>
            </motion.h3>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div className="footer">
        <motion.div className="container">
          <motion.div className="links">
            <a href="https://github.com/shubhamc1947" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/shubhamchat03/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://twitter.com/shubham_1947" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
          </motion.div>
          <h4>Created By Mohit Bhatia with ❤</h4>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
