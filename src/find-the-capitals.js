function findCapitals(str) {
  
  // return result.map((cap, i) => {
  //   return result.filter(() => {
  //     letter !== letter.isLowerCase()
  //     return i;
  //     }
  //   )
  // });

  // return [...s].map((c, i) => (c !== c.toLowerCase() ? i : -1)).filter((i) => i > -1);

  // return [...str].map((char, index) => {
  //   if (char !== char.toLowerCase()){
  //     return index;
  //   }}).filter((res)=> {
  //     return typeof res === 'number';
  //   })


  return [...str].map((char, i) => char !== char.toLowerCase()? i : -1).filter((res) => res > -1)






}

module.exports = findCapitals;
