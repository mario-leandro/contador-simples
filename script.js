const menos = document.getElementById("menos");
const resultado = document.getElementById("resultado");
const mais = document.getElementById("mais");

let valor = 0;

menos.addEventListener("click", () => {
    valor--;
    resultado.textContent = valor;

})

mais.addEventListener("click", () => {
    valor++;
    resultado.textContent = valor;
});