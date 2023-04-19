



let test = [];


const getFibonacci = (n) => {
    let retval = [0];

    for (let i = 1; i < n; i++) {
        let next;
        if (i === 1) {
            this.next = 1;
        }
        else {
            this.next = retval[i - 1] + retval[i - 2];
        } 
        retval.push(this.next);
    }

    return retval;
  }
  console.log(getFibonacci(2));