import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoPersonsComponent } from './to-do-persons.component';

describe('ToDoPersonsComponent', () => {
  let component: ToDoPersonsComponent;
  let fixture: ComponentFixture<ToDoPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
