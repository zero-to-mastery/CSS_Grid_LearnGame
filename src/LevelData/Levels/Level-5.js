import React from 'react';
import Level from '../Level';

import { images } from '../assets';
let { dragonImages, fireImages } = images;

const level_5 = new Level({
  level: 5,
  header: 'Too many dragons!!!',
  solution: { alignItems: 'flex-end', flexDirection: 'column' },
  dragonImages: [dragonImages.blue, dragonImages.yellow],
  fireImages: [fireImages.blue, fireImages.yellow],
  hints: (
    <div>
      <p className='hint'>It seems you need to spell mutiple times(2 lines)</p>
      <p className='hint'>Here's another list of spells</p>
      <ol style={{ fontSize: '0.9rem' }}>
        <li>flex-direction : row</li>
        <li>flex-direction : row-reverse</li>
        <li>flex-direction : column</li>
        <li>flex-direction : column-reverse</li>
      </ol>
    </div>
  ),
});

export default level_5;
