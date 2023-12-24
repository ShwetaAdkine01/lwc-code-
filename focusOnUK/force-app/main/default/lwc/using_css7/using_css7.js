import { LightningElement,track } from 'lwc';

export default class Using_css7 extends LightningElement
 {
    @track boxvalue;

    callme(event)
    {
      this.boxvalue=event.target.value;

    }
 }