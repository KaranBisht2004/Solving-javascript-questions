// Difference B/w DEBOUNCING and THROTTLING


// DEBOUNCING ---------------------------------------------------------------
// Jab hum kisi website par kuch search karte hain, toh har ek letter type karne par
// baar-baar API call nahi hoti.
// Jaise hi hum TYPE KARNA BAND (pause) karte hain, 'setTimeout'
// poora hota  he  tabhi final value ke sath ek hi baar API call jati hai.





// THROTTLING ----------------------------------------------------------
/*
  Throttling ka matlab hai — jese hamare paas ADD TO CART ka button hai, toh hum us par 
   throttle lagayenge taaki baar-baar click karne se API par baar-baar call na jaye.
  
   Hum ek fixed time (jaise 2 seconds) set kar dete hain. Jab pehla click hoga, toh API call 
   CHALI JAYEGI aur button lock ho jayega. 
  
   Ab us 2 seconds ke KHATAM HONE SE PEHLE agar user ne DUBAAR CLICK KIYA, toh woh naya 
   click CANCEL ya RESET nahi karega, balki woh naya click IGNORE (drop) ho jayega. 
   Agla click 2 seconds poore hone ke BAAD hi chalega.
*/
