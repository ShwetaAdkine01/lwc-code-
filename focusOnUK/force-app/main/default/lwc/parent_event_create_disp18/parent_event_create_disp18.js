import { LightningElement } from 'lwc';

export default class Parent_event_create_disp18 extends LightningElement 
{
    vol=0;
    increasevol()
    {
     this.vol=this.vol+1;
    }
    
    decreasevol()
    {
      if(this.vol>0)
      {
        this.vol=this.vol-1;
      }
    }
}