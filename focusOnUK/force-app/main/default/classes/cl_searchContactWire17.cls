public with sharing class cl_searchContactWire17 {
    @AuraEnabled(cacheable=true)
    public static list<Contact> searchCon(String searchKey)
    {
       String sk='%'+searchKey+'%';
       Return [Select Id,Name,Phone,Email from Contact where FirstName like:sk];
    }

}
