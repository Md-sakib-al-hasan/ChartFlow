"use client"
import React, { useState } from 'react';

const testimonials = [
  {
    quote:
      'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    name: 'Michael Kaizer',
    title: 'CEO of Basecamp Corp',
    avatar: '/avatar-placeholder.png', // Replace with real image path
  },
  {
    quote:
      'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    name: 'Michael Kaizer',
    title: 'CEO of Basecamp Corp',
    avatar: '/avatar-placeholder.png', // Replace with real image path
  },
  {
    quote:
      'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    name: 'Michael Kaizer',
    title: 'CEO of Basecamp Corp',
    avatar: '/avatar-placeholder.png', // Replace with real image path
  },
  {
    quote:
      'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    name: 'Michael Kaizer',
    title: 'CEO of Basecamp Corp',
    avatar: '/avatar-placeholder.png', // Replace with real image path
  },
  {
    quote:
      'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    name: 'Michael Kaizer',
    title: 'CEO of Basecamp Corp',
    avatar: '/avatar-placeholder.png', // Replace with real image path
  },
  {
    quote:
      'They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.',
    name: 'Michael Kaizer',
    title: 'CEO of Basecamp Corp',
    avatar: '/avatar-placeholder.png', // Replace with real image path
  },
  // Add more testimonials here if needed
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
