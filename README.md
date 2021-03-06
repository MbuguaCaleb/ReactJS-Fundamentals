# ReactJS-Fundamentals

Learning React Components and States

```

React is a Javascript library created by Facebook and
is used for building userinterfaces and frontend applications
```

```
React is often called a framework because of its behaviour and
capabilities.
```

```
React is the most popular front end framework for now
It runs on the client
Certain parts of the page can reload when you are using react

```
```
React is much lighter wsshen compared to angular since it does not include a
router and a HTTP CLIENT

```

**WhyuseReact**
```
(a)With vanilla JS Though you can manipulate the Dom,You end-up
writing much more code as compared to react.
(b)Makes front end JavaScript Much easier
(c)Develops much more interactive UIS
(d)Employs vitual DOM Hence while using react you can easily update the sections
   of your page
(e)JSX-with react you can easily incorporate javascript in your markup.A technique that 
does enable you incorporate Javascript in your markup.
(f)Makes it easier to work with teams when you are using React.

```


```
ReactJs is more about thinking in components!Achieving that is way too difficult while using 
Pure Vanilla JavaScript.
```
```
(a)Learn FetchAPI and more on promises
(b)Modern Javascript fron front to back travesy Media Course-Udemy
(c)Travesy Media Javascript crash course and ES6
(d)Redux -Application Level State!.
(e)Travesy Media React from front to back-Udemy
(f)React Hooks travesy media course-YOUTUBE

```

```
React State

(a)Components can have state which is an object that determines how that component renders and behaves--Just more simply a model of an Object

state ={

    title:'Caleb is finally learning React',
    body:'Its always about buiulding on the basics ..it makes coding doable',
    isFeatured:true
}


(b)We can also have application level state by using a state manager like redux or 
Reacts own context API--which basically is making of components that can be shared between the states.
```


**CreateReactAPP**
```
(a)A CLI Tool is used for creating React Applications.
(b)Uses WebPack but needs no configuration from you
(c)Comes bundles with a devServer for Hot Reload!
(d)npm run build is enabled while using react which enables you to 
compile your code into something that your browser can read.
```

```
Anatomy of a ReactComponent

(i)Functional compoent-newer approach that brings into life react hooks

(ii)Most commonly class based components.Here is the anatomy of a classbased 
component

Class Post extends React.Component {

    state ={

        title:'Post One',
        body'This is my post'

    }

    render(){

        return (

            <div>
            <h3>{this.state.title}</h3>
            <p>{this.state.body}</p>
            </div>
        )
    }
}


Render method brings into realisation JSX-rendering javascript
into html...converts the state modelled component

```


**code**

```
App.JS Is our main app component

The app.js is referenced in the index JS that calls the react single page ID in public index.html

Everything in react is a single page application referenced in the index.html root ID.

You can make other co
```


```
We have our mainApp Componet that points to the index.JS and which is referenced in the index.html

```


```
We may have classBased or functional based components.

```


```

From states you can pass properties to components
passing properties to the Todo Item

```
**PropTYpes**
```
Are a sort of validation of the properties passed to the components
from the classes.

They define what is to be expected in a particular component class

```

**styling**

```
Styling of the components--Inlines styling(double braces)



export class TodoItem extends Component {
    render() {
        return (
            <div style ={{backgroundColor: '#f4f4f4'}}>

        {/* Already has data from the propery thus you may extract */}
               <p>{this.props.todo.title}</p>
              
                
            </div>
        )
    }
}


(b)You may also style via a variable


(c)You may as well style via a function


(d)JSX Styles are different fromm the normal css styles
```

```
When adding unique methods to components in React,you should use the bind

ar arrow functions

```

```
Notice that there are react state manager like redux and context API
Without a state manager notice that you cannot call a state directly from
the class you are in.

You must go down the ladder if you are not using a state manager like redux...
Properties give you access to the states proressively.

```


```
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

```
```
Everything in react gets appended to app.JS because it is the one that has got a link to react indexJs
APP.CSS IS OUR GLOBAL STYLE SHEET WHEN CODING WITH REACT Js.
...React almost has got similar HTML COMPONENTS ...AS WELL AS CSS...ONLY A SMALL DIFFFERENCE IN THE MODEL
THAT REACT USES WHICH IS COMPONENTS AND STATES.

JSX STYLES ARE SLIGHTY DIFFERENT FROM THOSE IN HTML AND CSS...
As well as the HTML COMPONENTS ARE AS WELL SLIGHTLY DIFFERENT!!
You can as well use class names in your JSX..and style normally in CSS.

```

```
Forms

Work with the onChange to fire Events....
//remeber arrow functions role when using custom reactMethods
//There are Component level states...where the speified component
has its own state and you do not have to use the app level state

When submitting data via a form you should fire the submit event.

**Know where your state is...//helps in manual state Management
**Know where your component has been called.

```

**React-Router**
```
It is installed separatley react-router

npm i react-router-dom

React Fragment is used when you need to render an element but not as
a div...

Allows you to use JSX.

Router helps you in the implemetation of your urls...eg rendering to a different page

Notice that it is the rendered react components which display


```

**React-Fragments**
```
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

Rember by default that react is rendered as a single div..!But may times you may need to render mutiple elements..

You  can create as many components and routes as you wish..
```


**RouteLinks**

```
You can style in the app.css or component by component

You can syle the components or use classNames and style in the app.css

```


**ReactHttp**
```
Many times while using react you will be requiring a third party API or Library

```

**Axios for HTTP Requests**
```

Learn this from travesy Media
React LifeCycle Events...
(a)render
(b)componentDidMount-used in particular when making external Http Requests.

```

**PropTypes**
```
Remeber the practiceo of adding propType to property..
```

**Deployment**
```
npm rub build compiles all your react assests ready for deployment
```


**React ShortNotes**
```
By Mbugua Caleb
```

**Tutor**
```
Travesy Media..!
```