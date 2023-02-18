import { Component, OnInit } from '@angular/core';
import { faAngular, faCss3, faHtml5, faJs, faPython } from '@fortawesome/free-brands-svg-icons';

import { faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faJs = faJs;
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faPython = faPython;
  faAngular = faAngular;
  faCloud = faCloud;
  constructor() { }

  ngOnInit(): void {
  }

}
