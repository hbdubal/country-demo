import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
  countryUrl: string;

  constructor(public http: HttpClient) {
    this.countryUrl = 'http://localhost:3000/country/'
  }

  /**
   * 
   * @returns countryList
   */
  getCountriesList():Observable<Country[]>
  {
    return this.http.get<Country[]>(this.countryUrl);
  }

  getStatesByCountry():Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }
  
}
