const mergeSort1=(arr:Array<number>)=>{
    if(arr.length <=1) return arr;
    const mid =Math.floor(arr.length/2);
    const left=mergeSort1(arr.slice(0,mid));
      const right=mergeSort1(arr.slice(mid))
      return merge1(left,right)
}
const merge1=(left:Array<number>,right:Array<number>)=>{
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
const binarySearch=(arr:Array<number>,targetIndex:number)=>{
let start= 0;
let end=arr.length-1;
const sortedArr=mergeSort1(arr)
while(start<=end){
    let middle=Math.floor( (start+end)/2 );
    if(sortedArr[middle] ===targetIndex ) return middle
    if(sortedArr[middle]<targetIndex){
        start= middle+1
    }else{
        end= middle-1
    }
}
return -1
}

console.log(binarySearch([6,5,4,3,2,1],1))