import React from "react";
import Nav from "./Nav";
import { useHref } from "react-router-dom";
import Restaurant from "../image/restaurant.webp";
import Bootcamp from "../image/bootcampCert.jpg";

const features = [
  {
    name: 'Boba shops',
    image: Bootcamp
  }
];

export default function Explore() {
  return (
    <div>
      <Nav />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl sm:text-4xl font-bold">Deploy faster</h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="h-full w-full absolute left-0 top-0 flex h-26 w-26 items-center justify-center rounded-lg bg-indigo-600">
                      <img src={feature.image} alt="bootcamp"></img>
                    </div>
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
