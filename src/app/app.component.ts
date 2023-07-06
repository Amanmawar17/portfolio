import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  w = 24;
  h = 24;
  autoheight = false;
  autowidth = false;

  display = true;
  img = ['assets/icons/moon.svg', 'assets/icons/sun.svg'];
  onImg = 0;

  // Dark theme
  toggleTheme(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('dark-theme');
  }

  constructor(private registry: SvgIconRegistryService) {}
  getStyle(): string {
    return JSON.stringify(this.getNgStyle()).replace(/\"/g, "'");
  }

  getNgStyle() {
    const style: any = {};
    if (!this.autoheight) {
      style['height.px'] = this.h;
    }

    if (!this.autowidth) {
      style['width.px'] = this.w;
    }

    style.fill = '#00a6fb';
    return style;
  }
  swapImg() {
    this.onImg = this.onImg === 1 ? 0 : 1;
    this.display = true;
  }
}
