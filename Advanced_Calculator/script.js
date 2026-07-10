const d = document.getElementById('display');
const keys = ['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '%', '=', '√', 'x²', '1/x', '←'];
const g = document.getElementById('keys');
keys.forEach(k => {
    let b = document.createElement('button');
    b.textContent = k;
    b.onclick = () => press(k);
    g.appendChild(b)
});
function press(k) {
    if (k === 'C') d.value = '';
    else if (k === '←') d.value = d.value.slice(0, -1);
    else if (k === '=') {
        try {
            d.value = Function('return ' + d.value)()

        } catch { d.value = 'Error' }
    }
    else if (k === '√') {
        try { d.value = Math.sqrt(eval(d.value) || 0) }
        catch { d.value = 'Error' }
    } else if (k === 'x²') {
        try { let v = eval(d.value) || 0; d.value = v * v }
        catch { d.value = 'Error' }
    } else if (k === '1/x') {

        try { let v = eval(d.value) || 0; d.value = 1 / v }
        catch { d.value = 'Error' }
        
    } else d.value += k;
} document.addEventListener('keydown', e => {
    if (e.key === 'Enter') 
        press('=');
    else if (e.key === 'Backspace') 
        press('←');
    else if (e.key === 'Escape') 
        press('C');
    else if ('0123456789+-*/().%'.includes(e.key)) 
        d.value += e.key;
});