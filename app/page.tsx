"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Cards from "../components/cards/Cards";
import Dummy from "../components/dummy/Dummy";
import ItemList from "../components/itemlist/ItemList";
import UserForm from "../components/YUP Form/UserForm";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true, // sirf 1 bar load huny k bad
    threshold: 0.2,
  });
  return (
   <>
    <main>
      <div className="2xl:px-0 px-5">
        <div className="pt-8">
        <h1 className="sm:text-5xl text-4xl font-bold text-center text-black">Dummy Apis</h1>
      </div>

      <div className="pt-8">
        <Dummy />
      </div>

      <div className="pt-8">
        <Cards />
      </div>

      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white p-6 rounded shadow-lg max-w-md mx-auto mt-8 text-center">
      <h2 className="text-xl font-semibold">Scroll Animation</h2>
      <p className="mt-2 text-gray-600">This box fades in when it enters the viewport.</p>
    </motion.div>

      <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-8">
      <ItemList />
      </motion.div>

      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 2 }}
      className="mt-8">
      <UserForm />
      </motion.div>

      </div>
    </main>
   </>
  );
}
