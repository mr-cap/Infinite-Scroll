import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";

const Cards = ({ productData }) => {
  return (
    <div className="h-[15rem] cursor-pointer ">
      <div className="flex space-x-3 bg-white rounded-lg shadow-md hover:shadow-2xl border-2 border-slate-200">
        <div className=" h-44">
          <img
            src={productData?.field_photo_image_section}
            alt=""
            className=" rounded-l-lg h-full w-fit object-cover object-center"
          />
        </div>
        <div className="  border-gray-300 text-sm text-gray-500">
          <div className="flex space-x-6 items-center mt-2">
            <p className="inline-flex rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 ">
              {productData?.author_name}
            </p>
            <div className="flex w-fit items-center justify-end rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              <EyeIcon className=" h-3 w-3 text-green-500 mr-1 items-center" />{" "}
              {productData?.views_count} {" views"}
            </div>
          </div>

          <div className="m-2 space-y-4">
            <div className="flex justify-between gap-4 items-center mb-2">
              <span className="text-md text-gray-700 font-bold truncate">
                {productData?.title}
              </span>
            </div>
            <p className="text-sm max-h-[4rem] overflow-hidden hover:overflow-y-scroll ">
              {productData?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
