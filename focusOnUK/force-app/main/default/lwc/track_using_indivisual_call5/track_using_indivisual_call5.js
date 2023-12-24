import { LightningElement,track } from 'lwc';

export default class Track_using_indivisual_call5 extends LightningElement 
{
    @track showmecal;
    num1;
    num2;

    callme1(event)
    {
   this.num1=event.target.value;
    }
    callme2(event)
    {
   this.num2=event.target.value;
    }
    addme()
    {
       const a= parseInt(this.num1);
       const b= parseInt(this.num2);
       this.showmecal='addition of two number is'+(a+b);  
    }
    subme()
    {
       const a= parseInt(this.num1);
       const b= parseInt(this.num2);
       this.showmecal='substraction of two number is'+(a-b);  
    }
    mulme()
    {
       const a= parseInt(this.num1);
       const b= parseInt(this.num2);
       this.showmecal='multiplication of two number is'+(a*b);  
    }
    divme()
    {
       const a= parseInt(this.num1);
       const b= parseInt(this.num2);
       this.showmecal='division of two number is'+(a/b);  
    }
}