import React from "react";
import { useState } from "react";
import Heart from "react-heart";

function Card({ title, uls }) {
  const [active, setActive] = useState(false);
  return (
    <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 mb-4">
      <div>
        <img
          src={uls}
          alt="test"
          width="300"
          height="300"
          className="rounded-t-xl w-full"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
        <div className="flex justify-between">
          <h1 className="font-RubikBold ">{title || "write you name hear"}</h1>
          {/* <h2 className="font-RubikBold">h</h2> */}
          <Heart style={{ width: "2rem" }} isActive={active} onClick={() => setActive(!active)}/>
        </div>
      </div>
      
    </div>
  );
}

export default Card;
