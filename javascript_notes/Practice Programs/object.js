const o = new Object()
o.firstName = 'Jordan'
o.lastName = 'Hayashi'
o.isTeaching = true
o.greet = function() { console.log('Hello!') }

console.log(JSON.stringify(o)) // PRINT OUT THE WHOLE OBJECT

const o2 = {}
o2['firstName'] = 'Jordan'
const a = 'lastName'
o2[a] = 'Hayashi'

const o3 = {
  firstName: 'Jordan',
  lastName: 'Hayashi',
  greet: function() {
    console.log('hi')
  },
  address: {
    street: "Main st.",
    number: '111'
  }
}

console.log(o3.firstName) // PRINT OUT ONLY THE FIRSTNAME
console.log(o3.address.street) // PRINT OUT AN ELEMENT FROM NESTED OBJECT

