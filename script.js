function reloadPage(){
    location.reload();
    };
    

    document.getElementById("player")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("guess").click();
        }
});




var createDistinctNumber = function (){
var newNumber = "";
while(newNumber.length !== 4)
	{
		var num = Math.floor(Math.random() * 10);
		if(newNumber.length===0 && num ===0) //ilk basamak 0 ise devam et 
			continue;
			
		if(!newNumber.includes(num))	
			newNumber+=num;
	}
	return newNumber;
};

var sayi = createDistinctNumber();
console.log(sayi);

var guess = function (){
    let girdi = document.querySelector('#player').value;
    let arr = [];

    for (let i = 0; i<4; i++){
        let playerarr = parseInt (girdi.substr(i,1));
        arr.push(playerarr)
}
    
    check (arr);
};

var p="";
var n="";

var check = function  (tahmin){
p=""
n=""
let pozitif = 0;
let negatif = 0;
let turns = parseInt(document.querySelector('.turns').innerHTML);


for (let i = 0; i <4; i++){
  
    if (tahmin[i]==sayi[i]){

      p += (tahmin[i]);
      
        pozitif++;

    } 
    else if (sayi.indexOf(tahmin[i])>=0){//tahmin içindeki sayı asıl sayıda varsa -1 den farklı değer döner.{
          
        negatif++;
         n += (tahmin[i]);

    }
}
// console.log(p);
// console.log(n);

 turns --;
 document.querySelector('.turns').innerHTML = turns;


if (turns ==0 || pozitif==4 ){
    let status = 'Bitti';
    if (pozitif == 4) {
        status = ' Tebrikler!';
    }
    endGame(tahmin, turns, status);
}
  feedback(tahmin,pozitif,negatif);

};




var feedback = function (tahmin,pozitif,negatif){

    let table = document.getElementById("turnsLog");
    let newLine = document.createElement("p");
    newLine.setAttribute("id", "p");
    newLine.id="someid";
    newLine.innerHTML = 'Deneme'+(10-document.querySelector('.turns').innerHTML) + ':&nbsp;' + tahmin ;
    table.appendChild(newLine);

    let greenchar = document.createElement("b");
    greenchar.setAttribute("id","b");
    greenchar.id="greenid";
    greenchar.innerHTML=" "+" "+" "+p;
    table.appendChild(greenchar);
    let redchar = document.createElement("b"); 
    redchar.setAttribute("id","b");
    redchar.id="redid";
    redchar.innerHTML= " "+" "+" "+n;
    table.appendChild(redchar);

  //   var g = document.getElementById("greenid").innerHTML;
  // console.log(g);
  // document.getElementById("greenid").style.color="green"
  //   var r = document.getElementById("redid").innerHTML;
  // document.getElementById("redid").style.color="red";

  };

    // var a = document.getElementById("someid").innerHTML;
    
    // `<span style="color:blue">${a[20]}</span>`
    //   document.getElementById("someid").style.color="red";
      

var endGame = function (tahmin, turns, status){
    document.querySelector('.number').innerHTML=sayi;
    alert(status + " "+"Tuttuğum sayı:" + sayi);
};