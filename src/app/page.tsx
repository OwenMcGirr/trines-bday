'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showCard, setShowCard] = useState(false);
  const [candlesLit, setCandlesLit] = useState([false, false, false, false, false]);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showCard) {
      candlesLit.forEach((_, index) => {
        setTimeout(() => {
          setCandlesLit(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, 1000 + index * 500);
      });
    }
  }, [showCard]);

  const handleCandleClick = (index: number) => {
    setCandlesLit(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4 relative overflow-hidden">
      <div 
        className={`transform transition-all duration-1000 ${
          showCard ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <div 
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md mx-auto border-4 border-pink-200"
        >
          <div className="text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {candlesLit.map((lit, index) => (
                  <div
                    key={index}
                    onClick={() => handleCandleClick(index)}
                    className="mx-1 cursor-pointer transform hover:scale-110 transition-transform"
                  >
                    <div className="relative">
                      <div className="w-2 h-8 bg-yellow-200 rounded-sm border border-yellow-300"></div>
                      <div 
                        className={`absolute -top-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
                          lit ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse">
                          <div className="w-2 h-2 bg-yellow-300 rounded-full mx-auto animate-ping"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                Happy Birthday
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 animate-bounce">
                Catriona! 🎂
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium">
                Wishing you a day filled with happiness and a year filled with joy! ✨
              </p>
              
              <div className="flex justify-center space-x-2 text-2xl animate-pulse">
                🌟 🎈 🎁 🌈 💖
              </div>
              
              <p className="text-base italic mb-4">
                Hope your special day is as wonderful as you are!
              </p>
              
              <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-300">
                <p className="text-sm text-gray-600 leading-relaxed">
                  I know things haven't been easy between us lately, but your birthday feels like the perfect time to say that I miss you and I want to work on us. You mean so much to me, and I hope we can find our way back to each other. 💕
                </p>
              </div>
              
              <div className="mt-4 text-xs text-gray-400">
                <p>Click the candles to light them! 🕯️</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
