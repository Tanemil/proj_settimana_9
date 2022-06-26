
let elemento_container_telefoni = document.createElement('div')
elemento_container_telefoni.className = 'container_telefoni'

document.body.append(elemento_container_telefoni)

let contatore_bottoni_chiamata:number = 0

interface Smartphone{
    number_carica:number;
    number_numero_chiamate:number;
}

class Utente{
    private smartphone:Smartphone
    private index_bottone:number
    private in_chiamata:number
    constructor(smartphone:Smartphone){
        this.smartphone = smartphone
        this.index_bottone = contatore_bottoni_chiamata
        this.in_chiamata = 0
    }
    public ricarica(una_ricarica:number):void{
        this.smartphone.number_carica += una_ricarica
    }
    chiamata():void {
        let index_bottone:number = contatore_bottoni_chiamata
        this.smartphone.number_numero_chiamate++;
        if (this.smartphone.number_carica === 0){
            alert('credito insufficente')
        }else{
            document.querySelectorAll('.container_call button')[this.index_bottone]!.classList.add('in_chiamata')
            this.in_chiamata = setInterval(() => {
                if (this.smartphone.number_carica > 0) {
                    this.smartphone.number_carica = (this.smartphone.number_carica * 10 - 0.2 * 10) / 10;
                }else{
                    clearInterval(this.in_chiamata);
                    console.log('chiamata terminata');
                    document.querySelectorAll('.display p')[this.index_bottone]!.innerHTML = 'digita numero'
                    document.querySelectorAll('.container_call button')[this.index_bottone].classList.remove('in_chiamata')
                }
            }, 1000);    
        }

    }
    public numero404():number{return this.smartphone.number_carica}
    public get_numero_chiamate():number{return this.smartphone.number_numero_chiamate}
    public azzera_chiamate():void{this.smartphone.number_numero_chiamate = 0}
    public mostra_telefono():void {
        let elemento_bordo:HTMLDivElement = document.createElement('div')
        elemento_bordo.className = "outer_border_smartphone"
        let elemento_smartphone_display:HTMLDivElement = document.createElement('div')
        elemento_smartphone_display.className = "smartphone_display"
        let elemento_display:HTMLDivElement = document.createElement('div')
        elemento_display.className = "display"
        let elemento_p_display:HTMLParagraphElement = document.createElement('p')
        elemento_p_display.innerText = 'digita numero'
        elemento_display.appendChild(elemento_p_display)
        let elemento_tastierino:HTMLDivElement = document.createElement('div')
        elemento_tastierino.className = "tastierino"
        let elemento_div1t:HTMLDivElement = document.createElement('div')
        let elemento_bottone9:HTMLButtonElement = document.createElement('button')
        elemento_bottone9.innerHTML = '9'
        let elemento_bottone8:HTMLButtonElement = document.createElement('button')
        elemento_bottone8.innerHTML = '8'
        let elemento_bottone7:HTMLButtonElement = document.createElement('button')
        elemento_bottone7.innerHTML = '7'
        elemento_div1t.appendChild(elemento_bottone9)
        elemento_div1t.appendChild(elemento_bottone8)
        elemento_div1t.appendChild(elemento_bottone7)
        let elemento_div2t:HTMLDivElement = document.createElement('div')
        let elemento_bottone6:HTMLButtonElement = document.createElement('button')
        elemento_bottone6.innerHTML = '6'
        let elemento_bottone5:HTMLButtonElement = document.createElement('button')
        elemento_bottone5.innerHTML = '5'
        let elemento_bottone4:HTMLButtonElement = document.createElement('button')
        elemento_bottone4.innerHTML = '4'
        elemento_div2t.appendChild(elemento_bottone6)
        elemento_div2t.appendChild(elemento_bottone5)
        elemento_div2t.appendChild(elemento_bottone4)
        let elemento_div3t:HTMLDivElement = document.createElement('div')
        let elemento_bottone3:HTMLButtonElement = document.createElement('button')
        elemento_bottone3.innerHTML = '3'
        let elemento_bottone2:HTMLButtonElement = document.createElement('button')
        elemento_bottone2.innerHTML = '2'
        let elemento_bottone1:HTMLButtonElement = document.createElement('button')
        elemento_bottone1.innerHTML = '1'
        elemento_div3t.appendChild(elemento_bottone3)
        elemento_div3t.appendChild(elemento_bottone2)
        elemento_div3t.appendChild(elemento_bottone1)
        let elemento_div4t:HTMLDivElement = document.createElement('div')
        let elemento_bottone10:HTMLButtonElement = document.createElement('button')
        elemento_bottone10.innerHTML = '*'
        let elemento_bottone0:HTMLButtonElement = document.createElement('button')
        elemento_bottone0.innerHTML = '0'
        let elemento_bottone11:HTMLButtonElement = document.createElement('button')
        elemento_bottone11.innerHTML = '#'
        elemento_div4t.appendChild(elemento_bottone10)
        elemento_div4t.appendChild(elemento_bottone0)
        elemento_div4t.appendChild(elemento_bottone11)
        elemento_tastierino.appendChild(elemento_div1t)
        elemento_tastierino.appendChild(elemento_div2t)
        elemento_tastierino.appendChild(elemento_div3t)
        elemento_tastierino.appendChild(elemento_div4t)
        let elemento_container_call:HTMLDivElement = document.createElement('div')
        elemento_container_call.className = "container_call"
        var elemento_bottone_chiamata:HTMLButtonElement = document.createElement('button')
        elemento_bottone_chiamata.innerHTML = '<i class="fa-solid fa-phone"></i>'
        contatore_bottoni_chiamata++
        elemento_container_call.appendChild(elemento_bottone_chiamata)
        elemento_smartphone_display.appendChild(elemento_display)
        elemento_smartphone_display.appendChild(elemento_tastierino)
        elemento_smartphone_display.appendChild(elemento_container_call)
        elemento_bordo.appendChild(elemento_smartphone_display)
        document.querySelector('.container_telefoni')!.appendChild(elemento_bordo)
        
        for (let index = 0; index < elemento_tastierino.querySelectorAll('div button').length; index++) {
            elemento_tastierino.querySelectorAll('div button')[index].addEventListener('click',()=>{
                if (elemento_p_display.innerHTML === 'digita numero'){
                    elemento_p_display.innerHTML = ''
                    switch (index){
                        case 0:{elemento_p_display.innerHTML += '9'; break}
                        case 1:{elemento_p_display.innerHTML += '8'; break}
                        case 2:{elemento_p_display.innerHTML += '7'; break}
                        case 3:{elemento_p_display.innerHTML += '6'; break}
                        case 4:{elemento_p_display.innerHTML += '5'; break}
                        case 5:{elemento_p_display.innerHTML += '4'; break}
                        case 6:{elemento_p_display.innerHTML += '3'; break}
                        case 7:{elemento_p_display.innerHTML += '2'; break}
                        case 8:{elemento_p_display.innerHTML += '1'; break}
                        case 9:{elemento_p_display.innerHTML += '*'; break}
                        case 10:{elemento_p_display.innerHTML += '0'; break}
                        case 11:{elemento_p_display.innerHTML += '#'; break}
                    }
                }else{
                    switch (index){
                        case 0:{elemento_p_display.innerHTML += '9'; break}
                        case 1:{elemento_p_display.innerHTML += '8'; break}
                        case 2:{elemento_p_display.innerHTML += '7'; break}
                        case 3:{elemento_p_display.innerHTML += '6'; break}
                        case 4:{elemento_p_display.innerHTML += '5'; break}
                        case 5:{elemento_p_display.innerHTML += '4'; break}
                        case 6:{elemento_p_display.innerHTML += '3'; break}
                        case 7:{elemento_p_display.innerHTML += '2'; break}
                        case 8:{elemento_p_display.innerHTML += '1'; break}
                        case 9:{elemento_p_display.innerHTML += '*'; break}
                        case 10:{elemento_p_display.innerHTML += '0'; break}
                        case 11:{elemento_p_display.innerHTML = ''; break}
                    }
                }
            })
        }
        elemento_bottone_chiamata.addEventListener('click',()=>{
            if (document.querySelectorAll('.container_call button')[this.index_bottone]!.classList.contains('in_chiamata')){
                clearInterval(this.in_chiamata);
                console.log('chiamata terminata');
                document.querySelectorAll('.display p')[this.index_bottone]!.innerHTML = 'digita numero'
                document.querySelectorAll('.container_call button')[this.index_bottone].classList.remove('in_chiamata')
            }else{
                if (elemento_p_display.innerHTML.length === 10){
                    this.chiamata()
                }else if (elemento_p_display.innerHTML === '**'){
                    elemento_p_display.innerHTML = 'n chiamate azzerato'
                    this.azzera_chiamate()
                } else if (elemento_p_display.innerHTML === '404'){
                    elemento_p_display.innerHTML = 'il tuo credito: '+this.smartphone.number_carica
                }else if(elemento_p_display.innerHTML === '*'){
                    elemento_p_display.innerHTML ='n chiamate: '+this.get_numero_chiamate()
                }else{
                    alert('numero non valido')
                    elemento_p_display.innerHTML = 'digita numero'
                }
            }
        })
    }
}

let utente1:Utente = new Utente({number_carica:1,number_numero_chiamate:0})
utente1.mostra_telefono()
let utente2:Utente = new Utente({number_carica:20,number_numero_chiamate:0})
utente2.mostra_telefono()
let utente3:Utente = new Utente({number_carica:50,number_numero_chiamate:0})
utente3.mostra_telefono()

document.querySelector('.spiegazione')?.addEventListener('click',()=>{
    let a  = document.getElementsByClassName("container_info") as HTMLCollectionOf<HTMLElement>
    if (a[0].style.display === 'none' || a[0].style.display === ''){
        a[0].style.display = 'block'
    }else{
        a[0].style.display = 'none'
    }
})
