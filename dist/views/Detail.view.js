sap.ui.define("fitst/views/Detail", ["sap/ui/core/mvc/JSView", "sap/m/Page", "sap/m/ObjectHeader", "sap/m/ObjectAttribute", "fitst/control/ProductRating", "sap/ui/core/routing/History", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"], function (JSView, Page, ObjectHeader, ObjectAttribute, ProductRating, History, MessageToast, JSONModel) {
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var Detail = {
    _onObjectMatched: function _onObjectMatched(oEvent) {
      this.bindElement({
        path: "/" + oEvent.getParameter("arguments").invoicePath,
        model: "invoice"
      });
    },
    onNavBack: function onNavBack() {
      var oHistory = History.getInstance();
      var sPreviousHash = oHistory.getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.go(-1);
      } else {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("overview", {}, true);
      }
    },
    onRatingChange: function onRatingChange(oEvent) {
      var fValue = oEvent.getParameter("value");
      var oResourceBundle = this.getModel("i18n").getResourceBundle();
      MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
    },
    createContent: function createContent() {
      var oViewModel = new JSONModel({
        currency: "EUR"
      });
      this.setModel(oViewModel, "view");
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched.bind(this), this);
      return new Page({
        title: "{i18n>detailPageTitle}",
        showNavButton: true,
        navButtonPress: this.onNavBack.bind(this),
        content: [new ObjectHeader({
          responsive: true,
          fullScreenOptimized: true,
          number: {
            parts: [{
              path: "invoice>ExtendedPrice"
            }, {
              path: "view>/currency"
            }],
            type: "sap.ui.model.type.Currency",
            formatOptions: {
              showMeasure: false
            }
          },
          numberUnit: "{view>/currency}",
          intro: "{invoice>ShipperName}",
          title: "{invoice>ProductName}",
          attributes: [new ObjectAttribute({
            title: "{i18n>quantityTitle}",
            text: "{invoice>Quantity}"
          }), new ObjectAttribute({
            title: "{i18n>dateTitle}",
            text: {
              path: "invoice>ShippedDate",
              type: "sap.ui.model.type.Date",
              formatOptions: {
                style: "long",
                source: {
                  pattern: "yyyy-MM-ddTHH:mm:ss"
                }
              }
            }
          })]
        }), new ProductRating({
          change: this.onRatingChange.bind(this)
        }).addStyleClass("sapUiSmallMarginBeginEnd")]
      });
    },
    getControllerName: function getControllerName() {
      return "sap.ui.core.mvc.Controller";
    }
  };
  Detail = sap.ui.jsview("fitst.views.Detail", Detail) || Detail;
  _default = _extends(Detail, _default);
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL0RldGFpbC52aWV3LmpzIl0sIm5hbWVzIjpbIl9vbk9iamVjdE1hdGNoZWQiLCJvRXZlbnQiLCJiaW5kRWxlbWVudCIsInBhdGgiLCJnZXRQYXJhbWV0ZXIiLCJpbnZvaWNlUGF0aCIsIm1vZGVsIiwib25OYXZCYWNrIiwib0hpc3RvcnkiLCJIaXN0b3J5IiwiZ2V0SW5zdGFuY2UiLCJzUHJldmlvdXNIYXNoIiwiZ2V0UHJldmlvdXNIYXNoIiwidW5kZWZpbmVkIiwid2luZG93IiwiaGlzdG9yeSIsImdvIiwib1JvdXRlciIsInNhcCIsInVpIiwiY29yZSIsIlVJQ29tcG9uZW50IiwiZ2V0Um91dGVyRm9yIiwibmF2VG8iLCJvblJhdGluZ0NoYW5nZSIsImZWYWx1ZSIsIm9SZXNvdXJjZUJ1bmRsZSIsImdldE1vZGVsIiwiZ2V0UmVzb3VyY2VCdW5kbGUiLCJNZXNzYWdlVG9hc3QiLCJzaG93IiwiZ2V0VGV4dCIsImNyZWF0ZUNvbnRlbnQiLCJvVmlld01vZGVsIiwiSlNPTk1vZGVsIiwiY3VycmVuY3kiLCJzZXRNb2RlbCIsImdldFJvdXRlIiwiYXR0YWNoUGF0dGVybk1hdGNoZWQiLCJiaW5kIiwicGFydHMiLCJ0eXBlIiwiZm9ybWF0T3B0aW9ucyIsInNob3dNZWFzdXJlIiwic3R5bGUiLCJzb3VyY2UiLCJwYXR0ZXJuIiwiRGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFhRUEsSUFBQUEsZ0IsNEJBQWlCQyxNLEVBQVE7QUFDdkIsV0FBS0MsV0FBTCxDQUFpQjtBQUNmQyxRQUFBQSxJQUFJLEVBQUUsTUFBTUYsTUFBTSxDQUFDRyxZQUFQLENBQW9CLFdBQXBCLEVBQWlDQyxXQUQ5QjtBQUVmQyxRQUFBQSxLQUFLLEVBQUU7QUFGUSxPQUFqQjtBQUlELEs7QUFFREMsSUFBQUEsUyx1QkFBWTtBQUNWLFVBQUlDLFFBQVEsR0FBR0MsT0FBTyxDQUFDQyxXQUFSLEVBQWY7QUFDQSxVQUFJQyxhQUFhLEdBQUdILFFBQVEsQ0FBQ0ksZUFBVCxFQUFwQjs7QUFFQSxVQUFJRCxhQUFhLEtBQUtFLFNBQXRCLEVBQWlDO0FBQy9CQyxRQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsRUFBZixDQUFrQixDQUFDLENBQW5CO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSUMsT0FBTyxHQUFHQyxHQUFHLENBQUNDLEVBQUosQ0FBT0MsSUFBUCxDQUFZQyxXQUFaLENBQXdCQyxZQUF4QixDQUFxQyxJQUFyQyxDQUFkO0FBQ0FMLFFBQUFBLE9BQU8sQ0FBQ00sS0FBUixDQUFjLFVBQWQsRUFBMEIsRUFBMUIsRUFBOEIsSUFBOUI7QUFDRDtBQUNGLEs7QUFFREMsSUFBQUEsYywwQkFBZXZCLE0sRUFBUTtBQUNyQixVQUFJd0IsTUFBTSxHQUFHeEIsTUFBTSxDQUFDRyxZQUFQLENBQW9CLE9BQXBCLENBQWI7QUFDQSxVQUFJc0IsZUFBZSxHQUFHLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLEVBQXNCQyxpQkFBdEIsRUFBdEI7QUFFQUMsTUFBQUEsWUFBWSxDQUFDQyxJQUFiLENBQWtCSixlQUFlLENBQUNLLE9BQWhCLENBQXdCLG9CQUF4QixFQUE4QyxDQUFDTixNQUFELENBQTlDLENBQWxCO0FBQ0QsSztBQUVETyxJQUFBQSxhLDJCQUFnQjtBQUVkLFVBQUlDLFVBQVUsR0FBRyxJQUFJQyxTQUFKLENBQWM7QUFBRUMsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FBZCxDQUFqQjtBQUNBLFdBQUtDLFFBQUwsQ0FBY0gsVUFBZCxFQUEwQixNQUExQjtBQUVBLFVBQUloQixPQUFPLEdBQUdDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPQyxJQUFQLENBQVlDLFdBQVosQ0FBd0JDLFlBQXhCLENBQXFDLElBQXJDLENBQWQ7QUFDQUwsTUFBQUEsT0FBTyxDQUFDb0IsUUFBUixDQUFpQixRQUFqQixFQUEyQkMsb0JBQTNCLENBQWdELEtBQUt0QyxnQkFBTCxDQUFzQnVDLElBQXRCLENBQTJCLElBQTNCLENBQWhELEVBQWtGLElBQWxGO0FBRUE7QUFBQSxlQUVVLHdCQUZWO0FBQUEsdUJBR21CLElBSG5CO0FBQUEsd0JBSW9CLEtBQUtoQyxTQUFMLENBQWVnQyxJQUFmLENBQW9CLElBQXBCLENBSnBCO0FBQUE7QUFBQSxzQkFPa0IsSUFQbEI7QUFBQSwrQkFRMkIsSUFSM0I7QUFBQSxrQkFTYztBQUNOQyxZQUFBQSxLQUFLLEVBQUUsQ0FDTDtBQUFFckMsY0FBQUEsSUFBSSxFQUFFO0FBQVIsYUFESyxFQUVMO0FBQUVBLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBRkssQ0FERDtBQUtOc0MsWUFBQUEsSUFBSSxFQUFFLDRCQUxBO0FBTU5DLFlBQUFBLGFBQWEsRUFBRTtBQUNiQyxjQUFBQSxXQUFXLEVBQUU7QUFEQTtBQU5ULFdBVGQ7QUFBQSxzQkFtQmlCLGtCQW5CakI7QUFBQSxpQkFvQlksdUJBcEJaO0FBQUEsaUJBcUJZLHVCQXJCWjtBQUFBLHNCQXNCa0I7QUFBQSxtQkFFRixzQkFGRTtBQUFBLGtCQUdIO0FBSEc7QUFBQSxtQkFNRixrQkFORTtBQUFBLGtCQU9GO0FBQ0p4QyxjQUFBQSxJQUFJLEVBQUUscUJBREY7QUFFSnNDLGNBQUFBLElBQUksRUFBRSx3QkFGRjtBQUdKQyxjQUFBQSxhQUFhLEVBQUU7QUFDYkUsZ0JBQUFBLEtBQUssRUFBRSxNQURNO0FBRWJDLGdCQUFBQSxNQUFNLEVBQUU7QUFDTkMsa0JBQUFBLE9BQU8sRUFBRTtBQURIO0FBRks7QUFIWDtBQVBFO0FBdEJsQjtBQUFBLGtCQTRDYyxLQUFLdEIsY0FBTCxDQUFvQmUsSUFBcEIsQ0FBeUIsSUFBekI7QUE1Q2Q7QUFBQTtBQWdERCxLOzs7Ozs7c0JBckZrQlEsTSIsInNvdXJjZVJvb3QiOiIvc291cmNlbWFwcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU1ZpZXcgZnJvbSBcInNhcC91aS9jb3JlL212Yy9KU1ZpZXdcIjtcbmltcG9ydCBQYWdlIGZyb20gXCJzYXAvbS9QYWdlXCI7XG5pbXBvcnQgT2JqZWN0SGVhZGVyIGZyb20gXCJzYXAvbS9PYmplY3RIZWFkZXJcIjtcbmltcG9ydCBPYmplY3RBdHRyaWJ1dGUgZnJvbSBcInNhcC9tL09iamVjdEF0dHJpYnV0ZVwiO1xuaW1wb3J0IFByb2R1Y3RSYXRpbmcgZnJvbSBcIi4uL2NvbnRyb2wvUHJvZHVjdFJhdGluZ1wiO1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tIFwic2FwL3VpL2NvcmUvcm91dGluZy9IaXN0b3J5XCI7XG5pbXBvcnQgTWVzc2FnZVRvYXN0IGZyb20gXCJzYXAvbS9NZXNzYWdlVG9hc3RcIjtcbmltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXRhaWwgZXh0ZW5kcyBKU1ZpZXcge1xuXG5cbiAgX29uT2JqZWN0TWF0Y2hlZChvRXZlbnQpIHtcbiAgICB0aGlzLmJpbmRFbGVtZW50KHtcbiAgICAgIHBhdGg6IFwiL1wiICsgb0V2ZW50LmdldFBhcmFtZXRlcihcImFyZ3VtZW50c1wiKS5pbnZvaWNlUGF0aCxcbiAgICAgIG1vZGVsOiBcImludm9pY2VcIlxuICAgIH0pO1xuICB9XG5cbiAgb25OYXZCYWNrKCkge1xuICAgIHZhciBvSGlzdG9yeSA9IEhpc3RvcnkuZ2V0SW5zdGFuY2UoKTtcbiAgICB2YXIgc1ByZXZpb3VzSGFzaCA9IG9IaXN0b3J5LmdldFByZXZpb3VzSGFzaCgpO1xuXG4gICAgaWYgKHNQcmV2aW91c0hhc2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgd2luZG93Lmhpc3RvcnkuZ28oLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb1JvdXRlciA9IHNhcC51aS5jb3JlLlVJQ29tcG9uZW50LmdldFJvdXRlckZvcih0aGlzKTtcbiAgICAgIG9Sb3V0ZXIubmF2VG8oXCJvdmVydmlld1wiLCB7fSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25SYXRpbmdDaGFuZ2Uob0V2ZW50KSB7XG4gICAgdmFyIGZWYWx1ZSA9IG9FdmVudC5nZXRQYXJhbWV0ZXIoXCJ2YWx1ZVwiKTtcbiAgICB2YXIgb1Jlc291cmNlQnVuZGxlID0gdGhpcy5nZXRNb2RlbChcImkxOG5cIikuZ2V0UmVzb3VyY2VCdW5kbGUoKTtcblxuICAgIE1lc3NhZ2VUb2FzdC5zaG93KG9SZXNvdXJjZUJ1bmRsZS5nZXRUZXh0KFwicmF0aW5nQ29uZmlybWF0aW9uXCIsIFtmVmFsdWVdKSk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuXG4gICAgdmFyIG9WaWV3TW9kZWwgPSBuZXcgSlNPTk1vZGVsKHsgY3VycmVuY3k6IFwiRVVSXCJ9KTtcbiAgICB0aGlzLnNldE1vZGVsKG9WaWV3TW9kZWwsIFwidmlld1wiKTtcblxuICAgIHZhciBvUm91dGVyID0gc2FwLnVpLmNvcmUuVUlDb21wb25lbnQuZ2V0Um91dGVyRm9yKHRoaXMpO1xuICAgIG9Sb3V0ZXIuZ2V0Um91dGUoXCJkZXRhaWxcIikuYXR0YWNoUGF0dGVybk1hdGNoZWQodGhpcy5fb25PYmplY3RNYXRjaGVkLmJpbmQodGhpcyksIHRoaXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlXG4gICAgICAgIHRpdGxlPVwie2kxOG4+ZGV0YWlsUGFnZVRpdGxlfVwiXG4gICAgICAgIHNob3dOYXZCdXR0b249e3RydWV9XG4gICAgICAgIG5hdkJ1dHRvblByZXNzPXt0aGlzLm9uTmF2QmFjay5iaW5kKHRoaXMpfVxuICAgICAgPlxuICAgICAgICA8T2JqZWN0SGVhZGVyXG4gICAgICAgICAgcmVzcG9uc2l2ZT17dHJ1ZX1cbiAgICAgICAgICBmdWxsU2NyZWVuT3B0aW1pemVkPXt0cnVlfVxuICAgICAgICAgIG51bWJlcj17e1xuICAgICAgICAgICAgcGFydHM6IFtcbiAgICAgICAgICAgICAgeyBwYXRoOiBcImludm9pY2U+RXh0ZW5kZWRQcmljZVwiIH0sXG4gICAgICAgICAgICAgIHsgcGF0aDogXCJ2aWV3Pi9jdXJyZW5jeVwiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0eXBlOiBcInNhcC51aS5tb2RlbC50eXBlLkN1cnJlbmN5XCIsXG4gICAgICAgICAgICBmb3JtYXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgIHNob3dNZWFzdXJlOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgbnVtYmVyVW5pdD1cInt2aWV3Pi9jdXJyZW5jeX1cIlxuICAgICAgICAgIGludHJvPVwie2ludm9pY2U+U2hpcHBlck5hbWV9XCJcbiAgICAgICAgICB0aXRsZT1cIntpbnZvaWNlPlByb2R1Y3ROYW1lfVwiXG4gICAgICAgICAgYXR0cmlidXRlcz17W1xuICAgICAgICAgICAgPE9iamVjdEF0dHJpYnV0ZVxuICAgICAgICAgICAgICB0aXRsZT1cIntpMThuPnF1YW50aXR5VGl0bGV9XCJcbiAgICAgICAgICAgICAgdGV4dD1cIntpbnZvaWNlPlF1YW50aXR5fVwiXG4gICAgICAgICAgICAvPixcbiAgICAgICAgICAgIDxPYmplY3RBdHRyaWJ1dGVcbiAgICAgICAgICAgICAgdGl0bGU9XCJ7aTE4bj5kYXRlVGl0bGV9XCJcbiAgICAgICAgICAgICAgdGV4dD17e1xuICAgICAgICAgICAgICAgIHBhdGg6IFwiaW52b2ljZT5TaGlwcGVkRGF0ZVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic2FwLnVpLm1vZGVsLnR5cGUuRGF0ZVwiLFxuICAgICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImxvbmdcIixcbiAgICAgICAgICAgICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcInl5eXktTU0tZGRUSEg6bW06c3NcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgXX1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2R1Y3RSYXRpbmdcbiAgICAgICAgICBjbGFzcz1cInNhcFVpU21hbGxNYXJnaW5CZWdpbkVuZFwiXG4gICAgICAgICAgY2hhbmdlPXt0aGlzLm9uUmF0aW5nQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L1BhZ2U+XG4gICAgKTtcbiAgfVxuXG59XG4iXSwiZmlsZSI6InZpZXdzL0RldGFpbC52aWV3LmpzIn0=
