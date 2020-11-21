// function rightTwistSt()
// {
//     return "Row One</b>:&nbsp;*rt, k2* repeat to end<br><b>Row Two:</b>&nbsp;k to end<br><b>Row Three:</b>&nbsp;k to end<br><b>Row Four:</b>&nbsp;k to end";
// }

// function seedSt()
// {
//     return "<b>Row One:</b>&nbsp;*k1, p1* repeat to end<br><b>Row Two:</b>&nbsp;*p1, k1* repeat to end";
// }

// function waffelSt()
// {
//     return "<b>Row One:</b>&nbsp;*k2, p2* repeat to end<br><b>Row Two:</b>&nbsp;k to end";
// }

function castOnMessage()
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    document.getElementById("castOnOutput").innerHTML = "Cast on " + numOfStitches + " using long-tail cast-on";
}

function rowMessage(rowNum, rowPat, numStInPtn) 
{
    var numOfStitches = document.getElementById("numOfStsSelect").value;
    return "Row " + rowNum + ":</b>&nbsp;*" + rowPat + "*, repeat from * to * " + ((numOfStitches / numStInPtn) - numStInPtn) + " times";
}

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

function repeatMessage(untilCondition)
{
    document.getElementById("patternRepeatOutput").innerHTML = "Repeat pattern row(s) until " + untilCondition;
}

function buildCuffPattern()
{
    var cuffPattern = document.getElementById("cuffPatternSelect").value;

    if (cuffPattern == "dbRibCuff")
    {
        document.getElementById("cuffPatternOutput").innerHTML = doubleRibSt() + "<br>" + repeatMessage("cuff is 1.5 inches long (or desired length)");
    }
    else if (cuffPattern == "sngRibCuff")
    {
        document.getElementById("cuffPatternOutput").innerHTML = singleRibSt() + "<br>" + repeatMessage("cuff is 1.5 inches long (or desired length)");
    }
}

function buildLegPattern()
{
    var legPattern = document.getElementById("stPatternSelect").value;
    
    // if (legPattern == "rightTwist")
    // {
    //     document.getElementById("legPatternOutput").innerHTML = rightTwistSt();
    // }
    // else if (legPattern == "seed")
    // {
    //     document.getElementById("legPatternOutput").innerHTML = seedSt();
    // }
    // else if (legPattern == "waffel")
    // {
    //     document.getElementById("legPatternOutput").innerHTML = waffelSt();
    if (legPattern == "dbRib")
    {
        document.getElementById("legPatternOutput").innerHTML = doubleRibSt() + "<br>" + repeatMessage(" until leg is desired length (around 7 inches is standard)");
    }
    else if (legPattern == "sngRib")
    {
        document.getElementById("legPatternOutput").innerHTML = singleRibSt() + "<br>" + repeatMessage(" until leg is desired length (around 7 inches is standard)");
    }
}

function buildSockPattern()
{
    castOnMessage();
    buildCuffPattern();
    buildLegPattern();
}