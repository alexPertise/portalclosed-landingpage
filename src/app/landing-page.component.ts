import { Component } from "@angular/core";

@Component({
  selector: "landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class AppComponent {
  userLang: string = navigator.language;

  title: string;
  subTitle: string;
  subTitleText: string;
  text1: string;
  text2: string;
  cta: string;
  management: string;

  companyLogo: string;

  constructor() {
    if (this.userLang.startsWith("en")) {
      this.title = "Please note";
      this.subTitle = "This portal is no longer active";
      this.subTitleText = "Bonne continuation !";
      this.text1 =
        "Vous envisagez de lancer votre propre entreprise pédagogique ?";
      this.cta = "Contactez-nous";
      this.text2 =
        "pour découvrir si nos solutions sont adaptées à vos besoins.";
      this.management = "— La direction";
    } else {
      this.title = "Veuillez noter";
      this.subTitle = "Ce portail n'est plus actif";
      this.subTitleText = "Good luck!";
      this.text1 = "Thinking of launching your own educational business?";
      this.cta = "Contact us";
      this.text2 = "to find out if our solutions are right for you.";
      this.management = "- Management";
    }

    this.companyLogo = " ";
  }
}
