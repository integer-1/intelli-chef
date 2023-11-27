# IntelliChef
The Intellichef App is a user-friendly platform designed to help you decide what to cook based on the ingredients you have in your kitchen. It utilizes the ChatGPT API and React to provide a seamless experience in generating, saving, and managing recipes.

## Getting Started
Follow these steps to set up and run the IntelliChef App:

</br>

### Built with
<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React"/>
<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript"/>
<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="Typescript"/>
<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/>
<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="CSS"/>
<img height="32" src='./public/svg/sqlite-1.svg'  alt="MySQLite"/>
<img height="32" src="https://knexjs.org/knex-logo.png" alt="knex js"/>
<img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="Nodejs"/>
<img height="32" src="./public/svg/01-symbol_primary-blue-docker-logo.svg" alt="docker"/>
<img height="32" src="https://ih1.redbubble.net/image.4645193321.0183/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="ChatGPTAPI"/>

</br>

### Prerequisites

- [Node.js](https://nodejs.org/): Ensure Node.js is installed on your machine.

</br>


### Installation
- Follow these steps to set up and run the IntelliChef App:


  1. Get a free API Key at [https://platform.openai.com/api-keys]

  2. Clone this repo and navigate to it:
      ```sh
      git clone git@github.com:pikopiko-2023/intelliChef.git
      cd intelliChef
      ```

  3. Install NPM packages:

      ```sh
      npm install
      ```

  4. Enter your API in `.env`
      ```js
      CHAT_API_KEY = ENTER YOUR API KEY
      ```

  5. You should have Knex.js installed as a dependency
      ```sh
      npm install knex
      ```

  6. Make sure the database schema is up to date with the latest changes.
      ```sh
      npm run knex migrate:latest
      npm run knex seed:run
      ```

  6. Start the server with `npm run dev`<br>
      You can find the server running on [http://localhost:3000](http://localhost:3000) and the client on [http://localhost:5173](http://localhost:5173).

</br>

### How to Use
- Follow these simple steps to make the most of the Intellichef App:

  1. **Account Creation or Login:** </br>
  Log in to the app or create a new account to establish your user profile.

  2. **Input Your Ingredients:**</br>
  Open the app and use the input field to list the ingredients available in your fridge or pantry.

  3. **Generate Recipe Suggestions:**</br>
  After entering your ingredients, click the "Generate Recipes" button to receive personalized recipe suggestions.

  4. **Explore Recommendations:** </br>
  Explore the three suggested recipes. Click on the one that piques your interest for detailed information.

  5. **Save Your Favorite Recipes:**</br>
  If you discover a recipe you love, save it to your favorites for quick access.

  6. **Efficiently Manage Saved Recipes:**</br>
  Access and organize your saved recipes by clicking on "Manage My Recipes" in the sidebar.

  7. **Quick Navigation:** </br>
      - Click on "Generate Recipe" in the sidebar to swiftly generate a new recipe.
      - Below the sidebar, clicking on a saved recipe's name directly navigates you to the detailed recipe page.

    
    **Enjoy cooking with ease using our app!**

</br>


## Contact
- For any questions, feedback, or improvement suggestions related to IntelliChef, feel free to reach out to our team:
  - Suwon <br>
    - Email: integer.won@gmail.com
    - GitHub: [integer-1](https://github.com/integer-1)
  - Ben <br>
    - Email: benedict.velasco@outlook.com
    - GitHub: [benNthen](https://github.com/benNthen)
  - Jayde  <br>
    - Email: j4yd3.m3dd3r@gmail.com
    - GitHub: [jayde-medder](https://github.com/jayde-medder)



## Notes
- **API Version:** The project currently uses the ChatGPT API with the GPT-4 model. However, please note that after the project is completed, it is scheduled to transition to the GPT-3.5-turbo model. Kindly take note of this for future reference.
