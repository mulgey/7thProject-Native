// blueprint for places to have all similar structure
class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // should be an { object } with "lat:" and "lng:"
    // with no backend, let's generate a pseudo-ID
    this.id = new Date().toString() + Math.random().toString();
  }
}
