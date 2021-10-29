import './App.css';
import React, { useRef } from "react";
import FirstSection from "./components/FirstSection.js"
import SecondSection from "./components/SecondSection.js"
import ThirdSection from "./components/ThirdSection.js"
import FourthSection from "./components/FourthSection.js"

function App() {
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const fourthSectionRef = useRef(null)

  return (
    <div style={{backgroundColor: '#C074B7'}}>
      <div>
        <FirstSection nextSection={secondSectionRef} />
      </div>
      <div ref={secondSectionRef}>
        <SecondSection nextSection={thirdSectionRef} />
      </div>
      <div ref={thirdSectionRef}>
        <ThirdSection nextSection={fourthSectionRef}/>
      </div>
      <div ref={fourthSectionRef}>
        <FourthSection />
      </div>
    </div>
  );
}

export default App;