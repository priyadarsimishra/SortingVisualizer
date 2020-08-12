import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { BubbleSort } from "../SortingAlgorithm";
import "../css/VisualDisplay.css";

interface Props {}

export const VisualDisplay: React.FC<Props> = () => {
  const [array, setArray] = useState<number[]>([]);
  // const [buttonClicked, setButtonClicked] = useState<Boolean>(false);
  const INCREMENT_TIME: number = 0.8;
  let correctPosition: Boolean = false;
  let start: Boolean = false;
  let buttonClicked: Boolean = false;
  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const array: number[] = [];
    for (let i = 0; i < 108; i++) {
      array.push(generateRandomInts(5, 600));
    }
    buttonClicked = false;
    setArray(array);
    const arrayBars = document.getElementsByClassName(
      "visualDisplay__bars"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = "skyblue";
    }
  };
  const callBubbleSort = () => {
    start = true;
    const animations = BubbleSort(array);
    const newAnimations: any[] = [];
    for (const animation of animations) {
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);
    }
    for (let i = 0; i < newAnimations.length; i++) {
      const arrayBars = document.getElementsByClassName(
        "visualDisplay__bars"
      ) as HTMLCollectionOf<HTMLElement>;

      const [barOneIndex, barTwoIndex] = newAnimations[i];

      const isColorChange: boolean = i % 3 !== 2;
      if (isColorChange) {
        const color = i % 3 === 0 ? "red" : "skyblue";
        setTimeout(() => {
          if (barOneIndex !== undefined && barTwoIndex !== undefined) {
            if (!correctPosition)
              arrayBars[barOneIndex].style.backgroundColor = color;
            arrayBars[barTwoIndex].style.backgroundColor = color;
          }
        }, i * INCREMENT_TIME);
      } else {
        setTimeout(() => {
          if (barOneIndex !== undefined && barTwoIndex !== undefined) {
            let tempHeight = arrayBars[barOneIndex].style.height;
            arrayBars[barOneIndex].style.height =
              arrayBars[barTwoIndex].style.height;
            arrayBars[barTwoIndex].style.height = tempHeight;
            correctPosition = true;
            arrayBars[barOneIndex].style.backgroundColor = "limegreen";
            if (i >= newAnimations.length - 1) {
              arrayBars[barTwoIndex].style.backgroundColor = "limegreen";
              start = false;
            }
          }
        }, i * INCREMENT_TIME);
      }
    }
  };
  const callSelectionSort = () => {};
  const callInsertionSort = () => {};
  const callMergeSort = () => {};
  const callQuickSort = () => {};

  const generateRandomInts = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="visualDisplay">
      <div className="visualDisplay__display">
        {array.map((value: number, index: number) => (
          <Box
            className="visualDisplay__bars"
            style={{ height: `${value}px` }}
            key={index}
          ></Box>
        ))}
      </div>
      <div className="visualDisplay__newArrayButtonContainer">
        <Button
          className="visualDisplay__newArrayButton"
          onClick={() => {
            if (!start) generateArray();
            else console.log("Oops there is a current one visual right now");
          }}
        >
          Generate New Array
        </Button>
        <Button
          className="visualDisplay__bubbleSortButton"
          onClick={() => {
            if (!buttonClicked) callBubbleSort();
            buttonClicked = true;
          }}
        >
          Bubble Sort
        </Button>
        <Button className="visualDisplay__selectionSortButton">
          Selection Sort
        </Button>
        <Button className="visualDisplay__insertionSortButton">
          Insertion Sort
        </Button>
        <Button className="visualDisplay__mergeSortButton">Merge Sort</Button>
        <Button className="visualDisplay__quickSortButton">Quick Sort</Button>
      </div>
    </div>
  );
};
