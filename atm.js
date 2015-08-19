$(document).ready(function(){
var atm = this

$('#deposit1').on('click', addFundsE)
$('#withdraw1').on('click', removeFundsE)
$('#deposit2').on('click', addFundsS)
$('#withdraw2').on('click', removeFundsS)


// adding funds to the everyday account
function addFundsE(){
	var previousBalance = $('#balance1');
    var result = $(previousBalance).text();
    console.log(result)

    var currentBalance = parseInt(result.replace("$", ""));
    console.log(currentBalance)
   
	var newFunds = parseInt($('#amount1').val());
	console.log(newFunds)

	previousBalance.text(function(){
		var total = currentBalance + newFunds;
		return "$" + total;
	});

$('#amount1').val("")
$('#balance1').css('background-color', 'grey')
}
  // adding funds to the savings account
 function addFundsS(){
	var previousBalance = $('#balance2');
    var result = $(previousBalance).text();
    console.log(result)

    var currentBalance = parseInt(result.replace("$", ""));
    console.log(currentBalance)
   
	var newFunds = parseInt($('#amount2').val());
	console.log(newFunds)

	previousBalance.text(function(){
		var total = currentBalance + newFunds;
		return "$" + total;
	});

$('#amount2').val("")
$('#balance2').css('background-color', 'grey')
}
// withdraw from everyday account
function removeFundsE(){
	var previousBalance = $('#balance1');
    var result = $(previousBalance).text();
    console.log(result)

    var currentBalance = parseInt(result.replace("$", ""));
    console.log(currentBalance)

	var newFunds = parseInt($('#amount1').val());
	console.log(newFunds)

	previousBalance.text(function(){
		var total = currentBalance - newFunds;
		// Trying to get the accounts to work together
	var dualWithdraw = function(){
		if(removeFundsE.total < 0){
			var leftOver = newFunds - total;
			return leftOver;
			var doubleWithdraw = removeFundsS(total) - leftOver
		};
	}
	     if (total > 0){
			return "$" + total;
		}else if (total < 0){
			return "$" + currentBalance
		};
	
	});

$('#amount1').val("")
$('#balance2').css('background-color', 'grey')
}
// withdraw from savings account
function removeFundsS(){
	var previousBalance = $('#balance2');
    var result = $(previousBalance).text();
    console.log(result)

    var currentBalance = parseInt(result.replace("$", ""));
    console.log(currentBalance)

	var newFunds = parseInt($('#amount2').val());
	console.log(newFunds)

	previousBalance.text(function(){
		var total = currentBalance - newFunds;
		if (total > 0){
			return "$" + total;
		}else{
			return "$" + currentBalance
		};
		
	});

$('#amount2').val("")
$('#balance2').css('background-color', 'grey')
}



})

