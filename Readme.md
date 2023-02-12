## TLDR

Boilerplate: includes `react`, `react-router-dom`, `redux-toolkit` and `react-query`, `vite.js`, `eslint` & `prettier`& ofc `typescript`. 

> Those of you who still find it enjoyable to learn the details of, say, a programming language - being able to happily recite off if NaN equals or does not equal null - you just don't yet understand how utterly fucked the whole thing is. If you think it would be cute to align all of the equals signs in your code, if you spend time configuring your window manager or editor, if put unicode check marks in your test runner, if you add unnecessary hierarchies in your code directories, if you are doing anything beyond just solving the problem - you don't understand how fucked the whole thing is. No one gives a fuck about the glib object model. - **Ryan Dahl** 


![gif](https://user-images.githubusercontent.com/7026863/217359561-f22508b9-3d65-4a2a-bacf-8be52a6fed4d.gif)

![gif](https://user-images.githubusercontent.com/7026863/217360861-08489d98-4445-4d55-b1e0-e384847817e6.gif)

![gif](https://user-images.githubusercontent.com/7026863/217360874-5d9fd81d-489a-4095-aac8-892edbbfbb40.gif)



### Routes

| Path      |    Page    | ```@/features/***```
| :-------------- | :-----------: | :-----------: | 
| '/'       |     Dashboard      |   dashboard      | 
| 'archive'       |     ArchiveLanding      |   archive      | 
| 'docs'       |     DocumentationLanding      |   documentation      | 
| 'stories'       |     StoriesLanding      |   stories      | 
| *       |     Layout      |   layout      | 
| *       |     LayoutError      |   layout      | 


### Store

```ts

 const store = configureStore({
  reducer: {
    layout: settingsStore,
    archive: archiveStore,
    stories: storiesStore,
  },
});

```

### Notes 

On **Stories** there is an example of ```react-query``` calling ```swapi``` graphQL endpoint.
On **Archive** there is an example of ```@/system/hooks/useSearchUrl``` in action. 

### Develop

Powered by Vite, run:

```bash

    # develop
    yarn dev

    # build 
    yarn build
```

## System

```@/system/components/Core``` are primitives/factories to compose specialized components out of them. 

From ```@/system/components/Core/Font``` we can export typographic components like ```<HelveticaNeue/>```or ```<HelveticaNeueXL/>```. Same with ```@/system/components/Core/Icon```.

From ```@/system/components/Core/Group``` we can export layout components like ```<Row/>```, ```<Col/>```  or ```<View/>```.

From ```@/system/components/Core/Inputs``` we can export interactive components and specialize them as ```<ButtonAccent/>``` on top of ```<Button/>```. Check folder  ```@/system/components/Buttons```. 
Same idea apply to ```<Card/>``` variants on ```@/system/components/Cards```.

Working on **namings**, ```@/system/components/Couple``` is great but unless I can name it properly it will never be used by others :) 

**System is documented** on it's own route if you browse demo / run app locally. 

### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)


