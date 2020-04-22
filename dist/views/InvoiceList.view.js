sap.ui.define("fitst/views/InvoiceList", ["sap/ui/core/mvc/JSView", "sap/m/Table", "sap/m/ColumnListItem", "sap/m/ObjectNumber", "sap/m/Column", "sap/m/Toolbar", "sap/m/Title", "sap/m/Text", "sap/m/ToolbarSpacer", "sap/m/SearchField", "sap/m/ObjectIdentifier", "sap/ui/model/json/JSONModel", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "fitst/model/formatter"], function (JSView, Table, ColumnListItem, ObjectNumber, Column, Toolbar, Title, Text, ToolbarSpacer, SearchField, ObjectIdentifier, JSONModel, Filter, FilterOperator, formatter) {
  var createFormatter = formatter.createFormatter;
  var _default = {};

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var InvoiceList = {
    onFilterInvoices: function onFilterInvoices(oEvent) {
      // build filter array
      var aFilter = [];
      var sQuery = oEvent.getParameter("query");

      if (sQuery) {
        aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
      } // filter binding


      var oList = sap.ui.getCore().byId("invoiceList");
      var oBinding = oList.getBinding("items");
      oBinding.filter(aFilter);
    },
    onPress: function onPress(oEvent) {
      var oItem = oEvent.getSource();
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("detail", {
        invoicePath: oItem.getBindingContext("invoice").getPath().substr(1)
      });
    },
    renderColumns: function renderColumns() {
      return [new Column({
        hAlign: "End",
        minScreenWidth: "Small",
        demandPopin: true,
        width: "4em",
        header: new Text({
          text: "{i18n>columnQuantity}"
        })
      }), new Column({
        header: new Text({
          text: "{i18n>columnName}"
        })
      }), new Column({
        minScreenWidth: "Small",
        demandPopin: true,
        header: new Text({
          text: "{i18n>columnStatus}"
        })
      }), new Column({
        minScreenWidth: "Tablet",
        demandPopin: false,
        header: new Text({
          text: "{i18n>columnSupplier}"
        })
      }), new Column({
        hAlign: "End",
        header: new Text({
          text: "{i18n>columnPrice}"
        })
      })];
    },
    renderItemsTemplate: function renderItemsTemplate() {
      return new ColumnListItem({
        type: "Navigation",
        press: this.onPress.bind(this),
        cells: [new ObjectNumber({
          number: "{invoice>Quantity}",
          emphasized: false
        }), new ObjectIdentifier({
          title: "{invoice>ProductName}"
        }), new Text({
          text: {
            path: "invoice>Status",
            formatter: this._formatter.statusText
          }
        }), new Text({
          text: "{invoice>ShipperName}"
        }), new ObjectNumber({
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
          unit: "{view>/currency}",
          state: "{= ${invoice>ExtendedPrice} > 50 ? 'Error' : 'Success' }"
        })]
      });
    },
    createContent: function createContent() {
      var oViewModel = new JSONModel({
        currency: "EUR"
      });
      this.setModel(oViewModel, "view");
      this._formatter = createFormatter(this);
      return new Table({
        id: "invoiceList",
        width: "auto",
        headerToolbar: new Toolbar({
          content: [new Title({
            text: "A Header Here"
          }), new ToolbarSpacer({}), new SearchField({
            width: "50%",
            search: this.onFilterInvoices.bind(this),
            selectOnFocus: false
          })]
        }),
        columns: this.renderColumns(),
        items: {
          path: "invoice>/Invoices",
          template: this.renderItemsTemplate(),
          sorter: {
            path: "ShipperName",
            group: true
          }
        }
      }).addStyleClass("sapUiResponsiveMargin");
    },
    getControllerName: function getControllerName() {
      return "sap.ui.core.mvc.Controller";
    }
  };
  InvoiceList = sap.ui.jsview("fitst.views.InvoiceList", InvoiceList) || InvoiceList;
  _default = _extends(InvoiceList, _default);
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL0ludm9pY2VMaXN0LnZpZXcuanMiXSwibmFtZXMiOlsiY3JlYXRlRm9ybWF0dGVyIiwib25GaWx0ZXJJbnZvaWNlcyIsIm9FdmVudCIsImFGaWx0ZXIiLCJzUXVlcnkiLCJnZXRQYXJhbWV0ZXIiLCJwdXNoIiwiRmlsdGVyIiwiRmlsdGVyT3BlcmF0b3IiLCJDb250YWlucyIsIm9MaXN0Iiwic2FwIiwidWkiLCJnZXRDb3JlIiwiYnlJZCIsIm9CaW5kaW5nIiwiZ2V0QmluZGluZyIsImZpbHRlciIsIm9uUHJlc3MiLCJvSXRlbSIsImdldFNvdXJjZSIsIm9Sb3V0ZXIiLCJjb3JlIiwiVUlDb21wb25lbnQiLCJnZXRSb3V0ZXJGb3IiLCJuYXZUbyIsImludm9pY2VQYXRoIiwiZ2V0QmluZGluZ0NvbnRleHQiLCJnZXRQYXRoIiwic3Vic3RyIiwicmVuZGVyQ29sdW1ucyIsInJlbmRlckl0ZW1zVGVtcGxhdGUiLCJiaW5kIiwicGF0aCIsImZvcm1hdHRlciIsIl9mb3JtYXR0ZXIiLCJzdGF0dXNUZXh0IiwicGFydHMiLCJ0eXBlIiwiZm9ybWF0T3B0aW9ucyIsInNob3dNZWFzdXJlIiwiY3JlYXRlQ29udGVudCIsIm9WaWV3TW9kZWwiLCJKU09OTW9kZWwiLCJjdXJyZW5jeSIsInNldE1vZGVsIiwidGVtcGxhdGUiLCJzb3J0ZXIiLCJncm91cCIsIkludm9pY2VMaXN0Il0sIm1hcHBpbmdzIjoiO01BZVNBLGUsYUFBQUEsZTs7Ozs7O0FBSVBDLElBQUFBLGdCLDRCQUFpQkMsTSxFQUFRO0FBRXZCO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxVQUFJQyxNQUFNLEdBQUdGLE1BQU0sQ0FBQ0csWUFBUCxDQUFvQixPQUFwQixDQUFiOztBQUNBLFVBQUlELE1BQUosRUFBWTtBQUNWRCxRQUFBQSxPQUFPLENBQUNHLElBQVIsQ0FBYSxJQUFJQyxNQUFKLENBQVcsYUFBWCxFQUEwQkMsY0FBYyxDQUFDQyxRQUF6QyxFQUFtREwsTUFBbkQsQ0FBYjtBQUNELE9BUHNCLENBU3ZCOzs7QUFDQSxVQUFJTSxLQUFLLEdBQUdDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPQyxPQUFQLEdBQWlCQyxJQUFqQixDQUFzQixhQUF0QixDQUFaO0FBQ0EsVUFBSUMsUUFBUSxHQUFHTCxLQUFLLENBQUNNLFVBQU4sQ0FBaUIsT0FBakIsQ0FBZjtBQUNBRCxNQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JkLE9BQWhCO0FBQ0QsSztBQUVEZSxJQUFBQSxPLG1CQUFRaEIsTSxFQUFRO0FBQ2QsVUFBSWlCLEtBQUssR0FBR2pCLE1BQU0sQ0FBQ2tCLFNBQVAsRUFBWjtBQUNBLFVBQUlDLE9BQU8sR0FBR1YsR0FBRyxDQUFDQyxFQUFKLENBQU9VLElBQVAsQ0FBWUMsV0FBWixDQUF3QkMsWUFBeEIsQ0FBcUMsSUFBckMsQ0FBZDtBQUNBSCxNQUFBQSxPQUFPLENBQUNJLEtBQVIsQ0FBYyxRQUFkLEVBQXdCO0FBQ3RCQyxRQUFBQSxXQUFXLEVBQUVQLEtBQUssQ0FBQ1EsaUJBQU4sQ0FBd0IsU0FBeEIsRUFBbUNDLE9BQW5DLEdBQTZDQyxNQUE3QyxDQUFvRCxDQUFwRDtBQURTLE9BQXhCO0FBR0QsSztBQUVEQyxJQUFBQSxhLDJCQUFnQjtBQUNkLGFBQU87QUFBQSxnQkFFSSxLQUZKO0FBQUEsd0JBR1ksT0FIWjtBQUFBLHFCQUlVLElBSlY7QUFBQSxlQUtHLEtBTEg7QUFBQTtBQUFBLGdCQU1nQjtBQU5oQjtBQUFBO0FBQUE7QUFBQSxnQkFTZ0I7QUFUaEI7QUFBQTtBQUFBLHdCQVlZLE9BWlo7QUFBQSxxQkFhVSxJQWJWO0FBQUE7QUFBQSxnQkFjZ0I7QUFkaEI7QUFBQTtBQUFBLHdCQWlCWSxRQWpCWjtBQUFBLHFCQWtCVSxLQWxCVjtBQUFBO0FBQUEsZ0JBbUJnQjtBQW5CaEI7QUFBQTtBQUFBLGdCQXNCSSxLQXRCSjtBQUFBO0FBQUEsZ0JBdUJnQjtBQXZCaEI7QUFBQSxTQUFQO0FBMEJELEs7QUFFREMsSUFBQUEsbUIsaUNBQXNCO0FBQ3BCO0FBQUEsY0FFUyxZQUZUO0FBQUEsZUFHVyxLQUFLYixPQUFMLENBQWFjLElBQWIsQ0FBa0IsSUFBbEIsQ0FIWDtBQUFBLGVBSVc7QUFBQSxrQkFFSSxvQkFGSjtBQUFBLHNCQUdTO0FBSFQ7QUFBQSxpQkFNRztBQU5IO0FBQUEsZ0JBU0c7QUFDSkMsWUFBQUEsSUFBSSxFQUFFLGdCQURGO0FBRUpDLFlBQUFBLFNBQVMsRUFBRSxLQUFLQyxVQUFMLENBQWdCQztBQUZ2QjtBQVRIO0FBQUEsZ0JBY007QUFkTjtBQUFBLGtCQWdCSztBQUNOQyxZQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUFFSixjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUFELEVBQW9DO0FBQUVBLGNBQUFBLElBQUksRUFBRTtBQUFSLGFBQXBDLENBREQ7QUFFTkssWUFBQUEsSUFBSSxFQUFFLDRCQUZBO0FBR05DLFlBQUFBLGFBQWEsRUFBRTtBQUNiQyxjQUFBQSxXQUFXLEVBQUU7QUFEQTtBQUhULFdBaEJMO0FBQUEsZ0JBdUJFLGtCQXZCRjtBQUFBLGlCQXdCRztBQXhCSDtBQUpYO0FBaUNELEs7QUFFREMsSUFBQUEsYSwyQkFBZ0I7QUFFZCxVQUFJQyxVQUFVLEdBQUcsSUFBSUMsU0FBSixDQUFjO0FBQUVDLFFBQUFBLFFBQVEsRUFBRTtBQUFaLE9BQWQsQ0FBakI7QUFDQSxXQUFLQyxRQUFMLENBQWNILFVBQWQsRUFBMEIsTUFBMUI7QUFDQSxXQUFLUCxVQUFMLEdBQWtCbkMsZUFBZSxDQUFDLElBQUQsQ0FBakM7QUFFQTtBQUFBLFlBRU8sYUFGUDtBQUFBLGVBSVUsTUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUzJCLEtBVDNCO0FBQUEsb0JBU3lDLEtBQUtDLGdCQUFMLENBQXNCK0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FUekM7QUFBQSwyQkFTMEY7QUFUMUY7QUFBQTtBQUFBLGlCQVlhLEtBQUtGLGFBQUwsRUFaYjtBQUFBLGVBYVc7QUFDTEcsVUFBQUEsSUFBSSxFQUFFLG1CQUREO0FBRUxhLFVBQUFBLFFBQVEsRUFBRSxLQUFLZixtQkFBTCxFQUZMO0FBR0xnQixVQUFBQSxNQUFNLEVBQUU7QUFDTmQsWUFBQUEsSUFBSSxFQUFFLGFBREE7QUFFTmUsWUFBQUEsS0FBSyxFQUFFO0FBRkQ7QUFISDtBQWJYO0FBdUJELEs7Ozs7OztzQkF2SGtCQyxXIiwic291cmNlUm9vdCI6Ii9zb3VyY2VtYXBzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTVmlldyBmcm9tIFwic2FwL3VpL2NvcmUvbXZjL0pTVmlld1wiO1xuaW1wb3J0IFRhYmxlIGZyb20gXCJzYXAvbS9UYWJsZVwiO1xuaW1wb3J0IENvbHVtbkxpc3RJdGVtIGZyb20gXCJzYXAvbS9Db2x1bW5MaXN0SXRlbVwiO1xuaW1wb3J0IE9iamVjdE51bWJlciBmcm9tIFwic2FwL20vT2JqZWN0TnVtYmVyXCI7XG5pbXBvcnQgQ29sdW1uIGZyb20gXCJzYXAvbS9Db2x1bW5cIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJzYXAvbS9Ub29sYmFyXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcInNhcC9tL1RpdGxlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwic2FwL20vVGV4dFwiO1xuaW1wb3J0IFRvb2xiYXJTcGFjZXIgZnJvbSBcInNhcC9tL1Rvb2xiYXJTcGFjZXJcIjtcbmltcG9ydCBTZWFyY2hGaWVsZCBmcm9tIFwic2FwL20vU2VhcmNoRmllbGRcIjtcbmltcG9ydCBPYmplY3RJZGVudGlmaWVyIGZyb20gXCJzYXAvbS9PYmplY3RJZGVudGlmaWVyXCI7XG5cbmltcG9ydCBKU09OTW9kZWwgZnJvbSBcInNhcC91aS9tb2RlbC9qc29uL0pTT05Nb2RlbFwiO1xuaW1wb3J0IEZpbHRlciBmcm9tIFwic2FwL3VpL21vZGVsL0ZpbHRlclwiO1xuaW1wb3J0IEZpbHRlck9wZXJhdG9yIGZyb20gXCJzYXAvdWkvbW9kZWwvRmlsdGVyT3BlcmF0b3JcIjtcbmltcG9ydCB7IGNyZWF0ZUZvcm1hdHRlciB9IGZyb20gXCIuLi9tb2RlbC9mb3JtYXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52b2ljZUxpc3QgZXh0ZW5kcyBKU1ZpZXcge1xuXG4gIG9uRmlsdGVySW52b2ljZXMob0V2ZW50KSB7XG5cbiAgICAvLyBidWlsZCBmaWx0ZXIgYXJyYXlcbiAgICB2YXIgYUZpbHRlciA9IFtdO1xuICAgIHZhciBzUXVlcnkgPSBvRXZlbnQuZ2V0UGFyYW1ldGVyKFwicXVlcnlcIik7XG4gICAgaWYgKHNRdWVyeSkge1xuICAgICAgYUZpbHRlci5wdXNoKG5ldyBGaWx0ZXIoXCJQcm9kdWN0TmFtZVwiLCBGaWx0ZXJPcGVyYXRvci5Db250YWlucywgc1F1ZXJ5KSk7XG4gICAgfVxuXG4gICAgLy8gZmlsdGVyIGJpbmRpbmdcbiAgICB2YXIgb0xpc3QgPSBzYXAudWkuZ2V0Q29yZSgpLmJ5SWQoXCJpbnZvaWNlTGlzdFwiKTtcbiAgICB2YXIgb0JpbmRpbmcgPSBvTGlzdC5nZXRCaW5kaW5nKFwiaXRlbXNcIik7XG4gICAgb0JpbmRpbmcuZmlsdGVyKGFGaWx0ZXIpO1xuICB9XG5cbiAgb25QcmVzcyhvRXZlbnQpIHtcbiAgICB2YXIgb0l0ZW0gPSBvRXZlbnQuZ2V0U291cmNlKCk7XG4gICAgdmFyIG9Sb3V0ZXIgPSBzYXAudWkuY29yZS5VSUNvbXBvbmVudC5nZXRSb3V0ZXJGb3IodGhpcyk7XG4gICAgb1JvdXRlci5uYXZUbyhcImRldGFpbFwiLCB7XG4gICAgICBpbnZvaWNlUGF0aDogb0l0ZW0uZ2V0QmluZGluZ0NvbnRleHQoXCJpbnZvaWNlXCIpLmdldFBhdGgoKS5zdWJzdHIoMSlcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaEFsaWduPVwiRW5kXCJcbiAgICAgICAgbWluU2NyZWVuV2lkdGg9XCJTbWFsbFwiXG4gICAgICAgIGRlbWFuZFBvcGluPXt0cnVlfVxuICAgICAgICB3aWR0aD1cIjRlbVwiXG4gICAgICAgIGhlYWRlcj17PFRleHQgdGV4dD1cIntpMThuPmNvbHVtblF1YW50aXR5fVwiIC8+fVxuICAgICAgLz4sXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGhlYWRlcj17PFRleHQgdGV4dD1cIntpMThuPmNvbHVtbk5hbWV9XCIgLz59XG4gICAgICAvPixcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgbWluU2NyZWVuV2lkdGg9XCJTbWFsbFwiXG4gICAgICAgIGRlbWFuZFBvcGluPXt0cnVlfVxuICAgICAgICBoZWFkZXI9ezxUZXh0IHRleHQ9XCJ7aTE4bj5jb2x1bW5TdGF0dXN9XCIgLz59XG4gICAgICAvPixcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgbWluU2NyZWVuV2lkdGg9XCJUYWJsZXRcIlxuICAgICAgICBkZW1hbmRQb3Bpbj17ZmFsc2V9XG4gICAgICAgIGhlYWRlcj17PFRleHQgdGV4dD1cIntpMThuPmNvbHVtblN1cHBsaWVyfVwiIC8+fVxuICAgICAgLz4sXG4gICAgICA8Q29sdW1uXG4gICAgICAgIGhBbGlnbj1cIkVuZFwiXG4gICAgICAgIGhlYWRlcj17PFRleHQgdGV4dD1cIntpMThuPmNvbHVtblByaWNlfVwiIC8+fVxuICAgICAgLz5cbiAgICBdO1xuICB9XG5cbiAgcmVuZGVySXRlbXNUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtbkxpc3RJdGVtXG4gICAgICAgIHR5cGU9XCJOYXZpZ2F0aW9uXCJcbiAgICAgICAgcHJlc3M9e3RoaXMub25QcmVzcy5iaW5kKHRoaXMpfVxuICAgICAgICBjZWxscz17W1xuICAgICAgICAgIDxPYmplY3ROdW1iZXJcbiAgICAgICAgICAgIG51bWJlcj1cIntpbnZvaWNlPlF1YW50aXR5fVwiXG4gICAgICAgICAgICBlbXBoYXNpemVkPXtmYWxzZX1cbiAgICAgICAgICAvPixcbiAgICAgICAgICA8T2JqZWN0SWRlbnRpZmllclxuICAgICAgICAgICAgdGl0bGU9XCJ7aW52b2ljZT5Qcm9kdWN0TmFtZX1cIlxuICAgICAgICAgIC8+LFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICB0ZXh0PXt7XG4gICAgICAgICAgICAgIHBhdGg6IFwiaW52b2ljZT5TdGF0dXNcIixcbiAgICAgICAgICAgICAgZm9ybWF0dGVyOiB0aGlzLl9mb3JtYXR0ZXIuc3RhdHVzVGV4dFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPixcbiAgICAgICAgICA8VGV4dCB0ZXh0PVwie2ludm9pY2U+U2hpcHBlck5hbWV9XCIgLz4sXG4gICAgICAgICAgPE9iamVjdE51bWJlclxuICAgICAgICAgICAgbnVtYmVyPXt7XG4gICAgICAgICAgICAgIHBhcnRzOiBbeyBwYXRoOiBcImludm9pY2U+RXh0ZW5kZWRQcmljZVwiIH0sIHsgcGF0aDogXCJ2aWV3Pi9jdXJyZW5jeVwiIH1dLFxuICAgICAgICAgICAgICB0eXBlOiBcInNhcC51aS5tb2RlbC50eXBlLkN1cnJlbmN5XCIsXG4gICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBzaG93TWVhc3VyZTogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHVuaXQ9XCJ7dmlldz4vY3VycmVuY3l9XCJcbiAgICAgICAgICAgIHN0YXRlPVwiez0gJHtpbnZvaWNlPkV4dGVuZGVkUHJpY2V9ID4gNTAgPyAnRXJyb3InIDogJ1N1Y2Nlc3MnIH1cIlxuICAgICAgICAgIC8+XG4gICAgICAgIF19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuXG4gICAgdmFyIG9WaWV3TW9kZWwgPSBuZXcgSlNPTk1vZGVsKHsgY3VycmVuY3k6IFwiRVVSXCIgfSk7XG4gICAgdGhpcy5zZXRNb2RlbChvVmlld01vZGVsLCBcInZpZXdcIik7XG4gICAgdGhpcy5fZm9ybWF0dGVyID0gY3JlYXRlRm9ybWF0dGVyKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVxuICAgICAgICBpZD1cImludm9pY2VMaXN0XCJcbiAgICAgICAgY2xhc3M9XCJzYXBVaVJlc3BvbnNpdmVNYXJnaW5cIlxuICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICBoZWFkZXJUb29sYmFyPXtcbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxUaXRsZT5BIEhlYWRlciBIZXJlPC9UaXRsZT5cbiAgICAgICAgICAgIDxUb29sYmFyU3BhY2VyIC8+XG4gICAgICAgICAgICA8U2VhcmNoRmllbGQgd2lkdGg9XCI1MCVcIiBzZWFyY2g9e3RoaXMub25GaWx0ZXJJbnZvaWNlcy5iaW5kKHRoaXMpfSBzZWxlY3RPbkZvY3VzPXtmYWxzZX0gLz5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1ucz17dGhpcy5yZW5kZXJDb2x1bW5zKCl9XG4gICAgICAgIGl0ZW1zPXt7XG4gICAgICAgICAgcGF0aDogXCJpbnZvaWNlPi9JbnZvaWNlc1wiLFxuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlbmRlckl0ZW1zVGVtcGxhdGUoKSxcbiAgICAgICAgICBzb3J0ZXI6IHtcbiAgICAgICAgICAgIHBhdGg6IFwiU2hpcHBlck5hbWVcIixcbiAgICAgICAgICAgIGdyb3VwOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbn1cbiJdLCJmaWxlIjoidmlld3MvSW52b2ljZUxpc3Qudmlldy5qcyJ9
