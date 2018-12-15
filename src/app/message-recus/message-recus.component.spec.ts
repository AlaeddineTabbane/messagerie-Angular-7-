import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageRecusComponent } from './message-recus.component';

describe('MessageRecusComponent', () => {
  let component: MessageRecusComponent;
  let fixture: ComponentFixture<MessageRecusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageRecusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageRecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
