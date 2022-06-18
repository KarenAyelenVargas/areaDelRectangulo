let base = document.getElementById("bas");
let altura = document.getElementById("alt");
let btnCalcular = document.getElementById("btnCalc");

btnCalcular.addEventListener("click", () => {
  let base: number = Number(bas.value);
  let altura: number = Number(alt.value);
  let area: number = base * altura;
  console.log("el área es de", area);
});
