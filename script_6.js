let n = 0;
let codesdelavie = []
var arn1 = "CCGUCGUUGCGCUACAGC"
var arn2 = "CCUCGCCGGUACUUCUCG"

while ( n !== 18 ) {

var arn = arn1[n] + arn1[n+1] + arn1[n+2];

n = n + 3;

if ( arn === "UCU" || arn ===  "UCC" || arn ===  "UCA" || arn === "UCG" || arn === "AGU" || arn === "AGC" ) {
codesdelavie.push("Sérine");
}
if ( arn === "CCU" || arn ===  "CCC" || arn ===  "CCA" || arn === "CCG" ) {
codesdelavie.push("Proline");
}
if ( arn === "UUA" || arn ===  "UUG" ) {
codesdelavie.push("Leucine");
}
if ( arn === "UUU" || arn ===  "UUC" ) {
codesdelavie.push("Phénylalanine");
}
if ( arn === "CGU" || arn ===  "CGC" || arn ===  "CGA" || arn === "CGG" || arn === "AGA" || arn === "AGG" ) {
codesdelavie.push("Arginine");
}
if ( arn === "UAU" || arn ===  "UAC" ) {
codesdelavie.push("Tyrosine");
}
}

console.log(codesdelavie[0] + "-" + codesdelavie[1] + "-" + codesdelavie[2] + "-" + codesdelavie[3] + "-" + codesdelavie[4] + "-" + codesdelavie[5]);
n = 0
codesdelavie = []

console.log("ARN 2");

while ( n !== 18 ) {

var arn = arn2[n] + arn2[n+1] + arn2[n+2];

n = n + 3;

if ( arn === "UCU" || arn ===  "UCC" || arn ===  "UCA" || arn === "UCG" || arn === "AGU" || arn === "AGC" ) {
codesdelavie.push("Sérine");
}
if ( arn === "CCU" || arn ===  "CCC" || arn ===  "CCA" || arn === "CCG" ) {
codesdelavie.push("Proline");
}
if ( arn === "UUA" || arn ===  "UUG" ) {
codesdelavie.push("Leucine");
}
if ( arn === "UUU" || arn ===  "UUC" ) {
codesdelavie.push("Phénylalanine");
}
if ( arn === "CGU" || arn ===  "CGC" || arn ===  "CGA" || arn === "CGG" || arn === "AGA" || arn === "AGG" ) {
codesdelavie.push("Arginine");
}
if ( arn === "UAU" || arn ===  "UAC" ) {
codesdelavie.push("Tyrosine");
}
}

console.log(codesdelavie[0] + "-" + codesdelavie[1] + "-" + codesdelavie[2] + "-" + codesdelavie[3] + "-" + codesdelavie[4] + "-" + codesdelavie[5]);

console.log("### fini ###");


