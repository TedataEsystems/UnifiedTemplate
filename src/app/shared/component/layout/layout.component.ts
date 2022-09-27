import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LoadingService } from '../../service/loading.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit , AfterViewInit{

  isMenuOpen = true;
  contentMargin = 240;
  constructor(private loader :LoadingService) {
    this.loader.busy();

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.loader.idle();
  }

  onToolbarMenuToggle() {

    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen) {
      this.contentMargin = 0 ;


    } else {
      this.contentMargin = 240;



    }
  }

}
