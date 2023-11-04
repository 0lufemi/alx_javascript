# JS HTML DOM manipulation

## 0. Play with the DOM
Write a JavaScript program that demonstrates the basic concept of the DOM by accessing and modifying an HTML element.
Use the HTML code below as the starting point and add your JavaScript code as an internal ```<script>``` tag:

```
<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>
</body>
</html>
```

* Write JavaScript code to select the element using its ```id``` and store it in a variable
* Use the DOM API to modify the content of the ```<p>``` element to ```I successfully updated this paragraph with javascript```
* Make use of ```document.getElementById```
* Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

## 1. Selecting HTML Elements Using Selectors
Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.
Use the HTML code below as the starting point and add your JavaScript code as an internal ```<script>``` tag:
```
<!DOCTYPE html>
<html>
<head>
  <title>Selecting Elements</title>
  <style>
    .highlight {
      color: red;
    }
  </style>
</head>
<body>
  <p class="highlight">This is a highlighted paragraph.</p>
  <p>This is a normal paragraph.</p>
</body>
</html>
```
* Use the DOM API to modify the format of the ```<p class="highlight">``` element to make the content boldened
* Make use of ```document.querySelectorAll```
* Verify that the program successfully modifies the element content when the HTML file is opened in a browser.
