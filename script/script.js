// // indexOf
const arr = [4, 5, 15, 8, 4, 7, 15, 3, 2, 9];

function indexOf(searchElem, fromIndex = 0, array) {
  if (Array.isArray(array)) {
    if (fromIndex >= array.length) {
      return -1;
    } else if (fromIndex < 0) {
      fromIndex = array.length + fromIndex;
    }
    for (let i = fromIndex; i < array.length; i++) {
      if (searchElem === array[i]) {
        return i;
      }
    }
    return -1;
  }
}

console.log(indexOf(5, 3, arr));

// //lastIndexOf


const arr = [4, 25, 15, 18, 42, 17, 15, 38, 21, 92];

function lastIndexOfMy(searchValue, fromIndex, array) {
  if (fromIndex === undefined || fromIndex > array.length) {
    fromIndex = array.length;
  } else if (fromIndex < 0) {
    fromIndex = 0;
  }
  for (let i = fromIndex; i >= 0; i--) {
    if (searchValue === array[i]) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOfMy(15, 4, arr));

// find

const arr = [1, 3, -22, -3, 4, 25, -6];

function find (cb, array) {
	let value = undefined;

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i], i, array)) {
			value = array[i];
			return value;
		}
	}
}

function cb (value, index, array) {
	return value < 0;
}

console.log(find(cb, arr));

// findIndex

const arr = [1, 3, 22, -3, 4, 25, -6];

function findIndex (cb, array) {
	let value = -1;

	for (let i = 0; i < array.length; i++) {
		if (cb(array[i], i, array)) {
			value = i;
			return value;
		}
	}
}

function cb (value, index, array) {
	return value < 0;
}

console.log(findIndex(cb, arr));

// includes

const arr = [1, 3, 22, -3, 4, 25, -6];

function includes (item, from = 0) {
	if (from >= 0) {
		for (let i = from; i < arr.length; i++) {
			if (arr[i] === item || Number.isNaN(arr[i])) return true;
		}
	} else if (from < 0) {
		for (let i = arr.length + from; i < arr.length; i++) {
		return arr[i] === item;
		}
	}
	return false
}
console.log(includes(223));

//every

const arr = [7, 5, 15, 22, 5, 7, 15, 3, 1, 9];
function every(callback, array) {
  if (array.length === 0) {
    return true;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined && !callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

function numberPositive(currentValue, index, array) {
  if (currentValue > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(every(numberPositive, arr));

// some

const arr = [1, 2, 3, 4, -5];

function every (cb, array) {

	let value = false;
	for (let i = 0; i < array.length; i++) {
		if (cb(array[i], i, array)) {
			value = true;
			return value;
		}
	}
	return value;
}

function cb (value, index, array) {
	return value < 0;
}

console.log(every(cb, arr));