function requiredReading(input) {
    let numberPageCurrentBook = Number(input[0]);
    let redingPageFromHour = Number(input[1]);
    let numberDayNeedReadBook = Number(input[2]);

    let needTimeToReadBook = numberPageCurrentBook / redingPageFromHour;
    let needHoursPerDay = needTimeToReadBook / numberDayNeedReadBook;

    console.log(needHoursPerDay);
}

requiredReading(
    [
        "212",
        "20",
        "2"
    ]
)

requiredReading(
    [
        "432",
        "15",
        "4"
    ]
)