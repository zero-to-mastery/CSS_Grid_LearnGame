import level_1 from './Levels/Level-1';
import level_2 from './Levels/Level-2';
import level_3 from './Levels/Level-3';
import level_4 from './Levels/Level-4';
import level_5 from './Levels/Level-5';

class Levels {
  constructor() {
    this.currentLevel = 1;
    this[1] = level_1;
    this[2] = level_2;
    this[3] = level_3;
    this[4] = level_4;
    this[5] = level_5;
  }
}

export default Levels;
