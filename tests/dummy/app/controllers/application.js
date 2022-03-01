import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
export default class ApplicationController extends Controller {
  @tracked showControl = true;
  @tracked showMap = true;

  toggleProperty = (prop) => {
    this[prop] = !this[prop];
  };
}
