import { Component } from "@angular/core";

@Component({
  selector: "landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class AppComponent {
  currentLanguage: string = navigator.language.substring(0, 2);
  topRightLanguageTxt: string;

  title: string;
  subTitle: string;
  subTitleText: string;
  text1: string;
  text2: string;
  cta: string;
  management: string;

  companyLogo: {};
  currentUrl: string = window.location.host;

  constructor() {
    this.getCurrentLanguage();
    this.getLanguageTxt();

    this.companyLogo = {
      "portalclosed-landingpage.stackblitz.io":
        "https://stackblitz.com/files/portalclosed-landingpage/github/alexPertise/portalclosed-landingpage/2021-03-05_15-44/evolupharma.uxpertise 1.png",
      "NEXT PORTAL": "IMAGE LINK"
    };

    console.log(this.companyLogo[this.currentUrl]);
  }

  public changeCurrentLanguage() {
    if (this.topRightLanguageTxt == "en") {
      this.topRightLanguageTxt = "fr";
    } else if (this.topRightLanguageTxt == "fr") {
      this.topRightLanguageTxt = "en";
    }
    this.getLanguageTxt();
  }

  private getCurrentLanguage() {
    if (this.currentLanguage == "en") {
      this.topRightLanguageTxt = "fr";
    } else if (this.currentLanguage == "fr") {
      this.topRightLanguageTxt = "en";
    }
  }

  private getLanguageTxt() {
    if (this.topRightLanguageTxt == "fr") {
      this.title = "Please note";
      this.subTitle = "This portal is no longer active";
      this.subTitleText = "Good luck!";
      this.text1 = "Thinking of launching your own educational business?";
      this.cta = "Contact us";
      this.text2 = "to find out if our solutions are right for you.";
      this.management = "- Management";
    } else if (this.topRightLanguageTxt == "en") {
      this.title = "Veuillez noter";
      this.subTitle = "Ce portail n'est plus actif";
      this.subTitleText = "Bonne continuation !";
      this.text1 =
        "Vous envisagez de lancer votre propre entreprise pédagogique ?";
      this.cta = "Contactez-nous";
      this.text2 =
        "pour découvrir si nos solutions sont adaptées à vos besoins.";
      this.management = "— La direction";
    }
  }
}
