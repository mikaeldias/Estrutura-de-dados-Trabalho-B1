export function mergeSort<T>(arr: T[]): T[] {
  const n = arr.length;
  if (n < 2) 
	  return arr.slice();
  const mid = Math.floor(n / 2);
  const left =  mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge<T>(a: T[], b: T[]): T[] {
  const result: T[] = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  return result.concat(a.slice(i)).concat(b.slice(j));
}