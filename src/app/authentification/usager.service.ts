import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usager } from './usager';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsagerService {

  constructor(private http: HttpClient) { }
}
