const myArray = [4,2,2,4,4,1,3,3,1,3,4];

const countElement = (array, element) => array.reduce((counter, current) => {
    return (current === element) ? counter + 1 : counter
}, 0);

function findMostCommonEl (array) {
    const elementCountTuplesArr = myArray.map(current => {
        return {element: current, count: countElement(myArray, current)}
    });
     
    const mostCommon = elementCountTuplesArr.reduce((mostCommonEl, current) => {
        return mostCommonEl.count < current.count ?
             current : mostCommonEl;
    });

    return mostCommon.element
}

console.log(findMostCommonEl(myArray));