sap.ui.define("fitst/views/App", ["sap/m/App", "sap/ui/core/mvc/JSView"], function (Application, JSView) {
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var App = {
    onOpenDialog: function onOpenDialog() {
      this.getController().getOwnerComponent().openHelloDialog();
    },
    createContent: function createContent(controller) {
      this.addStyleClass(controller.getOwnerComponent().getContentDensityClass());
      return new Application({
        id: "app"
      });
    },
    getControllerName: function getControllerName() {
      return "sap.ui.core.mvc.Controller";
    }
  };
  App = sap.ui.jsview("fitst.views.App", App) || App;
  _default = _extends(App, _default);
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL0FwcC52aWV3LmpzIl0sIm5hbWVzIjpbIm9uT3BlbkRpYWxvZyIsImdldENvbnRyb2xsZXIiLCJnZXRPd25lckNvbXBvbmVudCIsIm9wZW5IZWxsb0RpYWxvZyIsImNyZWF0ZUNvbnRlbnQiLCJjb250cm9sbGVyIiwiYWRkU3R5bGVDbGFzcyIsImdldENvbnRlbnREZW5zaXR5Q2xhc3MiLCJBcHBsaWNhdGlvbiIsImlkIiwiQXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLRUEsSUFBQUEsWSwwQkFBZTtBQUNiLFdBQUtDLGFBQUwsR0FBcUJDLGlCQUFyQixHQUF5Q0MsZUFBekM7QUFDRCxLO0FBRURDLElBQUFBLGEseUJBQWNDLFUsRUFBWTtBQUN4QixXQUFLQyxhQUFMLENBQW1CRCxVQUFVLENBQUNILGlCQUFYLEdBQStCSyxzQkFBL0IsRUFBbkI7QUFDQSxhQUFPLElBQUlDLFdBQUosQ0FBZ0I7QUFBRUMsUUFBQUEsRUFBRSxFQUFFO0FBQU4sT0FBaEIsQ0FBUDtBQUNELEs7Ozs7OztzQkFUa0JDLEciLCJzb3VyY2VSb290IjoiL3NvdXJjZW1hcHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSBcInNhcC9tL0FwcFwiO1xuaW1wb3J0IEpTVmlldyBmcm9tIFwic2FwL3VpL2NvcmUvbXZjL0pTVmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBKU1ZpZXcge1xuXG4gIG9uT3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLmdldENvbnRyb2xsZXIoKS5nZXRPd25lckNvbXBvbmVudCgpLm9wZW5IZWxsb0RpYWxvZygpO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudChjb250cm9sbGVyKSB7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzKGNvbnRyb2xsZXIuZ2V0T3duZXJDb21wb25lbnQoKS5nZXRDb250ZW50RGVuc2l0eUNsYXNzKCkpO1xuICAgIHJldHVybiBuZXcgQXBwbGljYXRpb24oeyBpZDogXCJhcHBcIiB9KTtcbiAgfVxuXG59XG4iXSwiZmlsZSI6InZpZXdzL0FwcC52aWV3LmpzIn0=
