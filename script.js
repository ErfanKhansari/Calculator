const display = document.getElementById('show');
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'x':
                display.innerText += '*';
                break;
                case '÷':
                display.innerText += '/';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error'
                }
                break;

            default:
                display.innerText += e.target.innerText;

        }
    });
});
















