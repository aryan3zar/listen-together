import React from "react";
import useChannel from "../context/ChannelContext";

const ChannelNav = ({ isSettingOpen, setIsSettingOpen }) => {
  const { channels, selectedChannel, setSelectedChannel } = useChannel();

  return (
    <nav className="flex items-center border-b border-neutral-700 py-4 px-7">
      <i
        onClick={() => setSelectedChannel("")}
        className="fa-solid fa-arrow-left text-xl mr-4 cursor-pointer"
      ></i>
      <h2 className="text-2xl">{channels[selectedChannel].name}</h2>
      <i
        onClick={() => setIsSettingOpen(!isSettingOpen)}
        className={`fa-solid fa-users-gear ml-auto text-xl cursor-pointer ${isSettingOpen ? "text-cta" : ""}`}
      ></i>
    </nav>
  );
};

export default ChannelNav;
