function getParentIndex(childIndex) {
  ++childIndex;
  if (childIndex === 1) {
    return -1;
  }
  return (childIndex >> 1) - 1;
}

function getLeftChildIndex(parentIndex) {
  return ((parentIndex + 1) << 1) - 1;
}

function getRightChildIndex(parentIndex) {
  return (parentIndex + 1) << 1;
}

function swap(vec, i1, i2) {
  const tmp = vec[i1];
  vec[i1] = vec[i2];
  vec[i2] = tmp;
}

class MaxHeap {
  fromHeap(heap) {
    this.heap = heap;
  }

  fromArray(vec) {
    this.heap = new Array(vec.length);
    let k = 0;
    for (let i = 0; i < vec.length; ++i) {
      this.heap[k] = vec[i];
      if (k > 0) {
        let index = k;

        //bubble-up item at index
        let parentIndex;
        while (true) {
          parentIndex = getParentIndex(index);
          if (parentIndex < 0 || this.heap[parentIndex] > this.heap[index]) {
            break;
          }
          swap(this.heap, index, parentIndex);
          index = parentIndex;
        }
      }
      ++k;
    }
  }

  insert(el) {}

  heapify(index) {
    let rgtIndex = getRightChildIndex(index);
    let lftIndex = getLeftChildIndex(index);

    let largest;
    if (lftIndex < this.heap.length && this.heap[lftIndex] > this.heap[index]) {
      largest = lftIndex;
    } else {
      largest = index;
    }
    if (rgtIndex < this.heap.length && this.heap[rgtIndex] > this.heap[largest]) {
      largest = rgtIndex;
    }
    if (largest !== index) {
      swap(this.heap, largest, index);
      this.heapify(largest);
    }
  }

  extractTop() {
    const min = this.heap[0];
    swap(this.heap, 0, this.heap.length - 1);
    --this.heap.length;
    this.heapify(0);
    return min;
  }
}

const vec = [9, 4, 2, 1, 8, 7, 3];

const h = new MaxHeap();
h.fromArray(vec);
console.log(h.heap);

const sorted = [];
for (let i = 0; i < vec.length; ++i) {
  sorted.push(h.extractTop());
  console.log('i', i, ': ', h.heap);
}
console.log('sorted=', sorted);
