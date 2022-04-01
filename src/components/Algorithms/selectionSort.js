const selectionSort = (arr, setArr, setSel, len) => {
  let arrCopy = [...arr];
  let delay = 0;
  for (let i = 0; i < len - 1; i++) {
    let smPos = i;
    for (let j = i + 1; j < len; j++) {
      if (arrCopy[j] < arrCopy[smPos]) {
        smPos = j;
      }
      let pos = smPos;
      delay++;
      setTimeout(
        () =>
          setSel((prevArr) => {
            const newArr = [...prevArr];
            for (let k = 0; k < len; k++) newArr[k] = false;
            newArr[pos] = true;
            newArr[j] = true;
            return newArr;
          }),
        (1000 / len) * delay
      );
    }
    let t = arrCopy[smPos];
    arrCopy[smPos] = arrCopy[i];
    arrCopy[i] = t;
    delay++;
    setTimeout(
      () =>
        setArr((prevArr) => {
          const newArr = [...prevArr];
          const t = newArr[smPos];
          newArr[smPos] = newArr[i];
          newArr[i] = t;
          return newArr;
        }),
      (1000 / len) * delay
    );
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

export default selectionSort;
