import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-structure-list',
  templateUrl: './structure-list.component.html',
  styleUrls: ['./structure-list.component.scss'],
})
export class StructureListComponent implements OnInit {
  structures;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('http://localhost:3001/poiForms').subscribe(
      (response) => {
        this.structures = response.poiForms;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
