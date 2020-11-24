// Pre-set pattern functions
// function rightTwistSt()
// {
//     return "<b>Row One</b></b>:&nbsp;*rt, k2* repeat to end<br><b>Row Two:</b>&nbsp;k to end<br><b>Row Three:</b>&nbsp;k to end<br><b>Row Four:</b>&nbsp;k to end";
// }

// function seedSt()
// {
//     return "<b><b>Row One</b>:</b>&nbsp;*k1, p1* repeat to end<br><b>Row Two:</b>&nbsp;*p1, k1* repeat to end";
// }

// function waffelSt()
// {
//     return "<b><b>Row One</b>:</b>&nbsp;*k2, p2* repeat to end<br><b>Row Two:</b>&nbsp;k to end";
// }

function doubleRibSt()
{
    var totalSts = 4
    var patternOutput = rowMessage("One", "k2, p2", totalSts);
    return patternOutput
}

function singleRibSt()
{
    var totalSts = 2
    var patternOutput = rowMessage("One", "k1, p1", totalSts);
    return patternOutput;
}

// Message output functions
function rowMessage(rowNum, rowPat, numStInPtn) 
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    return "<b>Row " + rowNum + ":</b>&nbsp;*" + rowPat + "*, repeat from * to * " + ((numOfStitches / numStInPtn) - numStInPtn) + " times";
}

function repeatMessage(untilCondition)
{
    return "Repeat pattern row(s) until " + untilCondition;
}

// Build pattern functions

function buildCastOnMessage()
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    document.getElementById("castOnOutput").innerHTML = "Cast on " + numOfStitches + " using long-tail cast-on";
}

function buildCuffPattern()
{
    var cuffPattern = document.getElementById("cuffPatternSelect").value;

    if (cuffPattern == "dbRibCuff")
    {
        document.getElementById("cuffPatternOutput").innerHTML = doubleRibSt() + "<p>" + repeatMessage("cuff is 1.5 inches long (or desired length)");
    }
    else if (cuffPattern == "sngRibCuff")
    {
        document.getElementById("cuffPatternOutput").innerHTML = singleRibSt() + "<p>" + repeatMessage("cuff is 1.5 inches long (or desired length)");
    }
}

function buildLegPattern()
{
    var legPattern = document.getElementById("stPatternSelect").value;
    if (legPattern == "dbRib")
    {
        document.getElementById("legPatternOutput").innerHTML = doubleRibSt() + "<p>" + repeatMessage("leg is desired length (around 7 inches is standard)");
    }
    else if (legPattern == "sngRib")
    {
        document.getElementById("legPatternOutput").innerHTML = singleRibSt() + "<p>" + repeatMessage("leg is desired length (around 7 inches is standard)");
    }
}

function buildHeelPattern()
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    document.getElementById("heelStCalc").innerHTML = "<p>Set-up row: k" + (numOfStitches / 2) + " stitches, turn</p>\
        <p><b>Row One</b>: slip 1 st wyif, k1, *sl1, k1*, repeat from * to *, turn</p>\
        <p><b>Row Two</b>: slip 1 st wyif, p to end of row, turn</p>";
    document.getElementById("heelRowCalc").innerHTML = "Repeat rows 1 & 2 until heel measures " + (numOfStitches / 2) + " rows total";
}

function buildheelTurnPattern()
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    document.getElementById("heelTurn").innerHTML = "<p><b>Row One</b>: slip 1 st wyif, k" + ((numOfStitches / 4) + 2) + ", ssk, k1, turn</p>\
        <p><b>Row Two</b>: slip 1 st wyif, p7, p2tog, p1, turn</p>\
        <p><b>Row Three</b>: slip 1 st wyif, k8, ssk, k1, turn</p>\
        <p><b>Row Four</b>: slip 1 st wyif, p9, p2tog, p1, turn</p>\
        <p>Continue in pattern until all heel sts are on your needles</p>";
}

function instepPattern()
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    var numOfHeelSts = numOfStitches / 2
    var stsBtwEndOfPtnAndMarker = (numOfHeelSts + ((numOfHeelSts) - (numOfStitches / 4) + 4))
    document.getElementById("instepOutput").innerHTML = "<p><b>Row One</b>: pick up " + numOfHeelSts / 2 + " stitches from side of heel flap, k" + numOfHeelSts + " IN PATTERN, pick up " + numOfHeelSts / 2 + " from other side of heel flap, k to end of heel turn</p>\
        <p><b>Row Two</b> (set-up row): k" + ((numOfHeelSts / 2) - 2) + ", ssk, k" + numOfHeelSts + " IN PATTERN, k2tog, k to end of heel turn</p>\
        <p><b>Row Three</b>: k" + ((numOfHeelSts / 2) - 3) +", k2tog, k" + numOfHeelSts + " IN PATTERN, ssk, k to end of heel turn</p>\
        <p><b>Row Four</b>: k all sts</p>\
        <p><b>Row Five</b>: k" + ((numOfHeelSts / 2) - 4) +", k2tog, k" + numOfHeelSts + " IN PATTERN, ssk, k to end of heel turn</p>\
        <p><b>Row Six</b>: k all sts</p>\
        <p>Continue in pattern until you once again have " + numOfStitches + " on your needles";
}

function toePattern()
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    document.getElementById("toePatOutput").innerHTML = "<p><b>Row One</b>: ssk, k" + ((numOfStitches / 2) - 4) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 4) + ", k2tog</p>\
        <p><b>Row Two</b>: k all stitches</p>\
        <p><b>Row Three</b>: k all stitches</p>\
        <p><b>Row Four</b>: ssk, k" + ((numOfStitches / 2) - 6) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 6) + ", k2tog</p>\
        <p><b>Row Five</b>: k all stitches</p>\
        <p><b>Row Six</b>: k all stitches</p>\
        <p><b>Row Seven</b>: ssk, k" + ((numOfStitches / 2) - 8) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 8) + ", k2tog</p>\
        <p><b>Row Eight</b>: k all stitches</p>\
        <p><b>Row Nine</b>: k all stitches</p>\
        <p><b>Row Ten</b>: ssk, k" + ((numOfStitches / 2) - 10) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 10) + ", k2tog</p>\
        <p><b>Row Eleven</b>: k all stitches</p>\
        <p><b>Row Twelve</b>: ssk, k" + ((numOfStitches / 2) - 12) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 12) + ", k2tog</p>\
        <p><b>Row Thirteen</b>: k all stitches</p>\
        <p><b>Row Fourteen</b>: ssk, k" + ((numOfStitches / 2) - 14) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 14) + ", k2tog</p>\
        <p><b>Row Fifteen</b>: k all stitches</p>\
        <p><b>Row Sixteen</b>: ssk, k" + ((numOfStitches / 2) - 16) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 16) + ", k2tog</p>\
        <p><b>Row Seventeen</b>: ssk, k" + ((numOfStitches / 2) - 18) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 18) + ", k2tog</p>\
        <p><b>Row Eightteen</b>: ssk, k" + ((numOfStitches / 2) - 20) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 20) + ", k2tog</p>\
        <p><b>Row Nineteen</b>: ssk, k" + ((numOfStitches / 2) - 22) + ", k2tog, ssk, k" + ((numOfStitches / 2) - 22) + ", k2tog</p>";
}

function generatePDF() {
    var finishedPattern = document.getElementById("pattern").value;
    var blob = new Blob([string(finishedPattern)],
                { type: "text/plain;charset=utf-8" });
    saveAs(blob, "/pattern.txt");
}

function buildSockPattern()
{
    buildCastOnMessage();
    buildCuffPattern();
    buildLegPattern();
    buildHeelPattern();
    buildheelTurnPattern();
    instepPattern();
    toePattern();
}

function buildAndShowPattern() 
{
    buildSockPattern();
    document.getElementById("pattern").style.display = "block";
    document.getElementById("PDFButton").style.display = "block";
}

