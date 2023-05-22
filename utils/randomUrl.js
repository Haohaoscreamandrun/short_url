// Function
function randomUrl(digits){
  console.log("this function will generate 5 digits of random algebra and numbers combination")
  // define the choices
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  // construct the pool
  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))
  // generating
  let url = ''
  for ( let i = 0 ; i < Number(digits) ; i ++){
    let index = Math.floor(Math.random() * collection.length)
    url += collection[index]
  }
  // return result
  return url
}

module.exports = randomUrl