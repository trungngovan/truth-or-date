import { motion } from 'framer-motion';
import { Heart, Star, Wine, Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

interface IconData {
  id: number;
  Icon: React.ElementType;
  color: string;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
  scale: number;
}

const BackgroundIcons = () => {
  const [icons, setIcons] = useState<IconData[]>([]);

  useEffect(() => {
    const iconTypes = [
      { Icon: Heart, color: 'text-neon-pink' },
      { Icon: Star, color: 'text-neon-purple' },
      { Icon: Wine, color: 'text-neon-blue' },
      { Icon: Flame, color: 'text-coral-500' },
    ];

    const newIcons: IconData[] = [];
    // Create 15 random icons
    for (let i = 0; i < 15; i++) {
      const type = iconTypes[Math.floor(Math.random() * iconTypes.length)];
      newIcons.push({
        id: i,
        Icon: type.Icon,
        color: type.color,
        initialX: Math.random() * 100, // percentage
        initialY: Math.random() * 100, // percentage
        duration: 10 + Math.random() * 20, // 10-30s duration
        delay: Math.random() * 5,
        scale: 0.5 + Math.random() * 1, // 0.5 - 1.5 scale
      });
    }
    setIcons(newIcons);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className={`absolute ${icon.color} opacity-20`}
          initial={{
            x: `${icon.initialX}vw`,
            y: `${icon.initialY}vh`,
            scale: icon.scale,
            opacity: 0,
          }}
          animate={{
            y: [
              `${icon.initialY}vh`,
              `${(icon.initialY + 20) % 100}vh`,
              `${(icon.initialY - 20 + 100) % 100}vh`,
              `${icon.initialY}vh`,
            ],
            x: [
              `${icon.initialX}vw`,
              `${(icon.initialX + 10) % 100}vw`,
              `${(icon.initialX - 10 + 100) % 100}vw`,
              `${icon.initialX}vw`,
            ],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            ease: "linear",
            delay: icon.delay,
          }}
        >
          <icon.Icon size={48} />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
