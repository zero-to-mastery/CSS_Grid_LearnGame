import React from 'react';
import Level from '../Level';

import { images } from '../assets';
let { dragonImages, fireImages } = images;

// Modify below. Don't forget to change the level number!
const level_1 = new Level({
  level: 1,
  header: '',
  solution: { styleKey: 'style-property' },
  dragonImages: [dragonImages.blue, dragonImages.yellow],
  fireImages: [fireImages.blue, fireImages.yellow],
  hints: (
    <div>
      <p className='hint'>Hint</p>
      <ol style={{ fontSize: '0.9rem' }}>
        <li>flex-direction : row</li>
        <li>flex-direction : row-reverse</li>
        <li>flex-direction : column</li>
        <li>flex-direction : column-reverse</li>
      </ol>
    </div>
  ),
});

export default level_1;
