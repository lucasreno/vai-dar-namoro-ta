import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome1: string;
  nome2: string;
  porcentagem: number;

  constructor(private http: HttpClient) { }

  calcular() {
    let url = 'http://lucasreno.kinghost.net/love-calculator/';
    url = url + this.nome1 + '/' + this.nome2;

    this.http.get(url).subscribe(resposta => this.porcentagem = +resposta);
  }
}
