## Reproduction steps

- clone the repo https://github.com/aliavo/safari-chrome-iframe
- `npm install`
- `npm start`
- open http://localhost:3000/ in Safari browser
- click on "Navigate to page 2"
- click on "Change src"
- click on "Navigate to page 3"
- click on "Navigate to page 4"
- click on "Navigate back"
- opens http://localhost:3000/page2, but it should be http://localhost:3000/page3, as in the Chrome browser.

### Video with reproduction

https://github.com/user-attachments/assets/392371d5-4f98-43e5-ae67-5ff2ba56e263

### Linked issue

https://github.com/remix-run/react-router/issues/13592
