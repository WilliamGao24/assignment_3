// Heron's Formula
const heronsFormula = (a, b, c) => {
    return (1 / 4) * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2));
};

document.getElementById('herons').addEventListener('submit', function (event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('heron-a').value);
    const b = parseFloat(document.getElementById('heron-b').value);
    const c = parseFloat(document.getElementById('heron-c').value);

    document.getElementById('heron-answer').value = heronsFormula(a, b, c);
});


// Ambiguous Case
const ambiguousCase = (A, a, b) => {

const h = Math.round(b * math.sin(A * (math.PI / 180)));

if (A === 90) {
    return 'Right triangle';
}

if (A < 90) {
    if (a < h) {
        return 'No triangle';
    } else if (a > b) {
        return 'One triangle';
    } else if ((h < a) && (a < b)) {
        return 'Two triangles (ambiguous case)';
    } else {
        return 'No solution';
    }
}
else if (A < 180) {
    if ((a < b)) {
        return 'No triangle';
    } else if (a > b) {
        return 'One triangle';
    } else {
        return 'No solution';
    }
}}


document.getElementById('ambiguous').addEventListener('submit', function (event) {
    event.preventDefault();
    const A = parseFloat(document.getElementById('angle-A').value);
    const a = parseFloat(document.getElementById('side-a').value);
    const b = parseFloat(document.getElementById('side-b').value);

    document.getElementById('ambiguous-answer').value = ambiguousCase(A,a,b);
}

);



// newtons method

const newtonsMethod = (g) => {
    function f(x) {
        return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
    }
    function fPrime(x) {
        return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
    }
    let maxIterations = 1000;
    let iterations = 0;
    while (Math.abs(f(g)) > 0.0001 && iterations < maxIterations) {
        g = g - f(g) / fPrime(g);
        iterations++;
    }
    return g;
}

document.getElementById('newtons').addEventListener('submit', function (event) {
    event.preventDefault();
    const g = parseFloat(document.getElementById('root-guess').value);
    document.getElementById('newton-answer').value = newtonsMethod(g);
});


// Polynomial Evaluation
const polynomialEvaluation = (coefficients, exponents, xvalue) => {
    let result = 0;
    for (let i = 0; i < coefficients.length; i++) {
        result += parseFloat(coefficients[i]) * Math.pow(xvalue, parseFloat(exponents[i]));
    }
    return result;
}


const polynomialFunction = (coefficients, exponents) => {
    let result = '';
    for (let i = 0; i < coefficients.length; i++) {
        if (i == 0) {
            result += coefficients[i] + 'x^' + exponents[i];
        } else if (coefficients[i] < 0) {
            result += ' - ' + Math.abs(coefficients[i]) + 'x^' + exponents[i];
        } else {
            result += ' + ' + coefficients[i] + 'x^' + exponents[i];
        }
    }
    return result;
}

document.getElementById('calculate-polynomial').addEventListener('click', function (event) {
    event.preventDefault();
    var coefficients = document.getElementById('coefficients').value.split(' ');
    var exponents = document.getElementById('exponents').value.split(' ');
    var xvalue = parseFloat(document.getElementById('x-value').value);

    document.getElementById('polynomial-function').value = polynomialFunction(coefficients, exponents);
    document.getElementById('polynomial-evaluation').value = polynomialEvaluation(coefficients, exponents, xvalue);
});

