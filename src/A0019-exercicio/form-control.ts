import isEmail from 'validator/lib/isEmail';

const form = document.querySelector('.form') as HTMLFormElement;
const user = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const repeatPassword = document.querySelector('.password2') as HTMLInputElement;

const SHOW_ERROR_MESSAGES = 'show-error-message';

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  hideErrorMessages(form);
  checkForEmptyFields(user, email, password, repeatPassword);
  checkEmail(email);
  checkPasswords(password, repeatPassword);

  if (shouldSendForm(form)) console.log('Formulário Enviado Com Sucesso');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) {
      showErrorMessage(input, 'Este campo não pode ficar vazio');
    }
  });
}
function checkEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) {
    showErrorMessage(email, 'Email inválido');
  }
}
function checkPasswords(password: HTMLInputElement, repeatPassword: HTMLInputElement): void {
  if (password.value !== repeatPassword.value) {
    showErrorMessage(repeatPassword, 'Senhas não coincidem');
  }
}
function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((field) => {
    field.classList.remove(SHOW_ERROR_MESSAGES);
  });
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.textContent = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => {
    send = false;
  });
  return send;
}
