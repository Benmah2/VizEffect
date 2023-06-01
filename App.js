import React from 'react';
import LandingScreen from './pages/LandingScreen';

export default function App() {
  // This would usually be replaced with some navigation library
  const showLandingScreen = true;

  if (showLandingScreen) {
    return <LandingScreen />;
  }

  // Show some other component or screen
  return <View />;
}
