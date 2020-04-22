sap.ui.define("fitst/model/formatter", [], function () {
  var _default = {};

  var createFormatter = function createFormatter(oView) {
    return {
      statusText: function statusText(sStatus) {
        var oResourceBundle = oView.getModel("i18n").getResourceBundle();

        switch (sStatus) {
          case "A":
            return oResourceBundle.getText("invoiceStatusA");

          case "B":
            return oResourceBundle.getText("invoiceStatusB");

          case "C":
            return oResourceBundle.getText("invoiceStatusC");

          default:
            return oResourceBundle.getText("invoiceStatusA");
        }
      }
    };
  };

  _default.createFormatter = createFormatter;
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsL2Zvcm1hdHRlci5qcyJdLCJuYW1lcyI6WyJjcmVhdGVGb3JtYXR0ZXIiLCJvVmlldyIsInN0YXR1c1RleHQiLCJzU3RhdHVzIiwib1Jlc291cmNlQnVuZGxlIiwiZ2V0TW9kZWwiLCJnZXRSZXNvdXJjZUJ1bmRsZSIsImdldFRleHQiXSwibWFwcGluZ3MiOiI7OztBQUFPLE1BQU1BLGVBQWUsR0FBRyx5QkFBQUMsS0FBSztBQUFBLFdBQUs7QUFDdkNDLE1BQUFBLFVBQVUsRUFBRSxvQkFBU0MsT0FBVCxFQUFrQjtBQUM1QixZQUFJQyxlQUFlLEdBQUdILEtBQUssQ0FBQ0ksUUFBTixDQUFlLE1BQWYsRUFBdUJDLGlCQUF2QixFQUF0Qjs7QUFFQSxnQkFBUUgsT0FBUjtBQUNBLGVBQUssR0FBTDtBQUNFLG1CQUFPQyxlQUFlLENBQUNHLE9BQWhCLENBQXdCLGdCQUF4QixDQUFQOztBQUNGLGVBQUssR0FBTDtBQUNFLG1CQUFPSCxlQUFlLENBQUNHLE9BQWhCLENBQXdCLGdCQUF4QixDQUFQOztBQUNGLGVBQUssR0FBTDtBQUNFLG1CQUFPSCxlQUFlLENBQUNHLE9BQWhCLENBQXdCLGdCQUF4QixDQUFQOztBQUNGO0FBQ0UsbUJBQU9ILGVBQWUsQ0FBQ0csT0FBaEIsQ0FBd0IsZ0JBQXhCLENBQVA7QUFSRjtBQVVEO0FBZHNDLEtBQUw7QUFBQSxHQUE3Qjs7V0FBTVAsZSxHQUFBQSxlIiwic291cmNlUm9vdCI6Ii9zb3VyY2VtYXBzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNyZWF0ZUZvcm1hdHRlciA9IG9WaWV3ID0+ICh7XG4gIHN0YXR1c1RleHQ6IGZ1bmN0aW9uKHNTdGF0dXMpIHtcbiAgICB2YXIgb1Jlc291cmNlQnVuZGxlID0gb1ZpZXcuZ2V0TW9kZWwoXCJpMThuXCIpLmdldFJlc291cmNlQnVuZGxlKCk7XG5cbiAgICBzd2l0Y2ggKHNTdGF0dXMpIHtcbiAgICBjYXNlIFwiQVwiOlxuICAgICAgcmV0dXJuIG9SZXNvdXJjZUJ1bmRsZS5nZXRUZXh0KFwiaW52b2ljZVN0YXR1c0FcIik7XG4gICAgY2FzZSBcIkJcIjpcbiAgICAgIHJldHVybiBvUmVzb3VyY2VCdW5kbGUuZ2V0VGV4dChcImludm9pY2VTdGF0dXNCXCIpO1xuICAgIGNhc2UgXCJDXCI6XG4gICAgICByZXR1cm4gb1Jlc291cmNlQnVuZGxlLmdldFRleHQoXCJpbnZvaWNlU3RhdHVzQ1wiKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG9SZXNvdXJjZUJ1bmRsZS5nZXRUZXh0KFwiaW52b2ljZVN0YXR1c0FcIik7XG4gICAgfVxuICB9XG59KTsiXSwiZmlsZSI6Im1vZGVsL2Zvcm1hdHRlci5qcyJ9
