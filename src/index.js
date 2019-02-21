module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }
  const nominals = {
    "H": 50, 
    "Q": 25, 
    "D": 10, 
    "N": 5, 
    "P": 1
  };
  let coins = {}, numOfCoins;
  for (let nom in nominals) {
    numOfCoins = Math.floor(currency / nominals[nom]);
    if (numOfCoins > 0) {
      currency -= numOfCoins * nominals[nom];
      coins[nom] = numOfCoins;
    }
  }
  return coins;
}
