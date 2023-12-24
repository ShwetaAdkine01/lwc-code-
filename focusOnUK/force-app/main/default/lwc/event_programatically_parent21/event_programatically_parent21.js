import { LightningElement } from 'lwc';

export default class Event_programatically_parent21 extends LightningElement 
{
    name;
    constructor()
    {
        super();
        this.template.addEventListener('notify',this.showmee);
    }
    showmee(event)
    {
        this.name=event.detail;
        alert('hi'+this.name+'i am calling child component in parent');
    }
}