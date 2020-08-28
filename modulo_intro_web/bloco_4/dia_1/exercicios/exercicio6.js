let peca;

peca = "Bispo";



switch(peca.toLowerCase()){
  case 'peao':
    console.log('move para frente uma casa por vez e captura em diagonal');
    break;
  case 'torre':
    console.log('move em linha reta quantas casas necessárias');
    break;
  case 'cavalo':
    console.log('move em L');
    break;
  case 'bispo':
    console.log('move em diagonal');
    break;
  case 'rainha':
    console.log('move livremente');
    break;
  case 'rei':
    console.log('move em qualquer direção, mas somente uma casa');
    break;

  default:
    console.log('Peça não encontrada!');
  
}