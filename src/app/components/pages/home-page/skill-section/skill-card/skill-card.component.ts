import {Component, Input, OnInit} from '@angular/core';

import SkillLogo from '../../../../../models/skill-icon.model';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input() header: string = 'Skill Card';
  @Input() coreLogos: SkillLogo[] = [];
  @Input() frameworkLogos: SkillLogo[] = [];
  @Input() toolLogos: SkillLogo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
