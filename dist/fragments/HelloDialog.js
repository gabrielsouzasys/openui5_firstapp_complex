sap.ui.define("fitst/fragments/HelloDialog", ["sap/m/Dialog", "sap/ui/core/Icon", "sap/m/Button"], function (Dialog, Icon, Button) {
  var _default = {};

  var createHelloDialog = function createHelloDialog(oController) {
    return new Dialog({
      id: "helloDialog",
      title: "Hello {/recipient/name}",
      beginButton: new Button({
        text: "{i18n>dialogCloseButtonText}",
        press: oController.onCloseDialog
      }),
      content: [new Icon({
        src: "sap-icon://hello-world",
        size: "8rem"
      }).addStyleClass("sapUiMediumMargin")]
    });
  };

  _default.createHelloDialog = createHelloDialog;
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYWdtZW50cy9IZWxsb0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJjcmVhdGVIZWxsb0RpYWxvZyIsIm9Db250cm9sbGVyIiwib25DbG9zZURpYWxvZyJdLCJtYXBwaW5ncyI6Ijs7O0FBSU8sTUFBTUEsaUJBQWlCLEdBQUcsMkJBQUFDLFdBQVc7QUFBQTtBQUFBLFVBRXJDLGFBRnFDO0FBQUEsYUFHbEMseUJBSGtDO0FBQUE7QUFBQSxjQU0vQiw4QkFOK0I7QUFBQSxlQU83QkEsV0FBVyxDQUFDQztBQVBpQjtBQUFBO0FBQUEsYUFZbEMsd0JBWmtDO0FBQUEsY0FhakM7QUFiaUM7QUFBQTtBQUFBLEdBQXJDOztXQUFNRixpQixHQUFBQSxpQiIsInNvdXJjZVJvb3QiOiIvc291cmNlbWFwcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcInNhcC9tL0RpYWxvZ1wiO1xuaW1wb3J0IEljb24gZnJvbSBcInNhcC91aS9jb3JlL0ljb25cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInNhcC9tL0J1dHRvblwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSGVsbG9EaWFsb2cgPSBvQ29udHJvbGxlciA9PiAoXG4gIDxEaWFsb2dcbiAgICBpZD1cImhlbGxvRGlhbG9nXCJcbiAgICB0aXRsZT1cIkhlbGxvIHsvcmVjaXBpZW50L25hbWV9XCJcbiAgICBiZWdpbkJ1dHRvbj17XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHRleHQ9XCJ7aTE4bj5kaWFsb2dDbG9zZUJ1dHRvblRleHR9XCJcbiAgICAgICAgcHJlc3M9e29Db250cm9sbGVyLm9uQ2xvc2VEaWFsb2d9XG4gICAgICAvPlxuICAgIH1cbiAgPlxuICAgIDxJY29uXG4gICAgICBzcmM9XCJzYXAtaWNvbjovL2hlbGxvLXdvcmxkXCJcbiAgICAgIHNpemU9XCI4cmVtXCJcbiAgICAgIGNsYXNzPVwic2FwVWlNZWRpdW1NYXJnaW5cIlxuICAgIC8+XG4gIDwvRGlhbG9nPlxuKTtcbiJdLCJmaWxlIjoiZnJhZ21lbnRzL0hlbGxvRGlhbG9nLmpzIn0=
