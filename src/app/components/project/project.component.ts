import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})


export class ProjectComponent implements OnInit {
  w = 24;
	h = 24;
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
    style.fill = '#00a6fb';
		return style;
	}

  ngOnInit(): void {
  }

}
