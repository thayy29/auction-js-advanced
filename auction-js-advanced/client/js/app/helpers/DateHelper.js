class DateHelper {

  constructor() {
    throw new Error("Está classe não pode ser instanciada!")
  }

 static textoParaData(texto){
  if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error("Data deve está no formato aaaa-MM-dd");
  return new Date(
      ...texto
        .split("-")
        .map((item, indice) => item - indice % 2)
    )
  }

  static dataParaTexto(data){
    console.log(typeof(data), "data")
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }
}
