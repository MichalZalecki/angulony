# Angulony

* each page in its own directory
  * routing configs are required in main.js

## Sources

### WebPack workflow
* http://shmck.com/webpack-angular-part-1/
* http://shmck.com/webpack-angular-part-2/
* http://shmck.com/webpack-angular-part-3/
* http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html
* https://github.com/KamilLelonek/react-dci/

### AngularJS workflow
* http://toddmotto.com/digging-into-angulars-controller-as-syntax/
* http://www.technofattie.com/2014/07/01/using-angular-forms-with-controller-as-syntax.html

### Style guides
#### Angular
* https://github.com/mgechev/angularjs-style-guide
* https://github.com/johnpapa/angular-styleguide

### Other
* http://blog.romanliutikov.com/post/63383858003/how-to-forget-about-jquery-and-start-using-native
  (awesome but the problem is... jQury is a dependency of Zurb Foundation, Bootstrap and other *frameworks*)

## Set up an API in RoR

```
rails new gimme_api
cd gimme_api
rails g scaffold Client first_name last_name email
rake db:migrate
cd ..
cp app/* gimme_api/public/ -r
```

It does the job for example purpose.

## TODO

* `template` vs `templateProvider` vs `templateUrl`
  (one big all the time vs many chunks, each when needed)
* `index.js` in modules populates modeule routing
* Zurb Foundation: JS files

