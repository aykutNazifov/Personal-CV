import React from "react";
import ReactStars from "react-stars";

interface StarsItemI {
  item: string;
  value: number;
}

const StarsItem: React.FC<StarsItemI> = ({ item, value }) => {
  return (
    <div className="flex items-center justify-between mb-4 gap-2">
      <p className="max-w-[70%]">{item}</p>{" "}
      <div className="shrink-0">
        <ReactStars
          count={5}
          value={value}
          size={23}
          color2={"#3a5b87"}
          color1={"#C8C8C8"}
          edit={false}
        />
      </div>
    </div>
  );
};

export default StarsItem;
