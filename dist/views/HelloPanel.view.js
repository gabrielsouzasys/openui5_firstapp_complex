sap.ui.define("fitst/views/HelloPanel", ["sap/ui/core/mvc/JSView", "sap/m/Panel", "sap/m/Button", "sap/m/Input", "sap/m/Text", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"], function (JSView, Panel, Button, Input, Text, MessageToast, JSONModel) {
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var HelloPanel = {
    state: {
      value: 0
    },
    init: function init() {
      /**
       * one way model
       * like react state
       */
      this.setModel(new JSONModel(this.state).setDefaultBindingMode("OneWay"));
    },
    setState: function setState(merge, fn) {
      var oModel = this.getModel();
      oModel.setData(merge, true);
      this.state = oModel.getData();

      if (fn) {
        fn();
      }
    },
    onShowHello: function onShowHello() {
      // read msg from i18n model
      var oBundle = this.getModel("i18n").getResourceBundle();
      var sRecipient = this.state.value;
      var sMsg = oBundle.getText("helloMsg", [sRecipient]); // show message

      MessageToast.show(sMsg);
    },
    onOpenDialog: function onOpenDialog() {
      this.oController.getOwnerComponent().openHelloDialog();
    },
    createContent: function createContent() {
      var _this = this;

      return new Panel({
        headerText: "{i18n>helloPanelTitle}",
        width: "auto",
        expandable: "{device>/system/phone}",
        expanded: "{= !${device>/system/phone} }",
        content: [new Button({
          icon: "sap-icon://world",
          text: "{i18n>openDialogButtonText}",
          press: function press() {
            _this.onOpenDialog();
          }
        }).addStyleClass("sapUiVisibleOnlyOnDesktop").addStyleClass("sapUiSmallMarginEnd"), new Button({
          text: "{i18n>showHelloButtonText}",
          press: function press() {
            _this.onShowHello();
          }
        }).addStyleClass("myCustomButton"), new Input({
          value: "{/value}",
          liveChange: function liveChange(_ref) {
            var newValue = _ref.mParameters.newValue;

            _this.setState({
              value: newValue
            });
          },
          valueLiveUpdate: true,
          width: "60%"
        }), new Text({
          text: "Hello {/value}"
        }).addStyleClass("myCustomText").addStyleClass("sapThemeHighlight-asColor").addStyleClass("sapUiSmallMargin")]
      }).addStyleClass("sapUiResponsiveMargin");
    },
    getControllerName: function getControllerName() {
      return "sap.ui.core.mvc.Controller";
    }
  };
  HelloPanel = sap.ui.jsview("fitst.views.HelloPanel", HelloPanel) || HelloPanel;
  _default = _extends(HelloPanel, _default);
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL0hlbGxvUGFuZWwudmlldy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsInZhbHVlIiwiaW5pdCIsInNldE1vZGVsIiwiSlNPTk1vZGVsIiwic2V0RGVmYXVsdEJpbmRpbmdNb2RlIiwic2V0U3RhdGUiLCJtZXJnZSIsImZuIiwib01vZGVsIiwiZ2V0TW9kZWwiLCJzZXREYXRhIiwiZ2V0RGF0YSIsIm9uU2hvd0hlbGxvIiwib0J1bmRsZSIsImdldFJlc291cmNlQnVuZGxlIiwic1JlY2lwaWVudCIsInNNc2ciLCJnZXRUZXh0IiwiTWVzc2FnZVRvYXN0Iiwic2hvdyIsIm9uT3BlbkRpYWxvZyIsIm9Db250cm9sbGVyIiwiZ2V0T3duZXJDb21wb25lbnQiLCJvcGVuSGVsbG9EaWFsb2ciLCJjcmVhdGVDb250ZW50IiwibmV3VmFsdWUiLCJtUGFyYW1ldGVycyIsIkhlbGxvUGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQWFFQSxJQUFBQSxLLEVBQVE7QUFDTkMsTUFBQUEsS0FBSyxFQUFFO0FBREQsSztBQUlSQyxJQUFBQSxJLGtCQUFPO0FBQ0w7Ozs7QUFJQSxXQUFLQyxRQUFMLENBQWMsSUFBSUMsU0FBSixDQUFjLEtBQUtKLEtBQW5CLEVBQTBCSyxxQkFBMUIsQ0FBZ0QsUUFBaEQsQ0FBZDtBQUNELEs7QUFLREMsSUFBQUEsUSxvQkFBU0MsSyxFQUFPQyxFLEVBQUk7QUFDbEIsVUFBTUMsTUFBTSxHQUFHLEtBQUtDLFFBQUwsRUFBZjtBQUNBRCxNQUFBQSxNQUFNLENBQUNFLE9BQVAsQ0FBZUosS0FBZixFQUFzQixJQUF0QjtBQUNBLFdBQUtQLEtBQUwsR0FBYVMsTUFBTSxDQUFDRyxPQUFQLEVBQWI7O0FBQ0EsVUFBSUosRUFBSixFQUFRO0FBQ05BLFFBQUFBLEVBQUU7QUFDSDtBQUNGLEs7QUFFREssSUFBQUEsVyx5QkFBYztBQUVaO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLEtBQUtKLFFBQUwsQ0FBYyxNQUFkLEVBQXNCSyxpQkFBdEIsRUFBZDtBQUNBLFVBQUlDLFVBQVUsR0FBRyxLQUFLaEIsS0FBTCxDQUFXQyxLQUE1QjtBQUNBLFVBQUlnQixJQUFJLEdBQUdILE9BQU8sQ0FBQ0ksT0FBUixDQUFnQixVQUFoQixFQUE0QixDQUFDRixVQUFELENBQTVCLENBQVgsQ0FMWSxDQU9aOztBQUNBRyxNQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JILElBQWxCO0FBQ0QsSztBQUVESSxJQUFBQSxZLDBCQUFlO0FBQ2IsV0FBS0MsV0FBTCxDQUFpQkMsaUJBQWpCLEdBQXFDQyxlQUFyQztBQUNELEs7QUFFREMsSUFBQUEsYSwyQkFBZ0I7QUFBQTs7QUFDZDtBQUFBLG9CQUVlLHdCQUZmO0FBQUEsZUFJVSxNQUpWO0FBQUEsb0JBS2Usd0JBTGY7QUFBQSxrQkFNYSwrQkFOYjtBQUFBO0FBQUEsZ0JBU1csa0JBVFg7QUFBQSxnQkFVVyw2QkFWWDtBQUFBLGlCQVdhLGlCQUFNO0FBQ1gsWUFBQSxLQUFJLENBQUNKLFlBQUw7QUFDRDtBQWJQO0FBQUEsZ0JBaUJXLDRCQWpCWDtBQUFBLGlCQWtCYSxpQkFBTTtBQUNYLFlBQUEsS0FBSSxDQUFDUixXQUFMO0FBQ0Q7QUFwQlA7QUFBQSxpQkF3QlksVUF4Qlo7QUFBQSxzQkF5QmtCLDBCQUFtQztBQUFBLGdCQUFqQmEsUUFBaUIsUUFBaENDLFdBQWdDLENBQWpCRCxRQUFpQjs7QUFDN0MsWUFBQSxLQUFJLENBQUNwQixRQUFMLENBQWM7QUFBRUwsY0FBQUEsS0FBSyxFQUFFeUI7QUFBVCxhQUFkO0FBQ0QsV0EzQlA7QUFBQSwyQkE0QnVCLElBNUJ2QjtBQUFBLGlCQTZCWTtBQTdCWjtBQUFBLGdCQWdDVztBQWhDWDtBQUFBO0FBc0NELEs7Ozs7OztzQkFuRmtCRSxVIiwic291cmNlUm9vdCI6Ii9zb3VyY2VtYXBzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTVmlldyBmcm9tIFwic2FwL3VpL2NvcmUvbXZjL0pTVmlld1wiO1xuaW1wb3J0IFBhbmVsIGZyb20gXCJzYXAvbS9QYW5lbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwic2FwL20vQnV0dG9uXCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcInNhcC9tL0lucHV0XCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwic2FwL20vVGV4dFwiO1xuaW1wb3J0IE1lc3NhZ2VUb2FzdCBmcm9tIFwic2FwL20vTWVzc2FnZVRvYXN0XCI7XG5pbXBvcnQgSlNPTk1vZGVsIGZyb20gXCJzYXAvdWkvbW9kZWwvanNvbi9KU09OTW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9QYW5lbCBleHRlbmRzIEpTVmlldyB7XG5cbiAgLyoqXG4gICAqIGluaXQgc3RhdGVcbiAgICovXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiAwXG4gIH07XG5cbiAgaW5pdCgpIHtcbiAgICAvKipcbiAgICAgKiBvbmUgd2F5IG1vZGVsXG4gICAgICogbGlrZSByZWFjdCBzdGF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2V0TW9kZWwobmV3IEpTT05Nb2RlbCh0aGlzLnN0YXRlKS5zZXREZWZhdWx0QmluZGluZ01vZGUoXCJPbmVXYXlcIikpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldFN0YXRlIGluIHJlYWN0LCB1cGRhdGUgbW9kZWxcbiAgICovXG4gIHNldFN0YXRlKG1lcmdlLCBmbikge1xuICAgIGNvbnN0IG9Nb2RlbCA9IHRoaXMuZ2V0TW9kZWwoKTtcbiAgICBvTW9kZWwuc2V0RGF0YShtZXJnZSwgdHJ1ZSk7XG4gICAgdGhpcy5zdGF0ZSA9IG9Nb2RlbC5nZXREYXRhKCk7XG4gICAgaWYgKGZuKSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2hvd0hlbGxvKCkge1xuXG4gICAgLy8gcmVhZCBtc2cgZnJvbSBpMThuIG1vZGVsXG4gICAgdmFyIG9CdW5kbGUgPSB0aGlzLmdldE1vZGVsKFwiaTE4blwiKS5nZXRSZXNvdXJjZUJ1bmRsZSgpO1xuICAgIHZhciBzUmVjaXBpZW50ID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB2YXIgc01zZyA9IG9CdW5kbGUuZ2V0VGV4dChcImhlbGxvTXNnXCIsIFtzUmVjaXBpZW50XSk7XG5cbiAgICAvLyBzaG93IG1lc3NhZ2VcbiAgICBNZXNzYWdlVG9hc3Quc2hvdyhzTXNnKTtcbiAgfVxuXG4gIG9uT3BlbkRpYWxvZygpIHtcbiAgICB0aGlzLm9Db250cm9sbGVyLmdldE93bmVyQ29tcG9uZW50KCkub3BlbkhlbGxvRGlhbG9nKCk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZWxcbiAgICAgICAgaGVhZGVyVGV4dD1cIntpMThuPmhlbGxvUGFuZWxUaXRsZX1cIlxuICAgICAgICBjbGFzcz1cInNhcFVpUmVzcG9uc2l2ZU1hcmdpblwiXG4gICAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICAgIGV4cGFuZGFibGU9XCJ7ZGV2aWNlPi9zeXN0ZW0vcGhvbmV9XCJcbiAgICAgICAgZXhwYW5kZWQ9XCJ7PSAhJHtkZXZpY2U+L3N5c3RlbS9waG9uZX0gfVwiXG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uPVwic2FwLWljb246Ly93b3JsZFwiXG4gICAgICAgICAgdGV4dD1cIntpMThuPm9wZW5EaWFsb2dCdXR0b25UZXh0fVwiXG4gICAgICAgICAgcHJlc3M9eygpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25PcGVuRGlhbG9nKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzcz1cInNhcFVpU21hbGxNYXJnaW5FbmQgc2FwVWlWaXNpYmxlT25seU9uRGVza3RvcFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0ZXh0PVwie2kxOG4+c2hvd0hlbGxvQnV0dG9uVGV4dH1cIlxuICAgICAgICAgIHByZXNzPXsoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU2hvd0hlbGxvKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBjbGFzcz1cIm15Q3VzdG9tQnV0dG9uXCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdmFsdWU9XCJ7L3ZhbHVlfVwiXG4gICAgICAgICAgbGl2ZUNoYW5nZT17KHsgbVBhcmFtZXRlcnM6IHsgbmV3VmFsdWUgfSB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWVMaXZlVXBkYXRlPXt0cnVlfVxuICAgICAgICAgIHdpZHRoPVwiNjAlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICB0ZXh0PVwiSGVsbG8gey92YWx1ZX1cIlxuICAgICAgICAgIGNsYXNzPVwic2FwVWlTbWFsbE1hcmdpbiBzYXBUaGVtZUhpZ2hsaWdodC1hc0NvbG9yIG15Q3VzdG9tVGV4dFwiXG4gICAgICAgIC8+XG4gICAgICA8L1BhbmVsPlxuICAgICk7XG5cbiAgfVxuXG59XG4iXSwiZmlsZSI6InZpZXdzL0hlbGxvUGFuZWwudmlldy5qcyJ9
