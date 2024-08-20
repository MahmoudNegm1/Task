import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  newServerContent= '';
  newServerName='';
  @Output() serverCreated= new EventEmitter<{serverName:string, serverContent:string }>();
  @Output() bluePrintCreated= new EventEmitter<{serverName:string, serverContent:string }>();

  onAddServer(){
   this.serverCreated.emit({serverName:this.newServerName , serverContent:this.newServerContent});
       }
    
       onAddbluePrintServer(){
        this.bluePrintCreated.emit({serverName:this.newServerName , serverContent:this.newServerContent});


           }
}
