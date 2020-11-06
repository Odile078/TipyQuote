import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: '.app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son','Emilia',new Date(2019,9,14),0,0),
    new Quote(2,'Buy Cookies','I have to buy cookies for the parrot','Sandy',new Date(2019,6,9),0,0),
    new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon','Sam',new Date(2019,1,12),0,0),
    new Quote(4,'Get Dog Food','Pupper likes expensive snacks','Samantha',new Date(2019,11,18),0,0),
    new Quote(5,'Solve math homework','Damn Math','Anna',new Date(2019,2,14),0,0),
    new Quote(6,'Plot my world domination plan','Cause I am an evil overlord','Annie',new Date(2019,3,14),0,0),
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
