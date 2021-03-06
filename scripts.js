$(function(){
	
	$('.js-readout').text('0');

	//CODE FOR WHAT HAPPENS WHEN WE CLICK THE NUMBER BUTTONS
		$('.js-num0').click(function(){
			updateNumber('0');//I'VE REPLACED THIS STUFF WITH A FUNCTION - LOOK DOWN LOWER IN THE CODE TO SEE WHAT HAPPENS!
		});
		
		$('.js-num1').click(function(){
			updateNumber('1');
		});
		
		$('.js-num2').click(function(){
			updateNumber('2');
		});

		$('.js-num3').click(function(){
			updateNumber('3');
		});
		
		$('.js-num4').click(function(){
			updateNumber('4');
		});
		
		$('.js-num5').click(function(){
			updateNumber('5');
		});

		$('.js-num6').click(function(){
			updateNumber('6');
		});

		$('.js-num7').click(function(){
			updateNumber('7');
		});

		$('.js-num8').click(function(){
			updateNumber('8');
		});

		$('.js-num9').click(function(){
			updateNumber('9');
		});



	//THIS IS THE CODE FOR OPERATIONS BUTTONS (PLUS, MINUS, ...)
		$('.js-multiply').click(function(){
			updateStorage('multiply');
			$('.js-readout').text('0');
		});

		$('.js-add').click(function(){
			updateStorage('add');
			$('.js-readout').text('0');
		});

		$('.js-subtract').click(function(){
			updateStorage('subtract');
			$('.js-readout').text('0');
		});

		$('.js-divide').click(function(){
			updateStorage('divide');
			$('.js-readout').text('0');
		});

		//EXPONENT BUTTON CODE IS HERE!
		$('.js-exponent').click(function(){
			updateStorage('exponent');
			$('.js-readout').text('0');
		});

		//NEGATIVE BUTTON IS HERE	
		$('.js-negative').click(function(){
			negative = !negative; //if negative is true, make it false and vice versa.
			$('.js--negative-marker').toggleClass('s-visible');
		});


	//THIS IS THE CODE TO DO THE CALCULATIONS
		$('.js-calculate').click(function(){
			var output;
			var tempNumber = parseInt(num);

			//IF THIS IS A NEGATIVE NUMBER HANDLE THAT
			if(negative) tempNumber = makeNegative(tempNumber);
			$('.js--negative-marker').removeClass('s-visible');//Hide the negative sign

			if(action == "add") output = storage + tempNumber;
			else if(action == "subtract") output = storage - tempNumber;
			else if(action == "multiply") output = storage * tempNumber;
			else if(action == "divide") output = storage / tempNumber;

			//AND THIS IS THE CODE THAT CONTROLS DOING THE EXPONENT MATH
			else if(action == "exponent") output = Math.pow(storage, tempNumber);


			storage = num = parseInt(output);

			$('.js-storage').text(storage);

			$('.js-readout').text(output);

			$('.js-readout').addClass('s-success');

			setTimeout( function(){
				$('.js-readout').removeClass('s-success');
			},1000);
		
		});

	//THIS IS THE CLEAR BUTTON
	$(".js-clear").click(function(){
		num = 0; 
		storage = 0;
		negative = false;	//restore negative to false
		$('.js--negative-marker').removeClass('s-visible');//Hide the negative sign
		$('.js-storage').text("");
		$('.js-readout').text("0");
	})


});

var num = 0;
var action = '';
var storage = 0;
var negative = false;


//THIS IS THE FUNCTION THAT RUNS WHEN YOU CLICK A NUMBER BUTTON
function updateNumber(number){

	if(num === 0) num = number; //IF THE CURRENT NUMBER IS 0, DON'T SHOW THE ZERO IN FRONT
	else num += number;

	$('.js-readout').text(num);
}


function updateStorage(tempaction){
	storage = parseInt(num);
	
	//THIS IS THE CODE FOR THE NEGATIVE CONTROL - IF WE PRESSED THE NEGATIVE BUTTON WE SHOULD MULTIPLY BY -1 AND RESET NEGATIVE TO FALSE
	if(negative){
		storage = makeNegative(storage);
		$('.js--negative-marker').removeClass('s-visible');//Hide the negative sign
	} 
	
	action = tempaction;
	$('.js-storage').text(storage + tempaction);
	num = 0;
}


function makeNegative(number){
	negative = false; //Reset negative to false
	
	return number * -1;
}