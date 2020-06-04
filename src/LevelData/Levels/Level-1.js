import React from 'react';
import Level from '../Level';

import { images } from '../assets';
let { dragonImages, fireImages } = images;

const level_1 = new Level({
  level: 1,
  header:
    'Our small ZTM town is now being attacked by the Dragons!!! We need your help. Hero! There are three types of dragons; red, blue and yellow. To slay that dragons, we need to spell fire that matches their color. Please help us now!',
  solution: { justifyContent: 'flex-end' },
  dragonImages: [dragonImages.red, dragonImages.blue],
  fireImages: [fireImages.red, fireImages.blue],
  hints: (
    <div>
      <p className='hint'>
        To fire at the end of the field, do this.{' '}
        <mark style={{ backgroundColor: 'blue', color: 'white' }}>justify-content : flex-end;</mark>
      </p>
    </div>
  ),
});

export default level_1;
