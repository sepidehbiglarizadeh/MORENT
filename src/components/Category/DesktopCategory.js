import BpCheckbox from "@/common/CustomCheckbox/CustomCheckbox";
import { Slider } from "@mui/material";
import { useState } from "react";

const capacity = [
  { id: 1, title: "2 Person" },
  { id: 2, title: "4 Person" },
  { id: 3, title: "6 Person" },
  { id: 4, title: "8 Or More" },
];

const DesktopCategory = ({ types }) => {

  return (
    <section className="bg-white p-8 xl:min-w-[360px] h-full hidden lg:block">
      <ul className="mb-12">
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Type
        </h2>
        {types.map((type) => {
          return (
            <li className="mb-6 text-xl font-semibold " key={type._id}>
              <BpCheckbox  />
              <label
                htmlFor={type._id}
                className="cursor-pointer text-secondary-400 mr-1"
              >
                {type.title}
              </label>
              <span className="text-secondary-300">(10)</span>
            </li>
          );
        })}
      </ul>
      <ul className="mb-12">
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Capacity
        </h2>
        {capacity.map((item) => {
          return (
            <li className="mb-6 text-xl font-semibold" key={item.id}>
              <BpCheckbox  />
              <label
                htmlFor={item.id}
                className=" cursor-pointer text-secondary-400 mr-1"
              >
                {item.title}
              </label>
              <span className="text-secondary-300">(10)</span>
            </li>
          );
        })}
      </ul>

      <div>
        <h2 className="text-xs font-semibold mb-5 text-secondary-300 uppercase">
          Price
        </h2>
        <Slider
          aria-label="Temperature"
          min={10}
          max={100}
          sx={{
            color: "#90A3BF", // Change the color of the thumb and track to blue
            height: 12,
            "& .MuiSlider-track": {
              borderRadius: "inherit", // Add Tailwind styles to the track
              backgroundColor: "#3563E9",
            },
            "& .MuiSlider-thumb": {
              backgroundColor: "#3563E9",
              border: "2px solid #3563E9", // Add Tailwind styles to the thumb
            },
          }}
        />
      </div>
    </section>
  );
};

export default DesktopCategory;
