var slike= new Array();
slike[0]= "https://csgo-stats.com/custom/img/favourite-weapons/3d/ak47.png";
slike[1]= "https://static.wikia.nocookie.net/cswikia/images/7/77/CSGO_M4A4_Inventory.png/revision/latest?cb=20130813202347";
slike[2]= "https://static.wikia.nocookie.net/cswikia/images/8/81/CSGO_M4A1-S_Inventory.png/revision/latest?cb=20130824215315";
slike[3]= "https://static.wikia.nocookie.net/cswikia/images/9/93/CSGO_Galil_AR_Inventory.png/revision/latest?cb=20130813202237";
slike[4]= "https://static.wikia.nocookie.net/cswikia/images/e/e4/CSGO_FAMAS_Inventory.png/revision/latest?cb=20130813202130";
slike[5]= "https://static.wikia.nocookie.net/cswikia/images/4/47/CSGO_SSG_08_Inventory.png/revision/latest?cb=20130813202813";
slike[6]= "https://static.wikia.nocookie.net/cswikia/images/1/16/CSGO_SG_553_Inventory.png/revision/latest?cb=20130813202530";
slike[7]= "https://static.wikia.nocookie.net/cswikia/images/9/92/CSGO_AUG_Inventory.png/revision/latest?cb=20130813202013";
slike[8]= "https://static.wikia.nocookie.net/cswikia/images/2/23/CSGO_AWP_Inventory.png/revision/latest?cb=20130813202700";
slike[9]= "https://static.wikia.nocookie.net/cswikia/images/b/bf/CSGO_SCAR-20_Inventory.png/revision/latest?cb=20130813203014";
slike[10]= "https://static.wikia.nocookie.net/cswikia/images/3/35/CSGO_G3SG1_Inventory.png/revision/latest?cb=20130813202929";

var trenutnaSlika = 0;
var ukupnoSlika= slike.length;

function naredna() {
	trenutnaSlika++;
	if (trenutnaSlika == ukupnoSlika) {
		
		tremutnaSlika=0;
	}
	document.getElementById("slika").src= slike[trenutnaSlika];
}


function prethodna() {
    trenutnaSlika--;
    if (trenutnaSlika == -1) {
        trenutnaSlika = ukupnoSlika - 1;
    }
    document.getElementById("slika").src = slike[trenutnaSlika];
}
var uKrug;

function pokreni() {
	uKrug=setInterval(naredna,3000);
	document.getElementById("prethodna").disabled = true;
		document.getElementById("naredna").disabled = true;
			document.getElementById("pokreni").disabled = true;
	
}

function zaustavi() {
	clearInterval(uKrug);
	document.getElementById("prethodna").disabled = false;
		document.getElementById("naredna").disabled = false;
			document.getElementById("pokreni").disabled = false;
}