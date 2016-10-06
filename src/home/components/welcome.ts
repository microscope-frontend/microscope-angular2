import {Component} from '@angular/core';

@Component({
	selector: 'home',
	template: `
		<section>

			<h1>Welcome</h1>

			<form (ngSubmit)="onSubmit()">
				<div class="form-group">
					<label>Firstname</label>
					<input [(ngModel)]="model.firstname" name="firstname" type="text" class="form-control" placeholder="Your firstname" />
				</div>
				<div class="form-group">
					<label>Lastname</label>
					<input [(ngModel)]="model.lastname" name="lastname" type="text" class="form-control" placeholder="Your lastname" />
				</div>
				<button type="submit" class="btn btn-default">Submit</button>
			</form>

		</section>
	`
})
export class WelcomeComponent {
	public model = {lastname: '', firstname: ''};

	onSubmit() {
		alert(this.model.firstname + ' ' + this.model.lastname);
	}
}