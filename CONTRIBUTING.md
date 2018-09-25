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
```

## Next Stage Development (Stage 4)
> It's going to be really fun. Follow along this guideline! And make your pull request!

### Step1

Go to `src > Components > SpellParsing > SpellParsing.js`. It's a core function for this app. It convernts user input to JSX style css code. For instance, if user inputs "justify-content : flex-end", then the function converts it to "justifyContent : flex-end" which React can read. So before you make your own stage, you need to check if the function can read. If there's not what you want, then you can simply add the code.

Let say you want to add 'align-self' property. Then code like this. Here's a sample snippet. 

```javascript

  else if (firstSpell === "align-self") {
    switch(lastSpell) {
      case "flex-start" :
        return ["alignSelf", "flex-start"]
      case "flex-end" :
        return ["alignSelf", "flex-end"]
      case "center" :
        return ["alignSelf", "center"]
      case "baseline" :
        return ["alignSelf", "baseline"]
      case "stretch" :
        return ["alignSelf", "stretch"]
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

add this right after `import Control3 ... `
```
import Control4 from './Subcomponents/Level4/Control4';
```
then at the end of Route fuction.
```
case 4:
	return <Control4 spell_input={spell_input} spell_submit={spell_submit} level={level}/>
```
