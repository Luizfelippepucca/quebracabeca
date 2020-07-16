
function nomeUsuario(){
   
var usuario =  prompt('Digite seu nome');
    // Nome do usuario digitado no prompt aparecendo no visor de nome do usuario.
var campo = document.getElementById('usu');
campo.value = usuario;
    
}
nomeUsuario();


//função para embaralhar os itens de uma unica forma no front-end.
function embaralharLista(){
var item = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');
var item7 = document.getElementById('item7');
var item8 = document.getElementById('item8');
var item9 = document.getElementById('item9');
var item10 = document.getElementById('item10');
var item11 = document.getElementById('item11');
var item12 = document.getElementById('item12');
var item13 = document.getElementById('item13');
var item14 = document.getElementById('item14');
var lista = [item,item2,item3,item4, item5, item6, item7, item8 , item9, item10,item11 , item12 ,item13 ,item14];
 

//Manipulação dos item 0
lista[0].style.marginTop = '360px';
lista[0].style.position = 'absolute';
lista[0].style.marginLeft = '300px';
lista[0] = item.innerHTML = 'item 1';
// proximo item 1
lista[1].style.marginTop = "410px"
lista[1].style.position = 'absolute';
lista[1].style.marginLeft = " 300px"
lista[1] = item2.innerHTML= 'item 2'; 

//proximo item 2
lista[2].style.marginTop = "410px"
lista[2].style.position = 'absolute';
lista[2].style.marginLeft = " 380px";
lista[2].style.height= " 75px"
lista[2] = item3.innerHTML= 'item 3';

//proximo item 3
lista[3].style.marginTop = "485px"
lista[3].style.position = 'absolute';
lista[3].style.marginLeft = " 380px";
lista[3].style.height= " 75px"
lista[3] = item4.innerHTML= 'item 4';
//proximo item 4
lista[4].style.marginTop = "410px"
lista[4].style.width = '400px';
lista[4].style.position = 'absolute';
lista[4].style.marginLeft = "460px";
lista[4].style.height= " 150px"
lista[4] = item5.innerHTML= 'item 5'; 

//proximo item 5
lista[5].style.marginTop = "410px"
lista[5].style.width = '39px';
lista[5].style.position = 'absolute';
lista[5].style.marginLeft = "860px";
lista[5].style.height= " 50px"
lista[5] = item6.innerHTML= 'item 6';

//proximo item 6
lista[6].style.marginTop = "460px"
lista[6].style.width = '39px';
lista[6].style.position = 'absolute';
lista[6].style.marginLeft = "860px";
lista[6].style.height= " 50px"
lista[6] = item7.innerHTML= 'item 7'; 

//proximo item 7
lista[7].style.marginTop = "510px"
lista[7].style.width = '39px';
lista[7].style.position = 'absolute';
lista[7].style.marginLeft = "860px";
lista[7].style.height= " 50px"
lista[7] = item8.innerHTML= 'item 8';

//proximo item 8
lista[8].style.marginTop = "400px"
lista[8].style.width = "599px"
lista[8].style.position = 'absolute';
lista[8].style.marginLeft = "300px"
lista[8] = item9.innerHTML= 'item 9';

//proximo item
lista[9].style.marginTop = "450px"
lista[9].style.width = "125px"
lista[9].style.position = 'absolute';
lista[9].style.marginLeft = "300px"
lista[9] = item10.innerHTML= 'item 10';

//proximo item 9
lista[10].style.marginTop = "450px"
lista[10].style.width = "125px"
lista[10].style.position = 'absolute';
lista[10].style.marginLeft = "425px"
lista[10] = item11.innerHTML= 'item 11';

//proximo item 10
lista[11].style.marginTop = "450px"
lista[11].style.width = "125px"
lista[11].style.position = 'absolute';
lista[11].style.marginLeft = "550px"
lista[11] = item12.innerHTML= 'item 12';

//proximo item 11 
lista[12].style.marginTop = "450px"
lista[12].style.width = "125px"
lista[12].style.position = 'absolute';
lista[12].style.marginLeft = "675px"
lista[12] = item13.innerHTML= 'item 13';
//proximo item 12
lista[13].style.marginTop = "450px"
lista[13].style.width = "99px"
lista[13].style.position = 'absolute';
lista[13].style.marginLeft = "800px"
lista[13] = item14.innerHTML= 'item 14';
  
//mostrar lista no visor
var mostrarArray = document.getElementById('campo').value = lista;

};
//resetando a pagina
function reset(){
    window.location.href = window.location.href;
};

/*função dos 14 numeros aleatorios retornando dentro da matriz no back-end
 Está função está apenas mostrando a matriz conforme no exemplo de saída do algoritimo.
 Para testar execute no console.
*/
function gerarNumeros(){
    var quantidade = 0;
    var lista = [];
for(i = 0; i < 14; i++){
    var resultado = Math.floor(Math.random(quantidade)*15);
     lista.push(resultado);
}if(lista[0] > lista[7]){
    console.log( 'A peça ' + lista[0] + ' está acima da peça ' + lista[7]);
}else if(lista[0] < lista[7]){
    console.log('A peça ' + lista[0] + ' está Abaixo da peça ' + lista[7]);
}else{
    console.log('As peças estão alinhadas');
}
return lista;
};







