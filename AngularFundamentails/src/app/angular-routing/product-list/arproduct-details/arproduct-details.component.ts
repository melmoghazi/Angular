import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arproduct-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './arproduct-details.component.html',
  styleUrl: './arproduct-details.component.scss'
})
export class ARProductDetailsComponent implements OnInit {
  id!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.id = this.activatedRoute.snapshot.params['id'];
    //const id1 = this.activatedRoute.snapshot.paramMap.get('id');
    // any change in the url will not be reflected

    // this.activatedRoute.params.subscribe(
    //   (res: Params) => {
    //     this.id = res['id']
    //   }
    // );

    this.activatedRoute.paramMap.subscribe(
      (res) => {
        this.id = Number(res.get('id'));
      }
    );
  }



}
