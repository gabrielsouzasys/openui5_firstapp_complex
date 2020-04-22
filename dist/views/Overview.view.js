sap.ui.define("fitst/views/Overview", ["sap/ui/core/mvc/JSView", "sap/m/Page", "sap/m/Button"], function (JSView, Page, Button) {
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var App = {
    createContent: function createContent(controller) {
      var _this = this;

      this.addStyleClass(controller.getOwnerComponent().getContentDensityClass());
      return new Page({
        title: "{i18n>appTitle}",
        headerContent: new Button({
          icon: "sap-icon://hello-world",
          press: function press() {
            _this.oController.getOwnerComponent().openHelloDialog();
          }
        }),
        content: [new JSView({
          viewData: {
            extra: "this_is_a_test_string"
          },
          viewName: "fitst.views.HelloPanel"
        }), new JSView({
          viewData: {},
          viewName: "fitst.views.InvoiceList"
        })]
      });
    },
    getControllerName: function getControllerName() {
      return "sap.ui.core.mvc.Controller";
    }
  };
  App = sap.ui.jsview("fitst.views.Overview", App) || App;
  _default = _extends(App, _default);
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL092ZXJ2aWV3LnZpZXcuanMiXSwibmFtZXMiOlsiY3JlYXRlQ29udGVudCIsImNvbnRyb2xsZXIiLCJhZGRTdHlsZUNsYXNzIiwiZ2V0T3duZXJDb21wb25lbnQiLCJnZXRDb250ZW50RGVuc2l0eUNsYXNzIiwib0NvbnRyb2xsZXIiLCJvcGVuSGVsbG9EaWFsb2ciLCJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVVFQSxJQUFBQSxhLHlCQUFjQyxVLEVBQVk7QUFBQTs7QUFDeEIsV0FBS0MsYUFBTCxDQUFtQkQsVUFBVSxDQUFDRSxpQkFBWCxHQUErQkMsc0JBQS9CLEVBQW5CO0FBQ0E7QUFBQSxlQUVVLGlCQUZWO0FBQUE7QUFBQSxnQkFLYSx3QkFMYjtBQUFBLGlCQU1lLGlCQUFNO0FBQ1gsWUFBQSxLQUFJLENBQUNDLFdBQUwsQ0FBaUJGLGlCQUFqQixHQUFxQ0csZUFBckM7QUFDRDtBQVJUO0FBQUE7QUFBQTtBQUFBLG1CQWdCc0I7QUFoQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JELEs7Ozs7OztzQkF4QmtCQyxHIiwic291cmNlUm9vdCI6Ii9zb3VyY2VtYXBzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTVmlldyBmcm9tIFwic2FwL3VpL2NvcmUvbXZjL0pTVmlld1wiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcInNhcC9tL1BhZ2VcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInNhcC9tL0J1dHRvblwiO1xuLy8gcGxlYXNlIG1ha2Ugc3VyZSB5b3VyIFZpZXcganMgZmlsZSBpcyBlbmRlZCB3aXRoIC52aWV3LmpzXG4vLyBvdGhlcndpc2UsIHVpNSBtb2R1bGUgc3lzdGVtIGNhbiBub3QgaW5mZXIgaXRzIGxvY2F0aW9uXG5pbXBvcnQgSGVsbG9QYW5lbCBmcm9tIFwiLi9IZWxsb1BhbmVsLnZpZXdcIjtcbmltcG9ydCBJbnZvaWNlTGlzdCBmcm9tIFwiLi9JbnZvaWNlTGlzdC52aWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIEpTVmlldyB7XG5cbiAgY3JlYXRlQ29udGVudChjb250cm9sbGVyKSB7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzKGNvbnRyb2xsZXIuZ2V0T3duZXJDb21wb25lbnQoKS5nZXRDb250ZW50RGVuc2l0eUNsYXNzKCkpO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZVxuICAgICAgICB0aXRsZT1cIntpMThuPmFwcFRpdGxlfVwiXG4gICAgICAgIGhlYWRlckNvbnRlbnQ9e1xuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249XCJzYXAtaWNvbjovL2hlbGxvLXdvcmxkXCJcbiAgICAgICAgICAgIHByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMub0NvbnRyb2xsZXIuZ2V0T3duZXJDb21wb25lbnQoKS5vcGVuSGVsbG9EaWFsb2coKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgLy8gZXh0cmEgd2lsbCBiZSBwYXNzZWQgaW50byBIZWxsb1BhbmVsIGludGVybmFsXG4gICAgICAgICAgLy8gYW5kIHVzZSB0aGlzLmdldFZpZXdEYXRhKCkuZXh0cmEgdG8gZ2V0IGl0XG4gICAgICAgIH1cbiAgICAgICAgPEhlbGxvUGFuZWwgZXh0cmE9XCJ0aGlzX2lzX2FfdGVzdF9zdHJpbmdcIiAvPlxuICAgICAgICA8SW52b2ljZUxpc3QgLz5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG5cbn1cbiJdLCJmaWxlIjoidmlld3MvT3ZlcnZpZXcudmlldy5qcyJ9
