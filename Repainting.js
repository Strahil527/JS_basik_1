function repainting(input) {
    let naylon_price = 1.50;
    let paint_price = 14.50;
    let paint_thinner_price = 5.00;

    let naylon_meters = Number(input[0]);
    let paint_liters = Number(input[1]);
    let paint_thinner_liters = Number(input[2]);
    let work_hours = Number(input[3]);

    let naylon_sum = (naylon_meters + 2) * naylon_price;
    let paint_sum = (paint_liters + (paint_liters * 0.10)) * paint_price;
    let paint_thinner_sum = paint_thinner_liters * paint_thinner_price;

    let sum_without_work = naylon_sum + paint_sum + paint_thinner_sum + 0.40;
    let sum_after_work = (sum_without_work * 0.30) * work_hours;
    let sum = sum_without_work + sum_after_work;
    
    console.log(sum);
}

repainting(
    [
        "10",
        "11",
        "4",
        "8"
    ]
)