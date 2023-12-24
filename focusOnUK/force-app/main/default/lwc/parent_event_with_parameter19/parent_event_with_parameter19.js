import { LightningElement,track } from 'lwc';

export default class Parent_event_with_parameter19 extends LightningElement 
{
    vol=0;
    @track controlnn='control';
    increasevol(event)
    {
        const v=event.detail;
        this.controlnn=v;
     this.vol=this.vol+1;
    }
    
    decreasevol(event)
    {
      if(this.vol>0)
      {
       const v=event.detail;
       this.controlnn=v;
       this.vol=this.vol-1;
      }
    }
}