interface Movement {
  comparison: number[];
  swap: number[];
}

export const BubbleSort = (array: number[]) => {
  const movements: Movement[] = [];
  let temp: number = 0;
  for (let i: number = 0; i < array.length - 1; i++) {
    for (let j: number = i + 1; j < array.length; j++) {
      const movement: Movement = { comparison: [], swap: [] };
      movement.comparison = [i, j];
      if (array[i] >= array[j]) {
        movement.swap = [i, j];
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        movements.push(movement);
      }
    }
  }
  return movements;
};

export const SelectionSort = (array: number[]) => {
  const movements: Movement[] = [];
  let temp: number = 0;
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    const movement: Movement = { comparison: [], swap: [] };
    minIndex = i;
    for (let j = minIndex + 1; j < array.length; j++) {
      movement.comparison = [j, minIndex];
      if (array[j] < array[minIndex]) minIndex = j;
    }
    movement.swap = [i, minIndex];
    temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
    movements.push(movement);
  }
  return movements;
};
export const InsertionSort = (array: number[]) => {
  const movements: Movement[] = [];
  let j: number = 0;
  let temp: number = 0;
  for (let i = 1; i < array.length; i++) {
    const movement: Movement = { comparison: [], swap: [] };
    temp = array[i];
    for (j = i - 1; j >= 0; j--) {
      movement.comparison = [j, i];
      if (array[j] > temp) {
        array[j + 1] = array[j];
        movement.comparison = [j + 1, j];
      } else break;
    }
    movement.swap = [j + 1, i];
    array[j + 1] = temp;
    movements.push(movement);
  }
  return movements;
};
export const MergeSort = (array: number[]) => {
  const tempArray: number[] = [];
  for (let i = 0; i < array.length; i++) tempArray.push(0);
  const movements: Movement[] = [];
  mergeAlgo(array, tempArray, 0, array.length - 1, movements);
  console.log(array);
  return movements;
};
function mergeAlgo(
  array: any[],
  tempArray: any[],
  first: number,
  last: number,
  movements: Movement[]
) {
  if (first === last) return;

  const middle = Math.floor((first + last) / 2);
  mergeAlgo(array, tempArray, first, middle, movements);
  mergeAlgo(array, tempArray, middle + 1, last, movements);
  for (let i = first; i <= last; i++) tempArray[i] = array[i];
  let i = first;
  let j = middle + 1;
  let k = first;
  while (i <= middle && j <= last) {
    const movement: Movement = { comparison: [], swap: [] };
    movement.comparison = [i, j];
    if (tempArray[i] > tempArray[j]) {
      movement.swap = [k, tempArray[i]];
      array[k++] = tempArray[j++];
    } else {
      movement.swap = [k, tempArray[j]];
      array[k++] = tempArray[i++];
    }
    movements.push(movement);
  }
  while (i <= middle) {
    movements.push({
      comparison: [i, i],
      swap: [k, tempArray[i]],
    });
    array[k++] = tempArray[i++];
  }
}
export const QuickSort = (array: number[]) => {
  const movements: Movement[] = [];
  quickSorting(array, 0, array.length - 1, movements);
  console.log(array);
  return movements;
};
const quickSorting = (
  array: number[],
  first: number,
  last: number,
  movements: Movement[]
) => {
  if (first >= last) return;
  let pivot: number = array[Math.floor((first + last) / 2)];
  let i = first;
  let j = last;
  let temp = 0;
  while (i <= j) {
    const movement: Movement = { comparison: [], swap: [] };
    while (array[i] < pivot) {
      movement.comparison = [i, Math.floor((i + j) / 2)];
      i++;
    }
    while (array[j] > pivot) {
      movement.comparison = [j, Math.floor((i + j) / 2)];

      j--;
    }
    if (i <= j) {
      movement.swap = [i, j];
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }
    movements.push(movement);
  }
  quickSorting(array, first, j, movements);
  quickSorting(array, i, last, movements);
};
