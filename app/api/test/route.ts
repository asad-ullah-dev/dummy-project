import { NextResponse } from 'next/server';

const Test = [
  { id: "1",
    image: '/image/1.png',
    title: "Test 1",
    description: "I am dummy API 1",
    date: '2/5/2025',
    time: '7:00',
    bedge: 'Available',
    bedgeColor: 'bg-green-500',
    button: 'Booking',
    buttonColor: 'bg-green-500',
    completed: true,
  },
  { id: "2",
    image: '/image/1.png',
    title: "Test 2",
    description: "I am dummy API 2",
    date: '5/3/2025',
    time: '8:00',
    bedge: 'Not Available',
    bedgeColor: 'bg-red-500',
    button: 'Closed',
    buttonColor: 'bg-red-500',
    completed: false,
  },
  { id: "3",
    image: '/image/1.png',
    title: "Test 3",
    description: "I am dummy API 3",
    date: '4/7/2025',
    time: '9:00',
    bedge: 'Available',
    bedgeColor: 'bg-green-500',
    button: 'Booking',
    buttonColor: 'bg-green-500',
    completed: true,
  },
];

export async function GET() {
  return NextResponse.json(Test);
}