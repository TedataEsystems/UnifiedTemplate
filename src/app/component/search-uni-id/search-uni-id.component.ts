import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-uni-id',
  templateUrl: './search-uni-id.component.html',
  styleUrls: ['./search-uni-id.component.css']
})
export class SearchUNIIDComponent implements OnInit {

  constructor(private title : Title) {
    this.title.setTitle(" | Search uniq Key")
  }

  ngOnInit(): void {
  }

}
