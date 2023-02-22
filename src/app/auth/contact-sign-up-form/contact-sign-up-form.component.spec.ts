import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSignUpFormComponent } from './contact-sign-up-form.component';

describe('ContactSignUpFormComponent', () => {
  let component: ContactSignUpFormComponent;
  let fixture: ComponentFixture<ContactSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSignUpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
