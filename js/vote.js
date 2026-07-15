let selectedCandidate=null;

let candidates=[];

window.onload=loadCandidate;

async function loadCandidate(){

const result=await callAPI("getCandidates");

candidates=result.data;

const container=document.getElementById("candidateContainer");

container.innerHTML="";

candidates.forEach(candidate=>{

container.innerHTML+=`

<div

class="card"

onclick="selectCandidate('${candidate.id}')"

id="card${candidate.id}"

>

<img src="${candidate.photo}">

<div class="number">

${candidate.number}

</div>

<div class="name">

${candidate.name}

</div>

<div class="motto">

${candidate.motto}

</div>

</div>

`;

});

}
function selectCandidate(id){

selectedCandidate=id;

document

.querySelectorAll(".card")

.forEach(card=>{

card.classList.remove("selected");

});

document

.getElementById("card"+id)

.classList.add("selected");

document

.getElementById("voteButton")

.disabled=false;

}
function showConfirm(){

const kandidat=candidates.find(c=>c.id==selectedCandidate);

document

.getElementById("candidateName")

.innerHTML=kandidat.name;

document

.getElementById("confirmModal")

.style.display="flex";

}
function closeModal(){

document

.getElementById("confirmModal")

.style.display="none";

}
async function submitVote(){

const result=await callAPI(

"vote",

{

nama:sessionStorage.getItem("nama"),

nik:sessionStorage.getItem("nik"),

candidate:selectedCandidate

}

);

if(result.status=="success"){

window.location="success.html";

}else{

alert(result.message);

}

}
