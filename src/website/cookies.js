import { when, run } from '../utils';

const schema = { email: 'string', website: 'string' };
const getOptions = (options) => ({ version: '1.0', ...options });

const generator = ({ email, website, updated, version }) => `
# Cookies Policy
**Version ${version}${when(updated, `, effective date: ${updated}`)}.**

This Cookies Policy explains what Cookies are and how we use them. You should read this policy so you can understand what type of cookies we use, or the information we collect using Cookies and how that information is used.

Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from Cookies. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.

We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies we use.

## Definitions

For the purposes of this Cookies Policy:

Company (referred to as either "the Company", "we", "us" or "our" in this Cookies Policy) refers to ${website}. "you" means the individual accessing or using the website, or a company, or any legal entity on behalf of which such individual is accessing or using the website, as applicable. "Cookies" means small files that are placed on your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses. "website" refers to ${website}, accessible from ${website}.

## The use of the Cookies

Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when you go offline, while Session Cookies are deleted as soon as you close your web browser. We use both session and persistent Cookies for the purposes set out below:

### Necessary / Essential Cookies

 - Type: Session Cookies
 - Administered by: Us
 - Purpose: These Cookies are essential to provide you with services available through the website and to enable you to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that you have asked for cannot be provided, and we only use these Cookies to provide you with those services.

### Functionality Cookies

 - Type: Persistent Cookies
 - Administered by: Us
 - Purpose: These Cookies allow us to remember choices you make when you use the website, such as remembering your login details or language preference. The purpose of these Cookies is to provide you with a more personal experience and to avoid you having to re-enter your preferences every time you use the website.

## Your choices regarding cookies

If you prefer to avoid the use of Cookies on the website, first you must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with this website. you may use this option for preventing the use of Cookies at any time. If you do not accept Our Cookies, you may experience some inconvenience in your use of the website and some features may not function properly.

If you'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser.

 - For the Chrome web browser, please visit this page from Google: https://support.google.com/accounts/answer/32050
 - For the Internet Explorer web browser, please visit this page from Microsoft: http://support.microsoft.com/kb/278835
 - For the Firefox web browser, please visit this page from Mozilla: https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
 - For the Safari web browser, please visit this page from Apple: https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac

For any other web browser, please visit your web browser's official web pages.

## More Information about Cookies

You can learn more about cookies: [All About Cookies](http://www.allaboutcookies.org).

## Contact Us

If you have any questions about this Cookies Policy, you can contact us via email at [${email}](mailto:${email}).
`.trim();

export default (options) => run(generator, schema, getOptions(options));
