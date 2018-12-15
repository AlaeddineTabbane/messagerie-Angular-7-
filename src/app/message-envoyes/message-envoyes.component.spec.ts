import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEnvoyesComponent } from './message-envoyes.component';

describe('MessageEnvoyesComponent', () => {
  let component: MessageEnvoyesComponent;
  let fixture: ComponentFixture<MessageEnvoyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEnvoyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEnvoyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
