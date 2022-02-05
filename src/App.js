import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { lightTheme, darkTheme } from './components/UI/themes';
import * as S from './style';

import dark from '../src/assets/icons/dark.svg';
import light from '../src/assets/icons/light.svg';

import Input from './components/Input';


export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);
  const [thema, setThema] = useState(true);

  useEffect(() => {
    if(peso.length !== 0 || altura.length !== 0){
      setResultado('');
      return;
    }
  }, [peso, altura]);

  function calculaIMC(){
    if(peso.length === 0 || altura.length === 0){
      setResultado('Por favor, preencha os campos!');
      return;
    }

    const alt = altura / 100;
    const imc = peso / (alt * alt);
  
    setLoading(true);
  
    setTimeout(() => {
      setLoading(false)
        if(imc <= 18.5){
          setResultado(`Abaixo do peso! Seu IMC: ${imc.toFixed(2)}`);
    
        } else if(imc >= 18.6 && imc <= 24.9){
          setResultado(`Peso normal! Seu IMC: ${imc.toFixed(2)}`);
    
        } else if(imc >= 25 && imc <= 29.9){
          setResultado(`Sobrepeso! Seu IMC: ${imc.toFixed(2)}`);
    
        } else if(imc >= 30 && imc <= 34.9){
          setResultado(`Obesidade grau 1! Seu IMC: ${imc.toFixed(2)}`);
      
        } else if(imc >= 35 && imc <= 39.9){
          setResultado(`Obesidade grau 2! Seu IMC: ${imc.toFixed(2)}`);
          
        } else if(imc >= 40){
          setResultado(`Obesidade grau 3! Seu IMC: ${imc.toFixed(2)}`);
        }
      }, 1500);
  
      setPeso('');
      setAltura('');
    }
  
  return (
    <ThemeProvider theme={thema ? darkTheme : lightTheme}>
      <GlobalStyle />

        <S.BtnTheme onClick={() => setThema(!thema)}>
          {thema ? 
            (
              <img src={light} alt='Light Theme' />
            ) : (
              <img src={dark} alt='Dark Theme' /> 
            )}
        </S.BtnTheme>
      <S.Container>

        <h1>Calculadora IMC</h1>
        <span>Vamos calcular seu IMC</span>

        <S.AreaInputs>
          <Input 
            type='number' 
            placeholder='Peso em (kg) Ex: 90' 
            value={peso}
            onChange={ (event) => setPeso(event.target.value) }
          />

          <Input 
            type='number' 
            placeholder='Altura em (cm) Ex: 180'
            value={altura}
            onChange={ (event) => setAltura(event.target.value) }
          />

          <S.BtnCalculate onClick={calculaIMC}>
            {loading ? 'Calculando...' : 'Calcular'}
          </S.BtnCalculate>
        </S.AreaInputs>

        <p>{resultado}</p>

      </S.Container>
     </ThemeProvider>
  );
}
