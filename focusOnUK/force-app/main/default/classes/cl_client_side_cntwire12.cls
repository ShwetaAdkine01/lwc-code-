public with sharing class cl_client_side_cntwire12{
    @AuraEnabled(cacheable=true)
   
    public static list<contact> getContactList()
    {
      return [select Id,FirstName,LastName,Phone,Email from Contact limit 10];
    }
}

