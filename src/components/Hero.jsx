import React from "react";
import imageHeroDesktop from "../images/image-hero-desktop.png";
import clientAudiophile from "../images/client-audiophile.svg";
import clientDatabiz from "../images/client-databiz.svg";
import clientMaker from "../images/client-maker.svg";
import clientMeet from "../images/client-meet.svg";

const Hero = () => {
  return (
    <div className="flex gap-10 items-center justify-evenly my-6 max-sm:flex-col-reverse" >
      <div className="flex flex-col gap-10 items-start w-[30%] mt-[6rem]">
        <h1 className="font-bold text-6xl">Make<br/> remote work</h1>
        <p className="text-slate-500">
          Get your team in sync. no matter your location.<br/> Streamline processess,
          create team rituals,and <br /> watch productivity soar.
        </p>
        <button className="border-black border-2 rounded-lg p-3 font-bold w-fit mt-15">
          Learn more
        </button>
        <div className="flex flex-wrap items-center gap-8">
          <img src={clientDatabiz} alt="" />
          <img src={clientAudiophile} alt="" />
          <img src={clientMeet} alt="" />
          <img src={clientMaker} alt="" />
        </div>
      </div>
      <div className="w-[15rem] h-auto mt-6 lg:w-[25rem]">
        <img className="object-contain " src={imageHeroDesktop} alt="" />
      </div>
    </div>
  );
};

export default Hero;
