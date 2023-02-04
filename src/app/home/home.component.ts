import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 80,
      typeColor: 'white',
      cursorColor: 'white'
      
    })
    
    writer
      .type('I`m Aman mawar')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(10)
      .type('A Web Developer')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(13)
      .type('Tech Enthusiast')
      .rest(500)
      .clear()
      .start()
  }

}

