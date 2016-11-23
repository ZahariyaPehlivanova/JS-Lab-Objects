function solve(input) {
    let obj = new Map();
    for(let i of input){
        let [town,product,price]=i.split(' | ');
        price = Number(price);
        if(!obj.has(product)){
            obj.set(product,new Map());
        }
        obj.get(product).set(town, price);
    }
    for(let [product,cenoGrad] of obj){
        let prices = Array.from(cenoGrad.keys());
        let minPrice = 100000000000;
        let grad='';
        for(let [town,price] of cenoGrad){
            if(price < minPrice){
                minPrice = price;
                grad=town;
            }
        }
        console.log(`${product} -> ${minPrice} (${grad})`);
    }
}
solve([
    'Sofia City | BMW | 10',
    'Mexico City | BMW | 9'
]);
