import {Component} from '@angular/core';

@Component({
	selector: 'home',
	template: `
		<div class="jumbotron text-center">
			<div class="container">
				<img src="/images/microscope.png" />
				<p class="lead">
					AngularJS 2 (Typescript / browserify) starter kit
				</p>
				<p>
					<a href="https://github.com/microscope-frontend/microscope-angular2" class="btn btn-danger btn-lg">
						Show Github
					</a>
				</p>
			</div>
		</div>
	`
})
export class HomeComponent {}