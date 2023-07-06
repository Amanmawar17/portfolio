import { Component } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
// @ts-ignore
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
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

  ngOnInit(): void {
    const target = document.querySelector('.tw')
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 80,
      typeColor: '#00a6fb',
      cursorColor: '#995D81',
      

    })
    
    writer
      .type('I`m Aman mawar')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(10)
      .type('A Full Stack Developer')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(20)
      .type('Freelancer')
      .rest(500)
      .clear()
      .start()
  }
}
