
class NegociacaoController {

  constructor(){
    let $ = document.querySelector.bind(document)
     this._inputQuantidade = $("#quantidade");
     this._inputData = $("#data");
     this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes()
    this._negociacoesView = new NegociacoesView($("#negociacoesView"))
    this._negociacoesView.update(this._listaNegociacoes)
    this._mensagem = new Mensagem ();
    this._mensagemView = new MensagemView($("#mensagemView"));
    this._mensagemView.update(this._mensagemView);
  }

  adiciona(event){
    event.preventDefault()
    this._listaNegociacoes.adicionaNegociacao(this._criaNegociacao());
    console.log(this._listaNegociacoes.negociacoes)
    this._mensagem.texto = "Negociação adicionada com sucesso";
    this._negociacoesView.update(this._listaNegociacoes)
    this._mensagemView.update(this._mensagem)
    this._limpaFormulario();
  }

  _criaNegociacao(){
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value,
    )
  }

  _limpaFormulario(){
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

}
