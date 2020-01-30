export const SpellParsing = (inputSpell) => {

  //to remove any whitespace between words
  let firstParse = inputSpell.toLowerCase().split(' ').join('');
  //to return as an array
  //ex) ["justify-content:flex-end", "align-content:center", ""]
  firstParse = firstParse.replace(/(\r\n|\n|\r)/gm, "").split(";");

  //empty plate that will be returned with css style that React can read
  let returnContainer = {};

  for (let i = 0; i < firstParse.length; i++) {

    //exclude any empty value and check if it has colon in the middle
    if (firstParse[i] !== "" && firstParse[i].includes(":")) {

      //ex) ["justify-content", "flex-end"]
      let secondParse = firstParse[i].split(":");
      
      //ex) ["justifyContent", "flex-end"] or [] //React can read it
      let tempReturn = SpellParsing2(secondParse[0], secondParse[1]);

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
const SpellParsing2 = (firstSpell, lastSpell) => {
  if (firstSpell === "justify-content") {
    switch(lastSpell) {
      case "flex-start" :
        return ["justifyContent", "flex-start"];
      case "flex-end" :
        return ["justifyContent", "flex-end"];
      case "center" :
        return ["justifyContent", "center"];
      case "space-between" :
        return ["justifyContent", "space-between"];
      case "space-around" :
        return ["justifyContent", "space-around"];
      default:
        return [];
    }
  }
  else if (firstSpell === "align-items") {
    switch(lastSpell) {
      case "flex-start" :
        return ["alignItems", "flex-start"];
      case "flex-end" :
        return ["alignItems", "flex-end"];
      case "center" :
        return ["alignItems", "center"];
      case "baseline" :
        return ["alignItems", "baseline"];
      case "stretch" :
        return ["alignItems", "stretch"];
      default:
        return [];
    }
  }
  else if (firstSpell === "flex-direction") {
    switch(lastSpell) {
      case "row" :
        return ["flexDirection", "row"];
      case "row-reverse" :
        return ["flexDirection", "row-reverse"];
      case "column" :
        return ["flexDirection", "column"];
      case "column-reverse" :
        return ["flexDirection", "column-reverse"];
      default:
        return [];
    }
  }
  else if (firstSpell === "flex-wrap") {
    switch(lastSpell) {
      case "nowrap" :
        return ["flexWrap", "nowrap"];
      case "wrap" :
        return ["flexWrap", "wrap"];
      case "wrap-reverse" :
        return ["flexWrap", "wrap-reverse"];
      default:
        return [];
    }
  }
  else if (firstSpell === "align-content") {
    switch(lastSpell) {
      case "flex-start" :
        return ["alignContent", "flex-start"];
      case "flex-end" :
        return ["alignContent", "flex-end"];
      case "center" :
        return ["alignContent", "center"];
      case "space-between" :
        return ["alignContent", "space-between"];
      case "space-around" :
        return ["alignContent", "space-around"];
      case "stretch" :
        return ["alignContent", "stretch"];
      default:
        return [];
    }
  }
  //////////////////////
  //Your new code here//
  //////////////////////


  else {
    return [];
  }
};