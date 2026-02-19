import React from "react";
import RightCard from "./RightCard";
const RightContent = (props) => {
  return (
    <div className="h-full w-2/3 rounded-4xl flex flex-nowrap gap-10 overflow-x-auto  p-7">
      {props.users.map(function (elem,idx) {
        return <RightCard key={idx} id={idx} img={elem.img}  intro={elem.intro}  tag={elem.identity?.tag}
        color={elem.identity?.color}  />;
      })}
    </div>
  )
}

export default RightContent;
