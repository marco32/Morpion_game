$(document).ready(function () {	

	var p1 = $('#Player1').val();
	var p2 = $('#Player2').val();
	var player;
	var coup = 0;
	var res =[[1,1,1],[1,1,1],[1,1,1]];
	var bool = true;
	

	$('td').click(function(){
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
						alert("Victoire de "+$('#Player2').val());
					}
					else if  (checkWin.includes('OOO'))
					{
						bool = false;
						alert("Victoire de "+$('#Player1').val());
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
						alert("Victoire de "+$('#Player2').val());
					}
					else if  (checkWin.includes('OOO'))
					{
						bool = false;
						alert("Victoire de "+$('#Player1').val());
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
				alert("Victoire de "+$('#Player2').val());
			}
			else if  (x1.includes('OOO') || x2.includes('OOO'))
			{
				bool = false;
				alert("Victoire de "+$('#Player1').val());
			}
		}
	});

	
});