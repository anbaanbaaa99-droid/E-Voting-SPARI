async function login(){

const nama=document.getElementById("nama").value.trim();

const nik=document.getElementById("nik").value.trim();

if(nama==""){

alert("Nama belum diisi");

return;

}

if(nik==""){

alert("NIK belum diisi");

return;

}

const result=await callAPI("checkVoter",{

nama:nama,

nik:nik

});

if(result.status=="voted"){

alert("NIK ini sudah melakukan voting.");

return;

}

sessionStorage.setItem("nama",nama);

sessionStorage.setItem("nik",nik);

window.location="vote.html";

}
