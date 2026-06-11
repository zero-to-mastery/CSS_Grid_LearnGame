import React from 'react';
import Level from '../Level';

import { images } from '../assets';
let { dragonImages, fireImages } = images;

const level_2 = new Level({
  level: 2,
  header: 'Watch out! Another dragons are coming!!!',
  solution: { justifyContent: 'space-around' },
  dragonImages: [dragonImages.blue, dragonImages.yellow],
  fireImages: [fireImages.blue, fireImages.yellow],
  hints: (
    <div>
      <p className='hint'>Here's a list of spells</p>
      <ol>
        <li>justify-content : flex-start</li>
        <li>justify-content : flex-end</li>
        <li>justify-content : center</li>
        <li>justify-content : space-between</li>
        <li>justify-content : space-around</li>
      </ol>
    </div>
  ),
});

export default level_2;
