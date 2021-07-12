import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  checkPassword(pass: string) {
    return this.http.post(environment.host + "/api/login", { pass });
  }
}
