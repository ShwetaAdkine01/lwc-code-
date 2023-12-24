import { LightningElement } from 'lwc';

export default class Event_with_parameter19 extends LightningElement 
{
    callIncrease()
    {
      const inc= new CustomEvent('incre',{detail: 'contrast'}); //step-1 creating event
      this.dispatchEvent(inc); //step-2 dispatching event
    }
   
    callDecrease()
    {
      this.dispatchEvent(new CustomEvent('decre',{detail:'brightness'})); // we can write in these way also
    }
}