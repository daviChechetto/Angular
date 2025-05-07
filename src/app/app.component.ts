import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContadorComponent } from "./components/contador/contador.component";
import { MostradorComponent } from "./components/mostrador/mostrador.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, ContadorComponent, MostradorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentTask = signal('')

  contador = signal(0)



  taskList = signal<string[]>([])

  enviar() {
    const task = this.currentTask()
    if(task){
      this.taskList.update(v => [task, ...v])
    }
    this.currentTask.set('')

  }
}
