// In App.jsx
import './App.css';
import { HeroHighlightDemo } from './components/ui/HeroHighlightDemo';
import BusinessSection from './pages/BusinessSection';

// import MenuBar from './components/ui/MenuBar/MenuBar';

function App() {
  return (
    <div className="w-full h-full">
      <HeroHighlightDemo />
      <BusinessSection />
  
      {/* <MenuBar /> */}
    </div>
  );
}

export default App;
