import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private modalService: ModalService) {
  }

  async ngOnInit() {
    
  }

  async add() {
    console.log(await this.modalService.open(HelloComponent));
  }

}
