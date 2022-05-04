import {Component, OnInit} from '@angular/core';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import SkillLogo from '../../../models/skill-icon.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() {
  }

  ngOnInit(): void {
  }

}
