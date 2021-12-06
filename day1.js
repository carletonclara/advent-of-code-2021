async function retrieveData() {
    let response = await fetch('https://adventofcode.com/2021/day/1/input');
    let myBlob = await response.blob();
    let text = await myBlob.text();
    let nums = text.split('\n');
    //calcIncreases(nums); 
    calcGroupIncreases(nums);
  }

 

//part 1
function calcIncreases(nums){
    let totalIncreases = 0;
    let previousNum = nums[0];
    for(let i=1; i<nums.length; i++){
        console.log(i + ". prev: " + previousNum  + " current: " + nums[i] + " " + (nums[i] > previousNum));
        if(nums[i] > previousNum) {
            totalIncreases++;
        }
        previousNum = nums[i];
    }
    console.log(totalIncreases);
}

 

//part 2
function calcGroupIncreases(nums) {
    let totalIncreases = 0;
    let previousSum = nums[0] + nums [1] + nums [2];
    let i = 1

    while(i+2 <= nums.length){
        let currentSum = parseInt(nums[i]) + parseInt(nums[i+1]) + parseInt(nums[i+2]);
        console.log(i + ". prev: " + previousSum  + " current: " + currentSum + " " + (currentSum > previousSum));
        if(currentSum > previousSum) {
            totalIncreases++;
        }
        previousSum = currentSum;
        i++;
    }
    console.log(totalIncreases);
}