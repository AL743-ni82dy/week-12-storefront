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

function responseSort(array) {
    let returnArray = []
    let arrayCopy = array
    let keyArray = []
    let valueArray = []
    let firstValueArray = []
    let sortedValues = []
    let theKey;
    let prevValue = '';
    let foundBefore = 0
    let uniqueList = []
    if (arrayCopy.length === 0) {
        returnArray = []
    } else if (arrayCopy.length === 1 ) {
        returnArray = arrayCopy
    } else {
        console.log(' - - = = - -')
        array.forEach( (item) => {
            for (let key in item) {
                keyArray.push(key)
                valueArray.push(item[key])
            }
            theKey = keyArray[1]
            firstValueArray.push(valueArray[1])
            keyArray = []
            valueArray = []
        })
        sortedValues = firstValueArray.sort()
        sortedValues.forEach( (value) => {
            if (!uniqueList.includes(value)) {
                uniqueList.push(value)
            }
        })

        uniqueList.forEach( (sortValue) => {
            let counter = 0
            let foundCount = 0
            if (sortValue === prevValue) {
                foundBefore++
            } else { foundBefore = 0 }
            while (counter < arrayCopy.length) {
                let itemObj = arrayCopy[counter]
                if ( sortValue === itemObj[theKey]) {
                    if (prevValue === itemObj[theKey]) {
                        if (foundCount < foundBefore) {
                            foundCount++
                            counter++
                        } else {
                            returnArray.push(itemObj)
                            counter = arrayCopy.length + 10        
                        }
                    } else {
                        returnArray.push(itemObj)
                        counter = arrayCopy.length + 10
                    }
                } else {
                    counter++
                }
            }
            prevValue = sortValue
        })
        
    }
    return returnArray
}

  export { colorString, responseSort }