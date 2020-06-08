class Page {
  get footer() {
    return new Footer('footer');
  }

  get header() {
    return new Header('header');
  }

  open(url) {
    return 'http://tut.by' + url;
  }
}

class Component {
  constructor(name) {
    this.name = name;
  }

  reviewComponent() {
    return `This is ${this.name} component`;
  }

}

class Footer extends Component {
  constructor(name) {
    super(name);
  }

  reviewFooter() {
    return `I've just reviewed footer`;
  }
}

class Header extends Component {

  constructor(name) {
    super(name);
  }

}

class LoginPage extends Page {

  open() {
    return super.open('/login');
  }

  get emailField(){
    return 'emailField';
  }

  get passwordField() {
    return 'passwordField';
  }

  get loginButton() {
    return 'loginButton';
  }

  typeEmail(email) {
    return `I typed ${email} in ${this.emailField}`;
  }

  typePassword(password) {
    return `I typed ${password} in ${this.passwordField}`;
  }

  clickLogin() {
    return `I've just clicked ${this.loginButton}`;
  }
}

const loginPage = new LoginPage();
