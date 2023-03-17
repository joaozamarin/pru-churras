import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tamanho = 6;
  valorAtual = 0;
  ativo = false;

  imgDados = [
    'assets/dice-red.png',
    'assets/dice.gif'
  ];
  imagemDado = this.imgDados[0];

  constructor() {}

  jogarDado() {
    this.imagemDado = this.imgDados[1];
    this.ativo = true;

    setTimeout(() => {
      this.valorAtual = Math.floor(Math.random() * this.tamanho) + 1;
      this.ativo = false;
    }, 2000);

    this.valorAtual = 0;
  }

}
