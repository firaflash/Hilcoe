let maxWidth = parseInt(prompt("Enter the final number of stars (e.g. 5): "));

// Rectangle

for(let i=0; i < maxWidth; i++){
    let star = ""
    for(let j=0; j < maxWidth; j++){
       star += "*"
    }
    console.log(star)
}

// Simple increasing triangle pattern


if (isNaN(maxWidth) || maxWidth < 1) {
    console.log("Please enter a valid positive number!");
} else {
    for (let i = 1; i <= maxWidth; i++) {
        let row = "";                  // Start with empty row
        for (let j = 1; j <= i; j++) {
            row += "*";                // Add one star at a time
        }
        console.log(row);              // Print the full row at once
    }
}

if (isNaN(maxWidth) || maxWidth < 1) {
    console.log("Please enter a valid positive number!");
} else {
    // Loop from the max width down to 1
    for (let i = maxWidth; i >= 1; i--) {
        let row = "";  // Start with empty row
        for (let j = 1; j <= i; j++) {
            row += "*";  // Add one star at a time
        }
        console.log(row);  // Print the full row at once
    }
}


// Diamond
for (let i = 1; i <= maxWidth; i++) {
    let star = "";
    for (let j = 0; j < maxWidth - i; j++) {
        star += " ";
    }
    for (let k = 0; k < (2 * i) - 1; k++) {
        star += "*";
    }
    console.log(star);
}
for (let i = maxWidth - 1; i > 0; i--) {
    let star = "";
    for (let k = 0; k < maxWidth - i; k++) {
        star += " ";
    }
    for (let j = 0; j < (2 * i) - 1; j++) {
        star += "*";
    }
    console.log(star);
}
