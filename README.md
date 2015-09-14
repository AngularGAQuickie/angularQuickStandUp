# AngularJS

* Is a front-end FRAMEWORK (similar to Backbone)
* Created by Google
* Templated with HTML

## Why AngularJS?

* Two-way Data Binding
* Gives your app a structure
* Directives
* AngularJS is a team player

### Two-way Data Binding

Essentially this means that your view and your model are always lined up (and truthful). AngularJS is constantly in a cycle of updating each of these.
* Example: if your view is changed your model instantly updates to reflect the change and vice versa
* (embed photo)

### Gives your app a structure

JS is inherently unorganized so using AngularJS allows your code to be organized into modules. These modules can follow MVC (like Rails), MV* (Backbone), or MVW (model, view, whatever you want).
* Example:

### Directives

This is done via 'directives'. A directive is a marker in your HTML that tells AngularJS's HTML compiler to attach a specified behavior to that DOM element. This directive in HTML is defined by a name. Both the directive and name together, correspond to logic in your JS file. Since your HTML element has this directive, AngularJS will apply the logic to it that corresponds in your JS.

* Example:
  ```<div ngModel="aModelInAngular"></div>``` in HTML
  ```in JS```
  * The ngModel directive is outlined in your JS
  * The ngModel is called in your HTML tags
  * AngularJS has built in directives like ngBind, ngClass, ngModel or you can create your own directive.
  * Angular will read HTML directives as camelCase and will 'normalize' directives not written in CamelCase.
    * Example ngModel = ngModel, ng-Model = ngModel, ng_model = ngModel

  *


### AngularJS is a team player

* You can use as much or as little AngularJS in your app as you need. It works well with other fron-end frameworks. If there is only a small part of your app that needs the specificity of AngularJS you can apply it.

## Model/Scope

### Other
$ means it is a core AngularJS service
