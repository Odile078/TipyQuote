import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: '.app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Doug Hutchison', 'I think being in love with life is a key to eternal youth.','Emilia',new Date(2019,9,14),0,0),
    new Quote(2,'Walter Hagen','You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.','Sandy',new Date(2019,6,9),0,0),
    new Quote(3,'Charles Darwin','A man who dares to waste one hour of time has not discovered the value of life.','Sam',new Date(2019,1,12),0,0),
    new Quote(4,'Eleanor Roosevelt','If life were predictable it would cease to be life, and be without flavor.','Samantha',new Date(2019,11,18),0,0),
    new Quote(5,'Emily Dickinson','Find ecstasy in life; the mere sense of living is joy enough.','Anna',new Date(2019,2,14),0,0),
    new Quote(6,'Sarah Louise Delany','Life is short, and it is up to you to make it sweet.','Annie',new Date(2019,3,14),0,0),
    ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  completeQuote(isComplete, index){
      if (isComplete) {
      this.quotes.splice(index,1);
      }
      }
  delete(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete){
        this.quotes.splice(index,1)
        }
      }
    }
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
      }
  constructor() { }

  ngOnInit(): void {
  }

}
