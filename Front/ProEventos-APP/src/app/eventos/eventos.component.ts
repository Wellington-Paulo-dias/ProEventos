import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any;
  widthImg = 150;
 marginImg = 2;
 mostrarImg = true;
private _filtroLista : string ='';
public eventosFiltrados:any =[];
public get filtroLista(): string{
  return this._filtroLista;
}

public set filtroLista(value: string)
{
  this._filtroLista=value;
  this.eventosFiltrados= this.filtroLista ? this.filtrarEventos(this.filtroLista):
  this.eventos;
}

filtrarEventos(filtrarPor: string): any{
  filtrarPor = filtrarPor.toLocaleLowerCase();
  return this.eventos.filter(
    (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1    
    
  
  )
}

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.GetEventos();
  }

alterarImagem(){
  this.mostrarImg= !this.mostrarImg;
}

  public GetEventos(): any {
    this.http.get('https://localhost:7265/api/Eventos').subscribe(
      (response) => { 
        this.eventos = response;
      this.eventosFiltrados = this.eventos;
      },
      (error) => console.log(error)      
    );
  }
}
