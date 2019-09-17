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