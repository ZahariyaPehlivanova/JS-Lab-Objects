function solve([arr]) {
    let words = arr.split(/[^A-Za-z0-9_]+/)
        .filter(w => w != '');

    let result = {};
    for(let i = 0;i < words.length;i++){
        let word = words[i];
        if(result[word] == undefined){
            result[word] = 1;
        }else {
            result[word] += 1;
        }
    }
    console.log(JSON.stringify(result));

}
solve([`Far too slow, you're far too slow.`]);