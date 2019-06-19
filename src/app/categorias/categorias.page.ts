import { CategoriaService } from './../../services/domain/categoria.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(
    public nacCtrl: NavController,
    public navParams: NavParams,
    public categoriaService: CategoriaService) { 

    }

    ionViewDidLoad() {
      this.categoriaService.findAll().subscribe(response => {
        console.log(response);
      }, error =>{
        console.log(error);
      });
    }
  ngOnInit() {
  }
}
