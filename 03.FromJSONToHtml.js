function solve(array) {
    let arr = JSON.parse(array);
    
    let result = '<table>\n';
    result += `   <tr>`;

    for(let key of Object.keys(arr[0])){
        result += `<th>${htmlEscape(key)}</th>`;
    }
    result += "</tr>\n";
    for (let i = 0; i < arr.length; i++) {
        result += "  <tr>";
        for (let key in arr[i]) {
            result+=`<td>${htmlEscape(arr[i][key])}</td>`;
        }
        result += "</tr>\n";
    }
    result+=`</table>`;

    console.log(result);

    function htmlEscape(text) {
        text = new String(text);
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
