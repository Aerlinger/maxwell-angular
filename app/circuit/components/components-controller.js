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
              "name": "resistance",
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
              "name": "capacitance",
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
              "name": "inductance",
              "unit": "Henries",
              "symbol": "H",
              "default": 1e-5
            }
          ]
        }
      ];

      this.createdComponents = [];
      this.placingComponent = null;

      this.isPlacingComponent = function (component) {
        return component === this.placingComponent;
      };

      this.setPlacingComponent = function (component) {
        this.placingComponent = component;
        this.placeComponent(component, 0, 0);
      };

      this.unsetPlacingComponent = function() {
        this.placingComponent = null;
      };

      this.placeComponent = function(component, xPos, yPos) {
        this.createdComponents.push(component);
      };

      this.moveComponent = function($event, component) {
        //console.log($event.offsetX, $event.offsetY);
      };

      this.getPlacingComponent = function() {
        return this.placingComponent;
      };
    });
