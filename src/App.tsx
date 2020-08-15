import React, { useEffect } from "react";
import "./App.css";
import { VisualDisplay } from "./components/VisualDisplay";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SortingInfoPage from "./components/SortingInfoPage";
import BubbleSortImage from "./assets/BubbleSort.png";
import SelectionSortImage from "./assets/SelectionSort.png";
import MergeSortImage from "./assets/MergeSort.png";
import QuickSortImage from "./assets/QuickSort.png";
import "./firebase";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Sorting Visualizer";
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/bubbleSort">
            <SortingInfoPage
              sort={`Bubble Sort`}
              desc={`
              Bubble Sort is a basic sorting algorithm which uses swapping to compare two adjacents
              elements in an array and compares them according to the selection pressure(ex: ascending order).
              The code to the bubble sort is provided to the right(double for loop structure). What we are 
              basically doing is we are taking the first element(i) and comparing it with the next element(j).
              We here as trying to order in ascending order, so there for we check if the element at i
              is greater than j which means that the element at index i should come after element j, 
              when this occurs we swap by firsting putting the value of element at i in a temp variable and
              then giving value at j to i and then giving the value of temp to j. We need to have a temp, so 
              we do not lose an data in the process of swapping. This process is repeated as we can see in our 
              visual(we see that the red keeps swapping) until i is greater than the array length - 1. 
              At this point our data should be sorted. But this is the major flaw of the sort, this makes
              it time complexity very bad(slow). 
            `}
              worsttime={`O(n^2)`}
              besttime={`O(n)`}
              memory={`O(1)`}
              memoryDesc={`Only the one array`}
              code={BubbleSortImage}
            />
          </Route>
          <Route path="/selectionSort">
            <SortingInfoPage
              sort={`Selection Sort`}
              desc={`
              Selection Sort is another basic sorting algorithm which basically SELECTS the minimum element
              in a particular search range and brings that element to the front of the array(ex: ascending order).
              The code to the selection sort is provided to the right(double - for loop structure). What we are 
              basically doing is we are taking the whole array as the "search range"(at the start) and 
              we are comparing element at i(which is 0 at the start) with the rest of the elements in the search range. 
              We then find the smallest element(if there is one) index in the inner loop, and then we swap 
              the current element at i with the index of the minimum element. Every iteration of the outer 
              loop we keep decreasing the search range, which in the end results in a 
              sorted array(in ascending order in our example). This also makes the selection sorting very predictable. 
              This algorithm is not that good at sorting large size data structures due to its 
              time complexity being very bad(slow);
            `}
              worsttime={`O(n^2)`}
              besttime={`O(n^2)`}
              memory={`O(1)`}
              memoryDesc={`Only the one array`}
              code={SelectionSortImage}
            />
          </Route>
          <Route path="/mergeSort">
            <SortingInfoPage
              sort={`Merge Sort`}
              desc={`
              Merge Sort is a recursive sorting algorithm which takes the array and keeps splitting
              into two smaller portions, until it reaches to a point where each portion is just one
              element(this is the terminal case in the recursive method). Then comes the only flaw 
              of the merge sort, which is we need to another array that is the same size as the original size.
              This array is required because for now we have just split the array into smaller portions
              but we have yet to sort it, therefore we will apply a merge algorithm(this puts two sorted
              two arrays/portions back into one array/portion and it sorts the elements while doing so). 
              This is where the other array is needed, if we merge into the same array, then we will 
              overwrite some data and that is not what we want. Instead we will merge from the 
              tempArray to the original array. As the recursive stack rewinds back, the array portions 
              will be "merged"(put back together while being sorted) back together, therefore at the end 
              the array will be sorted(ascending order in our example). The merge sort is also predictable,
              but due to the work being divided through recursion(each stack frame does n work), this makes
              this sorting algorithm the fastest sorting algorithm displayed in this website.
              
            `}
              worsttime={`O(n log n)`}
              besttime={`O(n log n)`}
              memory={`O(n)`}
              memoryDesc={`Need another temp array of same size`}
              code={MergeSortImage}
            />
          </Route>
          <Route path="/quickSort">
            <SortingInfoPage
              sort={`Quick Sort`}
              desc={`
              Quick Sort is another recursive sorting algorithm which uses the partition algorithm
              to sort(ex: ascending order). In order to use partition algorithm, we need to pick a 
              random number that is in the range of the elements in the array(array from 1-9, randomNum range =[1,9])
              This number is called the pivot point, and then what we do is we intialize a variable(i) from the start
              and a variable(j) from the end, and we compare with the pivot number.  
              If the element at i is less than the pivot number then it is in the right place(we increment i value then), if not
              then we stop incrementing i value so we remain at that element. We do the same for j we check if
              element at j is greater than the pivot number, then we keep decreasing j value until we find element at
              j that is less then pivot number, then we stop j value from decreasing. When both i and j
              value stop, we swap the elements at those indices and then increment i & decrement j. So in a whole what
              this does is it puts all elements less than pivot number to the left and all greater to the right. 
              Then, we call two recursive stack frames from start to i, and another from j to last, therefore creating smaller portions. Once it gets the the point
              where the portion consists of only one element, at that point our array will be sorted(in our example, sorted in ascending order). 
              The biggest flaw of quick sort is choosing the pivot number. If we choose a pivot number
              that is towards the front or end of the array, there is a possibility the time complexity becomes
              as bad as the selection sort. Also due to us calling two stack frames, sometimes there are extra 
              stack frames that are called which wastes memory.
            `}
              worsttime={`O(n^2)`}
              besttime={`O(n log n)`}
              memory={`O(log n)`}
              memoryDesc={`Two stack frame calls(extra stack frames)`}
              code={QuickSortImage}
            />
          </Route>
          <Route path="/">
            <VisualDisplay clickable={false} />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
