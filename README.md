# JIT Frontend Bootcamp - January 2018

- [Codebases](#codebases)
  - [00 - Base](#00-base)
  - [01 - React base](#01-react-base)
  - [02 - React base layout](#02-react-base-layout)
  - [03 - React class-based components](#03-react-class-based-components)
  - [04 - Component state and action binding](#04-component-state-and-action-binding)
  - [05 - List renderings and lifecycle hooks](#05-list-renderings-and-lifecycle-hooks)
  - [06 - `React.PureComponent`](#06-reactpurecomponent)
  - [07 - Redux store](#07-redux-store)
  - [08 - Recipes store](#08-recipes-store)
  - [09 - "Selected Recipe" screen](#09-selected-recipe-screen)


## Codebases
### 00 - Base
Contains basic Webpack configuration.
### 01 - React base
A simple *Hello World!* React-based component.
### 02 - React base layout
Includes initial component split embedded in a simple layout built with [Materialize](http://materializecss.com/). All React components within this codebase are stateless and defined as functions.
### 03 - React class-based components
Some of the components have been redefined as classes.
### 04 - Component state and action binding
The solution is now able to maintain a component state using React's API (`state`/`getState()`). There are also some examples how to organize the bindings between components nested on different levels (bottom-up hierarchy; *lifting state up*). This codebase contains an example of conditional rendering as well - to allow user to naively navigate between navbar tabs.
### 05 - List renderings and lifecycle hooks
In this section we are getting rid of unnecessary wrapper components and render the collections of components directly. It also contains the React components lifecycle interceptors to present their purpose and order of execution.
### 06 - `React.PureComponent`
At this stage we are starting to utilize `React.PureComponent` class to reduce the number of wasted renderings. Lifecycle hooks created for that particular reason have been removed.
### 07 - Redux store
This section presents the general idea of Redux state management. The store contains only the "selected tab id" state (to allow navigating through different scenes) and based on that we are creating both action and reducer, which later are getting connected to components promoted to containers.
### 08 - Recipes store
In this chapter we are extending the model of the application state to make it aware of all recipes-related data.
### 09 - "Selected Recipe" screen
Based on the knowledge gathered before we are building the "Selected Recipe" scene and couple it with the data describing application state.