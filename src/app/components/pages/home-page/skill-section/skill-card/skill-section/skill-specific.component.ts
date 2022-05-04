import {Component, Input, OnInit} from '@angular/core';

import SkillLogo from '../../../../../../models/skill-icon.model';

@Component({
  selector: 'app-skill-specific',
  templateUrl: './skill-specific.component.html',
  styleUrls: ['./skill-specific.component.css']
})
export class SkillSpecificComponent implements OnInit {

  @Input() header: string = 'Skill Section'
  @Input() logos: SkillLogo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
