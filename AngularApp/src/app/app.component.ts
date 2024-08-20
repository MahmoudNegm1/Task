import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularApp';
   serverElements:any= [{type:'server' , name:'test server ' , content :'this is test server content '}]; 
   newServerName=''; 
   newServerContent=''; 
   onAddServer(serverdata:{serverName:string , serverContent:string}){

this.serverElements.push
({
  type: 'server', 
  name:serverdata.serverName,
   content:serverdata.serverContent

   })
  }
   onAddbluePrintServer(bluePrintserverdata:{serverName:string , serverContent:string}){
    this.serverElements.push
    ({type: 'blueprintserver', 
      name:bluePrintserverdata.serverName,
      content:bluePrintserverdata.serverContent
    })
    
    
       }

}
