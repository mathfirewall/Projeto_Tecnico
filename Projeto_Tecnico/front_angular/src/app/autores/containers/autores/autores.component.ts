import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutorsService } from '../../services/autors.service';
import { Model } from '../../models/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  dataAutores$!: Observable<Model[]>;



  constructor(
    private autorsSerivce: AutorsService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,) {

   }

  ngOnInit(): void {

    this.autorsSerivce.getAll().subscribe((data: any): void =>{
      this.dataAutores$ = data.content
    });
  }

  onAdd(){
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onEdit(dataAutores: Model){
    this.router.navigate(['edit', dataAutores.id], { relativeTo: this.route })
  }

  onDelete(dataAutores: Model){
    this.autorsSerivce.delete(dataAutores.id).subscribe()
    this.snackBar.open('Autor Deletado Com Sucesso!', '', { duration: 2000 });
    this.router.navigate(['/'])
  }

}
