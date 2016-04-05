'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:TodtemplateCtrl
 * @description
 * # TodtemplateCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('TodtemplateCtrl', function ($scope) {

    // console.log($scope);

    $scope.schema = {
      _id: "56fc34da09a98486535f030f",
      objDescription: {
        en_US: "Note",
        es_AR: "Nota"
      },
      objName: "ENotaClass",
      objTitle: {
        en_US: "Note",
        es_AR: "Nota"
      },
      properties: {
        objName: {
          type: "string"
        },
        objTitle: {
          type: "string"
        },
        objDescription: {
          type: "string",
          default: "Nota"
        },
        objImplements: {
          type: "string"
        },
        objTags: {
          type: "array",
          items: {
            type: "string",
            default: "Nota"
          }
        },
        city: {
          type: "string"
        },
        reference: {
          type: "string"
        },
        body: {
          type: "string"
        },
        created: {
          type: "string",
          format: "date-time"
        },
        adminUnit: {
          type: "string"
        },
        user: {
          type: "string"
        },
        pdf: {
          type: "string"
        }
      },
      required: [
        "objName",
        "city",
        "body"
      ],
      type: "object"
    };




// [{
// _id: "56fc34da09a98486535f030f",
// objDescription: {
// en_US: "Note",
// es_AR: "Nota"
// },
// objName: "ENotaClass",
// objTitle: {
// en_US: "Note",
// es_AR: "Nota"
// },
// properties: {
// objName: {
// type: "string"
// },
// objTitle: {
// type: "string"
// },
// objDescription: {
// type: "string",
// default: "Nota"
// },
// objImplements: {
// type: "string"
// },
// objTags: {
// type: "array",
// items: {
// type: "string",
// default: "Nota"
// }
// },
// city: {
// type: "string"
// },
// reference: {
// type: "string"
// },
// body: {
// type: "string"
// },
// created: {
// type: "string",
// format: "date-time"
// },
// adminUnit: {
// type: "string"
// },
// user: {
// type: "string"
// },
// pdf: {
// type: "string"
// }
// },
// required: [
// "objName"
// ],
// type: "object"
// },
// {
// objName: "EProvClass",
// objTitle: {
// en_US: "Providence",
// es_AR: "Providencia"
// },
// objDescription: {
// en_US: "Providence",
// es_AR: "Providencia"
// },
// type: "object",
// properties: {
// objName: {
// type: "string"
// },
// objTitle: {
// type: "string"
// },
// objDescription: {
// type: "string",
// default: "Providencia"
// },
// objTags: {
// type: "array",
// items: {
// type: "string"
// }
// },
// header: {
// type: "string"
// },
// body: {
// type: "string"
// },
// created: {
// type: "string",
// format: "date-time"
// },
// adminUnit: {
// type: "string"
// },
// user: {
// type: "string"
// },
// pdf: {
// type: "string"
// }
// },
// required: [
// "objName"
// ],
// _id: "56fd44e1f2362ec114984b3a"
// }
// ]

    $scope.test = {};
    $scope.done = function(canceled) {
      if(!canceled) {
        //Enviar a api
      }
      console.log($scope.test);
    }
  });
