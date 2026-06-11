import React from 'react';
import Level from '../Level';

import { images } from '../assets';
let { dragonImages, fireImages } = images;

const level_3 = new Level({
  level: 3,
  header: 'Even more dragons!!!',
  solution: { alignItems: 'center', justifyContent: 'flex-end' },
  dragonImages: [dragonImages.red, dragonImages.yellow],
  fireImages: [fireImages.red, fireImages.yellow],
  hints: (
    <div>
      <p className='hint'>It seems you need to spell multiple times(2 lines)</p>
      <p className='hint'>Here's another list of spells</p>
      <ol style={{ fontSize: '0.9rem' }}>
        <li>align-items : flex-start</li>
        <li>align-items : flex-end</li>
        <li>align-items : center</li>
        <li>align-items : baseline</li>
        <li>align-items : stretch</li>
      </ol>
    </div>
  ),
});

export default level_3;
