$(document).ready(function () {	
	if ('serviceWorker' in navigator){
			navigator.serviceWorker.register('sw.js',{scope: '/Morpion_game/'})
			.then(function(reg){
			})
			.catch(function(error){
			});
		}

	var player1 = $('#Player1').val();
	var player2 = $('#Player2').val();
	var player;
	var coup = 0;
	var res = [[1,1,1],[1,1,1],[1,1,1]];
	var bool = true;

	$('#reset').on('click',function(){
	 	coup = 0;
	 	res = [ 	[1, 1, 1],
					[1, 1, 1],
					[1, 1, 1],	];
		bool = true;
	 	$("td").html("");
	 	$("#winner").html("");
	 });

	$('td').click(function(){
			egalité();
		if(bool){
			coup++;
			if(!$(this).html()){
				coup%2 ?	player="O" : player="X";	
			} else {
				coup--;
			}
		}
	})

	$("td").on("click",function(){
		if(bool){
			var l = $(this).parent().attr("value")
			var c = $(this).attr("value")

			if  (res[l][c] === 1){
				res[l][c] = player;
				$(this).html(player);
			}
		}
	})
	$('td').on('click', function(){
		if (bool)
		{
			for  (var i = 0; i <= 2; i++)
			{
				var checkWin = "";
				for  (var j = 0; j <= 2; j++)
				{
					checkWin += res[i][j];
					if  (checkWin.includes('XXX'))
					{
						bool = false;
						$("#winner").append("Victoire de "+$('#Player2').val());
					}
					else if  (checkWin.includes('OOO'))
					{
						bool = false;
						$("#winner").append("Victoire de "+$('#Player1').val());
					}
				}
			}
		}
	});
	$('td').on('click', function(){
		if  (bool)
		{
			for  (var i = 0; i <= 2; i++ )
			{
				var checkWin = "";
				for  (var j = 0; j <= 2; j++)
				{
					checkWin += res[j][i];
					if  (checkWin.includes('XXX'))
						{
						bool = false;
						$("#winner").append("Victoire de "+$('#Player2').val());
					}
					else if  (checkWin.includes('OOO'))
					{
						bool = false;
						$("#winner").append("Victoire de "+$('#Player1').val());
					}
				}
			}
		}
	});
	$('td').on('click', function(){
		if  (bool)
		{
			var x1 = [res[0][0], res[1][1], res[2][2]].join("");
			var x2 = [res[2][0], res[1][1], res[0][2]].join("");

			if  (x1.includes('XXX') || x2.includes('XXX'))
			{
				bool = false;
				$("#winner").append("Victoire de "+$('#Player2').val());
			}
			else if  (x1.includes('OOO') || x2.includes('OOO'))
			{
				bool = false;
				$("#winner").append("Victoire de "+$('#Player1').val());
			}
		}
	});
	function egalité(){
				if (coup === 8){
			if( $('#winner').html()=== ""){

			$('#winner').append("Egalité")
			}

		}
	}
});