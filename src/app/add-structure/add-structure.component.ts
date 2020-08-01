import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.component.html',
  styleUrls: ['./add-structure.component.scss'],
})
export class AddStructureComponent implements OnInit {
  structure;
  addresses;
  selectedAddress;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  findAddress(event: any) {
    this.httpClient
      .get(
        'https://api.tomtom.com/search/2/search/' +
          event.target.value +
          '.json?countrySet=FR&lat=37.337&lon=-121.89&topLeft=37.553%2C-122.453&btmRight=37.4%2C-122.55&key=RzFimmPTjszrftNdUEvQA6GMdKM8s5XN'
      )
      .subscribe(
        (response) => {
          this.addresses = response.results;
          console.log(this.addresses);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  editAddress(event: any) {
    this.selectedAddress = event.target.value;
  }

  onSubmit(form: NgForm) {
    this.httpClient
      .post('http://localhost:3001/poiForm/create', {
        name: form.value['name'],
        email: form.value['email'],
        address: this.selectedAddress,
        type: form.value['type'],
        status: form.value['status'],
        moderation: form.value['moderation'],
      })
      .subscribe(
        (val) => {
          console.log('Structure ajoutée', val);
          alert('structure ajoutée');
        },
        (response) => {
          console.log('POST call in error', response);
        },
        () => {
          console.log('The POST methode is now completed.');
        }
      );
  }
}

// https://api.tomtom.com/search/2/autocomplete/' +
//           event.target.value +
//           '.json?key=
