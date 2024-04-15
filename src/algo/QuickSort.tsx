function quickSort(a:Array<number>) {
    //   debugger;
      const pivot = a[0];
      let n = a.length;
      let left:Array<number> = [];
      let right:Array<number> = [];
      if (a.length <= 1) return a;
      for (let i = 1; i < n; i++) {
        if (a[i] < pivot) {
          left.push(a[i]);
        } else {
          right.push(a[i]);
        }
      }
      return [...quickSort(left), pivot, ...quickSort(right)];
    }
    console.log(quickSort([998, 33, 93, 0, 1, 3]));