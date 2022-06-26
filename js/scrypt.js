"use strict";
var _a;
let elemento_container_telefoni = document.createElement('div');
elemento_container_telefoni.className = 'container_telefoni';
document.body.append(elemento_container_telefoni);
let contatore_bottoni_chiamata = 0;
class Utente {
    constructor(smartphone) {
        this.smartphone = smartphone;
        this.index_bottone = contatore_bottoni_chiamata;
        this.in_chiamata = 0;
    }
    ricarica(una_ricarica) {
        this.smartphone.number_carica += una_ricarica;
    }
    chiamata() {
        let index_bottone = contatore_bottoni_chiamata;
        this.smartphone.number_numero_chiamate++;
        if (this.smartphone.number_carica === 0) {
            alert('credito insufficente');
        }
        else {
            document.querySelectorAll('.container_call button')[this.index_bottone].classList.add('in_chiamata');
            this.in_chiamata = setInterval(() => {
                if (this.smartphone.number_carica > 0) {
                    this.smartphone.number_carica = (this.smartphone.number_carica * 10 - 0.2 * 10) / 10;
                }
                else {
                    clearInterval(this.in_chiamata);
                    console.log('chiamata terminata');
                    document.querySelectorAll('.display p')[this.index_bottone].innerHTML = 'digita numero';
                    document.querySelectorAll('.container_call button')[this.index_bottone].classList.remove('in_chiamata');
                }
            }, 1000);
        }
    }
    numero404() { return this.smartphone.number_carica; }
    get_numero_chiamate() { return this.smartphone.number_numero_chiamate; }
    azzera_chiamate() { this.smartphone.number_numero_chiamate = 0; }
    mostra_telefono() {
        let elemento_bordo = document.createElement('div');
        elemento_bordo.className = "outer_border_smartphone";
        let elemento_smartphone_display = document.createElement('div');
        elemento_smartphone_display.className = "smartphone_display";
        let elemento_display = document.createElement('div');
        elemento_display.className = "display";
        let elemento_p_display = document.createElement('p');
        elemento_p_display.innerText = 'digita numero';
        elemento_display.appendChild(elemento_p_display);
        let elemento_tastierino = document.createElement('div');
        elemento_tastierino.className = "tastierino";
        let elemento_div1t = document.createElement('div');
        let elemento_bottone9 = document.createElement('button');
        elemento_bottone9.innerHTML = '9';
        let elemento_bottone8 = document.createElement('button');
        elemento_bottone8.innerHTML = '8';
        let elemento_bottone7 = document.createElement('button');
        elemento_bottone7.innerHTML = '7';
        elemento_div1t.appendChild(elemento_bottone9);
        elemento_div1t.appendChild(elemento_bottone8);
        elemento_div1t.appendChild(elemento_bottone7);
        let elemento_div2t = document.createElement('div');
        let elemento_bottone6 = document.createElement('button');
        elemento_bottone6.innerHTML = '6';
        let elemento_bottone5 = document.createElement('button');
        elemento_bottone5.innerHTML = '5';
        let elemento_bottone4 = document.createElement('button');
        elemento_bottone4.innerHTML = '4';
        elemento_div2t.appendChild(elemento_bottone6);
        elemento_div2t.appendChild(elemento_bottone5);
        elemento_div2t.appendChild(elemento_bottone4);
        let elemento_div3t = document.createElement('div');
        let elemento_bottone3 = document.createElement('button');
        elemento_bottone3.innerHTML = '3';
        let elemento_bottone2 = document.createElement('button');
        elemento_bottone2.innerHTML = '2';
        let elemento_bottone1 = document.createElement('button');
        elemento_bottone1.innerHTML = '1';
        elemento_div3t.appendChild(elemento_bottone3);
        elemento_div3t.appendChild(elemento_bottone2);
        elemento_div3t.appendChild(elemento_bottone1);
        let elemento_div4t = document.createElement('div');
        let elemento_bottone10 = document.createElement('button');
        elemento_bottone10.innerHTML = '*';
        let elemento_bottone0 = document.createElement('button');
        elemento_bottone0.innerHTML = '0';
        let elemento_bottone11 = document.createElement('button');
        elemento_bottone11.innerHTML = '#';
        elemento_div4t.appendChild(elemento_bottone10);
        elemento_div4t.appendChild(elemento_bottone0);
        elemento_div4t.appendChild(elemento_bottone11);
        elemento_tastierino.appendChild(elemento_div1t);
        elemento_tastierino.appendChild(elemento_div2t);
        elemento_tastierino.appendChild(elemento_div3t);
        elemento_tastierino.appendChild(elemento_div4t);
        let elemento_container_call = document.createElement('div');
        elemento_container_call.className = "container_call";
        var elemento_bottone_chiamata = document.createElement('button');
        elemento_bottone_chiamata.innerHTML = '<i class="fa-solid fa-phone"></i>';
        contatore_bottoni_chiamata++;
        elemento_container_call.appendChild(elemento_bottone_chiamata);
        elemento_smartphone_display.appendChild(elemento_display);
        elemento_smartphone_display.appendChild(elemento_tastierino);
        elemento_smartphone_display.appendChild(elemento_container_call);
        elemento_bordo.appendChild(elemento_smartphone_display);
        document.querySelector('.container_telefoni').appendChild(elemento_bordo);
        for (let index = 0; index < elemento_tastierino.querySelectorAll('div button').length; index++) {
            elemento_tastierino.querySelectorAll('div button')[index].addEventListener('click', () => {
                if (elemento_p_display.innerHTML === 'digita numero') {
                    elemento_p_display.innerHTML = '';
                    switch (index) {
                        case 0: {
                            elemento_p_display.innerHTML += '9';
                            break;
                        }
                        case 1: {
                            elemento_p_display.innerHTML += '8';
                            break;
                        }
                        case 2: {
                            elemento_p_display.innerHTML += '7';
                            break;
                        }
                        case 3: {
                            elemento_p_display.innerHTML += '6';
                            break;
                        }
                        case 4: {
                            elemento_p_display.innerHTML += '5';
                            break;
                        }
                        case 5: {
                            elemento_p_display.innerHTML += '4';
                            break;
                        }
                        case 6: {
                            elemento_p_display.innerHTML += '3';
                            break;
                        }
                        case 7: {
                            elemento_p_display.innerHTML += '2';
                            break;
                        }
                        case 8: {
                            elemento_p_display.innerHTML += '1';
                            break;
                        }
                        case 9: {
                            elemento_p_display.innerHTML += '*';
                            break;
                        }
                        case 10: {
                            elemento_p_display.innerHTML += '0';
                            break;
                        }
                        case 11: {
                            elemento_p_display.innerHTML += '#';
                            break;
                        }
                    }
                }
                else {
                    switch (index) {
                        case 0: {
                            elemento_p_display.innerHTML += '9';
                            break;
                        }
                        case 1: {
                            elemento_p_display.innerHTML += '8';
                            break;
                        }
                        case 2: {
                            elemento_p_display.innerHTML += '7';
                            break;
                        }
                        case 3: {
                            elemento_p_display.innerHTML += '6';
                            break;
                        }
                        case 4: {
                            elemento_p_display.innerHTML += '5';
                            break;
                        }
                        case 5: {
                            elemento_p_display.innerHTML += '4';
                            break;
                        }
                        case 6: {
                            elemento_p_display.innerHTML += '3';
                            break;
                        }
                        case 7: {
                            elemento_p_display.innerHTML += '2';
                            break;
                        }
                        case 8: {
                            elemento_p_display.innerHTML += '1';
                            break;
                        }
                        case 9: {
                            elemento_p_display.innerHTML += '*';
                            break;
                        }
                        case 10: {
                            elemento_p_display.innerHTML += '0';
                            break;
                        }
                        case 11: {
                            elemento_p_display.innerHTML = '';
                            break;
                        }
                    }
                }
            });
        }
        elemento_bottone_chiamata.addEventListener('click', () => {
            if (document.querySelectorAll('.container_call button')[this.index_bottone].classList.contains('in_chiamata')) {
                clearInterval(this.in_chiamata);
                console.log('chiamata terminata');
                document.querySelectorAll('.display p')[this.index_bottone].innerHTML = 'digita numero';
                document.querySelectorAll('.container_call button')[this.index_bottone].classList.remove('in_chiamata');
            }
            else {
                if (elemento_p_display.innerHTML.length === 10) {
                    this.chiamata();
                }
                else if (elemento_p_display.innerHTML === '**') {
                    elemento_p_display.innerHTML = 'n chiamate azzerato';
                    this.azzera_chiamate();
                }
                else if (elemento_p_display.innerHTML === '404') {
                    elemento_p_display.innerHTML = 'il tuo credito: ' + this.smartphone.number_carica;
                }
                else if (elemento_p_display.innerHTML === '*') {
                    elemento_p_display.innerHTML = 'n chiamate: ' + this.get_numero_chiamate();
                }
                else {
                    alert('numero non valido');
                    elemento_p_display.innerHTML = 'digita numero';
                }
            }
        });
    }
}
let utente1 = new Utente({ number_carica: 1, number_numero_chiamate: 0 });
utente1.mostra_telefono();
let utente2 = new Utente({ number_carica: 20, number_numero_chiamate: 0 });
utente2.mostra_telefono();
let utente3 = new Utente({ number_carica: 50, number_numero_chiamate: 0 });
utente3.mostra_telefono();
(_a = document.querySelector('.spiegazione')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    let a = document.getElementsByClassName("container_info");
    if (a[0].style.display === 'none' || a[0].style.display === '') {
        a[0].style.display = 'block';
    }
    else {
        a[0].style.display = 'none';
    }
});
