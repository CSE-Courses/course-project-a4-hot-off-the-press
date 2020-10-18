import { Component } from '@angular/core';

import { settings } from '../../models/settings';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})



export class UserSettingsComponent {
  settings = settings;


  //new_name = document.getElementById("new_username").onclick = username();
 
   //username(){
  
   //window.alert('Your username has been updated!');
   //document.writeln("Your new username is: " + this.new_name);
   
   username(){
     document.getElementById("new_username");
     var name = prompt("Enter your new username ");
     document.getElementById("outputName").innerText = name;
 
   }
   //.onclick = username(){
   
 //}
 
   //}
 
   //new2 = document.getElementById("new_email");
   email() {
      document.getElementById("new_email");
     var name2 = prompt("Enter your new email id ");
     document.getElementById("outputNew").innerText = name2;
 
   }
   password() {
   /*  var currpw = prompt("Enter your current password ");
     var newpw = prompt("Enter your new password ");
     var recpw = prompt("Enter your reconfirm new password ");
     if(document.getElementById(currpw) == document.getElementById(recpw)) alert("You password has been changed!");*/
     window.alert('Your password has been changed!');
   }
 

}
