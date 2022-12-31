function result(a, b, c) {
    let lang = "";
    if (a === "ac1" && (b === "bc1" || b === "bc2" || b=== "bc3") && (c === "cc1" || c === "cc3")) {
       return lang = "Dart";
    } else if (a === "ac1" && b === "bc3" && (c === "cc2" || c === "cc3")) {
       return lang = "Kotlin";
    } else if (a === "ac2" && (b === "bc1" || b === "bc2") && (c === "cc1" || c === "cc2" || c === "cc3")) {
       return lang = "JavaScript";
    } else if (a === "ac2" && b === "bc3" && (c === "cc1" || c === "cc2" || c === "cc3")) {
       return lang = "TypeScript";
    } else if (a === "ac3" && (b === "bc1" || b === "bc2") && (c === "cc1" || c === "cc2" || c === "cc3")) {
       return lang = "Solidity";
    } else if (a === "ac3" && b === "bc3" && (c === "cc1" || c === "cc2" || c === "cc3")) {
       return lang = "Rust";
    } else if ((a === "ac4" || a === "ac5") && (b === "bc1" || b === "bc2" || b === "bc3") && (c === "cc1" || c === "cc2" || c === "cc3")) {
       return lang = "Python";
    } else if (a === "" || b === "" || c === "") {
       return lang = "Python"
    }
}

module.exports = result