//[]
const testData = [1,3,5,2,2];

function equilibriumPoint(a, n) {
    if (n === 1) return a[0];

    let rightSum = a.reduce((acc, curr) => acc + curr);
    let leftSum = 0;

    for (let i = 0; i < a.length; i++) {
        rightSum -= a[i];
        if (rightSum === leftSum) return i + 1;
        leftSum += a[i];
    }
    return -1;
}

let answer = equilibriumPoint(testData);
console.log(answer);

1
23

equilibriumPoint(a, n)

    {
        //your code here
        let sum=0,left=0,right=0
        if(n==1){
            return 1
        }
        else{
            for(let i=0;i<n;i++){        
                sum+=a[i]                  
            }
            for (let i=1;i<=n-2;i++){
                left+=a[i-1];
                right=sum-(a[i]+left);
                if(left==right){
                    return i+1
                }
            }
            return -1
        }
    }