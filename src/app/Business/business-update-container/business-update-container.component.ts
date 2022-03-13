import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-update-container',
  templateUrl: './business-update-container.component.html',
  styleUrls: ['./business-update-container.component.scss'],
})
export class BusinessUpdateContainerComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  id: string = '';

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id') ?? '';
  }
}
