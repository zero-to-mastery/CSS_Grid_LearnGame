import React from 'react';
import Level from '../Level';

import { images } from '../assets';
let { dragonImages, fireImages } = images;

// Modify below. Don't forget to change the level number!
const level_6 = new Level({
  level: 6,
  header: 'Double TROUBLE',
  solution: { order: '2' },
  dragonImages: [dragonImages.red, dragonImages.red],
  fireImages: [fireImages.red, fireImages.red],
  hints: (
    <div>
      <p className='hint'>Hint</p>
      <p className='hint'>Use the Order & other properties to move the fire</p>
      <p className='hint'>The order property specifies the order of a flexible item relative to the rest of the flexible items inside the same containere</p>
      <ol style={{ fontSize: '0.9rem' }}>
        <li>order: 2</li>
        <li>order: 1</li>
        <li>order: -1</li>
        <li>order: -2</li>
      </ol>
    </div>
  ),
});

export default level_6;
