// []
let testData = [0, 2, 1, 2, 0], n = 5;


function sort012(arr, N)
{
	let zeroes= [], ones= [], twos = [];
	for (let i = 0; i < N; i++) {
		switch (arr[i]) {
			case 0:
				zeroes.push(0)
				break;
			case 1:
				ones.push(1);
				break;
			case 2:
				twos.push(2); 
				break;
		}
		
	}
	return [...zeroes, ...ones, ...twos];
}

var answer = sort012(testData, n);
console.log(answer);


console.log(`zeroes: ${zeros}`);