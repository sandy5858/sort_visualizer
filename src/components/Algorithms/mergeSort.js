const merge = (arrCopy, l, m, r, obj, setArr, len) => {
  let n1 = m - l + 1;
  let n2 = r - m;
  let a = [];
  let b = [];
  for (let i = 0; i < n1; i++) {
    a.push(arrCopy[l + i]);
  }
  for (let i = 0; i < n2; i++) {
    b.push(arrCopy[m + 1 + i]);
  }
  let p1 = 0;
  let p2 = 0;
  let p3 = l;
  while (p1 < n1 && p2 < n2) {
    if (a[p1] < b[p2]) {
      let pos = p3;
      let ele = a[p1];
      arrCopy[p3++] = a[p1++];
      obj.delay++;
      setTimeout(
        () =>
          setArr((prevArr) => {
            const newArr = [...prevArr];
            newArr[pos] = ele;
            return newArr;
          }),
        (2000 / len) * obj.delay
      );
    } else {
      let pos = p3;
      let ele = b[p2];
      arrCopy[p3++] = b[p2++];
      obj.delay++;
      setTimeout(
        () =>
          setArr((prevArr) => {
            const newArr = [...prevArr];
            newArr[pos] = ele;
            return newArr;
          }),
        (2000 / len) * obj.delay
      );
    }
  }
  while (p1 < n1) {
    let pos = p3;
    let ele = a[p1];
    arrCopy[p3++] = a[p1++];
    obj.delay++;
    setTimeout(
      () =>
        setArr((prevArr) => {
          const newArr = [...prevArr];
          newArr[pos] = ele;
          return newArr;
        }),
      (2000 / len) * obj.delay
    );
  }
  while (p2 < n2) {
    let pos = p3;
    let ele = b[p2];
    arrCopy[p3++] = b[p2++];
    obj.delay++;
    setTimeout(
      () =>
        setArr((prevArr) => {
          const newArr = [...prevArr];
          newArr[pos] = ele;
          return newArr;
        }),
      (2000 / len) * obj.delay
    );
  }
};

const mergeSort1 = (arrCopy, l, r, obj, setArr, len) => {
  if (l < r) {
    let m = Math.floor(l + (r - l) / 2);
    mergeSort1(arrCopy, l, m, obj, setArr, len);
    mergeSort1(arrCopy, m + 1, r, obj, setArr, len);
    merge(arrCopy, l, m, r, obj, setArr, len);
  }
};

const mergeSort = (arr, setArr, len) => {
  let arrCopy = [...arr];
  let obj = { delay: 0 };
  mergeSort1(arrCopy, 0, len - 1, obj, setArr, len);
};

export default mergeSort;
