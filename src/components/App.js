import '../styles/App.css';
import Selection from './Selection';
import ColourSelector from './ColourSelector';
import { useState } from 'react';

const App = () => {
  const [nextBackground, selectNextBackground] = useState("");
  const applyColor = (updateSelectionStyle) => {
    updateSelectionStyle({ background: nextBackground });
  };

  return (
    <div>
      <h5 className="heading">Select the gradient and then the Box to change the color</h5>
      <div className="row">
        {colourConfig.map(config => (
          <ColourSelector key={config.key} config={config} selectNextBackground={selectNextBackground} />
        ))}
      </div>
      <div className="row">
        {[1, 2, 3].map(index => (
          <Selection key={index} applyColor={applyColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
