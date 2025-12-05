import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Bouncing ball logo */}
      <motion.div
        className="flex flex-col items-center"
        animate={{
          y: [0, 140, -90, 80, -50, 40, -20, 0],
          scaleY: [1, 0.65, 1.2, 0.8, 1.15, 0.9, 1.05, 1],
          scaleX: [1, 1.3, 0.85, 1.15, 0.9, 1.05, 0.98, 1],
          skewX: ["0deg", "-10deg", "6deg", "-4deg", "3deg", "-2deg", "1deg", "0deg"],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/k.png"
          alt="loading logo"
          className="w-20 h-20 rounded-full object-cover"
        />
      </motion.div>

      {/* Shadow synced with impact */}
      <motion.div
        className="w-24 h-4 bg-gray-500 rounded-full mt-4 blur-md"
        animate={{
          scaleX: [1, 1.5, 0.7, 1.3, 0.9, 1.1, 0.95, 1],
          opacity: [0.2, 0.5, 0.12, 0.4, 0.18, 0.3, 0.2, 0.2],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating text wrapping around the ball */}
      <div className="flex gap-4 mt-8">
        <motion.div
          className="text-white text-lg tracking-[0.2em] font-medium"
          animate={{
            // Orbit around ball - left side
            x: [-80, -120, -60, -100, -40, -70, -20, -80],
            y: [0, 20, -30, 10, -20, 5, -5, 0],
            rotate: [-5, -12, 3, -8, 2, -4, 1, -5],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          HELLO
        </motion.div>

        <motion.div
          className="text-white text-lg tracking-[0.2em] font-medium"
          animate={{
            // Orbit around ball - right side (opposite phase)
            x: [80, 60, 120, 40, 100, 70, 20, 80],
            y: [0, -20, 30, -10, 20, -5, 5, 0],
            rotate: [5, 12, -3, 8, -2, 4, -1, 5],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          WORLD
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
