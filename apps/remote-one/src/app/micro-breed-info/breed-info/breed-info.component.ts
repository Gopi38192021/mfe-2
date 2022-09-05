import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'workspace-two-breed-info',
  templateUrl: './breed-info.component.html',
  styleUrls: ['./breed-info.component.scss'],
})
export class BreedInfoComponent implements OnInit {
  id: any;
  breedData: any;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.route.params.subscribe((params)=>{
      this.id = +params['id'];
    })
    return
  }

  ngOnInit(): void {
    this.httpClient.get(`https://rabbit-breed-api.herokuapp.com/breeds/${this.id}/`).subscribe((data)=>{
      this.breedData = data;
    })
    return
  }
}
