import { NextResponse } from 'next/server';

const Card = [
    {
    id: '1',
    image: '/image/1.png',
    title: 'Enjoy The Beauty of the Floating Island',
    location: 'Microfiver Island',
    rating: '5.0 Superb',
    pricing: '$1270',
    },
    {
    id: '2',
    image: '/image/1.png',
    title: 'Enjoy The Best Kayak Experiance',
    location: 'Microfiver Island',
    rating: '4.5 Good',
    pricing: '$1350',
    },
    {
    id: '3',
    image: '/image/1.png',
    title: 'Discover Dunes and waves in the desert',
    location: 'Microfiver Island',
    rating: '4.0 Good',
    pricing: '$780',
    },
]

export async function GET() {
  return NextResponse.json(Card);
}