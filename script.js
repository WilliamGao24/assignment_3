const heronsFormula = (a, b, c) => {
    return (1 / 4) * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2));
};

document.getElementById('herons-formula').addEventListener('submit', function (event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('heron-a').value);
    const b = parseFloat(document.getElementById('heron-b').value);
    const c = parseFloat(document.getElementById('heron-c').value);

    document.getElementById('heron-answer').value = heronsFormula(a, b, c);
});