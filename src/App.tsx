import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wine, Flame, Heart, Languages } from 'lucide-react';
import { getTranslations, Language, Difficulty as DifficultyType } from './translations';

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
  const [isFlipped, setIsFlipped] = useState(false);
  const [challengeCount, setChallengeCount] = useState(0);
  const [lastChallenges, setLastChallenges] = useState<string[]>([]);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const t = getTranslations(language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    // Reset current challenge when language changes
    setCurrentChallenge(null);
    setIsFlipped(false);
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

  const handleSelection = (type: ChallengeType) => {
    const challenge = getRandomChallenge(type);
    setCurrentChallenge(challenge);
    setIsFlipped(true);
    setChallengeCount(prev => prev + 1);
  };

  const handleNext = () => {
    if (currentChallenge) {
      const challenge = getRandomChallenge(currentChallenge.type);
      setCurrentChallenge(challenge);
      setIsFlipped(true);
    }
  };

  const handleBack = () => {
    setIsFlipped(false);
    setTimeout(() => setCurrentChallenge(null), 300);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden scanlines">
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
              <div className="bg-gradient-to-br from-neon-pink/30 to-neon-purple/30 rounded-3xl p-1">
                <div className="bg-black/90 rounded-3xl p-8 text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Flame className="text-neon-pink neon-glow-pink mx-auto mb-6" size={80} />
                  </motion.div>
                  
                  <h2 className="font-heading text-4xl text-neon-pink neon-glow-pink mb-4">
                    {t.ageVerification.title}
                  </h2>
                  
                  <p 
                    className="text-white/80 font-body text-lg mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t.ageVerification.warning }}
                  />
                  
                  <p className="text-white font-body text-xl mb-8">
                    {t.ageVerification.question}
                  </p>
                  
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => handleAgeVerification(true)}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-neon-pink to-pink-600 rounded-full font-heading text-xl uppercase tracking-wider text-white neon-box-glow-pink"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t.ageVerification.yesButton}
                    </motion.button>
                    
                    <motion.button
                      onClick={() => handleAgeVerification(false)}
                      className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-full font-heading text-xl uppercase tracking-wider text-white border-2 border-white/30"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t.ageVerification.noButton}
                    </motion.button>
                  </div>
                  
                  <p className="text-white/40 text-sm mt-6">
                    {t.ageVerification.disclaimer}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black" />
      
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-neon-pink opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Heart size={60} className="neon-glow-pink" />
      </motion.div>
      
      <motion.div
        className="absolute top-40 right-20 text-neon-blue opacity-30"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Wine size={50} className="neon-glow-blue" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-1/4 text-neon-purple opacity-30 animate-sparkle-rotate"
      >
        <Sparkles size={40} className="neon-glow-purple" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-40 right-1/3 text-neon-pink opacity-30"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Flame size={45} className="neon-glow-pink" />
      </motion.div>

      {/* 18+ Badge - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-6 left-6 z-40"
      >
        <div className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg font-heading text-lg neon-box-glow-pink">
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
              ? 'bg-gradient-to-r from-neon-pink to-neon-blue text-white neon-box-glow-pink'
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
              ? 'bg-gradient-to-r from-neon-pink to-neon-blue text-white neon-box-glow-pink'
              : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Languages size={16} />
          VI
        </motion.button>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="font-title text-4xl md:text-6xl lg:text-7xl mb-4 animate-flicker">
            <span className="text-neon-pink neon-glow-pink">{t.title.truth}</span>
            <span className="text-white mx-2 md:mx-4">{t.title.or}</span>
            <span className="text-neon-blue neon-glow-blue">{t.title.dare}</span>
          </h1>
        </motion.div>

        {/* Difficulty selector */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex gap-4 flex-wrap justify-center"
        >
          {(['mild', 'spicy', 'wild'] as DifficultyType[]).map((level) => (
            <motion.button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-6 py-3 rounded-full font-heading text-lg uppercase tracking-wider transition-all duration-300 ${
                difficulty === level
                  ? 'bg-gradient-to-r from-neon-pink to-neon-blue text-white neon-box-glow-pink scale-110'
                  : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.difficulty[level]}
            </motion.button>
          ))}
        </motion.div>

        {/* Challenge counter */}
        {challengeCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-neon-green neon-glow-purple font-heading text-lg"
          >
            {t.game.challengesCompleted}: {challengeCount}
          </motion.div>
        )}

        {/* Card display area */}
        <div className="perspective-1000 mb-12">
          <AnimatePresence mode="wait">
            {!currentChallenge ? (
              <motion.div
                key="selection"
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.6 }}
                className="w-80 md:w-96 h-96 relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-3xl p-1">
                  <div className="w-full h-full bg-black/90 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 backdrop-blur-sm">
                    <Sparkles className="text-neon-purple neon-glow-purple animate-neon-pulse" size={60} />
                    <h2 className="font-heading text-3xl text-white neon-glow-blue text-center">
                      {t.game.chooseChallenge}
                    </h2>
                    <p className="text-white/60 text-center font-body">
                      {t.game.selectPrompt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="challenge"
                initial={{ opacity: 0, rotateY: isFlipped ? -180 : 0 }}
                animate={{ opacity: 1, rotateY: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.6 }}
                className="w-80 md:w-96 h-96 relative animate-card-float"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  currentChallenge.type === 'truth' 
                    ? 'from-neon-pink/30 to-neon-purple/30' 
                    : 'from-neon-blue/30 to-neon-green/30'
                } rounded-3xl p-1 animate-gradient`}>
                  <div className="w-full h-full bg-black/90 rounded-3xl p-8 flex flex-col items-center justify-center gap-6 backdrop-blur-sm">
                    <div className={`text-4xl font-heading uppercase ${
                      currentChallenge.type === 'truth' 
                        ? 'text-neon-pink neon-glow-pink' 
                        : 'text-neon-blue neon-glow-blue'
                    }`}>
                      {currentChallenge.type === 'truth' ? t.game.truthButton : t.game.dareButton}
                    </div>
                    <div className="text-white text-center font-body text-lg leading-relaxed px-4">
                      {currentChallenge.text}
                    </div>
                    <div className="text-neon-purple/60 text-sm uppercase tracking-wider">
                      {t.difficulty[currentChallenge.difficulty]} {t.game.difficultyLevel}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {!currentChallenge ? (
            <>
              <motion.button
                onClick={() => handleSelection('truth')}
                className="px-8 py-4 bg-gradient-to-r from-neon-pink to-pink-600 rounded-full font-heading text-2xl uppercase tracking-wider text-white neon-box-glow-pink"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.game.truthButton}
              </motion.button>
              <motion.button
                onClick={() => handleSelection('dare')}
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-blue-600 rounded-full font-heading text-2xl uppercase tracking-wider text-white neon-box-glow-blue"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.game.dareButton}
              </motion.button>
            </>
          ) : (
            <>
              <motion.button
                onClick={handleNext}
                className="px-8 py-4 bg-gradient-to-r from-neon-purple to-purple-600 rounded-full font-heading text-xl uppercase tracking-wider text-white neon-box-glow-purple"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.game.nextButton}
              </motion.button>
              <motion.button
                onClick={handleBack}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-heading text-xl uppercase tracking-wider text-white border-2 border-white/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.game.backButton}
              </motion.button>
            </>
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
