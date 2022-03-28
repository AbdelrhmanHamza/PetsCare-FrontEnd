import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from 'app/models/pet.model';
import { ClientPetService } from 'app/services/client-pet.service';
import { TokenStorageService } from 'app/services/token-storage.service';

@Component({
  selector: 'app-client-profile-pets',
  templateUrl: './client-profile-pets.component.html',
  styleUrls: ['./client-profile-pets.component.scss']
})
export class ClientProfilePetsComponent implements OnInit {
  pets: Pet[] = [];
  constructor(private router: Router,
    private token: TokenStorageService,
    private clientPetService: ClientPetService) { }

  ngOnInit(): void {
    if (!this.token.getToken()) {
      this.router.navigate(['/']);
    } else {
      this.clientPetService.getPet().subscribe(
        (data) => {
          console.log(data);

          data.forEach(
            (element: {
              id: number;
              pet_age: string;
              pet_breed: string;
              pet_type: string;
              has_medical_condition: boolean;
            }) => {
              this.pets.push({
                id: element.id,
                pet_age: element.pet_age,
                pet_breed: element.pet_breed,
                has_medical_condition: element.has_medical_condition,
                pet_type: element.pet_type,
              });
            }
          );

        },
        (err) => {
          console.log(err);

        }
      );
    }
  }
  addpets() {
    this.router.navigate(['/pet/add']);

  }

}
