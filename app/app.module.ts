import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from './modal/modal.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ModalModule],
  declarations: [AppComponent, HelloComponent],
  entryComponents: [HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
