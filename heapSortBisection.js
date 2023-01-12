// Create a heap with new pair elements,  (element, index). 
// After sorting them, pop out each minimum sequently and create a new sorted list with the indexes. 
// Calculate the difference between the original index and the index of bisection of the new sorted list.
// Sum up the difference.

function mergeAndCount(arr, leftmostIndex ,middleIndex, rightmostIndex)
    {
     
        // Left subarray
        let left = [];
        for(let i = leftmostIndex; i < middleIndex + 1; i++)
        {
            left.push(arr[i]);
        }
         
        // Right subarray
        let right = [];
        for(let i = middleIndex + 1; i < rightmostIndex + 1; i++)
        {
            right.push(arr[i]);
        }
        let i = 0, j = 0, k = leftmostIndex, swaps = 0;
        while (i < left.length && j < right.length)
        {
            if (left[i] <= right[j])
            {
                arr[k++] = left[i++];
            }
            else
            {
                arr[k++] = right[j++];
                swaps += (middleIndex + 1) - (leftmostIndex + i);
            }
        }
        while (i < left.length)
        {
            arr[k++] = left[i++];
        }
        while (j < right.length)
        {
            arr[k++] = right[j++];
        }
        return swaps;
    }
     
    // Merge sort function
    function mergeSortAndCount(arr, leftmostIndex, rightmostIndex)
    {
         
        // Keeps track of the inversion count at a
        // particular node of the recursion tree
        let count = 0;
        if (leftmostIndex < rightmostIndex)
        {
            let middleIndex = Math.floor((leftmostIndex + rightmostIndex) / 2);
             
            // Total inversion count = left subarray count
            // + right subarray count + merge count
             
            // Left subarray count
            count += mergeSortAndCount(arr, leftmostIndex, middleIndex);
             
            // Right subarray count
            count += mergeSortAndCount(arr, middleIndex + 1, rightmostIndex);
             
            // Merge count
            count += mergeAndCount(arr, leftmostIndex, middleIndex, rightmostIndex);
        }
        return count;
    }
     
    // Driver code
    let arr= new Array(1, 20, 6, 4, 5 );
    document.write(mergeSortAndCount(arr, 0, arr.length - 1));
     

