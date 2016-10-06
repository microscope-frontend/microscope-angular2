import {Component} from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<nav class="navbar navbar-default" role="navigation">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" [routerLink]="['']">
						<i class="fa fa-home"></i> Home
					</a>
				</div>
		
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li><a [routerLink]="['Welcome']"><i class="fa fa-info-circle"></i> Welcome</a></li>
					</ul>
				</div>
			</div>
		</nav>
		
		<div class="container">
			<router-outlet></router-outlet>
		</div>
	`
})
export class AppComponent { }