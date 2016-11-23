function solve(arr) {
    let cities = new Map();
    for(let i = 0;i < arr.length;i++){
        let split = arr[i].split(' <-> ');
        let city = split[0];
        let pop = Number(split[1]);

        if(!cities[city]){
            cities[city] = 0;
        }
        cities[city] += pop;
    }
    for(let key in cities){

        console.log(`${key} : ${cities[key]}`);
    }
}
solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000',
    'Sofia <-> 2'
]);