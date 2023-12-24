import { LightningElement,wire,track,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class Lwc_addAccountField_wire16 extends LightningElement 
{
    @track name;
    @track ph;
    @track rat;
    @track ind;
    @api recordId;
    handName(event)
    {
        this.name= event.target.value;
    }
    handPhone(event)
    {
        this.ph= event.target.value;
    }
    handrating(event)
    {
        this.rat= event.target.value;
    }
    handindustry(event)
    {
        this.ind= event.target.value;
    }

    callme()
{
   const fields={'Name':this.name,'Phone':this.ph,'Rating':this.rat,'Industry':this.ind};
   const recordData={apiName:'Account',fields};

   createRecord(recordData).then(Response=>{
    alert('your record created succesfully'+Response.Id);
   }).catch(error=>{
    alert('your record creation failed'+error.body.message);
   });
}

Delme()
{
    dalateRecord(this.recordId).then(Response=>{
        alert('your record was deleted');
       }).catch(error=>{
        alert('your record can not deleted'+error.body.message);
       });
}
}