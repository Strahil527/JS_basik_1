function studyMaterials(input) {
    let packet_pen_price = 5.80;
    let packet_markers_price = 7.20;
    let prepate_price = 1.20;

    let quantity_packet_pen = Number(input[0]);
    let quantity_packet_markers = Number(input[1]);
    let liters_preparate = Number(input[2]);
    let discount_percent = Number(input[3]);

    let pen_sum = quantity_packet_pen * packet_pen_price;
    let markers_sum = quantity_packet_markers * packet_markers_price;
    let preparate_sum = liters_preparate * prepate_price;
    let sum = pen_sum + markers_sum + preparate_sum;

    let need_after_discount = sum - (sum * discount_percent / 100);

    console.log(need_after_discount);
}

studyMaterials(
    [
        "2",
        "3",
        "4",
        "25"
    ]
)