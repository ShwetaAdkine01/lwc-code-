import { LightningElement,api,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS=[
             'Opportunity.Name',
             'Opportunity.Amount',
             'Opportunity.StageName'
              ];
export default class Lwc_get_record_wire_withoutclass14 extends LightningElement {
@api recordId='0065i000009DMkRAAW';
@wire(getRecord,{recordId:'$recordId' , fields:FIELDS})Opportunity;
get name()
{
 return this.Opportunity.data.fields.Name.value;
}
get amount()
{
 return this.Opportunity.data.fields.Amount.value;
}
get stagename()
{
 return this.Opportunity.data.fields.StageName.value;
}

}