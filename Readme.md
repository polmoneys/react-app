## TLDR

Boilerplate: includes `react`, `react-router-dom`, `redux-toolkit` and `react-query`, `vite.js`, `eslint` & `prettier`& ofc `typescript`. 

> Those of you who still find it enjoyable to learn the details of, say, a programming language - being able to happily recite off if NaN equals or does not equal null - you just don't yet understand how utterly fucked the whole thing is. If you think it would be cute to align all of the equals signs in your code, if you spend time configuring your window manager or editor, if put unicode check marks in your test runner, if you add unnecessary hierarchies in your code directories, if you are doing anything beyond just solving the problem - you don't understand how fucked the whole thing is. No one gives a fuck about the glib object model. - **Ryan Dahl** 


<img width="1245" alt="Screenshot 2023-02-20 at 18 05 47" src="https://user-images.githubusercontent.com/7026863/220166459-65641aa3-e392-47ce-9e45-e35f12e22fc6.png">


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

<img width="1245" alt="Screenshot 2023-02-20 at 18 05 50" src="https://user-images.githubusercontent.com/7026863/220166475-589d9940-0266-4bf8-b973-103a787d43cd.png">

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

<img width="1245" alt="Screenshot 2023-02-20 at 18 05 57" src="https://user-images.githubusercontent.com/7026863/220166486-95fe65b7-dc59-45c9-aa00-077b3f0be5d5.png">

### Feedback 


[Twitter](https://twitter.com/polmoneys)

[polmoneys.com](https://polmoneys.com)


