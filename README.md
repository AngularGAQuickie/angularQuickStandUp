# AngularJS

* Is a front-end FRAMEWORK (similar to Backbone)
* Created by Google
* Templated with HTML
* [AngularJS in a day](http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/)
* [How to get started in AngularJS](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)

# Why AngularJS?

* Two-way Data Binding
* Gives your app a structure
* Directives
* AngularJS is a team player

### Two-way Data Binding

Essentially this means that your view and your model are always lined up (and truthful). AngularJS is constantly in a cycle of updating each of these.
* Example: if your view is changed your model instantly updates to reflect the change and vice versa
<br /><br />
![photo](http://www.softwareassociates.in/wp-content/uploads/2014/05/AngularJS-2-way-binding-300x278.jpg)

### Gives your app a structure

JS is inherently unorganized so using AngularJS allows your code to be organized. AngularJS can follow MVC (like Rails), MV* (Backbone), or MVW (model, view, whatever you want).

### Directives

A directive is something that creates a new syntax. It is also a marker in your HTML that tells AngularJS's HTML compiler to attach a specified behavior(or new syntax) to that DOM element. This directive in HTML is defined by a name. Both the directive and name together, correspond to logic in your JS file. Since your HTML element has this directive, AngularJS will apply the logic to it that corresponds in your JS.

* Example:<br />
  HTML: <br />```<div ng-Controller="myController"></div>``` <br /><br />
  and corresponding directive in JS:<br />
  ```
  app.controller("myController", function($scope){
      $scope.person = {
        name: 'Jackie'
      };
    });
    ```

  * AngularJS has built in directives like ngBind, ngClass, ngModel or you can create your own directive.
  * Angular will read HTML directives as camelCase and will 'normalize' directives not written in CamelCase.

### AngularJS is a team player

* You can use as much or as little AngularJS in your app as you need. It works well with other fron-end frameworks. If there is only a small part of your app that needs the specificity of AngularJS you can apply it.
<br /><br />
![](http://www.100percentjs.com/wp-content/uploads/2013/12/mvclogos-300x117.jpeg)

# MVC

## AngularJS Model
* Models
 Encapsulates the application's data structure (usually JSON) and provides an API to access and manipulate that data.
* A model notifies it's associated views and controllers when there has been a change. This allows the view to render an updated output.
<br /><br />
![](http://thefunniestpictures.com/wp-content/uploads/2013/08/funny-picture-oh-you-model-whose-your-agency-instagram.jpg)

## AngularJS View
* Your HTML!

## AngularJS Controllers
* Middleman between the Model and Controller (logic). This is your direct access from the server to the view.
* This is what allows you to update data on the fly.
<br /><br />
![](http://www.myextralife.com/wp-content/uploads/2007/10/usb-nes-controller.jpg)

# Scope

## $scope

* Is an object that refers to the model. It is passed through as an argument in the model.
* $scope can provide us with a lot of data from our function- the important thing to take away is that it ensures your namespace is kept local within each controller.
* $rootscope is the AngularJS version of global scope. Anything that you'd like to keep global is kept in a separate method that calls $rootscope.
* Angular uses prototypical inheritance which means that each controller inherits from the $rootscope (and a parent controller if specified).
<br /><br />
![](http://www.ng-newsletter.com/images/beginners/nested-scope-parents.png)

### Of note

* the syntax of '$' means it is a core AngularJS service
