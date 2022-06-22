const divideAndSort = (int) =>{
    
    let numArr = Array.from(String(int),Number)
    let tmp = ""
    for (k=0;k<numArr.length;k++)
    for (i = 0; i < numArr.length; i++) {
        for (j = i + 1; j < numArr.length; j++) {
            tmp = 0;
            if (numArr[i] > numArr[j]) {
                tmp = numArr[i];
                numArr[i] = numArr[j];
                numArr[j] = tmp;
            }
        }
    }
    console.log(numArr) 
}
    
divideAndSort(12305434570353240)
