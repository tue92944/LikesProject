neilcount=9
nicholecount=12
jimcount=9

var neilelement = document.querySelector("#toptext1");
var nicholeelement= document.querySelector("#toptext2");
var jimelement= document.querySelector("#toptext3");


function addNeil() {
neilcount++;
neilelement.innerText= neilcount + " like(s)";
console.log(neilcount);
}

function addNichole() {
    nicholecount++;
    nicholeelement.innerText= nicholecount + " like(s)";
    console.log(nicholecount);
}

function addJim (){
    jimcount++;
    jimelement.innerText=jimcount + " like(s)";
    console.log(jimcount);
}