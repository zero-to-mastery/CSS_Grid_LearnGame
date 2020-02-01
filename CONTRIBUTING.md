# Contributing
> You are always welcome to contribute to this project!

## Getting Started

Before you start, please read through all the resources carefully on this link below.

* [HowToContribute](https://github.com/zero-to-mastery/start-here-guidelines) - Open source contribution guideline for all Zero to Mastery course students

## Prerequisites

You could contribute whatever you want. But finishing `React Robofriends Section` is highly recommended. Here's a guideline what you could do depends on what Andrei's course you've done. 

If you've already finished `React Robofriends Section`, then you could do these lists on below.

```
1.Footer Component // Need to design. It's empty now.

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

## Next Stage Development (Stage 4)
> It's going to be really fun. Follow along this guideline! And make your pull request!

### Step1

Go to `src > Components > SpellParsing > SpellParsing.js`. It's a core function for this app. It convernts user input to JSX style css code. For instance, if user inputs "justify-content : flex-end", then the function converts it to "justifyContent : flex-end" which React can read. So before you make your own stage, you need to check if the function can read. If there's not what you want, then you can simply add the code.

Let say you want to add 'flex-flow' property. Then code like this. Here's a sample snippet. 

```javascript

  else if (firstSpell === "flex-flow") {
    switch(lastSpell) {
      case "row" :
        return ["flexFlow", "row"]
      case "row-reverse" :
        return ["flexFlow", "row-reverse"]
      case "column" :
        return ["flexFlow", "column"]
      case "column-reverse" :
        return ["flexFlow", "column-reverse"]
      case "wrap" :
        return ["flexFlow", "wrap"]
      case "wrap-reverse" :
        return ["flexFlow", "wrap-reverse"]
      default:
        return [];
    }
  }

```

Then just simply add it at the end of the fuction. But be careful. Put it before 'else' statement.

```javascript

  <Your new code here >

  else {
    return [];
  }

```

### Step2

Go to `src > Components > Control.js`. Control.js contains all the views on the left. It contains questions and html forms. So first thing you could do is..

Add it after `import Control3 ... `
```javascript
import Control4 from './Subcomponents/Level4/Control4';
```
then add it at the end of Route fuction.
```javascript
case 4:
	return <Control4 spell_input={spell_input} spell_submit={spell_submit} level={level}/>
```

So it's like copy and paste. And change the numbers from 3 to 4. That's it.

### Step3

Go to `src > Components > Board.js`. Board.js contains all the views on the right. It contains the square board, fires and the Dragons. It's pretty much the same with the step 2.

Add it after `import Board3_markedToDelete ... `
```javascript
import Board4_markedToDelete from './Subcomponents/Level4/Board4_markedToDelete';
```
then add it at the end of Route fuction.
```javascript
case 4:
	return <Board4_markedToDelete fire_spell={fire_spell} level={level}/>
```

Okay. Let's move on to the next step. 

### Step4

You should create a folder `Level4` under this path. `src > Components > Subcomponents > "Level4"`. So copy all the files in `Level3` and paste it to `Level4`. Change the file name by editting `3` to `4`.
So the list of files will look like this.

```
Board4_marked-to-delete.js
Control4.js
Level4.css
```

Each file contains unique view for the stage 4. You need to edit only one line of code for each!!! One line. 
On Board4_marked-to-delete.js & Control4.js, just edit it `import './Level3.css'` to `import './Level4.css'`. 

### Step5

Go to `Level4.css`. It's important step! You can see two class names. Change the names from `~3` to `~4`. 
`.board_fires4` will setup the initial position for the fires. In most casees, you don't need to change. User will change the position. 
`.board_monsters4` will setup the initial position for the monsters. Since we decided to use `flex-flow` property, let's do this.

```css
.board_monsters4{
  display: flex; /*default value => flex*/
  flex-flow: column-reverse;
  align-items: center;
}

```

So the solution and the user input must match with 'flex-flow: column-reverse' & 'align-items: center'. You got it right?

### Step6

Go to `src > Components > Solutions > SolutionContainer.js`. It's another core function that returns the solutions. So add the solution for the stage 4 like below snippet.

```javascript
case "solution4":
	return {flexFlow: "column-reverse", alignItems: "center"}
``` 

Be careful. It's an javascript object. {key : "value", key2 : "value2"} format. 

I think that's it for now. Let's run this code!

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






hey i am kartik beginner dont mind this change