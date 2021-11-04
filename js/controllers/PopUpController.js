class PopUpController{
    constructor(){
        this._navegacao = document.querySelector('#navegacao')
        
    }

    abrirPopUp(idAbre, idPopUp){

        let popUp = document.querySelector(idPopUp)
        let botaoAbrir = document.querySelector(idAbre)

        botaoAbrir.addEventListener('click', () =>{
            
            popUp.classList.remove('fechar__popUp')
            this._navegacao.classList.add('navegacao__popUp')
        })
    }


    fecharPopUp(idFechar, idPopUp){

        let botaoFechar =  document.querySelector(idFechar)
        let popUp = document.querySelector(idPopUp)

        botaoFechar.addEventListener('click', ()=>{
           popUp.classList.add('fechar__popUp')
           this._navegacao.classList.remove('navegacao__popUp')
           
        })
    }
}