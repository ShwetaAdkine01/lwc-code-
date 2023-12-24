import { LightningElement, track } from 'lwc';

export default class Callchange_using_Trach4 extends LightningElement {
   @track showmecal;
   num1;
   num2;

   callme(event) {
      const eventname = event.target.name;

      if (eventname == 'aval') {
         this.num1 = event.target.value
      }
      else {
         this.num2 = event.target.value
      }
   }
   //   test to check commit and publish

   addme() {
      const a = parseInt(this.num1);
      const b = parseInt(this.num2);
      this.showmecal = 'addition of two number is' + (a + b);
   }
   subme() {
      const a = parseInt(this.num1);
      const b = parseInt(this.num2);
      this.showmecal = 'substraction of two number is' + (a - b);
   }
   mulme() {
      const a = parseInt(this.num1);
      const b = parseInt(this.num2);
      this.showmecal = 'multiplication of two number is' + (a * b);
   }
   divme() {
      const a = parseInt(this.num1);
      const b = parseInt(this.num2);
      this.showmecal = 'division of two number is' + (a / b);
   }

}