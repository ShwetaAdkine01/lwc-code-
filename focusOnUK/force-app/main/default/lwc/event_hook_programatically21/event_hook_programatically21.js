import { LightningElement } from 'lwc';

export default class Event_hook_programatically21 extends LightningElement 
{
    callme()
    {
        const a= new CustomEvent('notify',{detail:'shweta',bubbles:true,composed:true});
        this.dispatchEvent(a);
    }
}