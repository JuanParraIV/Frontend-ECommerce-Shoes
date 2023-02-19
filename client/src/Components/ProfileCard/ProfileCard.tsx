import React from "react";
import {
  Caption,
  ImageProfileCard,
  ImageProfileCardContainer,
  ProfileCardContainer,
  SocialLinks,
} from "./style";
import { BsLinkedin, BsGithub } from "react-icons/bs";

interface DeveloperProps {
  img: string,
  name: string,
  nacionalidad: string,
  git: string,
  linkedin: string,
  ocupation: string
}
interface ProfileCardProps {
  developer: DeveloperProps[];
}

const ProfileCard = ({ developer }: ProfileCardProps) => {
  return (
    <>
      {developer &&
        developer?.map((dev, index) => (
          <ProfileCardContainer key={index}>
            <ImageProfileCardContainer>
              <ImageProfileCard src={dev.img} />
            </ImageProfileCardContainer>
            <Caption>
              <h3>{dev.name}</h3>
              <p>{dev.ocupation}</p>
              <SocialLinks>
                <a href={dev.linkedin} target="_blank" rel="noreferrer">
                  <BsLinkedin />
                </a>
                <a href={dev.git} target="_blank" rel="noreferrer">
                  <BsGithub />
                </a>
              </SocialLinks>
            </Caption>
          </ProfileCardContainer>
        ))}
    </>
  );
};

export default ProfileCard;
