export const convertDates = (startDate, endDate) => {
  const checkIn = startDate._d
  const checkOut = endDate._d
  const datesArray = Array.of(checkIn, checkOut)
  const date1 = datesArray.map((i) => i.toLocaleDateString())
  const date2 = date1.map((i) => i.replace('/', '-').replace('/', '-'))
  const date3 = date2.map((i) => i.split('-'))
  const date4 = date3.map((i) => i.reverse())
  const finalDate = date4.map((i) => i.join('-'))
  return finalDate
}

export const sortData = (data) => {
    const final = []
    data.forEach((dat) => {
      const split = dat.date.split('-')
      // const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
      if (split[1] === '01'|| '02' || '03' || '04' || '05' || '06' || '07' || '08'||'09' ||'10'|| '11'||'12') {
        final.push(dat)
      }
    })
    return final
  }

  export const reducedValue = (arr,x) => {
    let initialValue = 0
    let sum = arr.reduce(function (accumulator, currentValue) {
        let currentValue1 =currentValue[x]
        const length =arr.length - 1
        return accumulator + currentValue1 / length 
    }, initialValue)
   
    return sum
  }


  export function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }
  

  export function filterbyDate(arr1, range) {
    const min = range[0]
    const max = range[1]
    const results = arr1.filter((dat) => {
      const firstrange = dat.date
      const secoundrange = dat.date
      if (firstrange >= min && secoundrange <= max) {
        return dat
      }
    
    })
    return results
  }
  export const combineData=(arr1,arr2)=>{
    const final=[]
   const rezy = arr1.forEach(item1=> arr2.forEach(item2 => {
        if(item1.date === item2.date){
            const bookingValue = item2.bookingValue
            const newObj= {...item1,bookingValue:bookingValue}
            final.push(newObj) 
        }
    }))
    return final
}