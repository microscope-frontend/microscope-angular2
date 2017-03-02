import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	public user: User = {firstname: '', lastname: ''};

	get fullname(): string {
		return `${this.user.firstname} ${this.user.lastname}`;
	}

	ngOnInit() {

	}

	onSubmit() {
		alert(this.fullname);
	}
}
