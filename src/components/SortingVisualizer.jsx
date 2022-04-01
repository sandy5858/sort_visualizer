import React from "react";
import { useState, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import bubbleSort from "./Algorithms/bubbleSort";
import selectionSort from "./Algorithms/selectionSort";
import insertionSort from "./Algorithms/insertionSort";
import mergeSort from "./Algorithms/mergeSort";

const SortingVisualizer = () => {
  const [arr, setArr] = useState([]);
  const [sel, setSel] = useState([]);
  const [len, setLen] = useState(50);

  useEffect(() => {
    resetArray();
  }, []);

  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const resetArray = () => {
    const temp = [];
    const temp1 = [];
    for (var i = 0; i < 100; i++) {
      let x = randomIntFromInterval(1, 100);
      temp.push(x);
      temp1.push(false);
    }
    setArr(temp);
    setSel(temp1);
  };

  return (
    <div>
      {arr
        .filter((val, idx) => {
          return idx < len;
        })
        .map((val, idx) => (
          <div
            key={idx}
            style={{
              display: "inline-block",
              width: "8px",
              backgroundColor: sel[idx] ? "red" : "orange",
              border: "1px solid white",
              height: `${val * 5}px`,
            }}
          ></div>
        ))}
      <br />
      <RangeSlider
        value={len}
        onChange={(changeEvent) => setLen(changeEvent.target.value)}
        disabled={false}
      />
      <br />
      <button className="btn btn-primary m-2" onClick={resetArray}>
        Get Random Array
      </button>
      <button
        className="btn btn-danger m-2"
        onClick={() => bubbleSort(arr, setArr, len)}
      >
        BubbleSort
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => selectionSort(arr, setArr, setSel, len)}
      >
        SelectionSort
      </button>
      <button
        className="btn btn-info m-2"
        onClick={() => insertionSort(arr, setArr, setSel, len)}
      >
        InsertionSort
      </button>
      <button className="btn btn-warning m-2" onClick={()=>mergeSort(arr, setArr, len)}>
        MergeSort
      </button>
    </div>
  );
};

export default SortingVisualizer;
