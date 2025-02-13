function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
        result = "Por favor, insira números válidos!";
    } else {
        switch (operation) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            if (num2 === 0) {
              result = "Divisão por zero!";
            } else {
              result = num1 / num2;
            }
            break;
          default:
            result = "Operação inválida!";
        }
    }
    
    document.getElementById('result').textContent = "Resultado: " + result;
  }
  
  
  
    function convert() {
      const value = parseFloat(document.getElementById('value').value);
      const conversionType = document.getElementById('conversionType').value;
      let result;
    
      switch (conversionType) {
        case 'celsiusToFahrenheit':
          result = (value * 9/5) + 32;
          break;
        case 'metersToCentimeters':
          result = value * 100;
          break;
        case 'kilogramsToPounds':
          result = value * 2.20462;
          break;
        default:
          result = "Tipo de conversão inválido!";
      }
    
      document.getElementById('result').textContent = "Resultado: " + result;
    }
  
    function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    let bmi = weight / (height * height);
    let classification;
  
    if (bmi < 18.5) {
      classification = "Abaixo do peso";
    } else if (bmi < 25) {
      classification = "Peso normal";
    } else if (bmi < 30) {
      classification = "Sobrepeso";
    } else {
      classification = "Obesidade";
    }
  
    document.getElementById('result').textContent = "IMC: " + bmi.toFixed(2) + " - Classificação: " + classification;
  }
  
  
  
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  function checkGuess() {
      let userGuess = parseInt(document.getElementById("userGuess").value);
      let feedback = document.getElementById("feedback");
      
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          feedback.innerText = "Por favor, insira um número válido entre 1 e 100.";
          return;
      }
      
      if (userGuess < randomNumber) {
          feedback.innerText = "Tente um número maior!";
      } else if (userGuess > randomNumber) {
          feedback.innerText = "Tente um número menor!";
      } else {
          feedback.innerText = "Parabéns! Você acertou!";
      }
  }