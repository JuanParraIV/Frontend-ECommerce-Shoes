import React from "react";
import { useNavigate } from "react-router-dom";
import { AboutUsContainer, AboutUsList, MainProfileCard } from "./style";
import ProfileCard from "../ProfileCard/ProfileCard";


const AboutUS = () => {
  const navigate = useNavigate();
  const developers = [

    {
      img: "https://avatars.githubusercontent.com/u/10248108?v=4",
      name: "Juan M. Parra",
      nacionalidad: "Colombia",
      git: "https://github.com/JuanParraIV",
      linkedin: "https://www.linkedin.com/in/juanparraiv/",
      ocupation: "Full Stack Developer",
    },
    {
      img: "https://avatars.githubusercontent.com/u/99699184?v=4",
      name: "Daniela Gomez",
      nacionalidad: "Colombia",
      git: "https://github.com/DaniGomezSanta",
      linkedin: "https://www.linkedin.com/in/daniela-gomez-aaa839239/",
      ocupation: "Full Stack Developer",
    },
  ];

  return (
    <>
      <AboutUsContainer>
        <div className="text-4xl p-14">
          <div>
            <h1>What is Sneaker Ecommerce?</h1>
            <p className="mt-5">
              We are an e-commerce specialized in the sale and distribution of
              sneakers. Our main objective is to offer a variety of
              quality products to our potential buyers, which can be purchased
              safely and thus, satisfy the needs of the market in question.
            </p>
          </div>
        </div>
        <AboutUsList>
          <li>#</li>
          <li>T</li>
          <li>E</li>
          <li>A</li>
          <li>M</li>
          <li>S</li>
          <li>N</li>
          <li>E</li>
          <li>A</li>
          <li>K</li>
          <li>E</li>
          <li>R</li>
          <li>S</li>
        </AboutUsList>

        <MainProfileCard>
          <ProfileCard developer={developers} />
        </MainProfileCard>
      </AboutUsContainer>
    </>
  )
}

export default AboutUS
