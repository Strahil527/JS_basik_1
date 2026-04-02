function depositeCalculator(input) {
    let deposite_sum = Number(input[0]);
    let deposite_month = Number(input[1]);
    let year_percent = Number(input[2]);

    let sum = deposite_sum + deposite_month * ((deposite_sum * year_percent / 100) / 12);
    console.log(sum);
}

depositeCalculator(
    [
        "200",
        "3",
        "5.7"
    ]
)

depositeCalculator(
    [
        "2350",
        "6",
        "7"
    ]
)