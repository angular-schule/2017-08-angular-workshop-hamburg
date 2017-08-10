import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';


describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      title: 'Testbuch',
      rating: 1,
      rateUp: () => { },
      rateDown: () => { }
    } as Book;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('clicking "thumbs up" should call rateUp()', () => {
    const rateUpBtn = fixture.debugElement.query(By.css('button.rateUpBtn')).nativeElement;
    spyOn(component, 'rateUp');
    rateUpBtn.click();
    expect(component.rateUp).toHaveBeenCalled();
  });

  it('clicking "thumbs down" should call rateDown()', () => {
    const rateDownBtn = fixture.debugElement.query(By.css('button.rateDownBtn')).nativeElement;
    spyOn(component, 'rateDown');
    rateDownBtn.click();
    expect(component.rateDown).toHaveBeenCalled();
  });

  it('should display the book title', () => {
    const heading = fixture.debugElement.query(By.css('h2 span#title')).nativeElement;
    expect(heading.textContent).toEqual('Testbuch');

    component.book.title = 'Testbuch 2';
    fixture.detectChanges();
    expect(heading.textContent).toEqual('Testbuch 2');
  });
});
