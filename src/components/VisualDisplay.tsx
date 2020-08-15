import React, { useEffect, useState } from "react";
import { Box, Button } from "@material-ui/core";
import { NavBar } from "../components/NavBar";
import { Snackbar, IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import {
  BubbleSort,
  SelectionSort,
  InsertionSort,
  MergeSort,
  QuickSort,
} from "../SortingAlgorithm";
import "../css/VisualDisplay.css";
interface Props {
  clickable: Boolean;
}

export const VisualDisplay: React.FC<Props> = ({ clickable }) => {
  const [array, setArray] = useState<number[]>([]);
  let [show, setShow] = useState<boolean>(false);
  const INCREMENT_TIME: number = 0.8;
  let correctPosition: boolean = false;
  let start: boolean = false;
  let buttonClicked: Boolean = false;
  useEffect(() => {
    if (show) generateArray();
  }, [show]);

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
  const makeAllGreen = () => {
    const arrayBars = document.getElementsByClassName(
      "visualDisplay__bars"
    ) as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = "limegreen";
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
            if (i >= newAnimations.length - 1) {
              makeAllGreen();
              start = false;
              setShow(false);
            }
          }
        }, i * INCREMENT_TIME);
      }
    }
  };
  const callSelectionSort = () => {
    start = true;
    const animations = SelectionSort(array);
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
            arrayBars[barOneIndex].style.backgroundColor = color;
            arrayBars[barTwoIndex].style.backgroundColor = color;
          }
        }, i * 25);
      } else {
        setTimeout(() => {
          if (barOneIndex !== undefined && barTwoIndex !== undefined) {
            let tempHeight = arrayBars[barOneIndex].style.height;
            arrayBars[barOneIndex].style.height =
              arrayBars[barTwoIndex].style.height;
            arrayBars[barTwoIndex].style.height = tempHeight;
            correctPosition = true;
            if (i >= newAnimations.length - 1) {
              makeAllGreen();
              start = false;
              setShow(false);
            }
          }
        }, i * 25);
      }
    }
  };
  const callInsertionSort = () => {
    start = true;
    const animations = InsertionSort(array);
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
        }, i * 100);
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
              makeAllGreen();
              start = false;
              setShow(false);
            }
          }
        }, i * 10);
      }
    }
  };
  const callMergeSort = () => {
    start = true;
    const animations = MergeSort(array);
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
            arrayBars[barOneIndex].style.backgroundColor = color;
            arrayBars[barTwoIndex].style.backgroundColor = color;
          }
        }, i * 2);
      } else {
        setTimeout(() => {
          if (barOneIndex !== undefined && barTwoIndex !== undefined) {
            const [barOneIndex, newHeight] = newAnimations[i];
            if (barOneIndex != undefined && newHeight != undefined) {
              const barOneStyle = arrayBars[barOneIndex].style;
              barOneStyle.height = `${newHeight}px`;
            }
            // NO SWAPPING HERE BECAUSE WE HAVE TEMPARRAY - instead WE
            // OVERWRITE WITH NEW HEIGHT
            correctPosition = true;
            if (i >= newAnimations.length - 1) {
              makeAllGreen();
              start = false;
              setShow(false);
            }
          }
        }, i * 2);
      }
    }
  };
  const callQuickSort = () => {
    start = true;
    const animations = QuickSort(array);
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
            arrayBars[barOneIndex].style.backgroundColor = color;
            arrayBars[barTwoIndex].style.backgroundColor = color;
          }
        }, i * 20);
      } else {
        setTimeout(() => {
          if (barOneIndex !== undefined && barTwoIndex !== undefined) {
            let tempHeight = arrayBars[barOneIndex].style.height;
            arrayBars[barOneIndex].style.height =
              arrayBars[barTwoIndex].style.height;
            arrayBars[barTwoIndex].style.height = tempHeight;
            correctPosition = true;
            if (i >= newAnimations.length - 1) {
              makeAllGreen();
              start = false;
              setShow(false);
            }
          }
        }, i * 20);
      }
    }
  };

  const generateRandomInts = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div>
      <NavBar />
      <Snackbar open={show} autoHideDuration={1000}>
        <Alert severity="info">
          <strong>Do not click away, Just Watch! </strong>
        </Alert>
      </Snackbar>
      <div className="visualDisplay">
        <div className="visualDisplay__header">
          {show ? (
            <h1 className="visualDisplay__headerText">
              Press one of the buttons below to watch visualization of that
              sorting algorithm
            </h1>
          ) : (
            <h1 className="visualDisplay__headerText2">
              Press <b>GENERATE NEW ARRAY</b> to see visualization of various
              sorting algorithms
            </h1>
          )}
        </div>
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
              setShow(true);
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
          <Button
            className="visualDisplay__selectionSortButton"
            onClick={() => {
              start = true;
              if (!buttonClicked) callSelectionSort();
              buttonClicked = true;
            }}
          >
            Selection Sort
          </Button>
          <Button
            className="visualDisplay__mergeSortButton"
            onClick={() => {
              if (!buttonClicked) callMergeSort();
              buttonClicked = true;
            }}
          >
            Merge Sort
          </Button>
          <Button
            className="visualDisplay__quickSortButton"
            onClick={() => {
              if (!buttonClicked) callQuickSort();
              buttonClicked = true;
            }}
          >
            Quick Sort
          </Button>
        </div>
      </div>
    </div>
  );
};
