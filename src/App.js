import './App.css';
import React, { useRef, useEffect } from "react";
import FirstSection from "./components/FirstSection.js"

function App() {
  const secondSectionRef = useRef(null)

  const scrollToSecondSection = () => secondSectionRef.current.scrollIntoView()

  return (
    <div>
      <div>
        <FirstSection nextSection={secondSectionRef} />
      </div>
      <div ref={secondSectionRef}>
        <FirstSection />
      </div>
    </div>
  );
}

export default App;