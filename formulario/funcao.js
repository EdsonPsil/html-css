function calc_total(){
  var qtd = parseInt(document.getElementById('cQtd').value);
  var tot = qtd * 1500;
  document.getElementById('preco').value = tot
}