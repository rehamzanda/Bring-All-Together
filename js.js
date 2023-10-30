const cursorTarget = document.getElementById('cursorTarget');

// change the cursor style on reservation table
cursorTarget.addEventListener('mouseover', () => {
  cursorTarget.style.cursor = 'pointer';
});


//change the color of the chosed table after selecting it to green
const selectedTable = document.getElementById('selectedTable');
const  reservedTable = document.getElementById('reservedTable');

// this solution did not work
/*selectedTable.addEventListener('click', function() {
    const currentBgColor = getComputedStyle(selectedTable).backgroundColor;
    console.log(currentBgColor);
    if (currentBgColor === 'rgb(255, 255, 255)') { 
        selectedTable.style.backgroundColor = 'green';
      } else {
        reservedTable.innerHTML = 'The table is already reserved';
      }
    });
   */
    


 const selectedTables = document.querySelectorAll('.selectedTables');

     selectedTables.forEach((div) => {
        div.addEventListener('click', function() {
        if (div.classList.contains('bg-danger')) { 
                reservedTable.innerHTML = 'The table is already reserved';
            } 
        else{
                div.style.backgroundColor = 'green';
            }
            });
        });

function personNum(){
    var input=document.getElementById('number').value;
    var text;
    if(input <1 || input > 20){
        text='Make the reservation on phone if you are more than 20 person'
        document.getElementById('textAlert').style.color='red';
    }
    else{
        text=`you have reservered a table for ${input} person successfully `
        document.getElementById('textAlert').style.color='green'

    }
    document.getElementById('textAlert').innerHTML=text;
}

//did not work
var btnSubmit = document.getElementById('btnSubmit');
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;

btnSubmit.addEventListener('click',function(){
    
    var enterName;
    if(firstName == '' || lastName == ''){
        enterName="Please insert your name";
    }
    else{
        enterName='Make the reservation on phone if you are more than 20 person'

    }

    document.getElementById('nameAlert').innerHTML= enterName;

})

var btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click',function(){

})


// choosing the date of reservation 
const datepicker = document.getElementById('datepicker');
const showSelectedDateButton = document.getElementById('showSelectedDate');
const selectedDateText = document.getElementById('selectedDateText');

showSelectedDateButton.addEventListener('click', function() {
  const selectedDate = datepicker.value;
  if (selectedDate) {
    selectedDateText.textContent = `Selected Date: ${selectedDate}`;
  } else {
    selectedDateText.textContent = 'Please select a date';
  }
});


// after clicking the btn and if there no errors --> 
// I want a text msg shows the reservation details and the table color 
// will get red instead of green 

