import { Component, OnInit } from '@angular/core';
import { Pet } from 'app/models/pet.model';

@Component({
  selector: 'app-client-profile-pets',
  templateUrl: './client-profile-pets.component.html',
  styleUrls: ['./client-profile-pets.component.scss']
})
export class ClientProfilePetsComponent implements OnInit {
pets!:Pet[];
  constructor() { }

  ngOnInit(): void {
  }

}
