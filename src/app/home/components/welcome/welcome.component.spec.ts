/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [WelcomeComponent],
            imports     : [BrowserModule, FormsModule]
        });
        TestBed.compileComponents();
    });

    it('should create the welcome component', async(() => {
        const fixture = TestBed.createComponent(WelcomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('fullname should be a concat', async(() => {
        const fixture = TestBed.createComponent(WelcomeComponent);
        const app = fixture.debugElement.componentInstance;
        app.user.firstname = 'Benjamin';
        app.user.lastname = 'Heintz';
        expect(app.fullname).toEqual('Benjamin Heintz');
    }));
});
