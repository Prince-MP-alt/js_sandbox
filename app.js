function flag(col1, col2, col3){
    document.getElementById('section1').style.backgroundColor=col1
    document.getElementById('section2').style.backgroundColor=col2
    document.getElementById('section3').style.backgroundColor=col3
}
/*
var name1 = prompt('what is your damn name?')
alert('Welcome ' + name1)
var age = prompt('What is your age?')
if(age < 10){
    console.log('You are a Baby')
}else if(age < 18){
    console.log('You are a Teeenager')
}else{
    console.log('You are an old man')
}*/
/*
for(let i = 0; i < 12; i++){
    document.writeln('5 x ' + i + ' = ' + (5*i) + '<br>')
    if(i == 5){
        document.writeln('5 is equals to 5 <br>')
        continue;
    }
    if(i == 6){
        document.writeln('Stop multiplication')
        break;
    }
}*/

// console.log(true);
// console.log(greetings);
// var greetings = 'Hello';
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// let val;


// // Number to string 
// val = String(555);
// val = String(4+4);
// // Boo1 to string 
// val = String(true);
// // Date to String
// val = String(new Date());
// // array
// val = String([1,2,3,4]);
// // String to number
// val = Number('5');
//  const val1 = String(5);
//  const val2 = 6
//  const sum = Number(val1 + val2);
//  console.log(sum);
//  console.log(typeof sum);

/*
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

// without template stingd(es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age +'</li><li>Job: '+ job + '</li><li>City: ' + city +'</li></ul>';
html = '<ul>' +
       '<li>Name: ' + name + '</li>'+
       '<li>Age: ' + age + '</li>'+
       '<li>Job: ' + job + '</li>'+
       '<li>City: ' + city + '</li>'+
       '</ul>'

function hello(){
    return 'Hello';
}

// With template strings (es5)
html = `
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'Under 30'}</li>
    </ul>
`;
document.body.innerHTML = html;*/
/*
 const id = 100;
 const name = 'steve';
 const age = 70;

if(age > 0 && age < 12){
    console.log(`${name} is a child `);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else{
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}
*/

//console.log(id === 100 ? 'CORRECT' : 'INCORRECT');*/

 // FOR LOOP
/*
 for(let i = 0; i < 10; i++){
     if(i === 2){
         console.log('2 is my favorite number');
         continue;
     }
     if(i === 5){
         console.log('stop the loop');
         break;
     }
     console.log('Number' + i);
}*/
// loop throuht array
/*
 const cars = ['Ford', 'chevy','Honda','Toyata'];


 for(let i = 0; i < cars.length; i++){
     console.log(cars[i]);
 }*/
  // FOREACH
//   cars.forEach(function(car){
//       console.log(car);
//   });        


//                     DOM


























