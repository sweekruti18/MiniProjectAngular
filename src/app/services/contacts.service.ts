import { Injectable } from '@angular/core';
import { Contacts } from 'src/app/Model/Contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  id:number = 0;
  allContacts : Contacts[] = [{id:++this.id,fname : "Eric ", lname:"Elliot", num : 8910615803},
  {id:++this.id,fname : "Steve", lname:"Jobs", num :8240328917},
  {id:++this.id,fname : "Fred", lname:"Allen", num : 9836400989},
  {id:++this.id,fname : "Steve", lname:"Woznlak", num : 7003108387},
  {id:++this.id,fname : "Bill", lname:"Gates", num :8777358782},
  {id:++this.id,fname : "Sweekruti", lname:"Sahoo", num :8237358782},
  {id:++this.id,fname : "Swati", lname:"Thakur", num :8777856782}
]

  getAllContacts(){
    return this.allContacts;
  }

  delete(value: Contacts){
    //debugger;

    let index = this.allContacts.indexOf(value);
    this.allContacts.splice(index, 1);
  }

  AddRecord(fname1,lname1,num1){
    this.allContacts.push({id:++this.id,fname:fname1,lname:lname1,num:num1});
    alert("New Contact Added Successfully");
    console.log("added")
  }

  getUserById(id1){
    for(var i in this.allContacts){
      if(this.allContacts[i].id == id1){
        // console.log(fname1+" "+lname1+" "+num1)
        console.log(this.allContacts[i])
        return this.allContacts[i];
    
      }
  }
}

  updateRecord(id1,fname1,lname1,num1){
    for(var i in this.allContacts){
      if(this.allContacts[i].id == id1){
        
        this.allContacts[i].fname = fname1;
        this.allContacts[i].lname = lname1;
        this.allContacts[i].num = num1;
        
      
        break;
      }
    }
    alert("Contact Edited Successfully");

  }
}
