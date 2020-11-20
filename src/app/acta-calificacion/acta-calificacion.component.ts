import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Table, Txt} from 'pdfmake-wrapper';
import { Acts } from '../models/acts.model';

@Component({
  selector: 'app-acta-calificacion',
  templateUrl: './acta-calificacion.component.html',
  styleUrls: ['./acta-calificacion.component.css']
})
export class ActaCalificacionComponent implements OnInit {

  newAct: Acts;
  definitiva: number;
  
  constructor() {
    this.newAct = new Acts();
    this.definitiva = ((this.newAct.notaTutor * 0.5) + (this.newAct.notaJurado1 * 0.25) + (this.newAct.notaJurado2 * 0.25))/3;
   }

  ngOnInit(): void {
  }

  generatePDF(){
    const pdf = new PdfMakeWrapper();
    pdf.pageMargins(70);

    pdf.add(
      new Txt("INSTITUCIÓN UNIVERSITARIA POLITÉCNICO GRANCOLOMBIANO").alignment("center").bold().end
    );
    pdf.add(
      new Txt("FACULTAD DE INGENIERÍA, DISEÑO E INNOVACIÓN").alignment("center").bold().end
    );
    pdf.add(
      new Txt("ESCUELA DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES").alignment("center").bold().end
    );
    pdf.add(
      new Txt(this.newAct.programa.toUpperCase()).alignment("center").bold().end
    );
    pdf.add(
      new Txt("ACTA DE SUSTENTACIÓN - TRABAJO DE GRADO").alignment("center").bold().end
    );
    pdf.add(
      pdf.ln(2)
    );
    pdf.add(
      new Txt("El día " + this.newAct.fechaSus.toDateString() + ", se convoca al estudiante " + this.newAct.autor.toUpperCase() + " con codigo " 
      + this.newAct.codigoEstudiante + " del programa de " + this.newAct.programa.toUpperCase() + 
      " para sustentar su trabajo de grado denominado " + this.newAct.nombreProyecto.toUpperCase() + ". El trabajo tiene como director al profesor "
      + this.newAct.tutor.toUpperCase() + ", docente de planta de la institución, y como jurados a los profesores " + this.newAct.jurado1.toUpperCase()
      + " y " + this.newAct.jurado2.toUpperCase() + ".").alignment("justify").end
    );
    pdf.add(
      pdf.ln(2)
    );
    pdf.add(
      new Txt("Teniendo en cuenta el formato de evaluación de trabajos de grado definido por la Facultad. El estudiantes se presento y realizó la sustentación correspondiente, recibió la retroalimentación por parte de los jurados, resolvió dudas y se comprometió a realizar las modificaciones sugeridas por parte de los jurados en el documento escrito. Las notas para este trabajo son:").alignment("justify").end
    );
    pdf.add(
      pdf.ln(2)
    );
    pdf.add(
      new Table([
        ["Asesor 1 - 50% (" + this.newAct.tutor.toUpperCase() + ")", " " + this.newAct.notaTutor],
        ["Jurado 1 - 25% (" + this.newAct.jurado1.toUpperCase() + ")", " " + this.newAct.notaJurado1],
        ["Jurado 2 - 25% (" + this.newAct.jurado2.toUpperCase() + ")", " " + this.newAct.notaJurado2],
        ["Definitiva ", " " + this.definitiva]
      ]).width(100).end
    );
    pdf.add(
      pdf.ln(5)
    );
    pdf.add(
      new Txt("______________________________").alignment("center").end
    );
    pdf.add(
      new Txt("JURADO 1").alignment("center").end
    );
    pdf.add(
      new Txt(this.newAct.jurado1.toUpperCase()).alignment("center").end
    );
    pdf.add(
      pdf.ln(4)
    );
    pdf.add(
      new Txt("______________________________").alignment("center").end
    );
    pdf.add(
      new Txt("JURADO 2").alignment("center").end
    );
    pdf.add(
      new Txt(this.newAct.jurado2.toUpperCase()).alignment("center").end
    );
    pdf.add(
      pdf.ln(4)
    );
    pdf.add(
      new Txt("______________________________").alignment("center").end
    );
    pdf.add(
      new Txt("ASESOR 1").alignment("center").end
    );
    pdf.add(
      new Txt(this.newAct.tutor.toUpperCase()).alignment("center").end
    );

    

    pdf.create().open();
  }

}
