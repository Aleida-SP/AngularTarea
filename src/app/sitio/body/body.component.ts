import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  //standalone:true,
  //imports:[],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  platos: { nom: string, cantidad: number }[] = [
    { nom: 'Sopa de Mani', cantidad: 0 },
    { nom: 'Pique Macho', cantidad: 0 },
    { nom: 'Silpancho', cantidad: 0 },
    { nom: 'Sajta', cantidad: 0 }
  ];

  contar(plato: string) {
    let selectedPlato;
    for (let i = 0; i < this.platos.length; i++) {
      if (Object.is(this.platos[i].nom, plato)) {
        selectedPlato = this.platos[i];
        break;
      }
    }
    if (selectedPlato) {
      selectedPlato.cantidad++;
    }
  }
}
