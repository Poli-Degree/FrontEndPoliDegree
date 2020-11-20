import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Table, Txt} from 'pdfmake-wrapper';
import { Acts } from '../models/acts.model';

@Component({
  selector: 'app-formato-evaluacion',
  templateUrl: './formato-evaluacion.component.html',
  styleUrls: ['./formato-evaluacion.component.css']
})
export class FormatoEvaluacionComponent implements OnInit {
  newAct: Acts;
  calificacionFinal: number;

  constructor() { 
    this.newAct = new Acts();
    this.calificacionFinal = this.calificacionFinal;
  }

  ngOnInit(): void {
  }

  calcularCalificacion(){
    this.calificacionFinal=((this.newAct.calificacion1 * 0.1) + (this.newAct.calificacion2 * 0.1) + (this.newAct.calificacion3 * 0.25) + (this.newAct.calificacion4 * 0.20) + (this.newAct.calificacion5 * 0.15) + (this.newAct.calificacion1 * 0.20)) * 5/100;
  }

  generatePDF(){
    const pdf = new PdfMakeWrapper();
    pdf.pageMargins(70);

    pdf.add(
      new Table([
        ["POLITECNICO GRANCOLOMBIANO"],
        ["FACULTAD DE INGENIERÍA, DISEÑO E INNOVACIÓN"],
        ["FORMATO DE EVALUACION DE PROYECTO DE GRADO (Jurado)"]
      ]).widths(['*',0]).alignment("center").bold().end
    );
    pdf.add(
      pdf.ln(1)
    );
    pdf.add(
      new Table([
        ["PROYECTO", this.newAct.nombreProyecto],
        ["AUTOR", this.newAct.autor],
        ["DIRECTOR", this.newAct.tutor],
        ["JURADO", this.newAct.jurado1]
      ]).widths(['*',370]).alignment("left").bold().end
    );
    pdf.add(
      pdf.ln(1)
    );
    pdf.add(
      new Table([
        ["Item", "Escala", "Peso", "Calificacion", "Comentarios"],
        ["Problema de investigación o práctica (objetivos de proyecto claros, presentación del problema)", "0-100", "10%", this.newAct.calificacion1, this.newAct.comentario1],
        ["Solución al problema (Técnicas apropiadas para definir la solución, presentación clara del esquema de solución y metodologías y lineamientos a seguir)", "0-100", "10%", this.newAct.calificacion2, this.newAct.comentario2],
        ["Ejecución: Detalle del trabajo realizado y los resultados obtenidos (implementación hecha, herramienta desarrollada, algoritmo, resultado teórico, etc.)", "0-100", "25%", this.newAct.calificacion3, this.newAct.comentario3],
        ["Estructura: se reconoce un proceso metodológico, hay conclusiones relacionando la bibliografía, el problema de investigación o práctica y el documento presentado.", "0-100", "20%", this.newAct.calificacion4, this.newAct.comentario4],
        ["Calidad de la exposición (presentación informativa, contenido apropiado, manejo del tiempo,etc.)", "0-100", "15%", this.newAct.calificacion5, this.newAct.comentario5],
        ["Documento: Calidad de la documentación (estructura, cumplimiento de normas, organización, inclusión de aspectos significativos.)", "0-100", "20%", this.newAct.calificacion6, this.newAct.comentario6],
        [" ", " ", "Calificacion", this.calificacionFinal, " "]
      ]).alignment("left").end
    );
    pdf.create().open();
    
   
  }

}
