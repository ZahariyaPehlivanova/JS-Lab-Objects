function solve(arr) {
    let res = new Set();
    let wordPattern = /\b[a-zA-Z0-9_]+\b/g;
    for (let sentence of arr) {
        let matches = sentence.match(wordPattern);
        matches.forEach(x=>res.add(x.toLowerCase()));
    }
    console.log([...res.values()].join(", "));
}

solve(['JS and Node.js', 'JS again and again', 'Oh, JS?']);