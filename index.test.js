const { Sum, Sub, Div, Mul } = require('./index.js');

// --- Tests standards ---
test('Sum: 2 + 3 = 5', () => {
    expect(Sum(2, 3)).toBe(5);
});

test('Sub: 5 - 2 = 3', () => {
    expect(Sub(5, 2)).toBe(3);
});

test('Div: 10 / 2 = 5', () => {
    expect(Div(10, 2)).toBe(5);
});

test('Div: division par 0 = Infinity', () => {
    expect(Div(5, 0)).toBe(Infinity);
});

test('Mul: 4 * 3 = 12', () => {
    expect(Mul(4, 3)).toBe(12);
});

// --- Cas avec des négatifs ---
test('Sum: -2 + -3 = -5', () => {
    expect(Sum(-2, -3)).toBe(-5);
});

test('Sub: -5 - (-3) = -2', () => {
    expect(Sub(-5, -3)).toBe(-2);
});

test('Div: -6 / 2 = -3', () => {
    expect(Div(-6, 2)).toBe(-3);
});

test('Mul: -4 * 2 = -8', () => {
    expect(Mul(-4, 2)).toBe(-8);
});

// --- Cas limites (invalides) ---
test('Sum: "2" + 3 = NaN', () => {
    expect(Sum("2", 3)).toBeNaN();
});

test('Sub: null - 1 = NaN', () => {
    expect(Sub(null, 1)).toBeNaN();
});

test('Div: undefined / 2 = NaN', () => {
    expect(Div(undefined, 2)).toBeNaN();
});

test('Mul: 3 * "a" = NaN', () => {
    expect(Mul(3, "a")).toBeNaN();
});

test('Sum: 1 seul argument => NaN', () => {
    expect(Sum(5)).toBeNaN();
});

test('Sub: aucun argument => NaN', () => {
    expect(Sub()).toBeNaN();
});

// --- Cas spéciaux ---
test('Div: 0 / 5 = 0', () => {
    expect(Div(0, 5)).toBe(0);
});

test('Mul: 0 * 100 = 0', () => {
    expect(Mul(0, 100)).toBe(0);
});
