# Contributing

> You are always welcome to contribute to this project!

## Getting Started

Before you start, please read through all the resources carefully on this link below.

- [HowToContribute](https://github.com/zero-to-mastery/start-here-guidelines) - Open source contribution guideline for all Zero to Mastery course students

## Prerequisites

You could contribute whatever you want. But finishing `React Robofriends Section` is highly recommended. Here's a guideline what you could do depends on what Andrei's course you've done.

If you've already finished `React Robofriends Section`, then you could do these lists on below.

```
1.FooterComponent Component // Need to design. It's empty now.

2.Next Stage Development!!! It's gonna be very very fun!
All detail about this can be found the end of this page.
Scroll down to see how to create new stage guide!

3.Any typo errors.

4.Certificate css format.

```

If you've all done with Andrei's `ZeroToMaster CWD` course, then you could do this.

```
1.Header Component // score recording system connected with a database.
The database could be anything like MongoDB, Firebase, or PostgreSQL.

2.Rebuild this whole app with React & Redux

3.Integrate with SCSS or React Router
```

If you are taking Andrei's `Junior to Senior` course, then you could contribute these.

```
1.Performance checking

2.Unit Test

3.Issue Reporting

4.Core function optimization
```

## Next Stage: Development

> It's going to be really fun. Follow along this guideline! And make your pull request!

### Add a Flex Style Property

Go to `src > Components > SpellParsing > SpellParsing.js`. It's a core function for this app. It converts user input to JSX style css code. For instance, if user inputs "justify-content : flex-end", then the function converts it to "justifyContent : flex-end" which React can read. So before you make your own stage, you need to check if the function can be read. If it cannot, you can add the property to the switch statement in the makeReactCSS() function.

Let say you want to add 'flex-flow' property. Here's a sample snippet.

```javascript

  switch (styleKey) {
    // You would add the lines below //
    case 'flex-flow':
      key = 'flexFlow';
      break;
    // You would add the lines above //
    ...
    default:
      break;
  }

```

### Add a New Level

1. Go to `src > LevelData > Levels`

2. Duplicate the Level-Template.js

3. Rename to Level-(level-number)

4. Update the data for the level

```
  // level number
  level: 1,

  // level header
  header: 'Level Header',

  // level solution (a React-compatible object that can have multiple properties)
  solution: { alignItems: 'flex-end' },

  // array of dragon images you want to use ( can be red, blue, or yellow )
  dragonImages: [dragonImages.red, dragonImages.yellow],

  // array of fire images you want to use ( can be red, blue, or yellow )
  fireImages: [fireImages.red, fireImages.yellow],

  // a React component that gives the player hints for the current level
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
```

5. Import the level into src > LevelData > Levels.js
   `import level_1 from './Levels/Level-1';`

6. Add the level you made to the Levels object
   `this[1] = level_1;`

That's it. Let's run this code!

You like it? then make your pull request!!!

### Additional step

- Okay. You want to change the colors of fires and monsters? Go to `Board4_markedToDelete.js`. We have three types of fires and dragons. You can simply change the imported image, and then the view of your stage will be changed.

Choose what you want from this snippet below.

```javascript
import DragonR from '../../img/dragon_red.png';
import DragonY from '../../img/dragon_yellow.png';
import DragonB from '../../img/dragon_blue.png';

import FireR from '../../img/fire_red.png';
import FireY from '../../img/fire_yellow.png';
import FireB from '../../img/fire_blue.png';
```

- Okay. You want to give some hint for the players? Go to `Control4.js`. Edit the text. You want to change some css? You can customize it! Create a new classname. And put it at `Level4.css`.

I think that's all for the guideline `How to build next stage`! Before you make a pull request, please make sure that if someone already developed `stage #4` in the ZTM master repository. In that case, you should sync first and then change the name of your stage, at #5 or accordingly.

If you have anyquestion, please leave a comment on Discord channel #group-project.
