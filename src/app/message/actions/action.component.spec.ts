import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MessageActionComponent } from './action.component';

fdescribe('Message Action Component', () => {
  let comp: MessageActionComponent;
  let fixture: ComponentFixture<MessageActionComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ MessageActionComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(MessageActionComponent);
      comp = fixture.componentInstance;
    });
  }));
  it('Should Create', () => {
    expect(comp).toBeDefined();
  });
  it('Should contain action element', () => {
    comp.msgReplyAction = false;
    fixture.detectChanges();
    let actionElement: HTMLElement = fixture.nativeElement.querySelector('a');
    console.log('actionElement', actionElement);
    expect(actionElement.textContent).toBeTruthy(comp.msgReplyAction);
  });
  it('Should contain action element', () => {
    comp.msgEditAction = false;
    fixture.detectChanges();
    let actionElement: HTMLElement = fixture.nativeElement.querySelector('a');
    console.log('actionElement', actionElement);
    expect(actionElement.textContent).toBeTruthy(comp.msgEditAction);
  });
  it('Should contain action element', () => {
    comp.msgDeleteAction = false;
    fixture.detectChanges();
    let actionElement: HTMLElement = fixture.nativeElement.querySelector('a');
    console.log('actionElement', actionElement);
    expect(actionElement.textContent).toBeTruthy(comp.msgDeleteAction);
  });
});
