import { LightningElement,wire,track } from 'lwc';

import BRINGDATA from '@salesforce/apex/cl_wire_from_basic15.BringAccData';

export default class Lwc_wire_from_basic15 extends LightningElement
 {
    @track accounts;
    @track errorhappened;
    @wire(BRINGDATA) 
    accdatareceived({error,data}){
        if(data){
            this.accounts=data;
        }
        else if(error){
            this.errorhappened=error;
            alert(error);
            console.log(error);
        }
    }
 }