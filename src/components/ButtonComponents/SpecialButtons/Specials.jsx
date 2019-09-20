import React, { useState } from 'react';
import { specials } from '../../../data';

import SpecialButton from './SpecialButton';


const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div className="Specials">
      {specials.map((special) => (
        <SpecialButton key={special} special={special} />
      ))}
    </div>
  );
};

export default Specials;
