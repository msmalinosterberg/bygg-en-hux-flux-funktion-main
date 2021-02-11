// Här är filen du ska ändra i! Huxflux-funktionen ska returnera
// en lista med 7 unika slumpmässiga heltal mellan 1 och 35. När
// du öppnat projektet i browsern, kan du trycka på "Prova funktionen"
// för att köra den och "Kör tester på funktionen" för att se om alla
// krav uppfylls. 
// Denna funktion behöver fyllas på med logik så att den returnerar
  // en lista med 7 unika slumpmässiga heltal mellan 1 och 35!



const huxflux = () => {

  let list = []; 

  for(let i = 0; i  < 7; i++ ) {
    let number = Math.floor(Math.random() * 35) +1; 

  if(!list.includes(number)) {
    list.push(number)
  } else {
    i -=1; 
  }
 }
  return list; 
}

export {
  huxflux
}
