# openterms
Generate legal texts in markdown format. Lightweight, 0 dependencies.
**DISCLAIMER: This is only a placeholder generator and can't replace services of a lawyer. Use it at your own risk.**

# Usage:

```javascript
import { appPrivacy, appTerms, webCookies, webPrivacy, webTerms } from 'openterms';

const options = {
  company: 'der Kode',
  email: 'contact@derkode.com',
  website: 'https://derkode.com'
};
const markdown = webTerms(options);
```

## Options

Options are provided in [yup](https://github.com/jquense/yup) schema format

### appPrivacy
```javascript
const schema = yup.object().shape({
  company: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter').required('Required'),
  email: yup.string().email('Must be a valid E-Mail').required('Required'),
  appName: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter').required('Required'),

  minimumAge: yup.number().min(0, 'Must be higher').max(150, 'Must be lower'),
  dataDownloadUrl: yup.string().url('Must be a valid URL'),

  conditions: yup.object().shape({
    shop: yup.bool(),
    analytics: yup.bool(),
    retargeting: yup.bool(),
    tracking: yup.bool(),
    gdpr: yup.bool(),
  }),

  extras: yup.object().shape({
    paymentOptions: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter'),
    deviceInfo: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter'),
  }),
});
```

### appTerms
```javascript
const schema = yup.object().shape({
  company: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter').required('Required'),
  email: yup.string().email('Must be a valid E-Mail').required('Required'),
  appName: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter').required('Required'),

  country: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter'),
  conditions: yup.object().shape({
    shop: yup.bool(),
  }),
});
```

### webCookies
```javascript
const schema = yup.object().shape({
  email: yup.string().email('Must be a valid E-Mail').required('Required'),
  website: yup.string().url('Must be a valid URL'),
});
```

### webPrivacy
```javascript
const schema = yup.object().shape({
  company: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter').required('Required'),
  email: yup.string().email('Must be a valid E-Mail').required('Required'),
  website: yup.string().url('Must be a valid URL'),

  minimumAge: yup.number().min(0, 'Must be higher').max(150, 'Must be lower'),
  dataDownloadUrl: yup.string().url('Must be a valid URL'),

  conditions: yup.object().shape({
    shop: yup.bool(),
    analytics: yup.bool(),
    retargeting: yup.bool(),
    tracking: yup.bool(),
    gdpr: yup.bool(),
  }),

  extras: yup.object().shape({
    paymentOptions: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter'),
    deviceInfo: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter'),
  }),
});
```

### webTerms
```javascript
const schema = yup.object().shape({
  company: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter').required('Required'),
  email: yup.string().email('Must be a valid E-Mail').required('Required'),
  website: yup.string().url('Must be a valid URL'),

  country: yup.string().min(2, 'Must be longer').max(200, 'Must be shorter'),
  conditions: yup.object().shape({
    shop: yup.bool(),
  }),
});
```

## Formatting output

### As plain text

You can use [remove-markdown](https://github.com/stiang/remove-markdown) module to clean up any markup:
```javascript
import removeMd from 'remove-markdown';

const text = removeMd(generator(options));
```

### As HTML

You can use [marked](https://github.com/markedjs/marked) to render HTML:
```javascript
import marked from 'marked';

const text = marked(generator(options));
```

### As React component

You can use [react-markdown](https://github.com/rexxars/react-markdown) to avoid dangerouslySetInnerHTML:
```javascript
import React from 'react';
import ReactMarkdown from 'react-markdown';

const node =  <ReactMarkdown source={generator(options)} />;
```
