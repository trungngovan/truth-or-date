import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Languages } from 'lucide-react';
import { getTranslations, Language, Difficulty as DifficultyType } from './translations';
import BackgroundIcons from './components/BackgroundIcons';

type ChallengeType = 'truth' | 'dare';

interface Challenge {
  type: ChallengeType;
  text: string;
  difficulty: DifficultyType;
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'en';
  });
  const [difficulty, setDifficulty] = useState<DifficultyType>('mild');
  const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
  const [challengeCount, setChallengeCount] = useState(0);
  const [lastChallenges, setLastChallenges] = useState<string[]>([]);
  const [isAgeVerified, setIsAgeVerified] = useState(false);
  const [showSelection, setShowSelection] = useState(false);

  const t = getTranslations(language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    setCurrentChallenge(null);
    setShowSelection(false);
  };

  const handleAgeVerification = (verified: boolean) => {
    if (verified) {
      setIsAgeVerified(true);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  const getRandomChallenge = useCallback(
    (type: ChallengeType) => {
      const challenges = type === 'truth' ? t.truths[difficulty] : t.dares[difficulty];
      
      const availableChallenges = challenges.filter(c => !lastChallenges.includes(c));
      const pool = availableChallenges.length > 0 ? availableChallenges : challenges;
      
      const randomIndex = Math.floor(Math.random() * pool.length);
      const selectedChallenge = pool[randomIndex];
      
      setLastChallenges(prev => [...prev.slice(-2), selectedChallenge]);
      
      return {
        type,
        text: selectedChallenge,
        difficulty,
      };
    },
    [difficulty, lastChallenges, t]
  );

  const handleNextPlayer = () => {
    setCurrentChallenge(null);
    setShowSelection(true);
  };

  const handleSelection = (type: ChallengeType) => {
    const challenge = getRandomChallenge(type);
    setCurrentChallenge(challenge);
    setShowSelection(false);
    setChallengeCount(prev => prev + 1);
  };

  const handleSkip = () => {
    if (currentChallenge) {
      const challenge = getRandomChallenge(currentChallenge.type);
      setCurrentChallenge(challenge);
      // Do NOT increment challengeCount
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      <BackgroundIcons />
      {/* Age Verification Modal */}
      <AnimatePresence>
        {!isAgeVerified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-md w-full"
            >
              <div className="bg-gradient-to-br from-red-900/40 to-pink-900/40 backdrop-blur-sm p-8 rounded-3xl border-2 border-red-500/50">
                <div className="text-center space-y-6">
                  <div className="inline-block px-6 py-3 bg-red-600 rounded-full">
                    <h2 className="text-2xl font-heading font-bold text-white">18+</h2>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {t.ageVerification.title}
                  </h3>
                  
                  <p className="text-white/80 font-body leading-relaxed">
                    {t.ageVerification.message}
                  </p>
                  
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => handleAgeVerification(true)}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-heading text-lg uppercase tracking-wider transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t.ageVerification.confirm}
                    </motion.button>
                    <motion.button
                      onClick={() => handleAgeVerification(false)}
                      className="flex-1 px-6 py-4 bg-white/10 text-white/60 rounded-full font-heading text-lg uppercase tracking-wider hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t.ageVerification.deny}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 18+ Badge - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-6 left-6 z-40"
      >
        <div className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-full font-heading text-lg">
          18+
        </div>
      </motion.div>

      {/* Language Selector */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-6 right-6 z-40 flex gap-2"
      >
        <motion.button
          onClick={() => handleLanguageChange('en')}
          className={`px-4 py-2 rounded-full font-heading text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
            language === 'en'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Languages size={16} />
          EN
        </motion.button>
        <motion.button
          onClick={() => handleLanguageChange('vi')}
          className={`px-4 py-2 rounded-full font-heading text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
            language === 'vi'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
              : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Languages size={16} />
          VI
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-2xl mx-auto space-y-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-title text-5xl md:text-6xl lg:text-7xl mb-8">
            <span className="text-neon-pink neon-glow-pink">{t.title.truth}</span>
            <span className="text-white mx-4">{t.title.or}</span>
            <span className="text-neon-blue neon-glow-blue">{t.title.dare}</span>
          </h1>
        </motion.div>

        {/* Difficulty selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3"
        >
          {(['mild', 'spicy', 'wild'] as DifficultyType[]).map((level) => (
            <motion.button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-6 py-3 rounded-full font-heading text-sm uppercase tracking-wider transition-all duration-300 ${
                difficulty === level
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.difficulty[level]}
            </motion.button>
          ))}
        </motion.div>

        {/* Challenge Display */}
        <AnimatePresence mode="wait">
          {currentChallenge && !showSelection ? (
            <motion.div
              key={currentChallenge.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-8 py-12"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center"
              >
                <div className={`px-6 py-2 rounded-full border-2 font-heading text-sm uppercase tracking-wider ${
                  currentChallenge.type === 'truth'
                    ? 'border-neon-pink text-neon-pink'
                    : 'border-coral-500 text-coral-500'
                }`}>
                  {currentChallenge.type === 'truth' ? t.buttons.truth : t.buttons.dare}
                </div>
              </motion.div>

              {/* Challenge Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <Flame className="mx-auto text-coral-500" size={48} />
                <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed px-4">
                  {currentChallenge.text}
                </p>
              </motion.div>

              {/* Counter */}
              <p className="text-white/40 text-sm font-body">
                {t.counter.replace('{count}', challengeCount.toString())}
              </p>
            </motion.div>
          ) : !showSelection ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-white/60 font-body">
                {t.selectPrompt}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 space-y-8"
            >
              <p className="text-2xl font-heading text-white">
                {t.game.chooseChallenge}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => handleSelection('truth')}
                  className="px-12 py-6 bg-transparent border-2 border-neon-pink text-neon-pink rounded-full font-heading text-2xl uppercase tracking-wider hover:bg-neon-pink hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,20,147,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.buttons.truth}
                </motion.button>
                <motion.button
                  onClick={() => handleSelection('dare')}
                  className="px-12 py-6 bg-transparent border-2 border-neon-blue text-neon-blue rounded-full font-heading text-2xl uppercase tracking-wider hover:bg-neon-blue hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.buttons.dare}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {!showSelection && (
            <motion.button
              onClick={handleNextPlayer}
              className="w-full px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-heading text-xl uppercase tracking-wider transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(147, 51, 234, 0.4)' }}
              whileTap={{ scale: 0.98 }}
            >
              {t.buttons.next}
            </motion.button>
          )}
          
          {currentChallenge && !showSelection && (
            <motion.p
              onClick={handleSkip}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-white/40 text-sm font-body cursor-pointer hover:text-white/60 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Skip / Forfeit
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Copyright Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 left-0 right-0 z-30 text-center"
      >
        <div className="text-white/40 text-sm font-body">
          © 2024 Created by{' '}
          <a
            href="mailto:trung2601.it@gmail.com"
            className="text-neon-pink hover:text-neon-blue transition-colors duration-300 hover:underline"
          >
            TrungNgo
          </a>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
