import { LightningElement,api } from 'lwc';

export default class Event_dynamic_param20 extends LightningElement 
{
    @api nm;
    @api ph;
    @api sl;
    @api em;

    EName(event)
    {
     this.nm=event.target.value();
    }
    EPhone(event)
    {
     this.ph=event.target.value();
    }
    ESal(event)
    {
     this.sl=event.target.value();
    }
    EEmail(event)
    {
     this.em=event.target.value();
    }
    saveMe()
    {
     const sm=new CustomEvent('submittt',{detail:{Name:this.nm, Phone:this.ph,Salary:this.sl,email:this.em}});
     this.dispatchEvent(sm);
    }
}