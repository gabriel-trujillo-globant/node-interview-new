const a = 1;

function myFunction1() {
    let a = 'dog';
    console.log(`Function 1 a: ${a}`);
}

const myFunction2 = () => {
    console.log(`Function 2 a: ${a}`);
    var a = 'cat';
}

console.log(`Outside a: ${a}`);
myFunction1();
myFunction2();
