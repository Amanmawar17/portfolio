import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent{
  w = 34;
	h = 34;
  autoheight = false;
	autowidth = false;
  constructor(private registry: SvgIconRegistryService) {
	}

  getStyle(): string {
		return JSON.stringify(this.getNgStyle()).replace(/\"/g, '\'');
	}

  getNgStyle() {
    const style: any = {};
    if (!this.autoheight) {
			style['height.px'] = this.h;
		}

		if (!this.autowidth) {
			style['width.px'] = this.w;
		}
    style.fill = '#995D81';
		return style;
	}


}
