# BairesDev-Tech-Interview

Repositório criado para armazenar o desafio de Vanilla Front-End de uma entrevista técnica.

## Regras do Projeto

### User Data Management

<strong>Objective:</strong> Implement a series of JavaScript functions in a provided template that fetches, sorts, filters, and displays a list of users. The aim is to achieve a dynamic user table that responds to user interactions.
<br><br>
<strong>Tasks:</strong>
<br><br>
  <strong>1. Fetch User Data:</strong>
  <ul>
    <li>Complete the fetchData(url) function which should return a promsie.</li>
    <li>The function takes a URL as its argument. Your task is to fetch data from this URL and return the parsed JSON response.</li>
  </ul>
  <br>
    <strong>2. Sort Users:</strong>
  <ul>
    <li>Complete the sortUsers(user, order) function</li>
    <li>The function should accept an array of user objects and an order (either 1 or -1)</li>
    <li>If order is 1, sort the users in ascending order based on their name.</li>
    <li>If orders is -1, sort the users in descending order based on their name.</li>
    <li>Return the sorted users array.</li>
  </ul>
    <br>
    <strong>3. Filter users by Name:</strong>
  <ul>
    <li>Complete the sortUsers(user, order) function</li>
    <li>The function should accept an array of user objects and an order (either 1 or -1)</li>
    <li>If order is 1, sort the users in ascending order based on their name.</li>
    <li>If orders is -1, sort the users in descending order based on their name.</li>
    <li>Return the sorted users array.</li>
  </ul>
      <br>
    <strong>4. Display User Data:</strong>
  <ul>
    <li>The function displayData(tbody, users) takes a DOM element (tbody) and an array of users. It will update the tbody element's inner HTML to display the user's data in tabular form.</li>
    <li>Ensure the user's data is displayed in the format as provided in the function template.</li>
  </ul>
      <br>
    <strong>5. Event Listeners:</strong>
  <ul>
    <li>In the initiliazeApp() function, two event listeners are waiting to be implemented:</li>
      1. When a visitor clicks the sortBtn element, the displayed users should be ordered. Asceding order for the first click and desceding order for the subsequent click.
    <br>
      2. When a visitor inputs a name in the nameFilter element, the table should only display users associated with that name.
  </ul>
