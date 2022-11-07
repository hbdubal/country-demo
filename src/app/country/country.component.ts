import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from './country.model';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  // public country: any;
  public countryForm!: FormGroup;
  public issubmitted = false;
  countries!: Country[];

  constructor(private fb: FormBuilder, public countryService: CountryService, public http: HttpClient) {
    this.countries = [];
  }

  ngOnInit(): void {
    this.countryForm = this.fb.group(
      {
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]]
      }
    )
  }
  // changeCountry(count:any) {
  //   this.cities = this.countryList.find(con => con.name == count).cities;
  // }
  getCountryData() {
    this.countryService.getCountriesList().subscribe((data:any) => {
      this.countries = data
    });
  }
  
}