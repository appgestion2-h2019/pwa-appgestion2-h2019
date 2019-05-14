import {Component, OnInit, ViewChild} from '@angular/core';
import {CanvasWhiteboardComponent, CanvasWhiteboardService} from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-ajouter-picto',
  templateUrl: './ajouter-picto.component.html',
  styleUrls: ['./ajouter-picto.component.css']
})
export class AjouterPictoComponent implements OnInit {
    @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;
    @ViewChild('CWB') CWB: CanvasWhiteboardComponent;                                                                            // todo faire une variable avec le data de generatedData
    onclick() {
        console.log(this.canvasWhiteboard);
        // this.canvasWhiteboard.generateCanvasData((generatedData: string | Blob) => {
        //     console.log(generatedData);
        // }, 'image/png', 1);

        //load un context // save le context
        this.CWB.context = this.canvasWhiteboard.context;
        this.CWB.drawAllShapes();
    }
  constructor(private _canvasWhiteboardService: CanvasWhiteboardService) {}
    public receiveNewMessage(newMessage: any): void {
        console.log('Bla blob Blip');
    }

  ngOnInit() {
  }

}
