const sumArray = (a) => { 
    let total = 0; 
    for (let i = 0; i < a.length; i++) {
        total += a[i]
    };
    return total;
} 

const testCases = (code) => { 
    const input = [1,2,3,4,5]; 
    const expected = 15; 
    const result = code(input); 
    if (result === expected) { 
        return true 
    } else { 
        return false 
    } 
}; 

console.log(testCases(sumArray))