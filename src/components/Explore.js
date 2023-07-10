import React from "react";
import Nav from "./Nav";
import { useHref } from "react-router-dom";
import Restaurant from "../image/restaurant.webp";
import Tea from "../image/tea.jpg";
import Bar from "../image/bar.jpg";

const features = [
  {
    name: 'Tea Shops',
    image: Tea
  },
  {
    name: 'Restaurants',
    image: Restaurant
  },
  {
    name: 'Bars',
    image: Bar
  },
];

export default function Explore() {
  return (
    <div>
      <Nav />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 justify-center lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="h-40 w-90vw sm:w-80 mx-auto flex items-center justify-center rounded-lg bg-indigo-600">
                    <img src={feature.image} alt="Bootcamp" className="max-h-full max-w-full text-white" />
                  </div>
                  <dt className="text-base font-semibold leading-7 text-gray-900 text-center mt-2">{feature.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
