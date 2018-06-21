import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { MessageComponent } from './message.component';
import { GitHubLinkAreaModule } from './../github-link-area/github-link-area.module';
import { MarkdownModule } from './../markdown/markdown.module';

describe('Message Component - ', () => {
  let comp: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MarkdownModule,
        GitHubLinkAreaModule
      ],
      declarations: [ MessageComponent ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(MessageComponent);
      comp = fixture.componentInstance;
    });
  }));

  it('Should create', () => {
    expect(comp).toBeDefined();
  });
  it('Should contain Message', () => {
    comp.message = 'Some message';
    fixture.detectChanges();
    const messageElement: HTMLElement = fixture.nativeElement
      .querySelector('div')
      .querySelector('github-link-area')
      .querySelector('div');
    expect(messageElement.textContent).toBe('Some message');
  });
  it('Should contain Message Placeholder', () => {
    fixture.detectChanges();
    const messagePlaceholder: HTMLElement = fixture.nativeElement
      .querySelector('div');
    expect(messagePlaceholder.textContent).toContain(comp.placeholder);
  });
  it('Should contain Default Message Placeholder', () => {
    comp.placeholder = 'Placeholder value';
    fixture.detectChanges();
    const messagePlaceholder: HTMLElement = fixture.nativeElement
      .querySelector('div');
    expect(messagePlaceholder.textContent).toContain('Placeholder value');
  });
});
