function palavra(ending, word){
  if(ending.includes(word)){
    return true
  } else {
    return false
  }
}

console.log(palavra('coca-cola', 'bola'));