import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
@Component({
  selector: 'app-structure-by-id',
  templateUrl: './structure-by-id.component.html',
  styleUrls: ['./structure-by-id.component.scss'],
})
export class StructureByIdComponent implements OnInit {
  structure;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.httpClient.get('http://localhost:3001/poiForm/' + id).subscribe(
      (response) => {
        this.structure = response;
        console.log(response);
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  editName(event: any) {
    this.structure.name = event.target.value;
    console.log(this.structure.name);
  }
  editEmail(event: any) {
    this.structure.email = event.target.value;
    console.log(this.structure.email);
  }
  editAddress(event: any) {
    this.structure.address = event.target.value;
    console.log(this.structure.address);
  }
  editType(event: any) {
    this.structure.type = event.target.value;
    console.log(this.structure.type);
  }
  editStatus(event: any) {
    this.structure.status = event.target.value;
    console.log(this.structure.status);
  }

  onSubmit(form: NgForm) {
    this.httpClient
      .post('http://localhost:3001/poiForms/update?&id=' + this.structure._id, {
        name: this.structure.name,
        email: this.structure.email,
        address: this.structure.address,
        type: this.structure.type,
        status: this.structure.status,
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
