export default class History {
  static push(path) {
    history.pushState(null, null, path);
  }
}
