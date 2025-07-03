"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

type CardItems = {
    id: number;
    image: boolean;
    title: string;
    location: string;
    rating: string;
    pricing: string;
}

const Cards: React.FC = () => {
    const [card, setCard] = useState<CardItems[]>([]);

    useEffect(() => {
        fetch('/api/cards')
        .then((res) => res.json())
        .then((json : CardItems[]) => setCard(json))
    })
  return (
    <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {card.map ((item) => (
                <div key={item.id} className='px-4 py-5 rounded-lg shadow'>
                    <div>
                        <Image className='w-full h-96 rounded-lg object-cover' src={item.image} width={100} height={100} alt={item.title} />
                    </div>
                    <div className='pt-3'>
                        <h3 className='text-2xl font-bold text-black line-clamp-1'>{item.title}</h3>
                        <p className='text-base font-medium text-blue-600 pt-3 flex items-center gap-2.5'>
                        <FaLocationDot />
                        {item.location}
                        </p>
                        <div className="flex items-center gap-2 justify-between pt-3">
                            <div className="flex items-center gap-2">
                                <FaStar className='text-yellow-400' />
                                <p className='text-base font-bold text-black'>{item.rating}</p>
                            </div>
                            <div>
                                <p className='text-base font-bold text-blue-600'>{item.pricing}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards