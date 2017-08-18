//---------------------------initial COLOR-------------
var color= ['wheat', 'wheat', 'red', 'red', 'green','green', 'cyan', 'cyan',
'brown','brown', 'gold', 'gold'];

function randomSixColorToId(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
color= randomSixColorToId(color);
//----------------------------INIT CARDS-------------
var card= function(ids, colors){
  this.id= ids;
  this.color= colors;
  console.log('success');
};

cards=[];
for(i=1; i<=12; i++){
  cards.push(new card(i, color[i-1]));
};
//----------------------Clicked card---------------
var status='closed';
var opened;
var score= 1000;
function clickCard(id){
  if(status != 'open2'){
    temp='card-'+(id+1);
	document.getElementById(temp).style.backgroundColor= cards[id].color;
	if(status=='closed'){
	  status='open1';	
	  opened=id;}
	else if(status=='open1'){
	  //if kartu 2 2nya beda close kartu
	  //if kartu 2 2nya sama kartu tetap kebuka dan skor bertambah dan status ==closed
	  status='open2';
	  if(cards[opened].color==cards[id].color){
		console.log(cards[opened].color);
		console.log(cards[id].color);
		status='closed';
	  }else{
	    setTimeout(function(){
		  document.getElementById(temp).style.backgroundColor= 'black';
		  document.getElementById('card-'+(opened+1)).style.backgroundColor= 'black';
		  status='closed';
		},1000);
		score-=10
	  }

	};
  }
}

document.getElementById('card-1').addEventListener('click', function(){clickCard(0)});
document.getElementById('card-2').addEventListener('click', function(){clickCard(1)});
document.getElementById('card-3').addEventListener('click', function(){clickCard(2)});
document.getElementById('card-4').addEventListener('click', function(){clickCard(3)});
document.getElementById('card-5').addEventListener('click', function(){clickCard(4)});
document.getElementById('card-6').addEventListener('click', function(){clickCard(5)});
document.getElementById('card-7').addEventListener('click', function(){clickCard(6)});
document.getElementById('card-8').addEventListener('click', function(){clickCard(7)});
document.getElementById('card-9').addEventListener('click', function(){clickCard(8)});
document.getElementById('card-10').addEventListener('click', function(){clickCard(9)});
document.getElementById('card-11').addEventListener('click', function(){clickCard(10)});
document.getElementById('card-12').addEventListener('click', function(){clickCard(11)});

//initial set random color list color
//initial card with id and random pair color
//init status= open 1, open 2, closed
//event handler kalau card di click
//kalau card di click rubah jadi warna sesuai id
//kalau card ke dua di click masuk ke 
