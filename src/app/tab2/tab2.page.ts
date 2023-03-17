import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  valendo = 1;
  pontuacaoRodadaTime1 = 0;
  pontuacaoRodadaTime2 = 0;
  pontuacaoTime1 = 0;
  pontuacaoTime2 = 0;

  constructor(private alertController: AlertController) {}

  async presentAlert(time: any) {
    const alert = await this.alertController.create({
      header: 'Perdeu, mané',
      message: `${time} atingiu 12 pontos!`,
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm'
        },
      ],
    });

    await alert.present();
  }

  valorRodada(num: any) {
    this.valendo = num;
  }

  pontuarRodadaTime1() {
    this.pontuacaoRodadaTime1 = this.pontuacaoRodadaTime1 + this.valendo;

    if(this.pontuacaoRodadaTime1 >= 12) {
      this.pontuacaoTime1 = this.pontuacaoTime1 + 1;

      this.pontuacaoRodadaTime1 = 12;

      this.presentAlert('Time 01');

      this.valendo = 1;

      setTimeout(() => {
        this.pontuacaoRodadaTime1 = 0;
        this.pontuacaoRodadaTime2 = 0;
      }, 1000)
    }
  }

  subtrairPontoTime1() {
    if (this.pontuacaoRodadaTime1 <= 0) {
      this.pontuacaoRodadaTime1 = 0;
    } else if(this.valendo > this.pontuacaoRodadaTime1) {
      this.pontuacaoRodadaTime1 = this.pontuacaoRodadaTime1;
    } else {
      this.pontuacaoRodadaTime1 = this.pontuacaoRodadaTime1 - this.valendo;
    }
  }

  pontuarRodadaTime2() {
    this.pontuacaoRodadaTime2 = this.pontuacaoRodadaTime2 + this.valendo;

    if(this.pontuacaoRodadaTime2 >= 12) {
      this.pontuacaoTime2 = this.pontuacaoTime2 + 1;

      this.pontuacaoRodadaTime2 = 12;

      this.presentAlert('Time 02');

      this.valendo = 1;

      setTimeout(() => {
        this.pontuacaoRodadaTime1 = 0;
        this.pontuacaoRodadaTime2 = 0;
      }, 1000)
    }
  }

  subtrairPontoTime2() {
    if (this.pontuacaoRodadaTime2 <= 0) {
      this.pontuacaoRodadaTime2 = 0;
    } else if(this.valendo > this.pontuacaoRodadaTime2) {
      this.pontuacaoRodadaTime2 = this.pontuacaoRodadaTime2;
    } else {
      this.pontuacaoRodadaTime2 = this.pontuacaoRodadaTime2 - this.valendo;
    }
  }

  resetar() {
    this.valendo = 1;

    this.pontuacaoRodadaTime1 = 0;
    this.pontuacaoRodadaTime2 = 0;

    this.pontuacaoTime1 = 0;
    this.pontuacaoTime2 = 0;
  }

  mudarCor(valor: number) {
    return this.valendo == valor ? 'outline' : 'solid';
  }

}
