function solve(arr) {

    let matrix = arr.map(
        row => row.split(' ').map(Number));

    let isSame = new Boolean(false);
    for(let row = 0;row < matrix.length - 1;row++){
        let currSum = calcSum(row);
        let nextSum = calcSum(row + 1);
        if(currSum == nextSum){
            isSame = true;
        }
        else {
            isSame = false;
        }
    }
    console.log(isSame);

    function calcSum(row) {
        let sum = 0;
        for(let col = 0;col < matrix[row].length;col++){
            sum += Number(matrix[row][col]);
        }
        return sum;
    }
}
solve(['4 5 6',
    '6 5 4',
    '5 5 5'
]);