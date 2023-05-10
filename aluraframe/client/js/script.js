
var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

// console.log(campos);

var tBody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault();

      // cria o elemento tr
      var tr = document.createElement("tr");

      // percorre por cada item do array
      campos.forEach(function(campo) {
      // Cria o elemento td
      var td = document.createElement("td")
      //pega o valor do conteúdo do item
      td.textContent = campo.value;

      // adiciona a td na tr
      tr.appendChild(td)
    })

    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume)
    tBody.appendChild(tr);
    // console.log(tdVolume)

    campos[0].value= "";
    campos[1].value= 1;
    campos[2].value= 0;

    campos[0].focus();

})
