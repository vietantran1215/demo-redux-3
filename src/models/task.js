// Blueprint to create an object
export default class Task {
  constructor(title, description) {
    this.id = (new Date()).getTime(); // Lấy ra thời gian hiện tại theo miliseconds
    this.title = title;
    this.description = description;
    this.status = 'to do';
    this.isDeleted = false;
  }
}
