"use client";

import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function Home() {
  let ref = useRef<ReactPlayer>(null);
  let [playing, setPlaying] = useState(true);

  const handleClick = () => {
    ref!.current!.seekTo(999999999999999*999999999999999);
    setPlaying(true);
  }

  return (
    <>
      Playing {String(playing)}

      <h2>Live Video</h2>
      <ReactPlayer ref={ref} url='https://www.facebook.com/bk0st4/videos/421003364074767/?__cft__[0]=AZVqnSv9qZKpWr6gZQQlJq3jODH0maU94LPRG58YzbkhI6ofercwCHyki2-XBccdKDspPzI6gXgcxkHk6AmkGeu9jOqJGPXuegHdis5u97oP1p9UVuu-tYMN6YuSHnTO6nIidUke7EnF8OEvbWON2AXanF1TnyFYPm6F_0L6RuSkbw'  muted playing={playing} />

      <button onClick={handleClick}>Refresh</button>
      <button onClick={() => setPlaying(true)}>Play</button>
      <button onClick={() => setPlaying(false)}>Pause</button>
    </>
  );
}
