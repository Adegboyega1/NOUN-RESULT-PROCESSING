'use strict';



const dept = ["None","B.Sc. Mathematics","B.Sc. Mathematics and Computer Science","B.Sc. Computer Science","B.Sc. Information Technology","B.Sc. Physics" ,"B.Sc. Chemistry","B.Sc. Biology","B.Sc. ESM","B.Sc. EST","B.Sc. Accounting","B.Sc. Banking and Finance","M.Sc. Information Technology"];
// console.log(dept);





function my() {
  for(const [i,  j ] of  dept.entries()){
  

  const name=j;
  // console.log(name);

  var x = document.createElement("INPUT");
  var t = document.createTextNode(name);

  x.setAttribute("for", name);
  x.setAttribute("type", "radio");
  x.setAttribute("name","dept");
  x.setAttribute("class",`${name} dep` );
  x.setAttribute("value", j );
  // x.setAttribute("class","welcome");
  x.setAttribute("id",name);
  x.appendChild(t);
  // document.querySelector("login");
  document.getElementById("myForm").insertBefore(x,document.getElementById("male"));
  }
  

};
 
my()
// myFunction()
document.getElementById("myForm").defaultValue = "NONE";
function myFunction() {
  for(const [i,  j ] of  dept.entries()){

    const name=j;
    // console.log(name);

    var x = document.createElement("LABEL");
    var t = document.createTextNode(name);

    x.setAttribute("for", name);
    // x.setAttribute("class","label");
    x.setAttribute("class",`${name} ded` )
    x.appendChild(t);
    document.getElementById("myForm").insertBefore(x,document.getElementById(name));
}
}

myFunction()