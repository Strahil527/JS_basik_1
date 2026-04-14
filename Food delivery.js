function foodDelivery(input) {
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetableMenuPrice = 8.15;

    let quantityChickenMenu = Number(input[0]);
    let quantityFishMenu = Number(input[1]);
    let quantityVegetableMenu = Number(input[2]);

    let priceChicken = quantityChickenMenu * chickenMenuPrice;
    let priceFish = quantityFishMenu * fishMenuPrice;
    let priceVegetable = quantityVegetableMenu * vegetableMenuPrice;
    let price = priceChicken + priceFish + priceVegetable;
    let desertPrice = price * 0.20;

    let sum = price + desertPrice + 2.50;

    console.log(sum);
}

foodDelivery(
    [
        "2",
        "4",
        "3"
    ]
)

foodDelivery(
    [
        "9",
        "2",
        "6"
    ]
)