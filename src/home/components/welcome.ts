import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
	selector: 'home',
	template: `
		<section>
			<h1>Welcome</h1>
			<form (ngSubmit)="onSubmit()">
				<div class="form-group">
					<label>Firstname</label>
					<input [(ngModel)]="user.firstname" name="firstname" type="text" class="form-control" placeholder="Your firstname" />
				</div>
				<div class="form-group">
					<label>Lastname</label>
					<input [(ngModel)]="user.lastname" name="lastname" type="text" class="form-control" placeholder="Your lastname" />
				</div>
				<button type="submit" class="btn btn-default">Submit</button>
			</form>
		</section>`
})
export class WelcomeComponent {

	public user: User = {firstname: '', lastname: ''};

	onSubmit() {
		alert(this.user.firstname + ' ' + this.user.lastname);
	}
}