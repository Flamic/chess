import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import * as ExternalLinks from './Data/ExternalLinks'
import Navibar from './Components/Navibar'
import Slider from './Components/Slider'
import ChessBoard from './Components/ChessBoard'
import PuzzleExample from './Data/PuzzleExample.json'

function App() {
  return (
    <div className="bg-dark App">
      <Navibar />
      <Slider />
      <h1 className="text-light mt-4 mb-4">Try to solve this puzzle!</h1>
      <a
        href={ExternalLinks.PUZZLE_LINK}
        target="_blank"
        rel="noreferrer"
        style={{textDecoration: "none"}}
      >
        <ChessBoard data={PuzzleExample} />
      </a>
    </div>
  );
}

export default App;
