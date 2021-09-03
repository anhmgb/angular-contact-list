import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact = {
    name: '',
    email: '',
    tel: '',
    age: 20,
  };

  constructor() { }

  ngOnInit(): void {
  }

}