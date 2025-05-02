"use client"
import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      "The team's dedication and expertise helped us triple our online engagement within just a few months. Their insights are data-driven and incredibly effective.",
    name: 'Sophia Martinez',
    title: 'Marketing Director at NovaTech',
    avatar: '/avatars/sophia.png',
  },
  {
    quote:
      "They understand our brand better than we do! Their campaigns always hit the mark and generate impressive results.",
    name: 'James O’Connor',
    title: 'CEO of Horizon Group',
    avatar: '/avatars/james.png',
  },
  {
    quote:
      "We've worked with several agencies, but none have delivered the consistent ROI that this team has. Highly recommended.",
    name: 'Aisha Rahman',
    title: 'Head of Growth at Clarity Health',
    avatar: '/avatars/aisha.png',
  },
  {
    quote:
      "Their creative approach to digital marketing helped us stand out in a crowded market. They bring fresh ideas to the table every time.",
    name: 'Liam Chen',
    title: 'Founder of UrbanNest Interiors',
    avatar: '/avatars/liam.png',
  },
  {
    quote:
      "From content strategy to paid ads, they’ve completely transformed our online presence. It’s been a game-changer for our business.",
    name: 'Emily Johnson',
    title: 'CMO of EcoWear Apparel',
    avatar: '/avatars/emily.png',
  },
  {
    quote:
      "Their team is highly communicative and results-driven. We saw a 40% boost in lead generation after just one campaign.",
    name: 'Carlos Mendes',
    title: 'VP of Sales at FinScope',
    avatar: '/avatars/carlos.png',
  },
];


export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { quote, name, title } = testimonials[index];

  return (
    <div className="container mx-auto p-4">
      <p className="text-xl md:text-2xl lg:text-[30px] mb-8">{quote}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-500"
          >
            ←
          </button>
          <span className="text-sm text-gray-600">{`${(index + 1)
            .toString()
            .padStart(2, '0')}/${testimonials.length.toString().padStart(2, '0')}`}</span>
          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
