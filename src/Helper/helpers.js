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

const reducer = (accumulator, currentValue) => accumulator + currentValue

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


 export const reducedObjectValues=(obj)=>{
 
  const newvalues=[]
  for (const [key, value] of Object.entries(obj)) {
    const newvalue= value.reduce(reducer,0)
     newvalues.push({
      date:key,
      rate:newvalue.toFixed()
    }) 
  }
 
  return newvalues
 }
 


export const formatData=(data)=>{
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dataByMonth= data.reduce(function(dataByMonth, datum){
  const date  = new Date(datum.date);
  const revenue = datum.rate;
  const month = monthNames[date.getMonth()];
  const year  = ('' + date.getFullYear()).slice(-2);
  const group = month + '\'' + year;

  dataByMonth[group] = (dataByMonth[group] || 0) + revenue;

  return dataByMonth;
}, {});

const finalResult = Object.keys(dataByMonth).map(function(group){
  return { name: group, revenue: dataByMonth[group] };
});

return finalResult
}

export const channelsShare =(totalrev)=>{
  const Airbnb = parseInt(totalrev * 0.50 )
   const Booking= parseInt(totalrev * 0.23)
  const Expedia = parseInt(totalrev * 0.23)
  const Vrbo = parseInt(totalrev * 0.04)

  return  [
    { name: 'Airbnb', value: Airbnb },
    { name: 'Booking', value: Booking },
    { name: 'Expedia', value: Expedia},
    { name: 'Vrbo', value: Vrbo}
  ]


}