import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({  //exemplo de componente
  selector: 'app-root',  //nome da tag que aparece em index.html
  imports: [RouterOutlet],
  template: `             
    <h1 class="bg-red-100">Hello, {{ title() }}</h1> <!-- Pode estilizar tailwind css assim tbm -->

    <h5>Welcome to the {{ title() }} application!!!</h5>

    <router-outlet />
  `, //o que é renderizado pelo front (template)
  styles: [`  //aplica estilos CSS customizados ao componente diretamente aqui; restrito ao compoennte - h5 fora dele não vai ter esse estilo

    h5 {
      color: green;
    }

  `],
})
export class App {
  protected readonly title = signal('first-ng-app');
}


//angular dá um atributo a o componente, e esse mesmo atributo é aplicado a todos os elementos desse componente
//assim tudo de estilo que eu fizer pro componente só vai valer pra ele e pros elementos dentro dele