export const SpellParsing = inputSpell => {
  //to remove any whitespace between words
  let firstParse = inputSpell.toLowerCase().split(' ').join('');
  //to return as an array
  //ex) ["justify-content:flex-end", "align-content:center", ""]
  firstParse = firstParse.replace(/(\r\n|\n|\r)/gm, '').split(';');

  //empty plate that will be returned with css style that React can read
  let returnContainer = {};

  for (let i = 0; i < firstParse.length; i++) {
    //exclude any empty value and check if it has colon in the middle
    if (firstParse[i] !== '' && firstParse[i].includes(':')) {
      //ex) ["justify-content", "flex-end"]
      let secondParse = firstParse[i].split(':');

      //ex) ["justifyContent", "flex-end"] or [] //React can read it
      let tempReturn = makeReactCSS(secondParse[0], secondParse[1]);

      //if it has the right length, then push it to the return container
      if (tempReturn.length === 2 && tempReturn !== undefined) {
        returnContainer[tempReturn[0]] = tempReturn[1];
      }
    }
  }

  return returnContainer;
};

//  step2
//  find matching css that React.js can read
//  it returns an object and send it to <Fire /> to style
const makeReactCSS = (styleKey, styleValue) => {
  let key;
  let value = styleValue;

  switch (styleKey) {
    case 'justify-content':
      key = 'justifyContent';
      break;
    case 'align-items':
      key = 'alignItems';
      break;
    case 'flex-direction':
      key = 'flexDirection';
      break;
    case 'flex-wrap':
      key = 'flexWrap';
      break;
    case 'align-content':
      key = 'alignContent';
      break;
    default:
      return [];
  }

  return [key, value];
};
