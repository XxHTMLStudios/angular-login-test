import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  pass = new FormControl("");
  isValid: boolean;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  checkPass() {
    if (this.pass.value !== "") {
      this.loginService
        .checkPassword(this.pass.value)
        .subscribe((data: any) => {
          if (data.isValid) {
            this.isValid = true;
          } else {
            this.isValid = false;
          }
        });
    }
    this.pass.reset();
  }
}
