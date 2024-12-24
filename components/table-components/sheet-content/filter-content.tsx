import React, { useState } from 'react';
import { Dropdown } from '../drop-down';
import { icons } from '@/constants/icons';
import { Slider } from '@/components/ui/slider';
import { Brands } from '@/constants';

const MAX_VISIBLE_BRANDS = 10;
export const FilterContent = () => {
  const [value, setValue] = useState([0]);
  const [showAll, setShowAll] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const toggleShowAll = () => setShowAll(prev => !prev);

  const visibleBrands = showAll ? Brands : Brands.slice(0, MAX_VISIBLE_BRANDS);

  const handleChange = (newValue: number[]) => {
    setValue(newValue);
  };
  const handleButtonClick = (index: number) => {
    setActiveButton(prev => (prev === index ? null : index)); // Toggle active button
  };

  return (
    <div className="filter">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Filter Options</h1>
        <p className="text-gray-600 mt-2">
          Refine your search by selecting options below
        </p>
      </div>

      <div className="w-full">
        <h2 className="font-semibold text-2xl text-gray-800 mb-4">Brands</h2>
        <div className="space-y-4">
          <div className="flex justify-start flex-wrap gap-2">
            {visibleBrands.map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`rounded-full px-6 py-2 transition-all shadow-sm ${
                  activeButton === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {Brands.length > MAX_VISIBLE_BRANDS && (
            <button
              onClick={toggleShowAll}
              className=" text-black-1 hover:text-blue-700  transition-all "
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>

      {/* Family Section */}
      <div className="w-full">
        <h2 className="font-semibold text-2xl text-gray-800 mb-4">Family</h2>
        <div className="flex justify-center">
          <Dropdown
            label="Select Family"
            columns={[{ id: '1', name: 'Processor' }]}
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
          <span className="text-sm text-gray-700">
            Selected Quantity: {value[0]}
          </span>
        </div>
      </div>
    </div>
  );
};
