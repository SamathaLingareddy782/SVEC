### Front _end Technologies
- HTML
- CSS
- JAVASCRIPT
-  BOOTSTRAP FRAMEWORK
- Angular Framework
- REACT JS
## Backend Technologies
- Node.js
      - express .js
      - nodemoon
      -  cors
      - dotenv
- php
- c#
- java
-  python
### Databases
- MongoDb
-  Mysql
-  SQLite
-  firebase
- Postgressql
-  Oracle

+ VCS (Source Code Management)
       -  Distributed VCS
           -  Git,Mercurial
       -  Remote(Central) VCS
           - Github,Bitbucket

 ### Git
 - git init
 - git add filename
 - git add filename1 filename100
 - git add . or git add --all
 - git status          
 - Do git configurations (set user.name and user.email)
 - commit data with commit message
 - push the code into Github

 ### HTML5

 - Hyper Text Markup Language
    
 - Semantic Elements
       - header
       - section
       - article
       - aside
       - footer
       - table

 - Block Level Elements
       - h1 to h6
       - paragraphs
       - allsemantic elements
       - Text will start from new line
 - InLine Elements
        - span
        - img
        - anther element
        - nav
        - forms
        - input
        - textarea
        - legend
        - sup
        - sub

Task1:
===
 - Audio
 - Video
 - canvas
 - progress
 - datalist
 - meter
 - select
 ### CSS
 + Cascading Style Sheets
 + Types of CSS
 - InLine CSS
 - Internal CSS
 - External CSS    
 + Syntax of CSS
 '''
 selector {
           css properties

 }
 '''
 ### Selectors
 + Simple Selectors
   - Universal selector
   - By Element Name
   - Grouping selector(,)
   - Class selector
   - Id selector(#)

 + Combinators 
    + Descendent selector( )
    + Child selector(>)
    + Adjacent sibling selcetor(+)
    + General sibling selector(~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector   

### Box Modal
+ margin
+ border
+ padding
   - padding :10px(for all adjacent side)
   - padding :10px 30px(10px for top&bottom,30px for left&right)
   - padding :10px 300px 50px(10px for top,300px for left&right,50px for bottom)
   - padding: 10px 30px 4px 50px(top,right,bottom,left)
+ width
### Responsive Web design
### Flex-box
+ Display
    - none
    - inline
    - block
    - inline-block
### Animation    
### Responsive Web design
### Flex-box
 - display
    - Flex
       - Flex wrap
       - Justify-content
       - Flex-diredtion
       - Flex-flow       
### Media quires
 - Extra small devices(Mobiles)
     - max-width:600px
 - small devices(Large Phones)
      - min-width:600px
      - max-width:768px
 - Medium devices(small laptop)
      - min-width:768px
 - Large devices(Large laptops or desktops)
      - min-width:992px
 - Extra large devices()
       - min-width:1200px


 ```
 @media only screen (min-width:320px) and 
 (max-width:500px){
     CSS code
 }
 ```

 
Task3:
===
  - Navbar with response
### Bootstrap 4.6
  - It is a CSS framework
  - module(collection of functions and classes)  
  - package(collections of modules)
  - library(collection of packages)
  - framework(collection of libraries)
  + module --> package --> Library --> Framework 

  + Types of modes
     - offline
     - online
         - content delivery(CDN) links
+ background-color - bg
+ text-white


+ margin bootstrap (m-* (0-5))
    - 0 --> 0rem
    - 1 --> 0.25rem (4px)
    - 2 --> 0.5rem (8px)
    - 3 --> 1rem (16rem)
    - 4 --> 1.5rem (24px)
    - 5 --> 3rem (48px)
    - ml-5 (margin-left)
    - m (margin in all directions)
    - mt (margin-top)
    - mb (margin-bottom)
    - mr (margin-right)
+ padding (padding-left --> pl-5)


+ colors
  - primary
  - secondary
  - info
  - success
  - warning
  - danger
  - light
  - dark
  - white

+ we can use color classes for 
    - Buttons(btn btn-primary)
    - text(text-white)
    - background(bg-secondary)
    - alerts (alert alert-primary)

+ Grid System
   - col
   -  sm(small devices)
   - md(medium devices)
   - lg(large devices)
   - xl(Extra large devices)
### Java Script


 + In 1995 `Brenden Eich` introduced Javascript (ES-262) 
 + Javascript is loosely toupled and dynamic language
 + It is atext base programming language and we can run client-side and server-side (Node.Js) for dynamic web applications  
 -   ECHMA-Script (ES-6)
     - let & const  
     -  map() function
     - arrow function
     - classes
     - spread operator
     - rest parameter
+ Datatypes
    - Number
    - BigInt(2^53-1)
    - String
    - Boolean
    - Undefine
    - Null
    - Object
    - Array

+ variables
     - var,let & const
     - Scope
        - function level --> var
        - block level --> let &const
     - Redefine -->var ,let
     - Redeclare --> var
+ `typeof()`    
+ object

```
{

    name:"akhila"
}
```
### Alerts
+ To generate notifications    
-  alert
-  prompt(to take input from  the user)
- confirm 

+ console statments
  - `console.log()`
  - `console.info()`
  - `console.warn()`
  - `console.error()`
+ spread operators
  - To change array elements from one array to another
 ``` 
   ...variableName

```
+ Rest parameters
  + To handle function parameters

```
   ...parameters

```   
+ Destucturing of array &objects



+ Functions
     - Function with functionname
  ```
     function demo(x,y){
         return x+y
     }
  
  demo()
  ```
  - Anonymous function
  ```
 let demo= function (x,y)
 {
       return x+y
 }

 + for-in
    - To get index value of an array
+ for-of
     - To get elements in an array
+ forEach() (ES-5)
+ map --> (ES-6)         

### DOM
- Document Object Modal
- document
- history
- window
- navigator
+ DOM Methods
   - `getElementById`
   - `getelementsByClassName`
   - `querySelector`
   - `innerText`
   - `append`
   - `appendChild`
   - `innerHTML`
   - `setAttribute`
   - `classList`
   - `style`
   - `src`


### JSON
+ JavaScript Object Notation
    - To exchange information between client and server


```
    {
       "name":"Samatha Pothamsetty",
       "salary":"8LPA",
       "Designation":"MERN Develper",
       "Mobile":9989796959
    }

 ```   
 + Ajax call or promises(fetch API) or Axios


### ReactJs

### ReactJs Features
+ It is a Library
+ It follows compound base architecture
   - function component
   - class component
   - pure component
   - higher order component
+ It provides virtual DOM
+ It provides JSX (javascript and XML)
+ Unidirectional data flow
+ Single page Applications  


+ props
  
    - To pass data from one component to another component we will use props
    - props are immutable




+ states

- In react to maintain information we will use states
```
constructor() {

super();
this.state={

}

}
```

+ Project Environmental setups
    - [Download Visual studio Code]()
    - [Download Nodejs](https://nodejs.org/en/download/)
    - install nodejs and check versions os `node` and `npm`
        - `node -v`
        - `npm -v`(node package manager)
    - `webpack` and `babel`
    - `create-react-app`
        - `npm install create-react-app`
            -`create-react-app projectname`
    - `npx create-react-app appname`(node package runner)

+ Index.html
+ index.js
+ App.js
+ Index Page
    - nav.j
    - body.js
    - footer.js
    + Home.js
       - nav
       - body
       - footer

+ Login.js
+ Register
+ About
+ contact    


### Reference links
- [Flaiticon](https://www.Flaticon.com)
- [color codes](https://htmlcolorcodes.com/)
- [Contrast checker](https://webaim.org/resources/contrastchecker/)