sap.ui.define("fitst/Component", ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device", "fitst/fragments/HelloDialog", "fitst/manifest"], function (UIComponent, JSONModel, Device, HelloDialog, manifest) {
  var createHelloDialog = HelloDialog.createHelloDialog;
  var manifest = manifest.manifest;
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var Component = UIComponent.extend("fitst.Component", {
    metadata: {
      manifest: manifest
    },
    init: function init() {
      UIComponent.prototype.init.apply(this, [this, arguments]); // set data model

      var oData = {
        recipient: {
          name: "World"
        }
      };
      var oModel = new JSONModel(oData);
      this.setModel(oModel); // set device model

      var oDeviceModel = new JSONModel(Device);
      oDeviceModel.setDefaultBindingMode("OneWay");
      this.setModel(oDeviceModel, "device"); // create the views based on the url/hash

      this.getRouter().initialize();
    },
    openHelloDialog: function openHelloDialog() {
      var _this = this;

      var oView = this.getAggregation("rootControl"); // create dialog lazily

      if (!this._dialog) {
        var oFragmentController = {
          onCloseDialog: function onCloseDialog() {
            _this._dialog.close();
          }
        }; // create dialog via fragment factory

        this._dialog = createHelloDialog(oFragmentController); // connect dialog to the root view of this component (models, lifecycle)

        oView.addDependent(this._dialog); // forward compact/cozy style into dialog

        jQuery.sap.syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, this._dialog);
      }

      this._dialog.open();
    },
    getContentDensityClass: function getContentDensityClass() {
      if (!this._sContentDensityClass) {
        if (!sap.ui.Device.support.touch) {
          this._sContentDensityClass = "sapUiSizeCompact";
        } else {
          this._sContentDensityClass = "sapUiSizeCozy";
        }
      }

      return this._sContentDensityClass;
    }
  });
  _default = _extends(Component, _default);
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVIZWxsb0RpYWxvZyIsIm1hbmlmZXN0IiwibWV0YWRhdGEiLCJpbml0IiwiYXJndW1lbnRzIiwib0RhdGEiLCJyZWNpcGllbnQiLCJuYW1lIiwib01vZGVsIiwiSlNPTk1vZGVsIiwic2V0TW9kZWwiLCJvRGV2aWNlTW9kZWwiLCJEZXZpY2UiLCJzZXREZWZhdWx0QmluZGluZ01vZGUiLCJnZXRSb3V0ZXIiLCJpbml0aWFsaXplIiwib3BlbkhlbGxvRGlhbG9nIiwib1ZpZXciLCJnZXRBZ2dyZWdhdGlvbiIsIl9kaWFsb2ciLCJvRnJhZ21lbnRDb250cm9sbGVyIiwib25DbG9zZURpYWxvZyIsImNsb3NlIiwiYWRkRGVwZW5kZW50IiwialF1ZXJ5Iiwic2FwIiwic3luY1N0eWxlQ2xhc3MiLCJnZXRDb250cm9sbGVyIiwiZ2V0T3duZXJDb21wb25lbnQiLCJnZXRDb250ZW50RGVuc2l0eUNsYXNzIiwib3BlbiIsIl9zQ29udGVudERlbnNpdHlDbGFzcyIsInVpIiwic3VwcG9ydCIsInRvdWNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiO01BR1NBLGlCLGVBQUFBLGlCO01BQ0FDLFEsWUFBQUEsUTs7Ozs7O0FBSVBDLElBQUFBLFEsRUFBVztBQUNURCxNQUFBQSxRQUFRLEVBQVJBO0FBRFMsSztBQUlYRSxJQUFBQSxJLGtCQUFPO0FBQ0wsOENBQVcsSUFBWCxFQUFpQkMsU0FBakIsR0FESyxDQUVMOztBQUNBLFVBQUlDLEtBQUssR0FBRztBQUNWQyxRQUFBQSxTQUFTLEVBQUU7QUFDVEMsVUFBQUEsSUFBSSxFQUFFO0FBREc7QUFERCxPQUFaO0FBS0EsVUFBSUMsTUFBTSxHQUFHLElBQUlDLFNBQUosQ0FBY0osS0FBZCxDQUFiO0FBQ0EsV0FBS0ssUUFBTCxDQUFjRixNQUFkLEVBVEssQ0FXTDs7QUFDQSxVQUFJRyxZQUFZLEdBQUcsSUFBSUYsU0FBSixDQUFjRyxNQUFkLENBQW5CO0FBQ0FELE1BQUFBLFlBQVksQ0FBQ0UscUJBQWIsQ0FBbUMsUUFBbkM7QUFDQSxXQUFLSCxRQUFMLENBQWNDLFlBQWQsRUFBNEIsUUFBNUIsRUFkSyxDQWdCTDs7QUFDQSxXQUFLRyxTQUFMLEdBQWlCQyxVQUFqQjtBQUVELEs7QUFFREMsSUFBQUEsZSw2QkFBa0I7QUFBQTs7QUFDaEIsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBZCxDQURnQixDQUVoQjs7QUFDQSxVQUFJLENBQUMsS0FBS0MsT0FBVixFQUFtQjtBQUNqQixZQUFJQyxtQkFBbUIsR0FBRztBQUN4QkMsVUFBQUEsYUFBYSxFQUFFLHlCQUFNO0FBQ25CLFlBQUEsS0FBSSxDQUFDRixPQUFMLENBQWFHLEtBQWI7QUFDRDtBQUh1QixTQUExQixDQURpQixDQU1qQjs7QUFDQSxhQUFLSCxPQUFMLEdBQWVuQixpQkFBaUIsQ0FBQ29CLG1CQUFELENBQWhDLENBUGlCLENBUWpCOztBQUNBSCxRQUFBQSxLQUFLLENBQUNNLFlBQU4sQ0FBbUIsS0FBS0osT0FBeEIsRUFUaUIsQ0FVakI7O0FBQ0FLLFFBQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxjQUFYLENBQTBCVCxLQUFLLENBQUNVLGFBQU4sR0FBc0JDLGlCQUF0QixHQUEwQ0Msc0JBQTFDLEVBQTFCLEVBQThGWixLQUE5RixFQUFxRyxLQUFLRSxPQUExRztBQUNEOztBQUNELFdBQUtBLE9BQUwsQ0FBYVcsSUFBYjtBQUNELEs7QUFFREQsSUFBQUEsc0Isb0NBQXlCO0FBQ3ZCLFVBQUksQ0FBQyxLQUFLRSxxQkFBVixFQUFpQztBQUMvQixZQUFJLENBQUNOLEdBQUcsQ0FBQ08sRUFBSixDQUFPcEIsTUFBUCxDQUFjcUIsT0FBZCxDQUFzQkMsS0FBM0IsRUFBa0M7QUFDaEMsZUFBS0gscUJBQUwsR0FBNkIsa0JBQTdCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsZUFBS0EscUJBQUwsR0FBNkIsZUFBN0I7QUFDRDtBQUNGOztBQUNELGFBQU8sS0FBS0EscUJBQVo7QUFDRDs7c0JBdkRrQkksUyIsInNvdXJjZVJvb3QiOiIvc291cmNlbWFwcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwic2FwL3VpL2NvcmUvVUlDb21wb25lbnRcIjtcbmltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiO1xuaW1wb3J0IERldmljZSBmcm9tIFwic2FwL3VpL0RldmljZVwiO1xuaW1wb3J0IHsgY3JlYXRlSGVsbG9EaWFsb2cgfSBmcm9tIFwiLi9mcmFnbWVudHMvSGVsbG9EaWFsb2dcIjtcbmltcG9ydCB7IG1hbmlmZXN0IH0gZnJvbSBcIi4vbWFuaWZlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gIG1ldGFkYXRhID0ge1xuICAgIG1hbmlmZXN0XG4gIH1cblxuICBpbml0KCkge1xuICAgIHN1cGVyLmluaXQodGhpcywgYXJndW1lbnRzKTtcbiAgICAvLyBzZXQgZGF0YSBtb2RlbFxuICAgIHZhciBvRGF0YSA9IHtcbiAgICAgIHJlY2lwaWVudDoge1xuICAgICAgICBuYW1lOiBcIldvcmxkXCJcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvTW9kZWwgPSBuZXcgSlNPTk1vZGVsKG9EYXRhKTtcbiAgICB0aGlzLnNldE1vZGVsKG9Nb2RlbCk7XG5cbiAgICAvLyBzZXQgZGV2aWNlIG1vZGVsXG4gICAgdmFyIG9EZXZpY2VNb2RlbCA9IG5ldyBKU09OTW9kZWwoRGV2aWNlKTtcbiAgICBvRGV2aWNlTW9kZWwuc2V0RGVmYXVsdEJpbmRpbmdNb2RlKFwiT25lV2F5XCIpO1xuICAgIHRoaXMuc2V0TW9kZWwob0RldmljZU1vZGVsLCBcImRldmljZVwiKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgdmlld3MgYmFzZWQgb24gdGhlIHVybC9oYXNoXG4gICAgdGhpcy5nZXRSb3V0ZXIoKS5pbml0aWFsaXplKCk7XG5cbiAgfVxuXG4gIG9wZW5IZWxsb0RpYWxvZygpIHtcbiAgICBjb25zdCBvVmlldyA9IHRoaXMuZ2V0QWdncmVnYXRpb24oXCJyb290Q29udHJvbFwiKTtcbiAgICAvLyBjcmVhdGUgZGlhbG9nIGxhemlseVxuICAgIGlmICghdGhpcy5fZGlhbG9nKSB7XG4gICAgICB2YXIgb0ZyYWdtZW50Q29udHJvbGxlciA9IHtcbiAgICAgICAgb25DbG9zZURpYWxvZzogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2RpYWxvZy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgLy8gY3JlYXRlIGRpYWxvZyB2aWEgZnJhZ21lbnQgZmFjdG9yeVxuICAgICAgdGhpcy5fZGlhbG9nID0gY3JlYXRlSGVsbG9EaWFsb2cob0ZyYWdtZW50Q29udHJvbGxlcik7XG4gICAgICAvLyBjb25uZWN0IGRpYWxvZyB0byB0aGUgcm9vdCB2aWV3IG9mIHRoaXMgY29tcG9uZW50IChtb2RlbHMsIGxpZmVjeWNsZSlcbiAgICAgIG9WaWV3LmFkZERlcGVuZGVudCh0aGlzLl9kaWFsb2cpO1xuICAgICAgLy8gZm9yd2FyZCBjb21wYWN0L2Nvenkgc3R5bGUgaW50byBkaWFsb2dcbiAgICAgIGpRdWVyeS5zYXAuc3luY1N0eWxlQ2xhc3Mob1ZpZXcuZ2V0Q29udHJvbGxlcigpLmdldE93bmVyQ29tcG9uZW50KCkuZ2V0Q29udGVudERlbnNpdHlDbGFzcygpLCBvVmlldywgdGhpcy5fZGlhbG9nKTtcbiAgICB9XG4gICAgdGhpcy5fZGlhbG9nLm9wZW4oKTtcbiAgfVxuXG4gIGdldENvbnRlbnREZW5zaXR5Q2xhc3MoKSB7XG4gICAgaWYgKCF0aGlzLl9zQ29udGVudERlbnNpdHlDbGFzcykge1xuICAgICAgaWYgKCFzYXAudWkuRGV2aWNlLnN1cHBvcnQudG91Y2gpIHtcbiAgICAgICAgdGhpcy5fc0NvbnRlbnREZW5zaXR5Q2xhc3MgPSBcInNhcFVpU2l6ZUNvbXBhY3RcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NDb250ZW50RGVuc2l0eUNsYXNzID0gXCJzYXBVaVNpemVDb3p5XCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zQ29udGVudERlbnNpdHlDbGFzcztcbiAgfVxuXG59Il0sImZpbGUiOiJDb21wb25lbnQuanMifQ==
