import React from 'react';
import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to Zeecare Medical Institute || Your Trusted Healthcare Provider"} imageUrl={"/hero2.png"} />
      <Biography imageUrl={"/about.png"}/>
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
