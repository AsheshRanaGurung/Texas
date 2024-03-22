import { Center } from "@chakra-ui/react";
import React, { useEffect } from "react";
import useTextAnimation from "../hooks/useTextAnimation";

const TextAnimation = () => {
  useEffect(() => {
    const element = document.querySelector(".text-animation");
if(element){

    useTextAnimation(element);
}
  }, []);
  return (
    <div className="wrapper">
      <Center marginTop={"48dvh"}>
        <h1
          className="text-animation"
        >
          I am a Full Stack Developer
        </h1>
      </Center>
    </div>
  );
};

export default TextAnimation;
