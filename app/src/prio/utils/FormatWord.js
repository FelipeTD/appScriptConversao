function formatWord(data) {
  var word = "";

  switch (data) {
    case "Cart&#227;o":
      word = "CARTÃO";
      break;
    case "Combust&#237;vel":
      word = "COMBUSTÍVEL";
      break;
    case "Km&#39;s":
      word = "KM'S";
      break;
    case "CD Sto Ant&#243;nio Cavaleiros":
      word = "CD Sto António Cavaleiros";
      break;
    case "PA Alg&#233;s":
      word = "PA Algés";
      break;
    case "PA P&#243;voa Varzim":
      word = "PA Póvoa Varzim";
      break;
    case "PA Fam&#245;es":
      word = "PA Famões";
      break;
    case "CD Penha Fran&#231;a":
      word = "CD Penha França";
      break;
    default:
      word = data;
      break; 
  };
  return word;
}