import { Component, OnInit } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { Festivo } from '../../../core/entidades/festivo';
import { FestivoService } from '../../servicios/festivo.service';
import { MatDialog } from '@angular/material/dialog';

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

  public textoBusqueda: string = "";
  public festivos: Festivo[] =[];
  public columnas = [
    { name: "Festivo", prop: "festivo" },
    { name: "Fecha", prop: "fecha" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  private seleccionEscogida: Festivo | undefined;
  private indiceSeleccionEscogida: number = -1;

  constructor(private festivoServicio: FestivoService, private dialogoServicio: MatDialog) { }
  
  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.festivoServicio.listar().subscribe({
      next: respuesta => {
        this.festivos = respuesta;
      },
      error: error => {
        window.alert(error.message);
      }
    });
  }
}
