(function () {
    let goodInput = "ggghhhmmmdddlll";

    let bad1 = "aaabbbcccc";
    let bad2 = "bbabb";
    let bad3 = "abbc";

    let bad4 = "aaabccc";
    let uglyInput2 = "bbaabb";

    console.log("---good---");
    solution(goodInput);

    console.log("---bad---");
    solution(bad1);
    solution(bad2);
    solution(bad3);
    solution(bad4);

    console.log("---ugly---");
    solution(uglyInput2);
})();

function solution(input) {
    let inputToLowerCase = input.toLowerCase();
    let symbolsOccurrences = new Map();

    for (const symbol of inputToLowerCase) {
        if (symbolsOccurrences.has(symbol)) {
            let currentCount = symbolsOccurrences.get(symbol);
            symbolsOccurrences.set(symbol, currentCount + 1);
        } else {
            symbolsOccurrences.set(symbol, 1);
        }
    }

    let occurrences = [];

    for (let value of symbolsOccurrences.values()) {
        occurrences.push(value);
    }

    if (allArrayElementsAreEqual(occurrences)) {
        console.log("GOOD");
        return;
    }

    let stringCouldBecomeGood = false;

    for (let i = 0; i < occurrences.length; i++) {
        let toFillBackElement = false;
        let currentElement = occurrences[i];

        occurrences[i] -= 1;

        if (occurrences[i] === 0) {
            occurrences.splice(i, 1);
            toFillBackElement = true;
        }

        if (allArrayElementsAreEqual(occurrences)) {
            stringCouldBecomeGood = true;
            break;
        }

        if (toFillBackElement) {
            occurrences.splice(i, 0, currentElement);
        }

        occurrences[i] += 1;
    }

    if (stringCouldBecomeGood) {
        console.log("BAD");
    } else {
        console.log("UGLY");
    }
}

function allArrayElementsAreEqual(arr) {
    return arr.every(function (element) {
        return element === arr[0];
    });
}
