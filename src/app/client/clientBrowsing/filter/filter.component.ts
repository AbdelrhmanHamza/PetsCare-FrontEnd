import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Filters } from 'app/models/filters.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output()
  filtered = new EventEmitter<Filters>();
  filterForm = new FormGroup({
    max_price: new FormControl('',),
    address: new FormControl('',),
    open_at: new FormControl('',),
    close_at: new FormControl('',),
    type: new FormControl('',),
  });
  constructor() { }

  ngOnInit(): void {
  }
  applyFilter(): void {
    console.log(<Filters>this.filterForm.value);
    this.filtered.emit(<Filters>this.filterForm.value);
  }

}
