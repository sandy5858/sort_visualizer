const insertionSort = (arr, setArr, setSel, len) => {
  let arrCopy = [...arr];
  let delay = 0;
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0 && arrCopy[j + 1] < arrCopy[j]; j--) {
      let t = arrCopy[j];
      arrCopy[j] = arrCopy[j + 1];
      arrCopy[j + 1] = t;
      delay++;
      setTimeout(
        () =>
          setSel((prevArr) => {
            const newArr = [...prevArr];
            for (let k = 0; k < len; k++) newArr[k] = false;
            newArr[j + 1] = true;
            return newArr;
          }),
        (1000 / len) * delay
      );
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
  delay++;
  setTimeout(
    () =>
      setSel((prevArr) => {
        const newArr = [];
        for (let i = 0; i < len; i++) newArr.push(false);
        return newArr;
      }),
    (1000 / len) * delay
  );
};

export default insertionSort;
