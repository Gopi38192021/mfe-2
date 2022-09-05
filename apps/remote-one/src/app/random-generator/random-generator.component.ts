import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'workspace-two-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.scss'],
})
export class RandomGeneratorComponent implements OnInit {
  random: any;
  constructor(private router: Router) {
    return
  }

  ngOnInit(): void {
    return
  }

  randomGenerator() {
    this.random = Math.floor(Math.random() * 85) + 1;
  }

  viewRabbit() {
    if(this.random) {
      this.router.navigate(['view-rabbit',this.random]);
    }else {
      alert('Please generate a number to view Rabbit!!')
    }
  }
}
