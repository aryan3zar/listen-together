import React, { useEffect, useState } from "react";
import useChannel from "../context/ChannelContext";
import useMediaQuery from "../hooks/useMediaQuery";
import Chat from "./Chat";
import ChannelSettings from "./ChannelSettings";
import MusicPanel from "./MusicPanel";
import Spinner from "./Spinner";

const Channel = () => {
  const { selectedChannel, listenChannel, channels } = useChannel();
  const [rightSideBar, setRightSideBar] = useState("");
  const isMobile = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    if (selectedChannel) {
      listenChannel(selectedChannel);
    }
  }, [selectedChannel]);

  if (!channels[selectedChannel]) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Spinner />
      </div>
    );
  }
  const renderMobile = () => {
    return (
      <>
        <MusicPanel {...{ rightSideBar, setRightSideBar }} />
        {rightSideBar === "setting" ? (
          <ChannelSettings {...{ setRightSideBar }} />
        ) : rightSideBar === "" ? (
          <Chat {...{ rightSideBar, setRightSideBar }} />
        ) : null}
      </>
    );
  };

  return (
    <section className="h-full flex w-full">
      {isMobile ? (
        renderMobile()
      ) : (
        <>
          <Chat {...{ rightSideBar, setRightSideBar }} />
          <MusicPanel {...{ rightSideBar, setRightSideBar }} />
          {rightSideBar === "setting" && (
            <ChannelSettings {...{ setRightSideBar }} />
          )}
        </>
      )}
    </section>
  );
};

export default Channel;
