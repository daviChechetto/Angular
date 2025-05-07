import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador = signal(0)

  decrementar(){
    let currentValue = this.contador()
    this.contador.set(--currentValue)
  }
  incrementar(){
    let currentValue = this.contador()
    this.contador.set(++currentValue)
  }
}
