import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeGenerateComponent } from './joke-generate.component';

describe('JokeGenerateComponent', () => {
  let component: JokeGenerateComponent;
  let fixture: ComponentFixture<JokeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
