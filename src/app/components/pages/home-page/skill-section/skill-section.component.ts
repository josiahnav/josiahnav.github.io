import { Component, OnInit } from '@angular/core';
import SkillLogo from '../../../../models/skill-icon.model';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit {

  frontEndCoreLogos: SkillLogo[] = [
    {src: './assets/html5-logo.svg', alt: 'HTML 5'},
    {src: './assets/css3-logo.svg', alt: 'CSS3'},
    {src: './assets/javascript-logo.svg', alt: 'JavaScript'}
  ];
  frontEndFrameworkLogos: SkillLogo[] = [
    {src: './assets/angular-logo.svg', alt: 'Angular'},
    {src: './assets/react-logo.svg', alt: 'React'},
    {src: './assets/tailwind-css-logo.svg', alt: 'Tailwind CSS'}
  ];
  frontEndToolLogos: SkillLogo[] = [
    {src: './assets/figma-logo.svg', alt: 'Figma'},
    {src: './assets/adobe-xd-logo.svg', alt: 'Adobe XD'},
    {src: './assets/adobe-photoshop-logo.svg', alt: 'Adobe Photoshop'},
    {src: './assets/webstorm-logo.svg', alt: 'Jetbrains Webstorm'}
  ];

  backEndCoreLogos: SkillLogo[] = [
    {src: './assets/csharp-logo.svg', alt: 'C#'}
  ];
  backEndFrameworkLogos: SkillLogo[] = [
    {src: './assets/net-logo.svg', alt: '.NET Framework'}
  ];
  backEndToolLogos: SkillLogo[] = [
    {src: './assets/rider-logo.svg', alt: 'Jetbrains Rider'},
    {src: './assets/visual-studio-logo.svg', alt: 'Visual Studio'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
