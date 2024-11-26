import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aredit-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aredit-product.component.html',
  styleUrl: './aredit-product.component.scss'
})
export class AREditProductComponent implements OnInit {

  //@Input('id') productId: string='';
  id!: number;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      (res) => {
        console.log('insertttttt= ', res.get('id'));
        this.id = Number(res.get('id'));
      }
    )

    if (this.id) {
      console.log('product id ', this.id);
    }
  }

}
