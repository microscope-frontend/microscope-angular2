import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	title = 'Angular starter kit';

	constructor() { }

	ngOnInit() { }
}
