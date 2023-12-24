import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
export default class Recordform_using_customfield12 extends LightningElement 
{
    abc=ACCOUNT_OBJECT;
    myField=[NAME_FIELD,INDUSTRY_FIELD,FAX_FIELD,PHONE_FIELD];
}