Angular2-Form using Signature Pad

This Application is built on Angular2 Framework which uses it's form modules to create a simple form to enter some details of the customer along with a digital signature done through  <a href="https://www.npmjs.com/package/angular2-signaturepad" target="_blank" title=" angular2-signaturepad"> angular2-signaturepad </a>.It also generates a json with all the form fields the user have entered.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Create a new project 

Clone this repo into new project folder (e.g., `my-proj`).
```shell
git clone https://github.com/aanirudhraj/Angular2-form_signaturepad.git  my-proj
cd my-proj
```

## Install npm packages

Once you are in my-proj(for this example) directory following commands should be run to install npm.

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

Now you can Navigate to `http://localhost:4200/` on any browser, you can see my Form application loads. if you make any changes to my source code saving the code will automatically load the application to browser. 

## Demo

This app was generated using `ng-cli`. It contains a reference implementation of [angular2-signaturepad](https://www.npmjs.com/package/angular2-signaturepad).

* [Import](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts#L7) `SignaturePadModule` into the app's [main NgModule](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.module.ts#L20)
* Create a [form component](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/signature-field/signature-field.component.ts#L1-L64) to act as a [ControlValueAccessor](https://angular.io/docs/ts/latest/api/forms/index/ControlValueAccessor-interface.html) for the [SignaturePad](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/signature-field/signature-field.component.html#L1)
* Add a [form](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.component.html#L5-L7) to the main [app component](https://github.com/lathonez/angular2-signaturepad-demo/blob/master/src/app/app.component.ts#L13-L20), leveraging the form component created above.
