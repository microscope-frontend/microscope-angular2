/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent]
        });
        TestBed.compileComponents();
    });

    it('should create the home component', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('home title should be Hello', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component.title).toEqual('Angular starter kit');
    }));
});
