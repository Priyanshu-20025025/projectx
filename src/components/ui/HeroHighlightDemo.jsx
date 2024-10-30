"use client"; // Ensures client-side rendering (for Next.js)

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./hero-highlight";
// import MenuBar from "./MenuBar/MenuBar";

export function HeroHighlightDemo() {
  return (


    <div className="relative w-full h-full" >

<HeroHighlight>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className=" px-4 md:text-5xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With tech, nothing stays the same. Everything evolves.{" "}
        <Highlight className="text-yellow-500">
        Everything is an upgrade, of an upgrade, of an upgrade.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    {/* <MenuBar /> */}



    </div>
   

  );
}
