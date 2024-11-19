import { Component } from '@angular/core';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';

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
export class ListarFestivosComponent {

  public textoBusqueda: string = "";
  public festivos = [];
  public columnas = [
    { name: "Festivo", prop: "festivo" },
    { name: "Fecha", prop: "fecha" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  ngOnInit(): void {
    this.listar();
  }

  public buscar() {
    
  }

  public listar() {
   
  }
}
