let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'Josisvaldocir'];

function bigestName(name){
  let bigName = '';
  for(key in name){
    if(bigName.length < name[key].length){
      bigName = name[key];
    }
  }
  return bigName;
}

console.log(bigestName(names));