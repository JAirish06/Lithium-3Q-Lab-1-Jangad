const c = 2.9978e8;

function calculateTheEquation(){
   let velocity = parseFloat(document.getElementById("input-velocity").value);   
   let mass = parseFloat(document.getElementById("input-mass").value);     
  let k = (mass*c**2)/Math.sqrt(1/(1-velocity**2/(c**2)));

   let output = `The Relativistic Kinetic Energy ${k} Joules.`;
   document.getElementById("result-relativistic").innerText = output;
}

