
function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array, changeCompletely ) {
  array.forEach(changeCompletely)
}
