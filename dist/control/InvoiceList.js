sap.ui.define("fitst/control/InvoiceList", ["sap/ui/core/Control", "sap/m/Table", "sap/m/ColumnListItem", "sap/m/ObjectNumber", "sap/m/Column", "sap/m/Toolbar", "sap/m/Title", "sap/m/Text", "sap/m/ToolbarSpacer", "sap/m/SearchField", "sap/m/ObjectIdentifier", "sap/ui/model/json/JSONModel", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "fitst/model/formatter"], function (Control, Table, ColumnListItem, ObjectNumber, Column, Toolbar, Title, Text, ToolbarSpacer, SearchField, ObjectIdentifier, JSONModel, Filter, FilterOperator, formatter) {
  var createFormatter = formatter.createFormatter;
  var _default = {};
  var InvoiceList = Control.extend("fitst.control.InvoiceList", {
    metadata: {
      properties: {
        nav: {
          type: "function"
        }
      },
      aggregations: {
        table: {
          type: "sap.ui.core.Control",
          multiple: false
        }
      }
    },
    onFilterInvoices: function onFilterInvoices(oEvent) {
      // build filter array
      var aFilter = [];
      var sQuery = oEvent.getParameter("query");

      if (sQuery) {
        aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
      } // filter binding


      var oBinding = this.getAggregation("table").getBinding("items");
      oBinding.filter(aFilter);
    },
    onPress: function onPress(oEvent) {
      var nav = this.getProperty("nav");

      if (nav) {
        var oItem = oEvent.getSource();
        var invoicePath = oItem.getBindingContext("invoice").getPath().substr(1);
        nav({
          invoicePath: invoicePath
        });
      }
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
    init: function init() {
      var oViewModel = new JSONModel({
        currency: "EUR"
      });
      this.setModel(oViewModel, "view");
      this._formatter = createFormatter(this);
      this.setAggregation("table", new Table({
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
      }).addStyleClass("sapUiResponsiveMargin"));
    },
    renderer: function renderer(oRM, oControl) {
      oRM.renderControl(oControl.getAggregation("table"));
    }
  });
  _default.InvoiceList = InvoiceList;
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wvSW52b2ljZUxpc3QuanMiXSwibmFtZXMiOlsiY3JlYXRlRm9ybWF0dGVyIiwibWV0YWRhdGEiLCJwcm9wZXJ0aWVzIiwibmF2IiwidHlwZSIsImFnZ3JlZ2F0aW9ucyIsInRhYmxlIiwibXVsdGlwbGUiLCJvbkZpbHRlckludm9pY2VzIiwib0V2ZW50IiwiYUZpbHRlciIsInNRdWVyeSIsImdldFBhcmFtZXRlciIsInB1c2giLCJGaWx0ZXIiLCJGaWx0ZXJPcGVyYXRvciIsIkNvbnRhaW5zIiwib0JpbmRpbmciLCJnZXRBZ2dyZWdhdGlvbiIsImdldEJpbmRpbmciLCJmaWx0ZXIiLCJvblByZXNzIiwiZ2V0UHJvcGVydHkiLCJvSXRlbSIsImdldFNvdXJjZSIsImludm9pY2VQYXRoIiwiZ2V0QmluZGluZ0NvbnRleHQiLCJnZXRQYXRoIiwic3Vic3RyIiwicmVuZGVyQ29sdW1ucyIsInJlbmRlckl0ZW1zVGVtcGxhdGUiLCJiaW5kIiwicGF0aCIsImZvcm1hdHRlciIsIl9mb3JtYXR0ZXIiLCJzdGF0dXNUZXh0IiwicGFydHMiLCJmb3JtYXRPcHRpb25zIiwic2hvd01lYXN1cmUiLCJpbml0Iiwib1ZpZXdNb2RlbCIsIkpTT05Nb2RlbCIsImN1cnJlbmN5Iiwic2V0TW9kZWwiLCJzZXRBZ2dyZWdhdGlvbiIsInRlbXBsYXRlIiwic29ydGVyIiwiZ3JvdXAiLCJyZW5kZXJlciIsIm9STSIsIm9Db250cm9sIiwicmVuZGVyQ29udHJvbCIsIkludm9pY2VMaXN0Il0sIm1hcHBpbmdzIjoiO01BZVNBLGUsYUFBQUEsZTs7O0FBWVBDLElBQUFBLFEsRUFBVztBQUNUQyxNQUFBQSxVQUFVLEVBQUU7QUFDVkMsUUFBQUEsR0FBRyxFQUFFO0FBQUVDLFVBQUFBLElBQUksRUFBRTtBQUFSO0FBREssT0FESDtBQUlUQyxNQUFBQSxZQUFZLEVBQUU7QUFDWkMsUUFBQUEsS0FBSyxFQUFFO0FBQUVGLFVBQUFBLElBQUksRUFBRSxxQkFBUjtBQUErQkcsVUFB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O0FBQUE7QUFBQTtBQUFBLG1CQVMyQixLQVQzQjtBQUFBLG9CQVN5QyxLQUFLcEMsZ0JBQUwsQ0FBc0J1QixJQUF0QixDQUEyQixJQUEzQixDQVR6QztBQUFBLDJCQVMwRjtBQVQxRjtBQUFBO0FBQUEsaUJBWWEsS0FBS0YsYUFBTCxFQVpiO0FBQUEsZUFhVztBQUNMRyxVQUFBQSxJQUFJLEVBQUUsbUJBREQ7QUFFTGEsVUFBQUEsUUFBUSxFQUFFLEtBQUtmLG1CQUFMLEVBRkw7QUFHTGdCLFVBQUFBLE1BQU0sRUFBRTtBQUNOZCxZQUFBQSxJQUFJLEVBQUUsYUFEQTtBQUVOZSxZQUFBQSxLQUFLLEVBQUU7QUFGRDtBQUhIO0FBYlg7QUF1QkQsSztBQUVEQyxJQUFBQSxRLEVBQVcsa0JBQUNDLEdBQUQsRUFBTUMsUUFBTixFQUFtQjtBQUM1QkQsTUFBQUEsR0FBRyxDQUFDRSxhQUFKLENBQWtCRCxRQUFRLENBQUNoQyxjQUFULENBQXdCLE9BQXhCLENBQWxCO0FBQ0Q7O1dBcklVa0MsVyxHQUFBQSxXIiwic291cmNlUm9vdCI6Ii9zb3VyY2VtYXBzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRyb2wgZnJvbSBcInNhcC91aS9jb3JlL0NvbnRyb2xcIjtcbmltcG9ydCBUYWJsZSBmcm9tIFwic2FwL20vVGFibGVcIjtcbmltcG9ydCBDb2x1bW5MaXN0SXRlbSBmcm9tIFwic2FwL20vQ29sdW1uTGlzdEl0ZW1cIjtcbmltcG9ydCBPYmplY3ROdW1iZXIgZnJvbSBcInNhcC9tL09iamVjdE51bWJlclwiO1xuaW1wb3J0IENvbHVtbiBmcm9tIFwic2FwL20vQ29sdW1uXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwic2FwL20vVG9vbGJhclwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJzYXAvbS9UaXRsZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcInNhcC9tL1RleHRcIjtcbmltcG9ydCBUb29sYmFyU3BhY2VyIGZyb20gXCJzYXAvbS9Ub29sYmFyU3BhY2VyXCI7XG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSBcInNhcC9tL1NlYXJjaEZpZWxkXCI7XG5pbXBvcnQgT2JqZWN0SWRlbnRpZmllciBmcm9tIFwic2FwL20vT2JqZWN0SWRlbnRpZmllclwiO1xuXG5pbXBvcnQgSlNPTk1vZGVsIGZyb20gXCJzYXAvdWkvbW9kZWwvanNvbi9KU09OTW9kZWxcIjtcbmltcG9ydCBGaWx0ZXIgZnJvbSBcInNhcC91aS9tb2RlbC9GaWx0ZXJcIjtcbmltcG9ydCBGaWx0ZXJPcGVyYXRvciBmcm9tIFwic2FwL3VpL21vZGVsL0ZpbHRlck9wZXJhdG9yXCI7XG5pbXBvcnQgeyBjcmVhdGVGb3JtYXR0ZXIgfSBmcm9tIFwiLi4vbW9kZWwvZm9ybWF0dGVyXCI7XG5cbi8qKlxuICogSW52b2ljZUxpc3QgQ29udHJvbCBJbXBsZW1lbnRhdGlvblxuICpcbiAqIEFsc28gbmVlZCB0byBpbmxpbmUgdGhlIG9kYXRhIG1vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnZvaWNlTGlzdCBleHRlbmRzIENvbnRyb2wge1xuXG4gIC8qKlxuICAgKiBtZXRhZGF0YSBpcyBtdXN0IGJlIGRlZmluZWQsIG90aGVyd2lzZSwgVUk1IGNhbm5vdCBiaW5kaW5nICYgYWNjZXB0IHBhcmFtZXRlcnNcbiAgICovXG4gIG1ldGFkYXRhID0ge1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIG5hdjogeyB0eXBlOiBcImZ1bmN0aW9uXCIgfVxuICAgIH0sXG4gICAgYWdncmVnYXRpb25zOiB7XG4gICAgICB0YWJsZTogeyB0eXBlOiBcInNhcC51aS5jb3JlLkNvbnRyb2xcIiwgbXVsdGlwbGU6IGZhbHNlIH1cbiAgICB9XG4gIH1cblxuICBvbkZpbHRlckludm9pY2VzKG9FdmVudCkge1xuXG4gICAgLy8gYnVpbGQgZmlsdGVyIGFycmF5XG4gICAgdmFyIGFGaWx0ZXIgPSBbXTtcbiAgICB2YXIgc1F1ZXJ5ID0gb0V2ZW50LmdldFBhcmFtZXRlcihcInF1ZXJ5XCIpO1xuICAgIGlmIChzUXVlcnkpIHtcbiAgICAgIGFGaWx0ZXIucHVzaChuZXcgRmlsdGVyKFwiUHJvZHVjdE5hbWVcIiwgRmlsdGVyT3BlcmF0b3IuQ29udGFpbnMsIHNRdWVyeSkpO1xuICAgIH1cblxuICAgIC8vIGZpbHRlciBiaW5kaW5nXG4gICAgdmFyIG9CaW5kaW5nID0gdGhpcy5nZXRBZ2dyZWdhdGlvbihcInRhYmxlXCIpLmdldEJpbmRpbmcoXCJpdGVtc1wiKTtcbiAgICBvQmluZGluZy5maWx0ZXIoYUZpbHRlcik7XG4gIH1cblxuICBvblByZXNzKG9FdmVudCkge1xuICAgIHZhciBuYXYgPSB0aGlzLmdldFByb3BlcnR5KFwibmF2XCIpO1xuICAgIGlmIChuYXYpIHtcbiAgICAgIHZhciBvSXRlbSA9IG9FdmVudC5nZXRTb3VyY2UoKTtcbiAgICAgIHZhciBpbnZvaWNlUGF0aCA9IG9JdGVtLmdldEJpbmRpbmdDb250ZXh0KFwiaW52b2ljZVwiKS5nZXRQYXRoKCkuc3Vic3RyKDEpO1xuICAgICAgbmF2KHsgaW52b2ljZVBhdGggfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgPENvbHVtblxuICAgICAgICBoQWxpZ249XCJFbmRcIlxuICAgICAgICBtaW5TY3JlZW5XaWR0aD1cIlNtYWxsXCJcbiAgICAgICAgZGVtYW5kUG9waW49e3RydWV9XG4gICAgICAgIHdpZHRoPVwiNGVtXCJcbiAgICAgICAgaGVhZGVyPXs8VGV4dCB0ZXh0PVwie2kxOG4+Y29sdW1uUXVhbnRpdHl9XCIgLz59XG4gICAgICAvPixcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaGVhZGVyPXs8VGV4dCB0ZXh0PVwie2kxOG4+Y29sdW1uTmFtZX1cIiAvPn1cbiAgICAgIC8+LFxuICAgICAgPENvbHVtblxuICAgICAgICBtaW5TY3JlZW5XaWR0aD1cIlNtYWxsXCJcbiAgICAgICAgZGVtYW5kUG9waW49e3RydWV9XG4gICAgICAgIGhlYWRlcj17PFRleHQgdGV4dD1cIntpMThuPmNvbHVtblN0YXR1c31cIiAvPn1cbiAgICAgIC8+LFxuICAgICAgPENvbHVtblxuICAgICAgICBtaW5TY3JlZW5XaWR0aD1cIlRhYmxldFwiXG4gICAgICAgIGRlbWFuZFBvcGluPXtmYWxzZX1cbiAgICAgICAgaGVhZGVyPXs8VGV4dCB0ZXh0PVwie2kxOG4+Y29sdW1uU3VwcGxpZXJ9XCIgLz59XG4gICAgICAvPixcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgaEFsaWduPVwiRW5kXCJcbiAgICAgICAgaGVhZGVyPXs8VGV4dCB0ZXh0PVwie2kxOG4+Y29sdW1uUHJpY2V9XCIgLz59XG4gICAgICAvPlxuICAgIF07XG4gIH1cblxuICByZW5kZXJJdGVtc1RlbXBsYXRlKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sdW1uTGlzdEl0ZW1cbiAgICAgICAgdHlwZT1cIk5hdmlnYXRpb25cIlxuICAgICAgICBwcmVzcz17dGhpcy5vblByZXNzLmJpbmQodGhpcyl9XG4gICAgICAgIGNlbGxzPXtbXG4gICAgICAgICAgPE9iamVjdE51bWJlclxuICAgICAgICAgICAgbnVtYmVyPVwie2ludm9pY2U+UXVhbnRpdHl9XCJcbiAgICAgICAgICAgIGVtcGhhc2l6ZWQ9e2ZhbHNlfVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIDxPYmplY3RJZGVudGlmaWVyXG4gICAgICAgICAgICB0aXRsZT1cIntpbnZvaWNlPlByb2R1Y3ROYW1lfVwiXG4gICAgICAgICAgLz4sXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIHRleHQ9e3tcbiAgICAgICAgICAgICAgcGF0aDogXCJpbnZvaWNlPlN0YXR1c1wiLFxuICAgICAgICAgICAgICBmb3JtYXR0ZXI6IHRoaXMuX2Zvcm1hdHRlci5zdGF0dXNUZXh0XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIDxUZXh0IHRleHQ9XCJ7aW52b2ljZT5TaGlwcGVyTmFtZX1cIiAvPixcbiAgICAgICAgICA8T2JqZWN0TnVtYmVyXG4gICAgICAgICAgICBudW1iZXI9e3tcbiAgICAgICAgICAgICAgcGFydHM6IFt7IHBhdGg6IFwiaW52b2ljZT5FeHRlbmRlZFByaWNlXCIgfSwgeyBwYXRoOiBcInZpZXc+L2N1cnJlbmN5XCIgfV0sXG4gICAgICAgICAgICAgIHR5cGU6IFwic2FwLnVpLm1vZGVsLnR5cGUuQ3VycmVuY3lcIixcbiAgICAgICAgICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHNob3dNZWFzdXJlOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdW5pdD1cInt2aWV3Pi9jdXJyZW5jeX1cIlxuICAgICAgICAgICAgc3RhdGU9XCJ7PSAke2ludm9pY2U+RXh0ZW5kZWRQcmljZX0gPiA1MCA/ICdFcnJvcicgOiAnU3VjY2VzcycgfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdmFyIG9WaWV3TW9kZWwgPSBuZXcgSlNPTk1vZGVsKHsgY3VycmVuY3k6IFwiRVVSXCIgfSk7XG4gICAgdGhpcy5zZXRNb2RlbChvVmlld01vZGVsLCBcInZpZXdcIik7XG4gICAgdGhpcy5fZm9ybWF0dGVyID0gY3JlYXRlRm9ybWF0dGVyKHRoaXMpO1xuICAgIHRoaXMuc2V0QWdncmVnYXRpb24oXG4gICAgICBcInRhYmxlXCIsXG4gICAgICA8VGFibGVcbiAgICAgICAgY2xhc3M9XCJzYXBVaVJlc3BvbnNpdmVNYXJnaW5cIlxuICAgICAgICB3aWR0aD1cImF1dG9cIlxuICAgICAgICBoZWFkZXJUb29sYmFyPXtcbiAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxUaXRsZT5BIEhlYWRlciBIZXJlPC9UaXRsZT5cbiAgICAgICAgICAgIDxUb29sYmFyU3BhY2VyIC8+XG4gICAgICAgICAgICA8U2VhcmNoRmllbGQgd2lkdGg9XCI1MCVcIiBzZWFyY2g9e3RoaXMub25GaWx0ZXJJbnZvaWNlcy5iaW5kKHRoaXMpfSBzZWxlY3RPbkZvY3VzPXtmYWxzZX0gLz5cbiAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1ucz17dGhpcy5yZW5kZXJDb2x1bW5zKCl9XG4gICAgICAgIGl0ZW1zPXt7XG4gICAgICAgICAgcGF0aDogXCJpbnZvaWNlPi9JbnZvaWNlc1wiLFxuICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlbmRlckl0ZW1zVGVtcGxhdGUoKSxcbiAgICAgICAgICBzb3J0ZXI6IHtcbiAgICAgICAgICAgIHBhdGg6IFwiU2hpcHBlck5hbWVcIixcbiAgICAgICAgICAgIGdyb3VwOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyZXIgPSAob1JNLCBvQ29udHJvbCkgPT4ge1xuICAgIG9STS5yZW5kZXJDb250cm9sKG9Db250cm9sLmdldEFnZ3JlZ2F0aW9uKFwidGFibGVcIikpO1xuICB9O1xuXG59Il0sImZpbGUiOiJjb250cm9sL0ludm9pY2VMaXN0LmpzIn0=
