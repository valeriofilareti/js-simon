const message = document.getElementById('message')

const numbers = 5



const randomNumbers = [];

while(randomNumbers.length < numbers) {
  const num = generateRandomNumbers();
  if (!randomNumbers.includes(num)){
    randomNumbers.push(num)
  } else {
    generateRandomNumbers()
  }
}

console.log(randomNumbers);


function generateRandomNumbers() {
  const randomNum = Math.floor(Math.random()* 9 + 1)
  return randomNum
}