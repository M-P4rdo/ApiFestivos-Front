import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { FestivoService } from '../../servicios/festivo.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-validar-festivos',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule
  ],
  templateUrl: './validar-festivos.component.html',
  styleUrl: './validar-festivos.component.css'
})

export class ValidarFestivosComponent {

  fechaSeleccionada: Date | null = null;
  resultado: String | null = null;

  public festivos: String = "";

  constructor(private festivoServicio: FestivoService, private dialogoServicio: MatDialog) { }
  
  public validarFestivo() {
    if (this.fechaSeleccionada) {
      const dia = this.fechaSeleccionada.getDate();
      const mes = this.fechaSeleccionada.getMonth() + 1;
      const año = this.fechaSeleccionada.getFullYear();
  
      this.festivoServicio.validar(dia, mes, año).subscribe({
        next: (resultado: String) => {
          window.alert(resultado); // Maneja la respuesta como texto
        },
        error: (error) => {
          window.alert('Error al validar la fecha: ' + error.message);
        },
      });
    } else {
      window.alert('Por favor selecciona una fecha.');
    }
  }
}
