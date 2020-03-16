exports.nthFib = function (n) {
    let n1 = 1;
    let n2 = 2;
    console.log(n1);
    if (n === 1) {
        return n1;
    } else if (n === 2) {
        console.log(n2);
        return n2;
    } else {
        while (n > 0) {
            n--;
            console.log(n2);
            let n2temp = n2;
            n2 = n1 + n2;
            n1 = n2temp;
        }
        return n2;
    }

}