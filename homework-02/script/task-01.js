(function () {
    let good1 = "ggghhhmmmdddlll";
    let good2 = "aa";

    let bad1 = "aaabbbcccc";
    let bad2 = "bbabb";
    let bad3 = "abbc";
    let bad4 = "aaabccc";

    let ugly1 = "aabbbb";
    let ugly2 = "aabbbbc";
    let ugly3 = "abbccc";

    console.log("---good---");
    solution(good1);
    solution(good2);

    console.log("---bad---");
    solution(bad1);
    solution(bad2);
    solution(bad3);
    solution(bad4);

    console.log("---ugly---");
    solution(ugly1);
    solution(ugly2);
    solution(ugly3);
})();

function solution(input) {
    sol2(input);
}

// still incorrect
function sol1(input) {
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

    let occs = new Set();

    for (let value of symbolsOccurrences.values()) {
        occs.add(value);
    }

    if (occs.size === 1) {
        console.log("GOOD");
        return;
    }

    if (occs.size > 2) {
        console.log("UGLY");
        return;
    }

    let occurrencesArr = [];
    for (let value of occs.keys()) {
        occurrencesArr.push(value);
    }

    if (occurrencesArr.some((element) => element === 1)) {
        console.log("BAD");
        return;
    }

    let difference = Math.abs(occurrencesArr[0] - occurrencesArr[1]);

    if (difference === 1) {
        console.log("BAD");
    } else {
        console.log("UGLY");
    }

}

function sol2(input) {
    let symbolsOccurrences = buildOccurrencesMap(input);
    let occurrences = Array.from(symbolsOccurrences.values());

    if (allArrayElementsAreEqual(occurrences)) {
        console.log("GOOD");
        return;
    }

    let stringCouldBecomeGood = false;

    for (let i = 0; i < occurrences.length; i++) {
        let toFillBackElement = false;

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
            occurrences.splice(i, 0, 0);
        }

        occurrences[i] += 1;
    }

    if (stringCouldBecomeGood) {
        console.log("BAD");
    } else {
        console.log("UGLY");
    }
}

function buildOccurrencesMap(input) {
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

    return symbolsOccurrences;
}

function allArrayElementsAreEqual(arr) {
    return arr.every(function (element) {
        return element === arr[0];
    });
}
