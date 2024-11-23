import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Dropdown } from "../drop-down";
import { icons } from "@/constants/icons";
import { Slider } from "@/components/ui/slider";

export const FilterContent = () => {
  const [value, setValue] = useState([0]);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
  };

  return (
    <div className="filter">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Filter Options</h1>
        <p className="text-gray-600 mt-2">Refine your search by selecting options below</p>
      </div>

      {/* Brands Section */}
      <div className="w-full">
        <h2 className="font-semibold text-2xl text-gray-800 mb-4">Brands</h2>
        <div className="flex justify-start space-x-4">
          <Button className="bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white rounded-full px-6 py-2 transition-all shadow-sm">
            Sort Bubble
          </Button>
        </div>
      </div>

      {/* Family Section */}
      <div className="w-full">
        <h2 className="font-semibold text-2xl text-gray-800 mb-4">Family</h2>
        <div className="flex justify-center">
          <Dropdown
            label="Select Family"
            columns={[{ id: "1", name: "Processor" }]}
            icon={icons.ArrowDown}
            classNameTrigger="bg-gray-50 text-gray-800 rounded-full px-6 py-2 shadow-md w-full md:w-2/3 hover:bg-gray-100 focus:outline-none"
            classNameContent="w-[20rem] max-w-md"
          />
        </div>
      </div>

      {/* Quantity Slider Section */}
      <div className="w-full">
        <h2 className="font-semibold text-2xl text-gray-800 mb-4 ">Quantity</h2>
        <div className="flex flex-col items-center space-y-4">
          <Slider
            min={0}
            max={100}
            step={1}
            value={value}
            onValueChange={handleChange}
            className="w-full md:w-2/3"
          />
          <span className="text-sm text-gray-700">Selected Quantity: {value[0]}</span>
        </div>
      </div>
    </div>
  );
};
