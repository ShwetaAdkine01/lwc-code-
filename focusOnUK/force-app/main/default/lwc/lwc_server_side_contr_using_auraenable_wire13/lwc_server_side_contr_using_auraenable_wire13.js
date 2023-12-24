import { LightningElement,track,wire } from 'lwc';
import getContactList from '@salesforce/apex/cl_client_side_cntwire12.getContactList';

import { updateRecord } from 'lightning/uiRecordApi';
import {refreshApex}from '@salesforce/apex';


import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import ID_FIELD from '@salesforce/schema/Contact.Id';

const columnTable=[
{label:'contact_firstname', fieldName:'FirstName', editable:true},
{label:'contact_Lastname', fieldName:'LastName', editable:true},
{label:'contact_Email', fieldName:'Email'},
{label:'contact_phone', fieldName:'Phone'}
];
export default class Lwc_server_side_contr_using_auraenable_wire13 extends LightningElement 
{
    @track col=columnTable;
    @track draftValues;
    @track error;
    

    @wire(getContactList) Contact;

    handleSave(event)
    {
        alert('button called');

        const fields={};
        fields[ID_FIELD.fieldApiName]=event.detail.draftValues[0].Id;
        fields[FIRSTNAME_FIELD.fieldApiName]=event.detail.draftValues[0].FirstName;
        fields[LASTNAME_FIELD.fieldApiName]=event.detail.draftValues[0].LastName;

        alert ('field value captured'+ fields);

        const recordInputs = {fields};
    
        updateRecord(recordInputs)
        .then(()=>{
                    alert('data saved succesfully');
                    this.draftValues=[];
                    return refreshApex(this.Contact);

                   }).catch((error)=>{
                    
                     alert('there was an error'+error);

                   });


    }
}