function colorString(colorList) {
    const theType = typeof colorList
    let returnString = ""
    if (theType !== "undefined" && theType !== null ) {
        if (theType === "object" && colorList.length > 0) {
            returnString = colorList.toString()
        }
    }
    return returnString
}

export default colorString