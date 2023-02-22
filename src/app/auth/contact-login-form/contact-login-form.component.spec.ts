import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLoginFormComponent } from './contact-login-form.component';

describe('ContactLoginFormComponent', () => {
  let component: ContactLoginFormComponent;
  let fixture: ComponentFixture<ContactLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLoginFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
