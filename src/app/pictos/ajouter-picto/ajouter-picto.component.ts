import {Component, OnInit, ViewChild} from '@angular/core';
import {CanvasWhiteboardComponent, CanvasWhiteboardService} from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-ajouter-picto',
  templateUrl: './ajouter-picto.component.html',
  styleUrls: ['./ajouter-picto.component.css']
})
export class AjouterPictoComponent implements OnInit {
    @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;
    @ViewChild('CWB') CWB: CanvasWhiteboardComponent;

    /**
     *
     * @return {CanvasWhiteboardComponent}
     */
    onclickSave(): CanvasWhiteboardComponent {
        // load un context // save le context
        // Context je le draw
        // this.CWB.drawAllShapes();
        console.log(this.canvasWhiteboard);
        return this.canvasWhiteboard;
    }
  constructor(private _canvasWhiteboardService: CanvasWhiteboardService) {}
    public receiveNewMessage(newMessage: any): void {
        console.log('Bla blob Blip');
    }

  ngOnInit() {
  }

}
