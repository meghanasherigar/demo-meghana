import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, interval, mapTo, Observable, of, scan, startWith, switchMap } from 'rxjs';
@Component({
  selector: 'app-assignment3-child-two',
  templateUrl: './assignment3-child-two.component.html',
  styleUrls: ['./assignment3-child-two.component.scss']
})
export class Assignment3ChildTwoComponent implements OnInit{
  inputValue:any='';
  count=0;
  pause$:Observable<any>; 
  start$:Observable<any>; 
  // @ViewChild('start')startButton:ElementRef;
  // @ViewChild('stop')stopButton:ElementRef;
  // interval$ = interval(10).pipe(mapTo(-1));
  constructor() { }

  ngOnInit(): void {
    // this.pause$=of('');
    // this.pause$=of('');
  }
  stopTimer(){
    this.pause$=of(false);
  }
  startTimer(){
    const secondsCounter = interval(10);
    // Subscribe to begin publishing values
    const subscription = secondsCounter.subscribe(n =>
      console.log(n));
  }

 
  
}
