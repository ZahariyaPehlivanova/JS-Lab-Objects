function solve(array) {
    let result = new Map();

    for(let i = 0;i < array.length;i++){
        let splitTownProduct = array[i].split(' -> ');
        let town = splitTownProduct[0];
        let product = splitTownProduct[1];
        let splitAmountPrice = splitTownProduct[2].split(' : ');
        let amount = Number(splitAmountPrice[0]);
        let price = Number(splitAmountPrice[1]);

        if(!result[town]){
            result[town] = new Map();
        }
        if(!result[town][product]){
            result[town].set(product);
            result[town][product] = 0;
        }
        result[town][product] += amount * price;
    }

    for(let town in result){
        console.log(`Town - ${town}`);
        for(let product in result[town]){
            console.log(`$$$${product} : ${result[town][product]}`);
        }
    }
}
solve(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 150',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']
);