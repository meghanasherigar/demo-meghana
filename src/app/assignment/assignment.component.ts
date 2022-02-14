import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { empty, fromEvent, interval, mapTo, merge, Observable, scan, startWith, switchMap, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit ,AfterViewInit,AfterViewChecked{
  @ViewChild('pauseNew', { static: false }) pauseButton: ElementRef;
  @ViewChild('resumeNew', { static: false }) resumeButton: ElementRef;
   counter = 59;
   empty$:any;
   pause$ :any;
   interval$:any;
   resume$ :any
  
 showElement = document.getElementById('show');
 pointerElement = document.getElementById('pointer');
//  pauseButton = document.getElementById('pause');
//  resumeButton = document.getElementById('resume');
 restartButton = document.getElementById('restart');
  constructor() { }


   update(second) {
    let deg = second / 60 * 360 - 90;
    // pointerElement.style.transform = `rotate(${ deg }deg)`;
    // this.showElement.innerText = second;
  }

  ngOnInit(): void {
  //  this.updateCounter();
  }
  ngAfterViewInit(): void {
    this.updateCounter(); 
  }
  ngAfterViewChecked(): void {
    // this.updateCounter(); 
    // console.log(this.pauseButton.nativeElement)
  }
      
  

  start(){
  
    let timer$ = this.setTimer();

    // this.resume$ = fromEvent(this.resumeButton.nativeElement, 'click').pipe(mapTo(true));
  }

  pause(){
  
    // let timer$ = this.setTimer();
    // this.pause$ = fromEvent(this.pauseButton.nativeElement, 'click').pipe(mapTo(false))
  }
  updateCounter(){
     this.interval$ = interval(1000).pipe(mapTo(-1));
      this.empty$ = empty();
      this.pause$ = fromEvent(this.pauseButton.nativeElement, 'click').pipe(mapTo(false))
      this.resume$ = fromEvent(this.resumeButton.nativeElement, 'click').pipe(mapTo(true));

  }
 
  

   setTimer(){szsss
     
      
      merge(this.pause$, this.resume$)
      .pipe(startWith(this.interval$),
      switchMap(val => {
        console.log('value from switch map',val,this.pause$,this.resume$ );
        return val ? this.interval$ : this.empty$

      }),
      scan((acc:number, curr:number) => curr ? curr + acc : acc, this.counter),
      takeWhile(v => v >= 0)
      ).subscribe(ans=>{
        console.log(ans);
        this.update(ans)
      })
  
  }

  

}
