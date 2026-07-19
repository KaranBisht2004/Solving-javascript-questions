// Pattern Programming


/* Q1
     * * * * *
     * * * * *
     * * * * *
     * * * * *
     * * * * *
*/
for (let i = 0; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += "* "
    }
    console.log(row);
}



/* Q2
     * 
     * * 
     * * *
     * * * * 
     * * * * *
*/

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* "
    }
    console.log(row);
}



/* Q3
     1 
     1 2 
     1 2 3
     1 2 3 4
     1 2 3 4 5
*/
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + ""
    }
    console.log(row);
}



/* Q4
     1 
     2 2 
     3 3 3 
     4 4 4 4 
     5 5 5 5 5
*/

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(i + " ");
    }
    console.log("");
}



/* Q5
     A 
     A B 
     A B C 
     A B C D 
     A B C D E
*/

for (let i = 1; i <= 5; i++) {
    let chr = 65
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(chr) + "")
        chr++
    }
    console.log(' ');
}


/* Q5
     * * * * * 
     * * * * 
     * * * 
     * *  
     *
*/

for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write('* ')
    }
    process.stdout.write("\n")
}


/* Q6
           * 
         * * 
       * * * 
     * * * *
   * * * * * 
*/
for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5 - i; j++) {
        process.stdout.write("  ");
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }

    process.stdout.write("\n");
}


