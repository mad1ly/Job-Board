import React from "react";
import Map from "../components/map";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <span className="h-40 w-full bg-black p-10 font-semibold text-white text-4xl">
          Home
        </span>
        <div className="w-full p-40">
          <Map />
        </div>
      </div>
    </>
  );
}
