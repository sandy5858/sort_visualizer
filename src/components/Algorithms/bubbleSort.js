const bubbleSort = (arr, setArr, len) => {
  let arrCopy = [...arr];
  let delay = 0;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arrCopy[j] > arrCopy[j + 1]) {
        let t = arrCopy[j];
        arrCopy[j] = arrCopy[j + 1];
        arrCopy[j + 1] = t;
        delay++;
        setTimeout(
          () =>
            setArr((prevArr) => {
              const newArr = [...prevArr];
              const t = newArr[j];
              newArr[j] = newArr[j + 1];
              newArr[j + 1] = t;
              return newArr;
            }),
          (1000 / len) * delay
        );
      }
    }
  }
};

export default bubbleSort;