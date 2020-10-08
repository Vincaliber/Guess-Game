 let animal = ['COW', 'PIG', 'RAT', 'TAJ', 'HEN'];
 let hiddenWordDesc = ['Guess the hidden animal', 'Guess the hidden animal', 'Guess the hidden animal', 'Guess the hidden monument', 'Guess the hidden bird'];
 let levelInputs = ['l0f_input', 'l0s_input', 'l0t_input'];
 let imgSrc = document.getElementById('animal');
 let imgs = ['cow.jpg', 'pig.jpg', 'rat.jpg', 'taj.jpg', 'hen.jpg'];
 let d = 0;
 let numberofinputs = 1;
 let word = '';
 let counter = 0;
 let level = 0;

 document.getElementById('counter').innerHTML = counter;
 document.getElementById('levelNumber').innerHTML = counter;
 document.getElementById('levelDesc0').innerHTML = hiddenWordDesc[0];

 function levels(level) {
     if (level > 0) {
         document.getElementById('levelDesc0').innerHTML = '';
         document.getElementById('levelDesc').innerHTML = hiddenWordDesc[level];

     }
 }

 function loginCheck(val) {

     if (level !== '') {
         document.getElementById(`level${level}Keys`).style.display = "block";
         if (val === 'cleared') {
             d = 0;
             return;
         }

         if (val === "submit" || val === "restart") { //check animal

             for (let j = 0; j < 3; j++) {
                 if (document.getElementById(levelInputs[j]).value !== '') {
                     word += document.getElementById(levelInputs[j]).value;

                     if (animal[level] === word) {
                         counter += 1;
                         imgSrc.setAttribute('src', `./img/${imgs[level]}`);
                         //alert('Correct');
                         document.getElementById('levelNumber').innerHTML = counter;
                         document.getElementById('counter').innerHTML = counter;
                         setTimeout(function () {
                             imgSrc.setAttribute('src', '');
                             document.getElementById(`level${level}Keys`).style.display = "none";
                             level += 1;
                             levels(level);
                             if (level === 5) {
                                 document.getElementById('level').style.display = 'none';
                                 document.getElementById('check').style.display = 'none';
                                 document.getElementById('clear').style.display = 'none';
                                 document.getElementById('result').innerHTML = `Game Over. Your total score is: ${counter}`;
                                 document.getElementById('result').style.display = 'block';
                                 document.querySelector('.resultDiv').style.height="500px";
                                 document.getElementById('restart').style.display = 'block';
                                 return;
                             }
                             document.getElementById(`level${level}Keys`).style.display = "block";
                         }, 1500);

                         clearValue();

                     }
                 }
             }
             if (!(animal.includes(word))) { //shake if entered value is wrong

                 for (let i = 0; i < 3; i++) {
                     document.getElementById(levelInputs[i]).classList.add('shake');
                     setTimeout(function () {
                         document.getElementById(levelInputs[i]).classList.remove('shake');
                     }, 300)
                 }

                 clearValue();
             } else {
                 return;
             }


         } else { // add values to input fields

             for (let i = d; i <= d; i++) {
                 if (i < 3) {
                     document.getElementById(levelInputs[i]).value = val.toUpperCase();
                     if (word.length < animal.length) {
                         word += document.getElementById(levelInputs[i]).value;
                     }
                 }
             }

             d = d + numberofinputs;
             word = '';

         }
     }
 }

 function clearValue() { //clear input fields
     for (let m = 0; m < levelInputs.length; m++) {

         document.getElementById(levelInputs[m]).value = "";
         loginCheck('cleared');
     }

 }

 function restart() {
     document.getElementById('result').innerHTML = ``;
     document.getElementById('result').style.display = 'none';
     document.getElementById('restart').style.display = 'none';
     document.querySelector('.resultDiv').style.height='0px';
     level = 0;
     loginCheck('restart');
     counter=0;
     word='';
     document.getElementById('counter').innerHTML = counter;
     document.getElementById('levelNumber').innerHTML = counter;
     document.getElementById('levelDesc0').innerHTML = hiddenWordDesc[0];
     document.getElementById('levelDesc').innerHTML='';
     document.getElementById('level').style.display = 'block';
     document.getElementById('check').style.display = 'block';
     document.getElementById('clear').style.display = 'block';
 }