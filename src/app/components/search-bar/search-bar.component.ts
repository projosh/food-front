import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() eventRechercheInput = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  afficherTexteInput(eventInput: any) {
    console.log('Enfant : ', eventInput);
    this.eventRechercheInput.emit(eventInput.target.value);
  }
}
