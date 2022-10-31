const quickSort = (arr) => {

    //the base
    if (arr.length < 2) {
        return arr
    }

    const pivot = arr[arr.length - 1]

    const left = arr.filter(item => item < pivot)
    const right = arr.filter(item => item > pivot)

    return [...quickSort(left), pivot, ...quickSort(right)]

}

const a = [1, 6, 3, 4, 5, 1, 0, 4, 8]
const list = [
    { color: 'white', size: 'XXL' },
    { color: 'red', size: 'XL' },
    { color: 'black', size: 'M' }
  ]

console.log(quickSort(list))


