import React from 'react'
import Card from './Card.js'
import '../App.css';
import './style.css';

function HomePage() {
    const cardInfo = [
        {
            id: 1,
            title: 'BUBBLE SORT',
            sort: 'bubbleSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: '/sort-visualizer/imgs/bubble-sort.png',
            algorithm: 'Initialize i=0, j=i \n 1. Iterate till j<(size-1): \n  1.1 If arr[j]>arr[j+1] then swap [j] and arr[j+1] \n 1.2 j++ \n 2. i++ \n 3. Go to step 1 until i<size-1',
        },
        {
            id: 2,
            title: 'SELECTION SORT',
            sort: 'selectionSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: "/sort-visualizer/imgs/selection-sort.png",
            algorithm: '1. Set MIN to location 0 \n 2. Search the minimum element in the list \n 3. Swap with value at location MIN \n 4. Increment MIN to point to next element \n 5. Repeat until list is sorted',
        },
        {
            id: 3,
            title: 'INSERTION SORT',
            sort: 'insertionSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: "/sort-visualizer/imgs/insertion-sort.png",
            algorithm: '1. If it is the first element, \n it is already sorted.\n return 1; \n 2. Pick next element \n 3. Compare with all elements in the sorted sub-list \n 4. Shift all the elements in the sorted sub-list that \n is greater than the value to be sorted \n 5. Insert the value \n 6. Repeat until list is sorted',
        },
        {
            id: 5,
            title: 'QUICK SORT',
            sort: 'quickSort',
            tc: 'O(n2)',
            sc: 'O(1)',
            imgSrc: "/sort-visualizer/imgs/quick-sort.png",
            algorithm: 'DIVIDE AND CONQUER STRATEGY\n\n QuickSort Function (A[], low, high) \n\nif(low < high)\n1. Calculate pivotIdx = Partition Function (A[], low, high) \n2. Call QuickSort Function (A[], low, pivotIdx - 1) and QuickSort Function (A[], pivotIdx + 1, high) \n\n\n Partition Function (A[], low, high) \n1. Initialize i = low - 1 and pivot = A[high]\n2. Iterate from j = low to high - 1: \n2.1 if (A[j] < pivot) then i++ and swap(A[j] , A[i]) repeat \n3. i++ and swap(A[i], A[high])\n 4. return i',
        },
        {
            id: 4,
            title: 'MERGE SORT',
            sort: 'mergeSort',
            tc: 'O(nlogn)',
            sc: 'O(n)',
            imgSrc: "/sort-visualizer/imgs/merge-sort.png",
            algorithm: 'DIVIDE AND CONQUER STRATEGY\n\nMerge Function (A[], start, end) \n if(start < end) \n1. mid = (end-start)/2 \n 2. Call Merge Function (A[], start, mid) and Merge Function (A[], mid + 1, end) \n 3. Call Conquer Function (A, start, mid, end) \n\n\nConquer Function(A[], start, mid, end) \n 1. Create an array B[] of size = (end-start+1) \n 2. Iterate through A[] with two pointers p and q, where p = start and q = mid + 1 and B[] with pointer i = 0 to size-1 \n 2.1 if A[p] < A[q] then B[i++] = A[p++] \n 2.2 else B[i++] = A[q++] \n 3. while p <= mid do: B[i++] = A[p] \n 4. while q <= end do: B[i++] = A[q] \n\n\n Initialize i = 0 and j = start. Copy the sorted elements from B[] to A[]',
        },
    ]
    const array = [25, 10, 15, 34, 56, 82, 18, 70]

    const cards = cardInfo.map((e, i) => <Card key={e.id} title={e.title} array={array} sort={e.sort} tc={e.tc} sc={e.sc} algorithm={e.algorithm} imgSrc={e.imgSrc} />)

    return (
        <div>
            <h1>Sort Visualizer</h1>
            <div className='homepage'>{cards}</div>
        </div>
    )
}

export default HomePage
