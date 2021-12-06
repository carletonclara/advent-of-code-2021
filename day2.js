async function retrieveData() {
    let response = await fetch('https://adventofcode.com/2021/day/2/input');
    let myBlob = await response.blob();
    let text = await myBlob.text();
    let nums = text.split('\n');
    calclulateAimPosition(nums);
}
 

//part 1
function calculatePosition(nums){
    let horizontal = 0;
    let vertical = 0;
 
    nums.forEach(elem => {
        let direction = elem.split(" ");
        if(direction[0] == "forward"){
            horizontal += parseInt(direction[1]);
        } else if(direction[0] == "up"){
            vertical -= parseInt(direction[1]);
        } else if(direction[0] == "down"){
            vertical += parseInt(direction[1]);
        } 
    });
    console.log(horizontal * vertical);
}


//part 2
function calclulateAimPosition(nums){
    let horizontal = 0;
    let vertical = 0;
    let aim = 0;
    nums.forEach(elem => {
        let direction = elem.split(" ");
        if(direction[0] == "forward"){
            horizontal += parseInt(direction[1]);
            if(aim != 0) {
                vertical += (aim * parseInt(direction[1]));
            }
        } else if(direction[0] == "up"){
            aim -= parseInt(direction[1]);
        } else if(direction[0] == "down"){
            aim += parseInt(direction[1]);
        } 
    });
    console.log(horizontal * vertical);
}