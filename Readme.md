## TLDR

Interlacing `react`, `react-router-dom`, `redux-toolkit` and `react-query`, `vite.js`, `eslint` & `prettier`& ofc `typescript`. 

### Plan 

An **App** easy to extend/care can be achieved with 'n' HTML forms, a memoized-store and fetch-with-cache. `redux-toolkit` and `react-query` work well. For the rendering part we can do it a thousand ways, fond of custom **system**s.

### System

Previous work seen in [boost repository](https://github.com/polmoneys/boost). 

### Components

Aiming at **P.O.U.R.**, as it stands for "Perceivable", "Operable", "Understandable", and "Robust".

```@/system/components/Core``` are primitives/factories to compose specialized components out of them. 

From ```@/system/components/Core/Font``` we can export typographic components like ```<HelveticaNeue/>```or ```<HelveticaNeueXL/>```. Same with ```@/system/components/Core/Icon```.

From ```@/system/components/Core/Group``` we can export layout components like ```<Row/>```, ```<Col/>```  or ```<View/>```.

From ```@/system/components/Core/Inputs``` we can export interactive components and specialize them as ```<ButtonAccent/>``` on top of ```<Button/>```. Check folder  ```@/system/components/Buttons```. 
Same idea apply to ```<Card/>``` variants on ```@/system/components/Cards```.

### Hooks

Under ```@/system/hooks/```, some honorable mentions ```useLeader```,```useArray```,```useSearchUrl```,```useStateWithPrevious```,```useMenu```.

Expect classics like ```useActionOutside```,  ```useUpdateEffect```,```useFocusReturn```, ```useBrowserTab```, and boring form **mgmt** like ```useFormEnter```, ```useFormLeave```, ```useInputValidation```,

### Testing

Nothing beats human testing but humans have bad days so `jest`, `fast-check` and `Playwright` are in play. 


### Motivation 

> Those of you who still find it enjoyable to learn the details of, say, a programming language - being able to happily recite off if NaN equals or does not equal null - you just don't yet understand how utterly fucked the whole thing is. If you think it would be cute to align all of the equals signs in your code, if you spend time configuring your window manager or editor, if put unicode check marks in your test runner, if you add unnecessary hierarchies in your code directories, if you are doing anything beyond just solving the problem - you don't understand how fucked the whole thing is. No one gives a fuck about the glib object model. - **Ryan Dahl** 