## TLDR

Boilerplate: includes `react`, `react-router-dom`, `redux-toolkit` and `react-query` & ofc `typescript`.

> Those of you who still find it enjoyable to learn the details of, say, a programming language - being able to happily recite off if NaN equals or does not equal null - you just don't yet understand how utterly fucked the whole thing is. If you think it would be cute to align all of the equals signs in your code, if you spend time configuring your window manager or editor, if put unicode check marks in your test runner, if you add unnecessary hierarchies in your code directories, if you are doing anything beyond just solving the problem - you don't understand how fucked the whole thing is. No one gives a fuck about the glib object model. - **Ryan Dahl** 

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

Working on **namings**, ```@/system/components/Pair``` is great but unless I can name it properly it will never be used by others :) 

**System is documented** on it's own route if you browse demo / run app locally. 

### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)


