const findMatching = (drivers, str) => drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());;
const fuzzyMatch = (drivers, str) => drivers.filter(driver => driver.startsWith(str))

function matchName(drivers, str){
    let car = [];

    for(const driver of drivers){
        if(driver.name === str){
            car.push(driver)
        }
    }
    return car;
}