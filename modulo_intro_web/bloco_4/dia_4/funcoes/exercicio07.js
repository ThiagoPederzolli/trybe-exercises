function palavra(word, ending){
  let end = '';
  let endword = '';
  for(i = 1; i < ending.length + 1; i += 1){    
    if(word[word.length - i] == ending[ending.length - i]){
      end += ending[ending.length - i];
      endword += word[word.length - i];
    }else{
      return false;
    }
  }
  if (end === endword && end != ''){
    return true;
  }else{
    return false;
  }

}

console.log(palavra('javierfernando', 'javier'));







// function palavra(word, ending){
//   if(word.indexOf(ending) > -1){
//     return true
//   }else{
//     return false
//   }
// }



// // function palavra(ending, word){
// //   if(ending.includes(word)){
// //     return true
// //   } else {
// //     return false
// //   }
// // }

