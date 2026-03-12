"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function WhatsAppButton() {

  const dragged = useRef(false);

  const handleDragStart = () => {
    dragged.current = false;
  };

  const handleDrag = () => {
    dragged.current = true;
  };

  const handleClick = () => {
    if (!dragged.current) {
      window.open("https://wa.me/123456789", "_blank");
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onClick={handleClick}
      style={{
        position: "fixed",
        left: 20,
        top: 200,
        zIndex: 9999,
        cursor: "grab",
        touchAction: "none"
      }}
    >
      <Image
        src="/whatsapp.png"
        className="shadow-2xl rounded-full backdrop-blur-lg bg-green-100 border border-green-500 shadow shadow-green-800"
        width={60}
        height={60}
        alt="WhatsApp"
        style={{ pointerEvents: "none" }}
        
      />
    </motion.div>
  );
}