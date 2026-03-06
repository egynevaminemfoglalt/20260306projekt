
let titkosSzam = Math.floor(Math.random() * 100) + 1;
let probak = 0;

function ellenorzes() {
    let beviteliMezo = document.getElementById("tippem");
    let uzenetHelye = document.getElementById("uzenet");
    let szamlaloHelye = document.getElementById("szamlalo");
    let ujraGomb = document.getElementById("ujra-gomb");

    let tipp = Number(beviteliMezo.value);

  
    if (beviteliMezo.value === "") {
        uzenetHelye.innerHTML = "Kérlek, írj be egy számot!";
        uzenetHelye.style.color = "red";
        return;
    }

    probak = probak + 1;
    szamlaloHelye.innerHTML = probak;

    if (tipp < titkosSzam) {
        uzenetHelye.innerHTML = "Túl kicsi! ↑";
        uzenetHelye.style.color = "blue";
    } 
    else if (tipp > titkosSzam) {
        uzenetHelye.innerHTML = "Túl nagy! ↓";
        uzenetHelye.style.color = "orange";
    } 
    else {
        uzenetHelye.innerHTML = "Gratulálok! Eltaláltad! 🎉";
        uzenetHelye.style.color = "green";
        
        
        beviteliMezo.disabled = true;
        
        ujraGomb.style.display = "inline-block";
    }
}

function ujJatek() {
    
    titkosSzam = Math.floor(Math.random() * 100) + 1;
    probak = 0;

    
    document.getElementById("szamlalo").innerHTML = "0";
    document.getElementById("uzenet").innerHTML = "";
    
    let beviteliMezo = document.getElementById("tippem");
    beviteliMezo.value = "";
    beviteliMezo.disabled = false; 
    
    document.getElementById("ujra-gomb").style.display = "none";
}