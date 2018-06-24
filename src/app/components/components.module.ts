import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import your components here
import { FancyButton } from './fancyButtonExample/fancyButton.component';

@NgModule({
  declarations: [
    //add a line for your component here  
    FancyButton
  ],
  imports: [
    
  ],
  exports:[
    //and here
    FancyButton
  ]
})
export class ComponentsModule { }