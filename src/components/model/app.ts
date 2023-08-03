import Controller from '../controller/controller';
import createTemplate from '../view/template';

class App {
  private controller: Controller = new Controller();

  public start(): void {
    console.log('App connected');
    createTemplate();

    const body: HTMLElement | null = document.querySelector('.body');
    if (body) {
      body.addEventListener('click', (e: MouseEvent): void => this.controller.getTest(e));
    }
  }
}
export default App;
