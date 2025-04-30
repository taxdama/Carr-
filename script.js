const link = document.getElementById('link');
link.addEventListener('click', (e) => {
  e.preventDefault();
  link.classList.toggle('active');
});

const calcBtn = document.getElementById('calcBtn');
const numberInput = document.getElementById('numberInput');
const resultDiv = document.getElementById('result');

calcBtn.addEventListener('click', () => {
  const number = parseFloat(numberInput.value);
  if (!isNaN(number)) {
    const squared = number * number;
    resultDiv.textContent = `Résultat : ${squared}`;
    resultDiv.classList.add('show');
    if (squared > 1000) {
      resultDiv.style.color = '#ff00ff';
      resultDiv.style.textShadow = '0 0 10px #ff00ff, 0 0 20px #ff00ff';
    } else {
      resultDiv.style.color = '#0ff';
      resultDiv.style.textShadow = 'none';
    }
  } else {
    resultDiv.textContent = "Veuillez entrer un nombre valide.";
    resultDiv.classList.add('show');
    resultDiv.style.color = 'red';
    resultDiv.style.textShadow = 'none';
  }
});
