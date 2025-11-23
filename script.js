document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('TextInput');
    const output = document.getElementById('BinaryOutput');
    const convertBtn = document.getElementById('ConvertBtn');
    const copyBtn = document.getElementById('CopyBtn');

    function textToBinary(text) {
        return text.split('').map(char => {
            return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
    }

    function convert() {
        const text = input.value;
        if (text.trim() === '') {
            output.value = '';
            return;
        }

        // Add a cool "processing" effect
        output.value = 'PROCESSING...';

        setTimeout(() => {
            output.value = textToBinary(text);
        }, 300);
    }

    convertBtn.addEventListener('click', convert);

    // Also convert on typing (optional, but nice)
    // input.addEventListener('input', convert); 
    // Kept it manual for the "button press" feel requested, but let's add Enter key support
    input.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            convert();
        }
    });

    copyBtn.addEventListener('click', () => {
        if (!output.value) return;

        output.select();
        document.execCommand('copy');

        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'COPIED!';
        setTimeout(() => {
            copyBtn.innerText = originalText;
        }, 2000);
    });
});
