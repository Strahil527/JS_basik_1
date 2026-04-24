function basketballEquipment(input) {
    let annul_fee_one_year = Number(input[0]);

    let shoes_price = annul_fee_one_year - (annul_fee_one_year * 0.40);
    let team_price = shoes_price - (shoes_price * 0.20);
    let basketball_ball = team_price / 4;
    let basketball_accessoar = basketball_ball / 5;

    let sum = annul_fee_one_year + shoes_price + team_price + basketball_ball + basketball_accessoar;

    console.log(sum);
}

basketballEquipment(["365"])
basketballEquipment(["550"])