import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City, Country, State } from './country.model';
import { CountryService } from './country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  // public countryForm!: FormGroup;
  // public issubmitted = false;
  public countries!: Country[];
  public allState!: State[];
  public allCity!: City[];

  constructor(private fb: FormBuilder, public countryService: CountryService, public http: HttpClient) {

  }

  ngOnInit(): void {
    // this.countryForm = this.fb.group(
    //   {
    //     country: ['', [Validators.required]],
    //     state: ['', [Validators.required]],
    //     cities: ['', [Validators.required]]
    //   }
    // )
    this.getCountryData();
  }


  getCountryData() {
    this.countryService.getCountriesList().subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    });
  }

  getStatebyCountry(event: any) {
    const countryId = event.target.value
    console.log(countryId);
    this.countryService.getStatesByCountry().subscribe((res: any) => {
      console.log(res);
      this.allState = res.filter((data: any) => data.countryId == countryId);
      console.log(this.allState);
    })
  }

  getCityByStateId(event: any) {
    const stateId = event.target.value
    console.log(stateId);
    this.countryService.getCityByState().subscribe((res: any) => {
      console.log(res);
      this.allCity = res.filter((data: any) => data.stateId == stateId);
      console.log(this.allCity);
    })
  }
}
  