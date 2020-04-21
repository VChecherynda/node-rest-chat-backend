export default class Base {
  run(data) {
    return this.validate(data)
      .then(cleanData => {
        console.log("[cleanData]", cleanData);
        return this.execute(cleanData);
      })
      .catch(err => {
        console.log("[err]", err);
        return this.handleError(err);
      });
  }
}
