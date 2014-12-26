angular.module("Maxwell")
    .controller("ComponentCtrl", function () {
      this.prototypes = [
        {
          "type": "Resistor",
          "category": "Analog",
          "linear": true,
          "nodeCount": 2,
          "description": "Classical resistor",
          "parameters": [
            {
              "name": "Resistance",
              "unit": "Ohms",
              "symbol": "Ω",
              "default": 100
            }
          ]
        },
        {
          "type": "Capacitor",
          "category": "Analog",
          "linear": true,
          "nodeCount": 2,
          "description": "Classical capacitor",
          "parameters": [
            {
              "name": "Capacitance",
              "unit": "Farads",
              "symbol": "F",
              "default": 1e-5
            }
          ]
        },
        {
          "type": "Inductor",
          "category": "Analog",
          "linear": true,
          "nodeCount": 2,
          "description": "Classical inductor",
          "parameters": [
            {
              "name": "Inductance",
              "unit": "Henries",
              "symbol": "H",
              "default": 1e-5
            },
            {
              name: "Internal resistance",
              "unit": "Ohms",
              "symbol": "Ω",
              default: 0
            }
          ]
        }
      ];

      var components = this;

      this.createdComponents = [];
      this.placingComponent = null;

      this.isPlacingComponent = function () {
        return this.placingComponent != null;
      };

      this.setPlacingComponent = function (component) {
        this.placingComponent = component;
        this.placingComponent.x = 0;
        this.placingComponent.y = 0;
        this.placeComponent(component, 0, 0);
      };

      this.unsetPlacingComponent = function () {
        this.placingComponent = null;
      };

      this.placeComponent = function (component, xPos, yPos) {
        this.createdComponents.push(component);
      };

      this.moveComponent = function ($event) {
        if (components.isPlacingComponent()) {
          components.placingComponent.x = $event.offsetX;
          components.placingComponent.y = $event.offsetY;
        }
      };

      this.getPlacingComponent = function () {
        return this.placingComponent;
      };

      this.placingStyle = function () {
        if (components.isPlacingComponent()) {
          return {
            left: components.getPlacingComponent().x,
            top: components.getPlacingComponent().y
          };
        }
      }
    });
