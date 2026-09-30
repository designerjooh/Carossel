//Captura o botão "próximo"
let btnproximo = document.getElementById("proximo");
//Captura o botão "anterior"
let btnanterior = document.getElementById("anterior");
//Captura o quadro onde a fotografia é exibida
let imagem = document.getElementById("imagem");
//Cria o álbum e guardar as fotos 
let album = [
        "https://picsum.photos/id/1015/1200/600",
        "https://picsum.photos/id/1025/1200/600",
        "https://picsum.photos/id/1043/1200/600"
]

//Quando o botão próximo for clicado, 
//executará a função mostrar proximo
btnproximo.addEventListener("click", mostrarProximo);
//Quando o botão anterior for clicado, 
//executará a função mostrar anterior
btnanterior.addEventListener("click", mostrarAnterior);


//Definir a posição inicial da fotografia do album
let foto = 0; 

//Função responsável por mostrar a proxima fotografia 
function mostrarProximo(){
    //Avança uma posição do álbum
    foto = foto + 1;
    if(foto >= album.length){
       //Voltar a posição inicial
        foto = 0;
    }

    imagem.src = album[foto];

}

//Função responsável por mostrar a fotografia anterior
function mostrarAnterior(){
    //Responsável por retroceder uma imagem
    foto = foto - 1;
    if(foto < 0){
        foto = album.length - 1;
    }
    imagem.src = album[foto];
}