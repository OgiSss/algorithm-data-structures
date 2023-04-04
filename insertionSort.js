function insertionSort(array) {
	for (let index = 1; index < array.length; index++) {
        let numberToInsert = array[index]; 

        let j = index - 1; 
        while(j >= 0 && array[j] > numberToInsert){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = numberToInsert;
	}
}

const arr = [-6, 5, 8, -10, 4];
insertionSort(arr);
console.log(arr);