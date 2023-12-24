public with sharing class cl_wire_from_basic15 {

    @AuraEnabled
    public static list<Account> BringAccData()
    {

        list<Account> acc=[select Id,Name,Phone,Industry,Rating from Account];
        return acc;
    }
}
