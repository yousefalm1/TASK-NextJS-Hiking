import Image from "next/image";
import React from "react";

function TripItem({ trip }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ">
      <div className="mx-auto cursor-pointer relative overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="text-center text-wh
          ite">
            <i className="fas fa-plus text-3xl"></i>
          </div>
        </div>
        <Image
          width={500}
          height={500}
          className="w-full h-auto"
          src={trip.img}
          alt="..."
        />
      </div>
    </div>
  );
}

export default TripItem;
