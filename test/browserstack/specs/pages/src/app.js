export default class AppPage {
  getActiveUser() {
    // Wait until Kinvey sdk has loaded
    // browser.waitUntil(function () {
    //   const result = browser.execute(function() {
    //     return window.Kinvey;
    //   });
    //   return typeof result.value !== 'undefined';
    // }, 10000, 'expected Kinvey to be defined');
    // debugger;
    // Get the active user
    const result = browser.execute(function() {
      return window.Kinvey.User.getActiveUser();
    });
    return result.value;
  }
}
