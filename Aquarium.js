function aquarium(input) {
    let long_cm = Number(input[0]);
    let width_cm = Number(input[1]);
    let height_cm = Number(input[2]);
    let percent = Number(input[3]);

    let aquarium_volume = long_cm * width_cm * height_cm;
    let aquarium_volume_liters = aquarium_volume / 1000;
    let need_liters = aquarium_volume_liters * (1 - percent / 100);

    console.log(need_liters);
}

aquarium(
    [
        "85",
        "75",
        "47",
        "17"
    ]
)
aquarium(
    [
        "105",
        "77",
        "89",
        "18.5"
    ]
)