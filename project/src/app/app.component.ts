import { ThisReceiver } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
})
export class AppComponent{
 
    isShowing : boolean = true;
    isdisabled : Boolean = false;
    value = "";
     
    img : string='https://m.media-amazon.com/images/I/51b7XbfMIIL._AC_UY327_FMwebp_QL65_.jpg';
    name : string = 'Clean code';
    author : string = 'Robert C Martin';
   
    img1 : string ='https://m.media-amazon.com/images/I/51yaxPX4BFL._AC_UY327_FMwebp_QL65_.jpg';
    name1 : string = 'Pragmatic programmer';
    author1 :string = 'David Thomas';
   
    onClick(){
        alert("Click Event and property binding");
        this.isdisabled=!this.isdisabled;
    }
   
     
}
