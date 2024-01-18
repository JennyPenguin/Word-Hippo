let words = ["Abuse", "Adult", "Agent", "Anger", "Apple", "Basis", "Beach", "Birth", "Block", "Blood", "Board", "Brain", "Bread", "Break",
    "Brown", "Buyer", "Cause", "Chain", "Chair", "Chest", "Chief", "Child", "China", "Claim", "Class", "Clock", "Coach", "Coast",
    "Court", "Cover", "Cream", "Crime", "Cross", "Crowd", "Crown", "Cycle", "Dance", "Death", "Depth", "Doubt", "Draft", "Drama",
    "Dream", "Dress", "Drink", "Drive", "Earth", "Enemy", "Entry", "Error", "Event", "Faith", "Fault", "Field", "Fight", "Final",
    "Floor", "Focus", "Force", "Frame", "Frank", "Front", "Fruit", "Glass", "Grant", "Grass", "Green", "Group", "Guide", "Heart",
    "Horse", "Hotel", "House", "Image", "Index", "Input", "Issue", "Judge", "Knife", "Layer", "Level", "Light", "Limit", "Lunch",
    "Major", "March", "Match", "Metal", "Model", "Money", "Month", "Motor", "Mouth", "Music", "Night", "Noise", "North", "Novel",
    "Nurse", "Offer", "Order", "Other", "Owner", "Panel", "Paper", "Party", "Peace", "Phase", "Phone", "Piece", "Pilot", "Pitch",
    "Place", "Plane", "Plant", "Plate", "Point", "Pound", "Power", "Press", "Price", "Pride", "Prize", "Proof", "Queen", "Radio",
    "Range", "Ratio", "Reply", "Right", "River", "Round", "Route", "Scale", "Scene", "Scope", "Score", "Sense", "Shape", "Share",
    "Sheep", "Sheet", "Shift", "Shirt", "Shock", "Sight", "Skill", "Sleep", "Smile", "Smith", "Smoke", "Sound", "South", "Space",
    "Speed", "Spite", "Sport", "Squad", "Staff", "Stage", "Start", "State", "Steam", "Steel", "Stock", "Stone", "Store", "Study",
    "Stuff", "Style", "Sugar", "Table", "Taste", "Theme", "Thing", "Title", "Total", "Touch", "Tower", "Track", "Trade", "Train",
    "Trend", "Trial", "Trust", "Truth", "Uncle", "Union", "Unity", "Value", "Video", "Visit", "Voice", "Waste", "Watch", "Water",
    "While", "White", "Whole", "Woman", "World", "Youth", "Aught", "Ought", "There", "Where", "Which", "Whose", "Yours", "Admit",
    "Adopt", "Agree", "Allow", "Alter", "Apply", "Argue", "Arise", "Avoid", "Begin", "Blame", "Break", "Bring", "Build", "Burst",
    "Carry", "Catch", "Cause", "Check", "Claim", "Clean", "Clear", "Climb", "Close", "Count", "Cover", "Cross", "Dance", "Doubt",
    "Drink", "Drive", "Enjoy", "Enter", "Exist", "Fight", "Focus", "Force", "Guess", "Imply", "Issue", "Judge", "Laugh", "Learn",
    "Leave", "Limit", "Marry", "Match", "Occur", "Offer", "Order", "Phone", "Place", "Point", "Press", "Prove", "Raise", "Refer",
    "Relax", "Serve", "Shall", "Share", "Shift", "Shoot", "Sleep", "Solve", "Sound", "Speak", "Spend", "Split", "Stand", "Start",
    "State", "Stick", "Study", "Teach", "Thank", "Think", "Throw", "Touch", "Train", "Treat", "Trust", "Visit", "Voice", "Waste",
    "Watch", "Worry", "Would", "Write", "Above", "Acute", "Alive", "Alone", "Angry", "Aware", "Awful", "Basic", "Black", "Blind",
    "Brave", "Brief", "Broad", "Brown", "Cheap", "Chief", "Civil", "Clean", "Clear", "Close", "Crazy", "Daily", "Dirty", "Early",
    "Empty", "Equal", "Exact", "Extra", "Faint", "False", "Fifth", "Final", "First", "Fresh", "Front", "Funny", "Giant", "Grand",
    "Great", "Green", "Gross", "Happy", "Harsh", "Heavy", "Human", "Ideal", "Inner", "Joint", "Large", "Legal", "Level", "Light",
    "Local", "Loose", "Lucky", "Magic", "Major", "Minor", "Moral", "Nasty", "Naval", "Other", "Outer", "Plain", "Prime", "Prior",
    "Proud", "Quick", "Quiet", "Rapid", "Ready", "Right", "Roman", "Rough", "Round", "Royal", "Rural", "Sharp", "Sheer", "Short",
    "Silly", "Sixth", "Small", "Smart", "Solid", "Sorry", "Spare", "Steep", "Still", "Super", "Sweet", "Thick", "Third", "Tight",
    "Total", "Tough", "Upper", "Upset", "Urban", "Usual", "Vague", "Valid", "Vital", "White", "Whole", "Wrong", "Young", "Other",
    "Since", "Slash", "Until", "Where", "While", "Aback", "About", "Above", "Afoot", "Afore", "Afoul", "After", "Again", "Ahead",
    "Alike", "Alone", "Along", "Aloof", "Aloud", "Amiss", "Apart", "Aptly", "Aside", "Awful", "Badly", "Bally", "Below", "Cheap",
    "Clean", "Clear", "Coyly", "Daily", "Dimly", "Dirty", "Dully", "Early", "Extra", "False", "First", "Forth", "Fresh", "Fully",
    "Funny", "Godly", "Great", "Heavy", "Hello", "Hence", "Hotly", "Jolly", "Light", "Lowly", "Madly", "Maybe", "Never", "Nobly",
    "Oddly", "Often", "Other", "Ought", "Party", "Piano", "Plain", "Plumb", "Prior", "Queer", "Quick", "Quite", "Rapid", "Right",
    "Rough", "Round", "Sadly", "Sharp", "Sheer", "Short", "Shyly", "Silly", "Since", "Sleek", "Slyly", "Small", "Sound", "Stark",
    "Still", "Super", "There", "Thick", "Tight", "Today", "Truly", "Twice", "Under", "Utter", "Wetly", "Where", "Wrong", "Wryly"]

const letters = document.getElementsByClassName("letter");
const keys = document.getElementsByClassName("key");
let guesses = document.getElementById("pastGuesses");
let end = document.getElementById("endScreen");
let curr = "";
// let words = ['hippo', 'world']
let target = words[Math.floor(Math.random() * words.length)].toLowerCase();
console.log(target);
let tMap = new Map();
// console.log(keys);
const alphabet = new Map([['q', 0], ['w', 1], ['e', 2], ['r', 3], ['t', 4], ['y', 5], ['u', 6], ['i', 7], ['o', 8], ['p', 9], ['a', 10], ['s', 11], ['d', 12], ['f', 13], ['g', 14], ['h', 15], ['j', 16], ['k', 17], ['l', 18], ['z', 20], ['x', 21], ['c', 22], ['v', 23], ['b', 24], ['n', 25], ['m', 26]]);
let status = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',''];
// let regex = /^[a-zA-Z]+$/;



for (let i = 0; i < target.length; i++) {
    let cL = target.substring(i, i + 1);
    if (tMap.has(cL)) {
        tMap.set(cL, tMap.get(cL) + 1);
    } else {
        tMap.set(cL, 1);
    }
}

function onClick($this) {
    AddLetter($this.dataset.key);
}

function AddLetter(k) {
    if (k == "*") {
        if (curr.length == target.length) {
            checkWord();
        }
    } else if (k == "-") {
        if (curr.length > 0) {
            removeLastLetter();
        }
    } else {
        if (curr.length >= target.length) {
            removeLastLetter();
        }
        curr += k;
        letters[curr.length - 1].innerHTML = k.toUpperCase();

    }
}

function removeLastLetter() {
    curr = curr.substring(0, curr.length - 1);
    letters[curr.length].innerHTML = '';
}

function checkWord() {
    addNewWord();
    if (curr.length == target.length) {
        if (curr == target) {
            end.style.display = "flex";
        }
        clearCurr();
    }
}

function surrender() {
    end.style.display = "flex";
    document.getElementById("winStatement").innerHTML = "The answer is " + target + "!";
}

function addNewWord() {
    let row = document.createElement('div')
    row.classList.add('guesses');
    cMap = new Map();
    currR = [];
    for (let i = 0; i < letters.length; i++) {
        let l = document.createElement('div');
        l.classList.add('letter2');
        currL = letters[i].innerHTML.toLowerCase();
        l.innerHTML = currL.toUpperCase();

        if (currL == target.substring(i, i + 1)) {
            if (cMap.has(currL)) {
                cMap.set(currL, cMap.get(currL) + 1);
            } else {
                cMap.set(currL, 1);
            }
            l.classList.add('green');
            status[alphabet.get(currL)] = "G";
            keys[alphabet.get(currL)].classList.add('green');
            keys[alphabet.get(currL)].classList.remove('yellow', 'grey')
        }
        row.appendChild(l);
        currR.push(l);
    }
    for (let i = 0; i < letters.length; i++) {
        currL = letters[i].innerHTML.toLowerCase();
        if (cMap.has(currL)) {
            cMap.set(currL, cMap.get(currL) + 1);
        } else {
            cMap.set(currL, 1);
        }
        if (currL != target.substring(i, i + 1)) {
            if (tMap.has(currL) && cMap.get(currL) <= tMap.get(currL)) {
                currR[i].classList.add('yellow');
                if (status[alphabet.get(currL)] != "G") {
                    status[alphabet.get(currL)] = "Y";
                    keys[alphabet.get(currL)].classList.add('yellow');
                    keys[alphabet.get(currL)].classList.remove('grey')
                }
            } else {
                currR[i].classList.add('grey');
                if (status[alphabet.get(currL)] == "") {
                    status[alphabet.get(currL)] = "Gr";
                    keys[alphabet.get(currL)].classList.add('grey');
                }
            }
        }

    }
    guesses.appendChild(row);
    guesses.scrollTop = guesses.scrollHeight;
}

function clearCurr() {
    curr = "";
    for (let i = 0; i < letters.length; i++) {
        letters[i].innerHTML = "";
    }
}

function restart() {
    location.reload();
}

document.onkeydown = function (evt) {
    let e = evt.key;
    if (alphabet.has(e)) {
        AddLetter(e);
    } if (e == 'Enter') {
        AddLetter("*");
    } else if (e == "Backspace" || e == "Delete") {
        AddLetter("-");
    }
};

// regex.test(e) didn't work correctly 
