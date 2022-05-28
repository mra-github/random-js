
function play(switchIt1, switchIt2, logIt, number) {
    var winners = 0,
        iterations = number;

    var switch1 = switchIt1,
        switch2 = switchIt2,
        log = logIt;

    for (i = 0; i < iterations; i++) {

        var choice = Math.floor(Math.random() * 4),
            prize = Math.floor(Math.random() * 4);
        var doors = ["", "", "", ""];

        // setup
        doors[choice] = "C";
        doors[prize] += "T";
        if (log) {
            console.log("============================");
            console.log('%s', doors, " Setup");
        }

        // remove an empty door
        var remove1First = Math.floor(Math.random() * 2) === 1;
        for (j = 0; j < 4; j++) {
            if (doors[j] == "") {
                if (remove1First === true) {
                    doors[j] = "X";
                    break;
                } else { remove1First = true; }
            }
        }

        if (log) {
            console.log('%s', doors, " first removal");
        }

        // move
        var switch1First = Math.floor(Math.random() * 2) === 1;
        if (log) {
            console.log('%s', switch1First, " switch1First");
        }

        if (switch1) {
            for (j = 0; j < 4; j++) {
                if (doors[j] != "X" && !doors[j].includes("C")) {

                    if (switch1First === true) {
                        if (doors[j] == "T") {
                            doors[j] = "CT";
                        } else {
                            doors[j] = "C";
                        }

                        if (doors[choice].includes("T")) {

                            doors[choice] = "T";
                        } else {
                            doors[choice] = "";
                        }
                        choice = j;
                        break;
                    }
                    switch1First = true;
                }
            }
        }

        if (log) {
            console.log('%s', doors, " 1st move");
        }

        // remove an empty door
        for (j = 0; j < 4; j++) {
            if (doors[j] == "") {
                doors[j] = "X";
                break;
            }
        }


        if (log) {
            console.log('%s', doors, " second removal");
        }

        // move
        if (switch2) {
            for (j = 0; j < 4; j++) {
                if (doors[j] != "X" && !doors[j].includes("C")) {

                    if (doors[j] == "T") {
                        doors[j] = "CT";
                    } else {
                        doors[j] = "C";
                    }

                    if (doors[choice].includes("T")) {

                        doors[choice] = "T";
                    } else {
                        doors[choice] = "";
                    }
                    choice = j;
                    break;
                }
            }
        }


        if (log) {
            console.log('%s', doors, " 2nd move");
            console.log(choice === prize);
        }

        if (choice === prize) {
            winners++;
        }
    }

    console.log("Switch?", switch1, switch2)
    console.log(winners / iterations)
}

play(switch1 = false, switch2 = false, logIt = false, number = 1000000);
play(switch1 = false, switch2 = true, logIt = false, number = 1000000);
play(switch1 = true, switch2 = false, logIt = false, number = 1000000);
play(switch1 = true, switch2 = true, logIt = false, number = 1000000);

