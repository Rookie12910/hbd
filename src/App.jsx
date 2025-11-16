import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [showMissile, setShowMissile] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);
  const [showHappyBirthday, setShowHappyBirthday] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef(null);
  const explosionAudioRef = useRef(null);

  const handleClick = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    
    setIsAnimating(true);
    setShowMissile(true);
    
    // After missile animation completes, show explosion
    setTimeout(() => {
      setShowMissile(false);
      setShowExplosion(true);
      // Play explosion sound
      if (explosionAudioRef.current) {
        explosionAudioRef.current.play().catch(e => console.log('Explosion audio play failed:', e));
      }
    }, 1500); // 1.5 seconds for missile animation
    
    // After explosion, show happy birthday and play audio
    setTimeout(() => {
      setShowExplosion(false);
      setShowHappyBirthday(true);
      // Play audio
      if (audioRef.current) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsAnimating(false);
    }, 2500); // 2.5 seconds total (missile + explosion)
  };

  const resetAnimation = () => {
    setShowHappyBirthday(false);
    setShowMissile(false);
    setShowExplosion(false);
    setIsAnimating(false);
    // Stop audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (explosionAudioRef.current) {
      explosionAudioRef.current.pause();
      explosionAudioRef.current.currentTime = 0;
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="image-container">
          {!showHappyBirthday ? (
            <div className="sorry-image">
              <img src="/sorryyy.gif" alt="Sorry" className="sorry-gif" />
            </div>
          ) : (
            <div className="happy-birthday-container fade-in">
              {/* Happy Birthday message at the top */}
              <div className="birthday-message">
                <h1>Happy Birthday Tithi!</h1>
              </div>
              
              {/* Dancing gifs in 4 directions */}
              <img src="/dancing.gif" alt="Dancing" className="dancing-gif top-left" />
              <img src="/dancing.gif" alt="Dancing" className="dancing-gif top-right" />
              <img src="/dancing.gif" alt="Dancing" className="dancing-gif bottom-left" />
              <img src="/dancing.gif" alt="Dancing" className="dancing-gif bottom-right" />
              
              {/* Main happy birthday gif */}
              <img src="/hbd.gif" alt="Happy Birthday" className="hbd-gif" />
            </div>
          )}
          
          {showMissile && (
            <div className="missile-container">
              <img src="/missile.png" alt="Missile" className="missile" />
            </div>
          )}
          
          {showExplosion && (
            <div className="explosion-container">
              <img src="/explosion.png" alt="Explosion" className="explosion" />
            </div>
          )}
        </div>
        
        <div className="button-container">
          {!showHappyBirthday ? (
            <button 
              className="click-button" 
              onClick={handleClick}
              disabled={isAnimating}
            >
              {isAnimating ? 'Launching Missile...' : 'Click Here'}
            </button>
          ) : (
            <>
              <button 
                className="reset-button" 
                onClick={resetAnimation}
              >
                Reset
              </button>
              
              {/* Morse code message below reset button */}
              <div className="morse-code">
                .-. .- -.- . ... .... .-.. --- ...- . ... - .. - .... ..
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Audio elements */}
      <audio ref={audioRef} preload="auto">
        <source src="/happy-birthday.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <audio ref={explosionAudioRef} preload="auto">
        <source src="/explosion.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;