import { LightningElement,wire,track,api } from 'lwc';
import searchcon from '@salesforce/apex/cl_searchContactWire17.searchCon';

export default class Lwc_search_contactwire17 extends LightningElement 
{
    // ......WIRE A PROPERTY.....//

   @track searchtext;
   // @wire(searchcon,{searchKey:'$searchtext'})contacts;
  //searchere(event)
    //{
   //  this.searchtext=event.target.value;
   // }

   @track errrr;
   @track reccc;

   //======WIRE A FUNCTION========//

   @wire(searchcon,{searchKey:'$searchtext'})
   contacts({error,data}){
if(data){
    this.reccc=data;
}
else if(error){
    this.errrr=error;
    this.reccc= undefined;
}

};
searchere(event)
    {
     this.searchtext=event.target.value;
    }
}