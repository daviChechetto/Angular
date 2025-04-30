import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  contador = signal(0)

  imagemContador = signal(1)

  imagemList = signal([
    'imagem1.png',
    'imagem2.png',
    'imagem3.png'
  ])

  decrementar(){
    let currentValue = this.contador()
    this.contador.set(--currentValue)
  }
  incrementar(){
    let currentValue = this.contador()
    this.contador.set(++currentValue)
  }

  proximo(){
    console.log(this.imagemList.length);
    
    if(this.imagemContador() >= this.imagemList.length){
      return
    } else{
      let currentValue = this.imagemContador()
      this.imagemContador.set(++currentValue)
    }
  }
  anterior(){
    if(this.imagemContador() < 1){
      return
    } else{
      let currentValue = this.imagemContador()
      this.imagemContador.set(--currentValue)
    }
  }
}
