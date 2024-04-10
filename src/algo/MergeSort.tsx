const mergeSort=(arr:Array<number>)=>{
    if(arr.length <=1) return arr;
    const mid =Math.floor(arr.length/2);
    const left=mergeSort(arr.slice(0,mid));
      const right=mergeSort(arr.slice(mid))
      return merge(left,right)
}
const merge=(left:Array<number>,right:Array<number>)=>{
    let sortedArr:Array<number>=[]
    while(( left.length) && right.length){
        if(left[0]<right[0]){
            sortedArr.push(left.shift()!)
        }else{
            sortedArr.push(right.shift()!)
        }
    }
    return [...sortedArr,...left,...right]
}
console.log(mergeSort([3,2,1]));