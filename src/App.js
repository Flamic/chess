import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navibar from './Components/Navibar';
import Slider from './Components/Slider';
import ChessBoard from './Components/ChessBoard';

function App() {
  return (
    <div className="bg-dark App">
      <Navibar />
      <Slider />
      <h1 className="text-light mt-4 mb-4">Try to solve this puzzle!</h1>
      <ChessBoard />
    </div>
  );
}

export default App;
