import React, { useState } from 'react';
import './App.css'; // Opcional: Adicione estilos para melhorar a aparência

function App() {
  const [altura, setAltura] = useState(''); // Armazena a altura do usuário
  const [peso, setPeso] = useState(''); // Armazena o peso do usuário
  const [resultado, setResultado] = useState(null); // Armazena o IMC calculado e a classificação

  // Função para calcular o IMC
  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = parseFloat(altura.replace(',', '.')) / 100; // Substitui vírgula por ponto e converte para metros
      const pesoEmKg = parseFloat(peso.replace(',', '.')); // Substitui vírgula por ponto no peso
      const imc = (pesoEmKg / (alturaEmMetros ** 2)).toFixed(2); // Calcula o IMC
      
      let classificacao;
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
      } else {
        classificacao = 'Obesidade';
      }
  
      setResultado({ imc, classificacao }); // Atualiza o resultado
    } else {
      alert('Por favor, preencha ambos os campos corretamente.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form-container">
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170 sem (,) ou (.) "
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
          />
        </label>
        <button onClick={calcularIMC}>Calcular</button>
      </div>

      {resultado && (
        <div className="resultado">
          <p>Seu IMC: <strong>{resultado.imc}</strong></p>
          <p>Classificação: <strong>{resultado.classificacao}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
