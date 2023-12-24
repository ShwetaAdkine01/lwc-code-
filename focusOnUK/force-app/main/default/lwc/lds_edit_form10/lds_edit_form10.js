import { LightningElement,api } from 'lwc';

export default class Lds_edit_form10 extends LightningElement { 
    @api recordid;

    callme(event)
    {
   const inputfield =this.template.querySelectorAll("lightning-input-field");
   inputfield.forEach(field =>{field.reset();}) ;
    
    }
}