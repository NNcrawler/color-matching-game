function newGame(){
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
	  this.isOpened= false;
	  console.log('success');
	};

	cards=[];
	htmlCards= document.getElementsByClassName('cards');
	for(i=1; i<=12; i++){
	  cards.push(new card(i, color[i-1]));
	  htmlCards[i-1].style.backgroundColor='black';
	};

};
newGame();
//----------------------Clicked card---------------
var status='closed';
var opened;
var score= 1000;
var counter=0;
function clickCard(id){
  if(status != 'open2' && status != 'notPlaying' && time>0 && cards[id].isOpened==false){
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
		cards[opened].isOpened=true;
		cards[id].isOpened=true;
		status='closed';
		counter+=1;
	  }else{
	    setTimeout(function(){
		  document.getElementById(temp).style.backgroundColor= 'black';
		  document.getElementById('card-'+(opened+1)).style.backgroundColor= 'black';
		  status='closed';
		},1000);
		score-=10
	  }
	  
	  if (counter%6==0 && counter!=0 && time>0){
	    newGame();
		console.log('newGame');
		counter=0;
		//status='notPlaying';
	  }

	};
  }
}

//----------------------Timer------------------
var time=20;
function timer(){
  setTimeout(function(){
    var temp;
	for(var i=0; i<time; i++){
	  temp+='#';
	}
	console.log(temp);
	time-=1;
	showTimer();
	if(time>0){
	  timer();
	}else{
	  status='notPlaying';
	  console.log(status);
	}
  },1000);
}
function showTimer(){
  var output='';
  for(var i=0; i<time; i++){
    output+='##'
  }
  document.getElementById('timer').innerHTML=output;
}

showTimer();

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
