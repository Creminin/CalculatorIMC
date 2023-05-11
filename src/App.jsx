import { useState } from "react";
import { ContentClassIMC } from "./contentClassIMC";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [resultIMC, setResultIMC] = useState("");

  const handleClick = () => {
    if (height == 0 || weight == 0) {
      alert("Por favor preencha os campos");
    } else {
      const replaceHeight = height.replace(",", ".");
      const replaceWeight = weight.replace(",", ".");

      const calcIMC = +replaceWeight / (+replaceHeight * +replaceHeight);

      setResultIMC(calcIMC.toFixed(1));
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        backgroundColor: "#020E0F",
        padding: "25px",
        borderRadius: "5px",
        border: "2px solid #2B2B2B",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <form style={{ display: "grid", gap: "15px", maxHeight: "150px" }}>
        <input
          type="text"
          placeholder="Digite sua altura"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          maxLength="4"
          required
          style={{
            border: height == "" ? "2px solid red" : "2px solid white",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#031C1E",
            color: "white",
          }}
        />

        <input
          type="text"
          placeholder="Digite seu peso"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          maxLength="3"
          required
          style={{
            border: weight == "" ? "2px solid red" : "2px solid white",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "#031C1E",
            color: "white",
          }}
        />

        <button
          onClick={handleClick}
          type="button"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "2px solid #2B2B2B",
            backgroundColor: "#021314",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Calcular meu IMC
        </button>
      </form>
      <div>
        {resultIMC == 0 ? (
          <>
            <h2>Ainda não sabe seu Índice de Massa Corporal (IMC)? </h2>
            <p>Faça o cálculo aqui mesmo e conheça mais sobre o seu corpo.</p>
          </>
        ) : (
          <ContentClassIMC result={resultIMC} />
        )}
      </div>
    </div>
  );
}

export default App;
