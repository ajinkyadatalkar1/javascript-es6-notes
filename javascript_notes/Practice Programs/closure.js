console.log(a);
var e = 1;
function makeFunctionArray() {
  const arr = []
  for (let i = 0; i < 5; i++) {
    arr.push(function () { console.log(i) });
    e++;
  }
  return arr
}
const functionArr = makeFunctionArray()
// we expect this to log 0, but it doesn't, it gives an output 5
functionArr[0]()
var a=9;

function inc(increment) {
	increment = increment + 4;
	console.log("value in function: " + increment);
	this.e=0;
	console.log("this e: " + this.e);
	console.log("outside e: " + e);
	var parent = this;
	if(true){
		this.e = 10;
		console.log("innermost e: " + this.e);
		console.log("middle e: " + parent.e);
		console.log("outmost e: " + e);
	}
}

const b=7;
a++;
console.log("incremented: " + a);

inc(a);
console.log("value of a outside: " + a);
