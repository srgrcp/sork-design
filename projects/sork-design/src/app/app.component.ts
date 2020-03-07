import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  modal = false

  // https://www.rottentomatoes.com/top/bestofrt/
  movies = [
    { rank: '1', rating: '97%', title: 'Black Panther (2018)', reviews: 494 },
    { rank: '2', rating: '94%', title: 'Avengers: Endgame (2019)', reviews: 505 },
    { rank: '3', rating: '93%', title: 'Us (2019)', reviews: 514 },
    { rank: '4', rating: '97%', title: 'Toy Story 4 (2019)', reviews: 428 },
    { rank: '5', rating: '99%', title: 'Lady Bird (2017)', reviews: 382 },
    { rank: '6', rating: '97%', title: 'Mission: Impossible - Fallout (2018)', reviews: 415 },
    { rank: '7', rating: '96%', title: 'The Irishman (2019)', reviews: 421 },
    { rank: '8', rating: '98%', title: 'The Wizard of Oz (1939)', reviews: 116 },
    { rank: '9', rating: '100%', title: 'Citizen Kane (1941)', reviews: 84 },
    { rank: '10', rating: '96%', title: 'BlacKkKlansman (2018)', reviews: 417 },
    { rank: '11', rating: '100%', title: 'The Cabinet of Dr. Caligari (Das Cabinet des Dr. Caligari) (1920)', reviews: 51 },
    { rank: '12', rating: '98%', title: 'Get Out (2017)', reviews: 370 },
    { rank: '13', rating: '97%', title: 'Spider-Man: Into the Spider-Verse (2018)', reviews: 375 },
    { rank: '14', rating: '97%', title: 'Mad Max: Fury Road (2015)', reviews: 412 },
    { rank: '15', rating: '100%', title: 'Modern Times (1936)', reviews: 57 },
    { rank: '16', rating: '97%', title: 'Nosferatu, a Symphony of Horror (Nosferatu, eine Symphonie des Grauens) (Nosferatu the Vampire) (1922)', reviews: 64 },
    { rank: '17', rating: '98%', title: 'Moonlight (2016)', reviews: 373 },
    { rank: '18', rating: '98%', title: 'Casablanca (1942)', reviews: 87 },
    { rank: '19', rating: '98%', title: 'The Farewell (2019)', reviews: 321 },
    { rank: '20', rating: '97%', title: 'Booksmart (2019)', reviews: 341 },
  ]

  form: FormGroup

  constructor(
      private fb: FormBuilder
  ) {
    this.form = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.email],
        country: ['']
    })
  }
}
