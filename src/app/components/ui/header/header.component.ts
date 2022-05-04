import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;

  navigationItems: { label: string, path: string }[] = [
    {label: 'About', path: '/about'},
    {label: 'Resume', path: '/resume'},
    {label: 'Projects', path: '/projects'},
    {label: 'Blog', path: '/blog'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
