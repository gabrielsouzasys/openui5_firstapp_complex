sap.ui.define("fitst/control/ProductRating", ["sap/ui/core/Control", "sap/m/RatingIndicator", "sap/m/Label", "sap/m/Button", "sap/ui/core/InvisibleText"], function (Control, RatingIndicator, Label, Button, InvisibleText) {
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var ProductRating = Control.extend("fitst.control.ProductRating", {
    metadata: {
      properties: {
        value: {
          type: "float",
          defaultValue: 0
        }
      },
      aggregations: {
        _rating: {
          type: "sap.m.RatingIndicator",
          multiple: false,
          visibility: "hidden"
        },
        _label: {
          type: "sap.m.Label",
          multiple: false,
          visibility: "hidden"
        },
        _button: {
          type: "sap.m.Button",
          multiple: false,
          visibility: "hidden"
        },
        _invText1: {
          type: "sap.ui.core.InvisibleText",
          multiple: false,
          visibility: "hidden"
        },
        _invText2: {
          type: "sap.ui.core.InvisibleText",
          multiple: false,
          visibility: "hidden"
        },
        _invText3: {
          type: "sap.ui.core.InvisibleText",
          multiple: false,
          visibility: "hidden"
        },
        _invText4: {
          type: "sap.ui.core.InvisibleText",
          multiple: false,
          visibility: "hidden"
        }
      },
      events: {
        change: {
          parameters: {
            value: {
              type: "int"
            }
          }
        }
      }
    },
    init: function init() {
      var invText1 = new InvisibleText({
        text: "{i18n>ratingIndicatorLabel}"
      });
      var invText2 = new InvisibleText({
        text: "{i18n>ratingIndicatorDescription}"
      });
      var invText3 = new InvisibleText({
        text: "{i18n>rateButtonLabel}"
      });
      var invText4 = new InvisibleText({
        text: "{i18n>rateButtonDescription}"
      });
      this.setAggregation("_invText1", invText1);
      this.setAggregation("_invText2", invText2);
      this.setAggregation("_invText3", invText3);
      this.setAggregation("_invText4", invText4);
      this.setAggregation("_rating", new RatingIndicator({
        value: this.getValue(),
        iconSize: "2rem",
        visualMode: "Half",
        liveChange: this._onRate.bind(this),
        ariaLabelledBy: invText1,
        ariaDescribedBy: invText2
      }));
      this.setAggregation("_label", new Label({
        text: "{i18n>productRatingLabelInitial}"
      }).addStyleClass("sapUiSmallMargin"));
      this.setAggregation("_button", new Button({
        text: "{i18n>productRatingButton}",
        press: this._onSubmit.bind(this),
        ariaLabelledBy: invText3,
        ariaDescribedBy: invText4
      }).addStyleClass("sapUiTinyMarginTopBottom"));
    },
    setValue: function setValue(fValue) {
      this.setProperty("value", fValue, true);
      this.getAggregation("_rating").setValue(fValue);
    },
    reset: function reset() {
      var oResourceBundle = this.getModel("i18n").getResourceBundle();
      this.setValue(0);
      this.getAggregation("_label").setDesign("Standard");
      this.getAggregation("_rating").setEnabled(true);
      this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
      this.getAggregation("_button").setEnabled(true);
    },
    _onRate: function _onRate(oEvent) {
      var oRessourceBundle = this.getModel("i18n").getResourceBundle();
      var fValue = oEvent.getParameter("value");
      this.setProperty("value", fValue, true);
      this.getAggregation("_label").setText(oRessourceBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
      this.getAggregation("_label").setDesign("Bold");
    },
    _onSubmit: function _onSubmit(oEvent) {
      var oResourceBundle = this.getModel("i18n").getResourceBundle();
      this.getAggregation("_rating").setEnabled(false);
      this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
      this.getAggregation("_button").setEnabled(false);
      this.fireEvent("change", {
        value: this.getValue()
      });
    },
    renderer: function renderer(oRM, oControl) {
      oRM.write("<div");
      oRM.writeControlData(oControl);
      oRM.addClass("myAppDemoWTProductRating");
      oRM.writeClasses();
      oRM.write(">");
      oRM.renderControl(oControl.getAggregation("_rating"));
      oRM.renderControl(oControl.getAggregation("_label"));
      oRM.renderControl(oControl.getAggregation("_button"));
      oRM.renderControl(oControl.getAggregation("_invText1"));
      oRM.renderControl(oControl.getAggregation("_invText2"));
      oRM.renderControl(oControl.getAggregation("_invText3"));
      oRM.renderControl(oControl.getAggregation("_invText4"));
      oRM.write("</div>");
    }
  });
  _default = _extends(ProductRating, _default);
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wvUHJvZHVjdFJhdGluZy5qcyJdLCJuYW1lcyI6WyJtZXRhZGF0YSIsInByb3BlcnRpZXMiLCJ2YWx1ZSIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJhZ2dyZWdhdGlvbnMiLCJfcmF0aW5nIiwibXVsdGlwbGUiLCJ2aXNpYmlsaXR5IiwiX2xhYmVsIiwiX2J1dHRvbiIsIl9pbnZUZXh0MSIsIl9pbnZUZXh0MiIsIl9pbnZUZXh0MyIsIl9pbnZUZXh0NCIsImV2ZW50cyIsImNoYW5nZSIsInBhcmFtZXRlcnMiLCJpbml0IiwiaW52VGV4dDEiLCJpbnZUZXh0MiIsImludlRleHQzIiwiaW52VGV4dDQiLCJzZXRBZ2dyZWdhdGlvbiIsImdldFZhbHVlIiwiX29uUmF0ZSIsImJpbmQiLCJfb25TdWJtaXQiLCJzZXRWYWx1ZSIsImZWYWx1ZSIsInNldFByb3BlcnR5IiwiZ2V0QWdncmVnYXRpb24iLCJyZXNldCIsIm9SZXNvdXJjZUJ1bmRsZSIsImdldE1vZGVsIiwiZ2V0UmVzb3VyY2VCdW5kbGUiLCJzZXREZXNpZ24iLCJzZXRFbmFibGVkIiwic2V0VGV4dCIsImdldFRleHQiLCJvRXZlbnQiLCJvUmVzc291cmNlQnVuZGxlIiwiZ2V0UGFyYW1ldGVyIiwiZ2V0U291cmNlIiwiZ2V0TWF4VmFsdWUiLCJmaXJlRXZlbnQiLCJyZW5kZXJlciIsIm9STSIsIm9Db250cm9sIiwid3JpdGUiLCJ3cml0ZUNvbnRyb2xEYXRhIiwiYWRkQ2xhc3MiLCJ3cml0ZUNsYXNzZXMiLCJyZW5kZXJDb250cm9sIiwiUHJvZHVjdFJhdGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBUUVBLElBQUFBLFEsRUFBVztBQUNUQyxNQUFBQSxVQUFVLEVBQUU7QUFDVkMsUUFBQUEsS0FBSyxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCQyxVQUFBQSxZQUFZLEVBQUU7QUFBL0I7QUFERyxPQURIO0FBSVRDLE1BQUFBLFlBQVksRUFBRTtBQUNaQyxRQUFBQSxP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QjtBQUNBZ0IsTUFBQUEsR0FBRyxDQUFDRSxLQUFKLENBQVUsUUFBVjtBQUNEOztzQkFqSGtCSyxhIiwic291cmNlUm9vdCI6Ii9zb3VyY2VtYXBzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2wgZnJvbSBcInNhcC91aS9jb3JlL0NvbnRyb2xcIjtcbmltcG9ydCBSYXRpbmdJbmRpY2F0b3IgZnJvbSBcInNhcC9tL1JhdGluZ0luZGljYXRvclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJzYXAvbS9MYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwic2FwL20vQnV0dG9uXCI7XG5pbXBvcnQgSW52aXNpYmxlVGV4dCBmcm9tIFwic2FwL3VpL2NvcmUvSW52aXNpYmxlVGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0UmF0aW5nIGV4dGVuZHMgQ29udHJvbCB7XG5cbiAgbWV0YWRhdGEgPSB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgdmFsdWU6IHsgdHlwZTogXCJmbG9hdFwiLCBkZWZhdWx0VmFsdWU6IDAgfVxuICAgIH0sXG4gICAgYWdncmVnYXRpb25zOiB7XG4gICAgICBfcmF0aW5nOiB7IHR5cGU6IFwic2FwLm0uUmF0aW5nSW5kaWNhdG9yXCIsIG11bHRpcGxlOiBmYWxzZSwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9LFxuICAgICAgX2xhYmVsOiB7IHR5cGU6IFwic2FwLm0uTGFiZWxcIiwgbXVsdGlwbGU6IGZhbHNlLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiIH0sXG4gICAgICBfYnV0dG9uOiB7IHR5cGU6IFwic2FwLm0uQnV0dG9uXCIsIG11bHRpcGxlOiBmYWxzZSwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9LFxuICAgICAgX2ludlRleHQxOiB7IHR5cGU6IFwic2FwLnVpLmNvcmUuSW52aXNpYmxlVGV4dFwiLCBtdWx0aXBsZTogZmFsc2UsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIgfSxcbiAgICAgIF9pbnZUZXh0MjogeyB0eXBlOiBcInNhcC51aS5jb3JlLkludmlzaWJsZVRleHRcIiwgbXVsdGlwbGU6IGZhbHNlLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiIH0sXG4gICAgICBfaW52VGV4dDM6IHsgdHlwZTogXCJzYXAudWkuY29yZS5JbnZpc2libGVUZXh0XCIsIG11bHRpcGxlOiBmYWxzZSwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiB9LFxuICAgICAgX2ludlRleHQ0OiB7IHR5cGU6IFwic2FwLnVpLmNvcmUuSW52aXNpYmxlVGV4dFwiLCBtdWx0aXBsZTogZmFsc2UsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIgfVxuICAgIH0sXG4gICAgZXZlbnRzOiB7XG4gICAgICBjaGFuZ2U6IHtcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIHZhbHVlOiB7IHR5cGU6IFwiaW50XCIgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB2YXIgaW52VGV4dDEgPSA8SW52aXNpYmxlVGV4dCB0ZXh0PVwie2kxOG4+cmF0aW5nSW5kaWNhdG9yTGFiZWx9XCIgLz47XG4gICAgdmFyIGludlRleHQyID0gPEludmlzaWJsZVRleHQgdGV4dD1cIntpMThuPnJhdGluZ0luZGljYXRvckRlc2NyaXB0aW9ufVwiIC8+O1xuICAgIHZhciBpbnZUZXh0MyA9IDxJbnZpc2libGVUZXh0IHRleHQ9XCJ7aTE4bj5yYXRlQnV0dG9uTGFiZWx9XCIgLz47XG4gICAgdmFyIGludlRleHQ0ID0gPEludmlzaWJsZVRleHQgdGV4dD1cIntpMThuPnJhdGVCdXR0b25EZXNjcmlwdGlvbn1cIiAvPjtcblxuICAgIHRoaXMuc2V0QWdncmVnYXRpb24oXCJfaW52VGV4dDFcIiwgaW52VGV4dDEpO1xuICAgIHRoaXMuc2V0QWdncmVnYXRpb24oXCJfaW52VGV4dDJcIiwgaW52VGV4dDIpO1xuICAgIHRoaXMuc2V0QWdncmVnYXRpb24oXCJfaW52VGV4dDNcIiwgaW52VGV4dDMpO1xuICAgIHRoaXMuc2V0QWdncmVnYXRpb24oXCJfaW52VGV4dDRcIiwgaW52VGV4dDQpO1xuXG4gICAgdGhpcy5zZXRBZ2dyZWdhdGlvbihcbiAgICAgIFwiX3JhdGluZ1wiLFxuICAgICAgPFJhdGluZ0luZGljYXRvclxuICAgICAgICB2YWx1ZT17dGhpcy5nZXRWYWx1ZSgpfVxuICAgICAgICBpY29uU2l6ZT1cIjJyZW1cIlxuICAgICAgICB2aXN1YWxNb2RlPVwiSGFsZlwiXG4gICAgICAgIGxpdmVDaGFuZ2U9e3RoaXMuX29uUmF0ZS5iaW5kKHRoaXMpfVxuICAgICAgICBhcmlhTGFiZWxsZWRCeT17aW52VGV4dDF9XG4gICAgICAgIGFyaWFEZXNjcmliZWRCeT17aW52VGV4dDJ9XG4gICAgICAvPlxuICAgICk7XG5cbiAgICB0aGlzLnNldEFnZ3JlZ2F0aW9uKFxuICAgICAgXCJfbGFiZWxcIixcbiAgICAgIDxMYWJlbCB0ZXh0PVwie2kxOG4+cHJvZHVjdFJhdGluZ0xhYmVsSW5pdGlhbH1cIiBjbGFzcz1cInNhcFVpU21hbGxNYXJnaW5cIiAvPlxuICAgICk7XG4gICAgdGhpcy5zZXRBZ2dyZWdhdGlvbihcbiAgICAgIFwiX2J1dHRvblwiLFxuICAgICAgPEJ1dHRvblxuICAgICAgICB0ZXh0PVwie2kxOG4+cHJvZHVjdFJhdGluZ0J1dHRvbn1cIlxuICAgICAgICBwcmVzcz17dGhpcy5fb25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgYXJpYUxhYmVsbGVkQnk9e2ludlRleHQzfVxuICAgICAgICBhcmlhRGVzY3JpYmVkQnk9e2ludlRleHQ0fVxuICAgICAgICBjbGFzcz1cInNhcFVpVGlueU1hcmdpblRvcEJvdHRvbVwiXG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBzZXRWYWx1ZShmVmFsdWUpIHtcbiAgICB0aGlzLnNldFByb3BlcnR5KFwidmFsdWVcIiwgZlZhbHVlLCB0cnVlKTtcbiAgICB0aGlzLmdldEFnZ3JlZ2F0aW9uKFwiX3JhdGluZ1wiKS5zZXRWYWx1ZShmVmFsdWUpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdmFyIG9SZXNvdXJjZUJ1bmRsZSA9IHRoaXMuZ2V0TW9kZWwoXCJpMThuXCIpLmdldFJlc291cmNlQnVuZGxlKCk7XG5cbiAgICB0aGlzLnNldFZhbHVlKDApO1xuICAgIHRoaXMuZ2V0QWdncmVnYXRpb24oXCJfbGFiZWxcIikuc2V0RGVzaWduKFwiU3RhbmRhcmRcIik7XG4gICAgdGhpcy5nZXRBZ2dyZWdhdGlvbihcIl9yYXRpbmdcIikuc2V0RW5hYmxlZCh0cnVlKTtcbiAgICB0aGlzLmdldEFnZ3JlZ2F0aW9uKFwiX2xhYmVsXCIpLnNldFRleHQob1Jlc291cmNlQnVuZGxlLmdldFRleHQoXCJwcm9kdWN0UmF0aW5nTGFiZWxJbml0aWFsXCIpKTtcbiAgICB0aGlzLmdldEFnZ3JlZ2F0aW9uKFwiX2J1dHRvblwiKS5zZXRFbmFibGVkKHRydWUpO1xuICB9XG5cbiAgX29uUmF0ZShvRXZlbnQpIHtcbiAgICB2YXIgb1Jlc3NvdXJjZUJ1bmRsZSA9IHRoaXMuZ2V0TW9kZWwoXCJpMThuXCIpLmdldFJlc291cmNlQnVuZGxlKCk7XG4gICAgdmFyIGZWYWx1ZSA9IG9FdmVudC5nZXRQYXJhbWV0ZXIoXCJ2YWx1ZVwiKTtcblxuICAgIHRoaXMuc2V0UHJvcGVydHkoXCJ2YWx1ZVwiLCBmVmFsdWUsIHRydWUpO1xuXG4gICAgdGhpcy5nZXRBZ2dyZWdhdGlvbihcIl9sYWJlbFwiKS5zZXRUZXh0KG9SZXNzb3VyY2VCdW5kbGUuZ2V0VGV4dChcInByb2R1Y3RSYXRpbmdMYWJlbEluZGljYXRvclwiLCBbZlZhbHVlLCBvRXZlbnQuZ2V0U291cmNlKCkuZ2V0TWF4VmFsdWUoKV0pKTtcbiAgICB0aGlzLmdldEFnZ3JlZ2F0aW9uKFwiX2xhYmVsXCIpLnNldERlc2lnbihcIkJvbGRcIik7XG4gIH1cblxuICBfb25TdWJtaXQob0V2ZW50KSB7XG4gICAgdmFyIG9SZXNvdXJjZUJ1bmRsZSA9IHRoaXMuZ2V0TW9kZWwoXCJpMThuXCIpLmdldFJlc291cmNlQnVuZGxlKCk7XG5cbiAgICB0aGlzLmdldEFnZ3JlZ2F0aW9uKFwiX3JhdGluZ1wiKS5zZXRFbmFibGVkKGZhbHNlKTtcbiAgICB0aGlzLmdldEFnZ3JlZ2F0aW9uKFwiX2xhYmVsXCIpLnNldFRleHQob1Jlc291cmNlQnVuZGxlLmdldFRleHQoXCJwcm9kdWN0UmF0aW5nTGFiZWxGaW5hbFwiKSk7XG4gICAgdGhpcy5nZXRBZ2dyZWdhdGlvbihcIl9idXR0b25cIikuc2V0RW5hYmxlZChmYWxzZSk7XG4gICAgdGhpcy5maXJlRXZlbnQoXCJjaGFuZ2VcIiwge1xuICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWUoKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyZXIob1JNLCBvQ29udHJvbCkge1xuICAgIG9STS53cml0ZShcIjxkaXZcIik7XG4gICAgb1JNLndyaXRlQ29udHJvbERhdGEob0NvbnRyb2wpO1xuICAgIG9STS5hZGRDbGFzcyhcIm15QXBwRGVtb1dUUHJvZHVjdFJhdGluZ1wiKTtcbiAgICBvUk0ud3JpdGVDbGFzc2VzKCk7XG4gICAgb1JNLndyaXRlKFwiPlwiKTtcbiAgICBvUk0ucmVuZGVyQ29udHJvbChvQ29udHJvbC5nZXRBZ2dyZWdhdGlvbihcIl9yYXRpbmdcIikpO1xuICAgIG9STS5yZW5kZXJDb250cm9sKG9Db250cm9sLmdldEFnZ3JlZ2F0aW9uKFwiX2xhYmVsXCIpKTtcbiAgICBvUk0ucmVuZGVyQ29udHJvbChvQ29udHJvbC5nZXRBZ2dyZWdhdGlvbihcIl9idXR0b25cIikpO1xuICAgIG9STS5yZW5kZXJDb250cm9sKG9Db250cm9sLmdldEFnZ3JlZ2F0aW9uKFwiX2ludlRleHQxXCIpKTtcbiAgICBvUk0ucmVuZGVyQ29udHJvbChvQ29udHJvbC5nZXRBZ2dyZWdhdGlvbihcIl9pbnZUZXh0MlwiKSk7XG4gICAgb1JNLnJlbmRlckNvbnRyb2wob0NvbnRyb2wuZ2V0QWdncmVnYXRpb24oXCJfaW52VGV4dDNcIikpO1xuICAgIG9STS5yZW5kZXJDb250cm9sKG9Db250cm9sLmdldEFnZ3JlZ2F0aW9uKFwiX2ludlRleHQ0XCIpKTtcbiAgICBvUk0ud3JpdGUoXCI8L2Rpdj5cIik7XG4gIH1cbn1cbiJdLCJmaWxlIjoiY29udHJvbC9Qcm9kdWN0UmF0aW5nLmpzIn0=
