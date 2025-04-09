function Sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a + b;
}
 
function Sub(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a - b;
}
 
function Div(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    if (b === 0) return Infinity;
    return a / b;
}
 
function Mul(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    return a * b;
}
 
module.exports = { Sum, Sub, Div, Mul };
