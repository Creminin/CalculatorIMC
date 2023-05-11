import { ClassIMC } from "./ClassIMC";

export const ContentClassIMC = ({ result }) => {
  return (
    <section>
      <p>Seu IMC: {result}</p>

      <h2>Classificação do seu IMC:</h2>

      {result > 18.4 ? (
        false
      ) : (
        <ClassIMC
          content="Abaixo do peso ideal"
          Style={{ color: "#FA843D" }}
          AboutIMC="Você está abaixo do peso ideal. Isso pode ser apenas uma característica pessoal, mas também pode ser um sinal de desnutrição ou de algum problema de saúde. Caso esteja perdendo peso sem motivo aparente, procure um médico."
        />
      )}

      {result > 24.9 || result < 18.5 ? (
        false
      ) : (
        <ClassIMC
          content="Normal"
          Style={{ color: "#7CF978" }}
          AboutIMC="Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais."
        />
      )}

      {result > 29.9 || result < 25 ? (
        false
      ) : (
        <ClassIMC
          content="Sobrepeso"
          Style={{ color: "#FAE24B" }}
          AboutIMC="Atenção! Alguns quilos a mais já são suficientes para que algumas pessoas desenvolvam doenças associadas, como diabetes e hipertensão. É importante rever seus hábitos. Procure um médico"
        />
      )}

      {result > 40 || result < 30 ? (
        false
      ) : (
        <ClassIMC
          content="Obsidade"
          Style={{ color: "#FA421E" }}
          AboutIMC="Sinal de alerta! O excesso de peso é fator de risco para desenvolvimento de outros problemas de saúde. A boa notícia é que uma pequena perda de peso já traz benefícios à saúde. Procure um médico para definir o tratamento mais adequado para você."
        />
      )}

      {result < 40 ? (
        false
      ) : (
        <ClassIMC
          content="Obsidade grave!!"
          Style={{ color: "#FA011B" }}
          AboutIMC="Sinal vermelho! Ao atingir este nível de IMC, o risco de doenças associadas é muito alto. Busque ajuda de um profissional de saúde; não perca tempo."
        />
      )}
    </section>
  );
};
