import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/Services/contacts.service';
import { Contacts } from 'src/app/Model/Contacts';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id;
  userDetails:Contacts;

  constructor(private route:ActivatedRoute, private service:ContactsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userDetails = this.service.getUserById(this.id);
    console.log(this.userDetails);
  }

  updateRecord(fname,lname,num){

    this.service.updateRecord(this.id,fname,lname,num);
  }
  }


