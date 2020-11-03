const DNY_V_TYDNU = ["Ne","Po","Ut","St","Ct","Pa","So"];

function PoNacteni() {
  let s = "Nějaký text...";
  console.log(s);
  console.log(s[4]);

console.log("*********");
  for (let i=0; i<s.length; i++) {
    console.log(s[i]);
  }

console.log("*********");
  for (let c of s) {
    console.log(c);
  }

console.log("*********");
  for (let d of DNY_V_TYDNU) {
    console.log(d);
  }

console.log("*********");
  let dp = new Array();
  dp.push("Prvni Polozka");
  dp.push("Druha Polozka");
  for (let p of dp) {
    console.log(p);

  }
}