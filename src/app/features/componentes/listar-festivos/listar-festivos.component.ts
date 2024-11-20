import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/festivo';
import { FestivoService } from '../../servicios/festivo.service';

@Component({
  selector: 'app-listar-festivos',
  standalone: true,
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  templateUrl: './listar-festivos.component.html',
  styleUrl: './listar-festivos.component.css'
})

export class ListarFestivosComponent implements OnInit{

  public fecha: number = 0;
  public festivos: Festivo[] =[];
  public columnas = [
    { name: "Festivo", prop: "festivo" },
    { name: "Fecha", prop: "fecha" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public festivosTabla: { festivo: String, fecha: String }[] = [];

  constructor(private festivoServicio: FestivoService) { }
  
  ngOnInit(): void {
    if (this.fecha!== null) {
      this.listarFestivos(this.fecha);
    }
  }

  public listarFestivos(año: number) {
    this.festivoServicio.listar(año).subscribe({
      next: respuesta => {
        this.festivos = respuesta;  // Asignamos la respuesta al array de festivos

        // Actualizamos festivosTabla con los nuevos datos
        this.festivosTabla = this.festivos.map(festivo => ({
          festivo: festivo.nombre,  // Extraemos el nombre
          fecha: `${año}-${festivo.mes}-${festivo.dia}`  // Creamos la fecha con el día, mes y año
        }));
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }
}
