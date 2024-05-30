import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DeadlineService } from '../../service/deadline.service';

@Component({
  selector: 'app-deadline-counter',
  // standalone: true,
  // imports: [],
  templateUrl: './deadline-counter.component.html',
  styleUrls: ['./deadline-counter.component.css']
})

export class DeadlineCounterComponent implements OnInit, OnDestroy {
  currentTime: Date = new Date();
  secondsLeft: number = 0;
  deadline: Date | null = null;
  private subscription: Subscription| null = null;
  private timeSubscription: Subscription | null = null;

  constructor(private deadlineService: DeadlineService) { 
  }

  ngOnInit(): void {
    this.subscription = this.deadlineService.getDeadline().pipe(
      switchMap((response: IDeadline) => {
        // var datenow = new Date().toISOString();
        // var date_deadline = new Date(response.deadline).toISOString();
        // console.log('>>>>>', response)
        // console.log('>>>>>', datenow);
        // console.log('>>>>>', date_deadline);
        // this.deadline = new Date(response.secondsLeft);

        this.secondsLeft = response.secondsLeft;
        this.deadline = new Date(response.deadline);
        return interval(1000);
      })
    ).subscribe(() => {
      this.updateCountdown();
    });
    this.timeSubscription = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
  }

  private updateCountdown(): void {
    if (this.secondsLeft > 0) {
      this.secondsLeft--;
    } else {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

interface IDeadline {
  secondsLeft: any;
  deadline: any;
}