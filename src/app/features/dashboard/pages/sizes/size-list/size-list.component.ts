import { Component, OnInit } from '@angular/core';
import { Size } from '../../../../../core/models/size.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SizeService } from '../../../../../core/services/size.service';

@Component({
  selector: 'app-size-list',
  templateUrl: './size-list.component.html',
  styleUrl: './size-list.component.scss',
})
export class SizeListComponent implements OnInit {
  sizes: Size[] = [];

  constructor(
    private sizeService: SizeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  onNavigateToCreate() {
    this.router.navigate(['upsert'], { relativeTo: this.activatedRoute });
  }

  onNavigateToEdit(id: string) {
    this.router.navigate(['upsert', id], { relativeTo: this.activatedRoute });
  }

  onNavigateToDetails(id: string) {
    this.router.navigate(['upsert', id], { relativeTo: this.activatedRoute });
  }

  onDelete(id: string) {
    this.sizeService.deleteSize(id).subscribe(() => {});
  }

  private loadCategories() {
    this.sizeService.getSizes().subscribe((sizes) => {
      this.sizes = sizes;
    });
  }
}
