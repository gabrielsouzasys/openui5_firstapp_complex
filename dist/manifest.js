sap.ui.define("fitst/manifest", [], function () {
  var _default = {};
  var manifest = {
    "_version": "1.1.0",
    "sap.app": {
      "_version": "1.1.0",
      "id": "fitst",
      "type": "application",
      "i18n": "i18n/i18n.properties",
      "title": "{{appTitle}}",
      "description": "{{appDescription}}",
      "applicationVersion": {
        "version": "1.0.0"
      },
      "dataSources": {
        "invoiceRemote": {
          "uri": "/destinations/northwind/V2/Northwind/Northwind.svc/",
          "type": "OData",
          "settings": {
            "odataVersion": "2.0"
          }
        }
      }
    },
    "sap.ui": {
      "_version": "1.1.0",
      "technology": "UI5",
      "deviceTypes": {
        "desktop": true,
        "tablet": true,
        "phone": true
      },
      "supportedThemes": ["sap_bluecrystal"]
    },
    "sap.ui5": {
      "_version": "1.1.0",
      "rootView": {
        "viewName": "fitst.views.App",
        "type": "JS"
      },
      "dependencies": {
        "minUI5Version": "1.30",
        "libs": {
          "sap.m": {}
        }
      },
      "models": {
        "i18n": {
          "type": "sap.ui.model.resource.ResourceModel",
          "settings": {
            "bundleName": "fitst.i18n.i18n"
          }
        },
        "invoice": {
          "dataSource": "invoiceRemote"
        }
      },
      "resources": {
        "css": [{
          "uri": "css/style.css"
        }]
      },
      "routing": {
        "config": {
          "routerClass": "sap.m.routing.Router",
          "viewType": "JS",
          "viewPath": "fitst.views",
          "controlId": "app",
          "controlAggregation": "pages"
        },
        "routes": [{
          "pattern": "",
          "name": "overview",
          "target": "overview"
        }, {
          "pattern": "detail/{invoicePath}",
          "name": "detail",
          "target": "detail"
        }],
        "targets": {
          "overview": {
            "viewName": "Overview"
          },
          "detail": {
            "viewName": "Detail"
          }
        }
      }
    }
  };
  _default.manifest = manifest;
  return _default;
})
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmlmZXN0LmpzIl0sIm5hbWVzIjpbIm1hbmlmZXN0Il0sIm1hcHBpbmdzIjoiOztBQUFPLE1BQU1BLFFBQVEsR0FBRztBQUN0QixnQkFBWSxPQURVO0FBRXRCLGVBQVc7QUFDVCxrQkFBWSxPQURIO0FBRVQsWUFBTSxPQUZHO0FBR1QsY0FBUSxhQUhDO0FBSVQsY0FBUSxzQkFKQztBQUtULGVBQVMsY0FMQTtBQU1ULHFCQUFlLG9CQU5OO0FBT1QsNEJBQXNCO0FBQ3BCLG1CQUFXO0FBRFMsT0FQYjtBQVVULHFCQUFlO0FBQ2IseUJBQWlCO0FBQ2YsaUJBQU8scURBRFE7QUFFZixrQkFBUSxPQUZPO0FBR2Ysc0JBQVk7QUFDViw0QkFBZ0I7QUFETjtBQUhHO0FBREo7QUFWTixLQUZXO0FBc0J0QixjQUFVO0FBQ1Isa0JBQVksT0FESjtBQUVSLG9CQUFjLEtBRk47QUFHUixxQkFBZTtBQUNiLG1CQUFXLElBREU7QUFFYixrQkFBVSxJQUZHO0FBR2IsaUJBQVM7QUFISSxPQUhQO0FBUVIseUJBQW1CLENBQ2pCLGlCQURpQjtBQVJYLEtBdEJZO0FBa0N0QixlQUFXO0FBQ1Qsa0JBQVksT0FESDtBQUVULGtCQUFZO0FBQ1Ysb0JBQVksaUJBREY7QUFFVixnQkFBUTtBQUZFLE9BRkg7QUFNVCxzQkFBZ0I7QUFDZCx5QkFBaUIsTUFESDtBQUVkLGdCQUFRO0FBQ04sbUJBQVM7QUFESDtBQUZNLE9BTlA7QUFZVCxnQkFBVTtBQUNSLGdCQUFRO0FBQ04sa0JBQVEscUNBREY7QUFFTixzQkFBWTtBQUNWLDBCQUFjO0FBREo7QUFGTixTQURBO0FBT1IsbUJBQVc7QUFDVCx3QkFBYztBQURMO0FBUEgsT0FaRDtBQXVCVCxtQkFBYTtBQUNYLGVBQU8sQ0FDTDtBQUNFLGlCQUFPO0FBRFQsU0FESztBQURJLE9BdkJKO0FBOEJULGlCQUFXO0FBQ1Qsa0JBQVU7QUFDUix5QkFBZSxzQkFEUDtBQUVSLHNCQUFZLElBRko7QUFHUixzQkFBWSxhQUhKO0FBSVIsdUJBQWEsS0FKTDtBQUtSLGdDQUFzQjtBQUxkLFNBREQ7QUFRVCxrQkFBVSxDQUNSO0FBQ0UscUJBQVcsRUFEYjtBQUVFLGtCQUFRLFVBRlY7QUFHRSxvQkFBVTtBQUhaLFNBRFEsRUFNUjtBQUNFLHFCQUFXLHNCQURiO0FBRUUsa0JBQVEsUUFGVjtBQUdFLG9CQUFVO0FBSFosU0FOUSxDQVJEO0FBb0JULG1CQUFXO0FBQ1Qsc0JBQVk7QUFDVix3QkFBWTtBQURGLFdBREg7QUFJVCxvQkFBVTtBQUNSLHdCQUFZO0FBREo7QUFKRDtBQXBCRjtBQTlCRjtBQWxDVyxHQUFqQjtXQUFNQSxRLEdBQUFBLFEiLCJzb3VyY2VSb290IjoiL3NvdXJjZW1hcHMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFuaWZlc3QgPSB7XG4gIFwiX3ZlcnNpb25cIjogXCIxLjEuMFwiLFxuICBcInNhcC5hcHBcIjoge1xuICAgIFwiX3ZlcnNpb25cIjogXCIxLjEuMFwiLFxuICAgIFwiaWRcIjogXCJmaXRzdFwiLFxuICAgIFwidHlwZVwiOiBcImFwcGxpY2F0aW9uXCIsXG4gICAgXCJpMThuXCI6IFwiaTE4bi9pMThuLnByb3BlcnRpZXNcIixcbiAgICBcInRpdGxlXCI6IFwie3thcHBUaXRsZX19XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcInt7YXBwRGVzY3JpcHRpb259fVwiLFxuICAgIFwiYXBwbGljYXRpb25WZXJzaW9uXCI6IHtcbiAgICAgIFwidmVyc2lvblwiOiBcIjEuMC4wXCJcbiAgICB9LFxuICAgIFwiZGF0YVNvdXJjZXNcIjoge1xuICAgICAgXCJpbnZvaWNlUmVtb3RlXCI6IHtcbiAgICAgICAgXCJ1cmlcIjogXCIvZGVzdGluYXRpb25zL25vcnRod2luZC9WMi9Ob3J0aHdpbmQvTm9ydGh3aW5kLnN2Yy9cIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiT0RhdGFcIixcbiAgICAgICAgXCJzZXR0aW5nc1wiOiB7XG4gICAgICAgICAgXCJvZGF0YVZlcnNpb25cIjogXCIyLjBcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcInNhcC51aVwiOiB7XG4gICAgXCJfdmVyc2lvblwiOiBcIjEuMS4wXCIsXG4gICAgXCJ0ZWNobm9sb2d5XCI6IFwiVUk1XCIsXG4gICAgXCJkZXZpY2VUeXBlc1wiOiB7XG4gICAgICBcImRlc2t0b3BcIjogdHJ1ZSxcbiAgICAgIFwidGFibGV0XCI6IHRydWUsXG4gICAgICBcInBob25lXCI6IHRydWVcbiAgICB9LFxuICAgIFwic3VwcG9ydGVkVGhlbWVzXCI6IFtcbiAgICAgIFwic2FwX2JsdWVjcnlzdGFsXCJcbiAgICBdXG4gIH0sXG4gIFwic2FwLnVpNVwiOiB7XG4gICAgXCJfdmVyc2lvblwiOiBcIjEuMS4wXCIsXG4gICAgXCJyb290Vmlld1wiOiB7XG4gICAgICBcInZpZXdOYW1lXCI6IFwiZml0c3Qudmlld3MuQXBwXCIsXG4gICAgICBcInR5cGVcIjogXCJKU1wiXG4gICAgfSxcbiAgICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgICBcIm1pblVJNVZlcnNpb25cIjogXCIxLjMwXCIsXG4gICAgICBcImxpYnNcIjoge1xuICAgICAgICBcInNhcC5tXCI6IHt9XG4gICAgICB9XG4gICAgfSxcbiAgICBcIm1vZGVsc1wiOiB7XG4gICAgICBcImkxOG5cIjoge1xuICAgICAgICBcInR5cGVcIjogXCJzYXAudWkubW9kZWwucmVzb3VyY2UuUmVzb3VyY2VNb2RlbFwiLFxuICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICBcImJ1bmRsZU5hbWVcIjogXCJmaXRzdC5pMThuLmkxOG5cIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJpbnZvaWNlXCI6IHtcbiAgICAgICAgXCJkYXRhU291cmNlXCI6IFwiaW52b2ljZVJlbW90ZVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBcInJlc291cmNlc1wiOiB7XG4gICAgICBcImNzc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInVyaVwiOiBcImNzcy9zdHlsZS5jc3NcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICBcInJvdXRpbmdcIjoge1xuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBcInJvdXRlckNsYXNzXCI6IFwic2FwLm0ucm91dGluZy5Sb3V0ZXJcIixcbiAgICAgICAgXCJ2aWV3VHlwZVwiOiBcIkpTXCIsXG4gICAgICAgIFwidmlld1BhdGhcIjogXCJmaXRzdC52aWV3c1wiLFxuICAgICAgICBcImNvbnRyb2xJZFwiOiBcImFwcFwiLFxuICAgICAgICBcImNvbnRyb2xBZ2dyZWdhdGlvblwiOiBcInBhZ2VzXCJcbiAgICAgIH0sXG4gICAgICBcInJvdXRlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInBhdHRlcm5cIjogXCJcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJvdmVydmlld1wiLFxuICAgICAgICAgIFwidGFyZ2V0XCI6IFwib3ZlcnZpZXdcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwYXR0ZXJuXCI6IFwiZGV0YWlsL3tpbnZvaWNlUGF0aH1cIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJkZXRhaWxcIixcbiAgICAgICAgICBcInRhcmdldFwiOiBcImRldGFpbFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcInRhcmdldHNcIjoge1xuICAgICAgICBcIm92ZXJ2aWV3XCI6IHtcbiAgICAgICAgICBcInZpZXdOYW1lXCI6IFwiT3ZlcnZpZXdcIlxuICAgICAgICB9LFxuICAgICAgICBcImRldGFpbFwiOiB7XG4gICAgICAgICAgXCJ2aWV3TmFtZVwiOiBcIkRldGFpbFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07Il0sImZpbGUiOiJtYW5pZmVzdC5qcyJ9
