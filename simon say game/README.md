
#  Simon Says Game

A fun and interactive memory game built using **HTML, CSS, and JavaScript**. The game challenges players to remember and repeat an increasingly long sequence of colors. Each correct round increases the difficulty by adding a new random color to the sequence.

---

##  Preview

The game consists of four colored buttons:

- 🔴 Red
- 🟡 Yellow
- 🟢 Green
- 🟣 Purple

Press any key to start the game and repeat the color sequence shown by the game.

---

##  Features

-  Classic Simon Says gameplay
-  Random color sequence generation
-  Flash animation for game and user clicks
-  Level progression
-  Game Over detection
-  Restart the game by pressing any key
-  Simple and beginner-friendly project

---

##  Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

##  Project Structure

```
Simon-Says-Game/
│── index.html
│── style.css
│── script.js
└── README.md
```

---

##  How to Play

1. Press any key to start the game.
2. Watch the button that flashes.
3. Click the same button.
4. Each new level adds one more random color to the sequence.
5. Repeat the complete sequence correctly.
6. If you click the wrong button, the game ends.
7. Press any key to play again.

---

##  Game Logic

- The game generates a random color at every level.
- The generated color is stored in the `gameSeq` array.
- The player's clicks are stored in the `userSeq` array.
- After each click, the game checks whether the player's sequence matches the generated sequence.
- If the sequence is correct, the next level begins.
- If the sequence is incorrect, the game displays **Game Over** and resets.

---
<!-- in next few days
##  Screenshot

Add a screenshot inside a `screenshots` folder.

```
screenshots/
    preview.png
```

-->
---

##  Installation

1. Clone the repository

```bash
git clone https://github.com/Ashish-Kumar1947/Simon-Says-Game.git
```

2. Open the project folder.

3. Run `index.html` in your browser.

No external libraries or frameworks are required.

---

##  Future Improvements

-  Add sound effects for each button.
-  Improve mobile responsiveness.
-  High score tracker using Local Storage.
-  Dark mode.
-  Pause and Resume feature.
-  Difficulty levels.
-  Better animations and transitions.

---

##  Learning Concepts

This project demonstrates:

- DOM Manipulation
- Event Listeners
- Arrays
- Functions
- Conditionals
- Random Number Generation
- CSS Animations
- JavaScript Game Logic

---

##  Known Issue

In the current code, this line:

```javascript
setTimeout(levelUp(), 1000);
```

calls `levelUp()` immediately instead of waiting 1 second.

Replace it with:

```javascript
setTimeout(levelUp, 1000);
// or
setTimeout(() => levelUp(), 1000);
```

---

##  Author

**Ashish Prajapati**

* GitHub: https://github.com/Ashish-Kumar9140
* LinkedIn: www.linkedin.com/in/ashish-prajapati-aaa9ba32a

---

## ⭐ Support

If you enjoyed this project, please consider giving it a **⭐ Star** on GitHub.

Happy Coding! 
