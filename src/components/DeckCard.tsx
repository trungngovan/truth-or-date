import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Deck } from '../translations';

interface DeckCardProps {
  deck: Deck;
  onClick: (deckId: string) => void;
  index: number;
}

const DeckCard = ({ deck, onClick, index }: DeckCardProps) => {
  // Map deck IDs to specific neon colors for borders and shadows
  const getNeonColor = (id: string) => {
    switch (id) {
      case 'party-starter': return 'border-purple-500 shadow-purple-500/50 text-purple-400';
      case 'couples-dates': return 'border-pink-500 shadow-pink-500/50 text-pink-400';
      case 'deep-talk': return 'border-teal-500 shadow-teal-500/50 text-teal-400';
      case 'after-dark': return 'border-red-600 shadow-red-600/50 text-red-500';
      default: return 'border-blue-500 shadow-blue-500/50 text-blue-400';
    }
  };

  const neonClass = getNeonColor(deck.id);

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onClick(deck.id)}
      className={`w-full text-left relative overflow-hidden group rounded-xl p-6 transition-all duration-300 
        bg-black/80 backdrop-blur-md border-2 ${neonClass} hover:shadow-[0_0_30px_rgba(0,0,0,0.6)] hover:scale-[1.02]`}
      style={{
        boxShadow: `0 0 15px ${deck.id === 'after-dark' ? 'rgba(220, 38, 38, 0.3)' : 'rgba(168, 85, 247, 0.2)'}`
      }}
    >
      <div className="relative z-10 flex justify-between items-center">
        <div className="space-y-2 flex-1 pr-4">
          <h3 className={`text-2xl font-heading font-bold tracking-wider uppercase flex items-center gap-2 ${neonClass.split(' ')[2]}`}>
            {deck.name}
            {index === 0 && <Sparkles className="w-5 h-5 animate-pulse" />}
          </h3>
          <p className="text-gray-300 font-body text-sm leading-relaxed">
            {deck.description}
          </p>
          <div className="pt-2">
             <span className={`text-xs font-bold uppercase tracking-widest opacity-80 ${neonClass.split(' ')[2]}`}>
              {deck.content.truth.length + deck.content.dare.length} Cards
            </span>
          </div>
        </div>

        <div className={`h-12 w-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 ${neonClass.split(' ')[0]} ${neonClass.split(' ')[2]}`}>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-current ${neonClass.split(' ')[2].replace('text-', 'bg-')}`} />
    </motion.button>
  );
};

export default DeckCard;
