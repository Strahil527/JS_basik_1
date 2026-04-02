function convert(input) {
    let radians = Number(input[0]);
    let degree = radians * 180 / Math.PI;

    console.log(degree);
}

convert(["3.1416"])