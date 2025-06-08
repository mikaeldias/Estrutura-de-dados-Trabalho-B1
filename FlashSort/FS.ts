function flashSort(arr: number[]): number[] { 
    let max = 0;
    let min = arr[0];
    const n: number = arr.length; 
    const m: number = ~~(0.45 * n); 
    const l: number[] = new Array(m); 

    for (let i = 1; i < n; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > arr[max]) {
            max = i;
        }
    }

    if (min === arr[max]) {
        return arr;
    }

    const c1: number = (m - 1) / (arr[max] - min); 

    for (let k = 0; k < m; k++) {
        l[k] = 0;
    }

    for (let j = 0; j < n; ++j) {
        const k_val: number = ~~(c1 * (arr[j] - min)); 
        ++l[k_val];
    }

    for (let p = 1; p < m; ++p) {
        l[p] = l[p] + l[p - 1];
    }

    let hold: number = arr[max]; 
    arr[max] = arr[0];
    arr[0] = hold;

    // permutation
    let move: number = 0;
    let t: number; 
    let flash: number; 
    let j_perm: number = 0; 
    let k_perm: number = m - 1; 

    while (move < (n - 1)) {
        while (j_perm > (l[k_perm] - 1)) {
            ++j_perm;
            k_perm = ~~(c1 * (arr[j_perm] - min));
        }
        if (k_perm < 0) break;
        flash = arr[j_perm];
        while (j_perm !== l[k_perm]) {
            k_perm = ~~(c1 * (flash - min));
            hold = arr[t = --l[k_perm]];
            arr[t] = flash;
            flash = hold;
            ++move;
        }
    }

    // insertion
    for (let j_insert = 1; j_insert < n; j_insert++) {
        hold = arr[j_insert];
        let i_insert = j_insert - 1; 
        while (i_insert >= 0 && arr[i_insert] > hold) {
            arr[i_insert + 1] = arr[i_insert--];
        }
        arr[i_insert + 1] = hold;
    }
    return arr;
}

 // Criar lista em ordem aleatória
let v1: number[] = []; 

for (let i = 0; i < 100000; i++) {
  v1.push(Math.floor(Math.random() * 10000));
}

// Criar lista ordenada
let v2: number[] = [];
for (let i = 0; i < 100000; i++) {
  v2.push(i);
}

// Criar lista em ordem decrescente
let v3: number[] = [];
for (let i = 100000; i >= 0; i--) {
  v3.push(i);
}


let inicio = performance.now();
flashSort(v1);
let fim = performance.now();
console.log('--------------------------------------------------------------------------------------')
console.log(`O tempo de duração do Flash Sort foi de (Array de Ordem Aletoria): ${fim - inicio}`);

console.log('--------------------------------------------------------------------------------------')

let inicio_2 = performance.now();
flashSort(v2);
let fim_2 = performance.now();

console.log('--------------------------------------------------------------------------------------')
console.log(`O tempo de duração do Flash Sort foi de (Array Ordenado): ${fim_2 - inicio_2}`);
console.log('--------------------------------------------------------------------------------------')

let inicio_3 = performance.now();
flashSort(v3);
let fim_3 = performance.now();

console.log('--------------------------------------------------------------------------------------')
console.log(`O tempo de duração do Flash Sort foi de (Array Inversamente Ordenado): ${fim_3 - inicio_3}`);
console.log('--------------------------------------------------------------------------------------')