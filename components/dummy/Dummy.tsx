"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

type TestItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  bedge: string;
  bedgeColor: string;
  image: boolean;
  button: string;
  buttonColor: string;
  completed: string;
}

const Dummy: React.FC = () => {
  const [data , setData] = useState<TestItem[]>([]);

  useEffect (() => {
    fetch('/api/test')
    .then((res) => res.json())
    .then((json: TestItem[]) => setData(json))
  },[]);

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {data.map((item) => (
        <div key={item.id} className='p-4 shadow rounded relative'>
          <Image src={item.image} className='w-full h-60 object-cover rounded-md' width={200} height={200} alt={item.title} />
          <div className={`absolute cursor-pointer top-6 right-5 text-white px-2 py-1 rounded text-sm font-medium ${item.bedgeColor}`}>
            {item.bedge}
          </div>
          <h2 className='text-3xl font-bold text-black pt-2'>{item.title}</h2>
          <p className='text-base font-normal pt-1'>{item.description}</p>
          <button className={`mt-2 text-white w-full px-3 py-1.5 text-base flex justify-center items-center text-center rounded-sm font-semibold ${item.buttonColor}`}>
            {item.button}
          </button>
          <div className="flex items-center justify-between gap-2 mt-2 bg-gray-100 px-2.5 rounded py-4">
              <div>
                <p className='text-base font-normal text-black'>{item.date}</p>
              </div>
              <div>
                <p className='text-base font-normal text-black'>{item.time}</p>
              </div>
          </div>
          <div className={`flex items-center gap-3 mt-2 ${item.completed ? 'text-green-500' : 'text-red-500'}`}>
            <span className='text-black'>Completed :</span>
            {`${item.completed ? 'True' : 'False'}`}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Dummy