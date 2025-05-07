import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mostrador',
  imports: [],
  templateUrl: './mostrador.component.html',
  styleUrl: './mostrador.component.css'
})
export class MostradorComponent {
  imagemContador = signal(1)

  imagemList = signal([
    'imagem1.png',
    'imagem2.png',
    'imagem3.png'
  ])

  proximo(){
    console.log(imagemList.length);
    
    if(this.imagemContador() >= imagemList.length){
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
