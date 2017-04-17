## Input 

###Usage Example

```
<m-input  placeholder="Please enter your name" label="Name" v-on:onblur="onBlur" v-model="text" :message="message"></m-input>
```

###API

| Attribute      |Description  |Type  |Accepted values|Default|
| ------------- |:-------------:| -----:|-----:|-----:|
| placeholder| placeholder of text-input element | string|/|/|
| label| label of text-input element | string|/|/|
| v-on:onblur| blur callback| function|/|/|
| v-model| v-model of input| string|/|/|
|:message| message below input | string|/|/|