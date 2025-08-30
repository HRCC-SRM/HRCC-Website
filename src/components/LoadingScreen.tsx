import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Show content after a brief delay for smooth entrance
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, 200);

    // Simulate video loading time and then trigger the fade out
    const timer = setTimeout(() => {
      if (videoLoaded || videoError) {
        setIsLoading(false);
        // Wait for fade out animation to complete before calling onLoadingComplete
        setTimeout(() => {
          onLoadingComplete();
        }, 1000); // 1 second for fade out animation
      }
    }, 9000); // Show loading for at least 3.5 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(showTimer);
    };
  }, [videoLoaded, videoError, onLoadingComplete]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  if (!isLoading) {
    // return (
    //   <div className="fixed inset-0 z-50 bg-black transition-opacity duration-1000 ease-in-out opacity-0 pointer-events-none">
    //     {/* This div will fade out and then be removed */}
    //   </div>
    // );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Particle Effect Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full opacity-20 particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative w-full h-full">
        {/* Video Background */}
        {!videoError ? (
          <video
            className="absolute inset-0 w-full h-full "
            autoPlay
            muted
            loop
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            playsInline
          >
            <source src="/videos/loading22.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback gradient background if video fails to load
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
        )}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-center  transition-all duration-1000 ease-out loading-content ${
            showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Logo or Brand */}
            {/* <div className="mb-8">
              <img 
                src="/img/logo.png" 
                alt="HRDC Logo" 
                className="w-24 h-24 mx-auto mb-4 loading-logo"
              />
              <h1 className="text-4xl font-bold tracking-wider loading-text">HRDC</h1>
            </div> */}
            
            {/* Loading Spinner
            <div className="flex justify-center mb-6">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full loading-spinner"></div>
            </div> */}
            
            {/* Loading Text */}
            {/* <p className="text-lg opacity-80 loading-text">Loading Experience...</p> */}
            
            {/* Progress Bar */}
            {/* <div className="mt-6 w-48 mx-auto">
              <div className="w-full bg-white bg-opacity-20 rounded-full h-1">
                <div className="bg-white h-1 rounded-full loading-progress" 
                     style={{ width: (videoLoaded || videoError) ? '100%' : '0%' }}></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
