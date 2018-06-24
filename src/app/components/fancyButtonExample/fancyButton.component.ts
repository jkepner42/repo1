import { Component } from '@angular/core';

@Component({
  selector: 'fancy-button',
  templateUrl: './fancyButton.html',
  styleUrls: ['./fancyButton.css']
})
export class FancyButton {
  headerText = "";
  headerStyle = "";
  buttonText = "";
  buttonClick = () => {
    this.headerStyle = "red";
    window.setTimeout(() =>{this.headerStyle = "orange";}, 250);
    window.setTimeout(() =>{this.headerStyle = "yellow";}, 500);
    window.setTimeout(() =>{this.headerStyle = "green";}, 750);
    window.setTimeout(() =>{this.headerStyle = "blue";}, 1000);
    window.setTimeout(() =>{this.headerStyle = "purple";}, 1250);
    window.setTimeout(() =>{this.headerStyle = "white";}, 1500);
  };
  constructor(){
    this.headerText = "Now this is a fancy button.";
    this.buttonText = "Click me motherfucker I dare you";
  }
}