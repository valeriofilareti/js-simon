const message = document.getElementById('message')

const numbers = 5;
const btn = document.querySelector('button')



const randomNumbers = [];

while(randomNumbers.length < numbers) {
  const num = generateRandomNumbers();
  if (!randomNumbers.includes(num)){
    randomNumbers.push(num)
  }
}

// for (let i = 0; i < randomNumbers.length; i++) {

// }


btn.addEventListener('click', function(){

  const userNumbers = [];

  message.innerHTML = `${randomNumbers}` 

  setTimeout(function() {
    message.innerHTML = '';
    btn.classList.add('d-none')
    message.innerHTML = `inserisci i numeri corretti`
    while(userNumbers.length < numbers) {
      const N = prompt('inserire numero');
      if(!userNumbers.includes(N)){
        userNumbers.push(N)
        console.log(userNumbers);
      }
    }
  },5000)

})






console.log(randomNumbers);


function generateRandomNumbers() {
  const randomNum = Math.floor(Math.random()* 9 + 1)
  return randomNum
}

