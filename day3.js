async function retrieveData() {
    let response = await fetch('https://adventofcode.com/2021/day/3/input');
    let myBlob = await response.blob();
    let text = await myBlob.text();
    let rows = text.split('\n');
    calcRates(rows)
}

 

//part 1
function calcRates(rows){
    let gamma = "";
    let epsi = ""
    let rowLen = rows[0].length;

    for(let i=0; i<rowLen; i++){
        let colSum = 0;
        for(let j=0; j<rows.length-1; j++){
            let row = rows[j];
            let bits = row.split("");
            colSum += parseInt(bits[i]);
        }

        if(colSum > rows.length/2){
            gamma = gamma + "1";
            epsi = epsi + "0";
        } else {
            gamma = gamma + "0";
            epsi = epsi + "1";
        }
    }

    let gammadec = parseInt(gamma, 2);
    let epsidec = parseInt(epsi, 2);
    console.log(gammadec * epsidec);
}