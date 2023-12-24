import { LightningElement } from 'lwc';

export default class Child_event_create_dispatch18 extends LightningElement 
{
    callIncrease()
    {
      const inc= new CustomEvent('incre'); //step-1 creating event
      this.dispatchEvent(inc); //step-2 dispatching event
    }
   
    callDecrease()
    {
      this.dispatchEvent(new CustomEvent('decre')); // we can write in these way also
    }
}