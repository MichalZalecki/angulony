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

### Style guides
#### Angular
* https://github.com/mgechev/angularjs-style-guide
* https://github.com/johnpapa/angular-styleguide

### Other
* http://blog.romanliutikov.com/post/63383858003/how-to-forget-about-jquery-and-start-using-native
* http://toddmotto.com/digging-into-angulars-controller-as-syntax/
* http://www.technofattie.com/2014/07/01/using-angular-forms-with-controller-as-syntax.html

## TODO

* Styles
* templateProvider vs templateUrl
* index.js in modules

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
