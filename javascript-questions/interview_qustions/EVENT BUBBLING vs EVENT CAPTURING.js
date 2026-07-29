// ==============================================================================
// EVENT BUBBLING vs EVENT CAPTURING (TRICKLING)
// ==============================================================================
// Dono JavaScript ke Event Propagation ke phases hain.
// jab kisi nested element par click/event hota hai, toh browser 3 phases se guzarta hai:
//
// 1. CAPTURING PHASE: Top (window) se Niche (target element) ki taraf jana.
// 2. TARGET PHASE   : Us exact element par pahunchna jis par click hua.
// 3. BUBBLING PHASE : Bottom (target element) se Upar (window) ki taraf jana.
// ==============================================================================

// HTML Structure Example:
// <div id="parent">
//   <button id="child">Click Me</button>
// </div>

const parent = document.getElementById('parent');
const child = document.getElementById('child');


// 1. EVENT BUBBLING (Default Behavior - Inside to Outside)
// ------------------------------------------------------------------------------
// Jab aap child par click karte ho, toh event pehle child par chalega, 
// fir uske parent, grand-parent, aur window tak BUBBLE (upar) hoke jayega.

child.addEventListener('click', () => {
  console.log("Child Clicked (Bubbling)"); // 1st print hoga
});

parent.addEventListener('click', () => {
  console.log("Parent Clicked (Bubbling)"); // 2nd print hoga
});


// 2. EVENT CAPTURING / TRICKLING (Outside to Inside)
// ------------------------------------------------------------------------------
// addEventListener ke 3rd argument mai `{ capture: true }` ya `true` pass karte hain.
// Isme event top parent se shuru hoke neeche target tak CAPTURE (neeche) hota hai.

parent.addEventListener('click', () => {
  console.log("Parent Clicked (Capturing)"); // 1st print hoga
}, true); // <--- 'true' enables capturing

child.addEventListener('click', () => {
  console.log("Child Clicked (Capturing)"); // 2nd print hoga
}, true);


// 3. HOW TO STOP PROPAGATION? (e.stopPropagation())
// ------------------------------------------------------------------------------
// Agar chahte ho ki child click karne par parent ka event trigger NA ho:

child.addEventListener('click', (e) => {
  e.stopPropagation(); // Event ko yahin rok deta hai (Aage bubble/capture nahi hone deta)
  console.log("Only Child Executed!");
});


/*
  SUMMARY IN COMMENTS:
  ------------------
  - Bubbling  : Child ---> Parent ---> Window (Default, Neeche se Upar)
  - Capturing : Window ---> Parent ---> Child ({ capture: true }, Upar se Neeche)
  - Stop      : e.stopPropagation() se propagation ruk jata hai
*/