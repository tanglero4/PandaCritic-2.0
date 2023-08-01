import React from "react";
import Nav from "./Nav";
import { useHref } from "react-router-dom";
import Restaurant from "../image/restaurant.webp";
import Tea from "../image/tea.jpg";
import Bar from "../image/bar.jpg";

const features = [
  {
    name: 'Tea Shops',
    image: Tea,
    link: "/tea"
  },
  {
    name: 'Restaurants',
    image: Restaurant,
    link: "/restaurants"
  },
  {
    name: 'Bars',
    image: Bar,
    link: "/bars"
  },
];

export default function Explore() {
  return (
    <div>
      <Nav />
      {/* <div className="bg-white py-24 sm:py-32"> */}
        <div id="explore-banner">
          Explore!
        </div>

          <div id="explore-box">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 justify-center lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}  className="relative">
                  <div className="h-40 w-90vw sm:w-80 mx-auto flex items-center justify-center rounded-lg bg-indigo-600">
                    <img src={feature.image} alt="Bootcamp" className="max-h-full max-w-full text-white image" />
                  </div>
                  <dt className="explore-name text-base font-semibold leading-7 text-gray-900 text-center mt-2" >
                  <a href={feature.link}>{feature.name}</a>
                  </dt>
                </div>
              ))}
            </dl>
          </div>

      {/* // </div> */}
     </div>
  );
}
