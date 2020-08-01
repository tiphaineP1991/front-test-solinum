import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  structures;
  id: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  onUpdate(id) {
    this.router.navigate(['/structure/' + id]);
  }

  editModeration(event: any, id: any) {
    if (event.target.value === 'validate') {
      this.httpClient
        .post('http://localhost:3001/poiForms/validation?&id=' + id, {
          moderation: event.target.value,
          status: 'online',
        })
        .subscribe(
          (val) => {
            console.log('Structure modifiée', val);
            alert('Structure modifiée');
          },
          (response) => {
            console.log('Erreur', response);
          },
          () => {
            console.log('The POST methode is now completed.');
          }
        );
    } else {
      this.httpClient
        .post('http://localhost:3001/poiForms/validation?&id=' + id, {
          moderation: event.target.value,
          status: 'draft',
        })
        .subscribe(
          (val) => {
            console.log('Structure modifiée', val);
            alert('Structure modifiée');
          },
          (response) => {
            console.log('Erreur', response);
          },
          () => {
            console.log('The POST methode is now completed.');
          }
        );
    }
  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3001/poiForms').subscribe(
      (response) => {
        this.structures = response.poiForms;
        console.log(response);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }
}
