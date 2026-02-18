import React from "react";
import RightCard from "./RightCard";
const RightContent = (props) => {
  return (
    <div className="h-full w-2/3 rounded-4xl flex flex-nowrap gap-10 overflow-x-auto  p-7">
      {props.users.map(function (elem) {
        return <RightCard img={elem.img}  intro={elem.intro} tag={elem.tag} />;
      })}
    </div>
  )
}

export default RightContent;
