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
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        movement.swap = [i, j];
      }
      movements.push(movement);
    }
  }
  return movements;
};
