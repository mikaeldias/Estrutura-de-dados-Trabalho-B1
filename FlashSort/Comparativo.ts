import {v1, v2, v3, flashSort} from './FS';
import {bubbleSort} from './BubbleSort';
import {insertionSort} from './InsertionSort';
import {mergeSort} from './MergeSort';

// Flash Sort
let inicio_FlashSort = performance.now();
flashSort([...v1]);
let fim_inicio_FlashSort = performance.now();
console.log('--------------------------------------------------------------------------------------')
console.log(`O tempo de duração do (Flash Sort) foi de (Array em ordem Aleatória): ${fim_inicio_FlashSort - inicio_FlashSort}`);
console.log('--------------------------------------------------------------------------------------')

// Bubble Sort
let inicio_bubbleSort = performance.now();
bubbleSort([...v1]);
let fim_bubbleSort = performance.now();
console.log('--------------------------------------------------------------------------------------')
console.log(`O tempo de duração do (Bubble Sort) foi de (Array em ordem Aleatória): ${fim_bubbleSort - inicio_bubbleSort}`);
console.log('--------------------------------------------------------------------------------------')

// Insertion Sort
let inicio_insertionSort = performance.now();
insertionSort([...v1]);
let fim_insertionSort = performance.now();
console.log('--------------------------------------------------------------------------------------')
console.log(`O tempo de duração do (Insertion Sort) foi de (Array em ordem Aleatória): ${fim_insertionSort  - inicio_insertionSort}`);
console.log('--------------------------------------------------------------------------------------')


// Merge Sort
let inicio_mergeSort = performance.now();
mergeSort(([...v1]));
let fim_mergeSort = performance.now();
console.log('--------------------------------------------------------------------------------------')
console.log(`O tempo de duração do (Merge Sort) foi de (Array em ordem Aleatória): ${fim_mergeSort  - inicio_mergeSort}`);
console.log('--------------------------------------------------------------------------------------')