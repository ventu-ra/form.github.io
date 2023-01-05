class Responsavel{
  name: string
  cpf: string
}

var R = new Array()

function getValue(): void{
  const r = new Responsavel()
  r.name = document.querySelector('#name')['value']
  r.cpf = document.querySelector('#cpf')['value']
  save(r)
}

function validator(dados: Responsavel): boolean{
  if(dados.name.length && dados.cpf.length){
    return true
  }
  return false
}
function save(r: Responsavel) {
  if(validator(r)){
  }else{
    alert( "É necessário preencher todos os campo para poder continuar!" )
    return
  }
  
  R.push(r)
  list()

  console.log("Saving...", R);  
}

function list(){

  for(let value of R){
    console.log("value: ",value);
  }
 
}