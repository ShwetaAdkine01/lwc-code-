import { LightningElement ,track} from 'lwc';

export default class Parent_event_dynamic_param20 extends LightningElement
 {
    @track eName;
    @track ePhone;
    @track eEmail;
    @track eSal;

    displayme(event)
    {
        this.eName=event.detail.Name; // capture multiple dynamic event param
        this.ePhone=event.detail.Phone;
        this.eEmail=event.detail.email;
        this.eSal=event.detail.Salary;
    }
 }