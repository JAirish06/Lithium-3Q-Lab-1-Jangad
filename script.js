const c = 299780000;

function calculateTheEquation(){
   let velocity = parseFloat(document.getElementById("input-velocity").value);   
   let mass = parseFloat(document.getElementById("input-mass").value);     
  let k = mass * c *c *(Math.sqrt(1/(1-(velocity*velocity)/(c*c))))-mass * c*c;

   let output = `The Relativistic Kinetic Energy ${k} Joules.`;
   document.getElementById("result-relativistic").innerText = output;
}

