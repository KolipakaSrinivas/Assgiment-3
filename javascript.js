class restaurantManage{
    restaurantLis=[
        {
            id:1,
            restaurantName:'KFC',
            address:'anand Vihar',
            city:'delhi'
        },
        {
            id:2,
            restaurantName:'Domino',
            address:'sathi vihar',
            city:"delhi",
        },
        {
            id:3,
            restaurantName:"subway",
            address:'sevil line',
            city:'mumbai'
        },
        {
            id:4,
            restaurantName:'Burger',
            address:'sg nager',
            city:'mumbai'

        }
    ];

    printAllRestaurantNames=()=>{
        return this.restaurantLis.map(restaurant=>restaurant.restaurantName)
    };

    filterRestaurantByCity=(cityName)=>{
        return this.restaurantLis.filter(restaurant=>restaurant.city ===cityName)
    }
     
  
}
const restaurantObj =new restaurantManage
const output1 = restaurantObj.printAllRestaurantNames()
const output2 = restaurantObj.filterRestaurantByCity("mumbai")

console.log(output1)
console.log(output2)

/*************************************Quastion2**********************************************************/
orderData = {  
    'Below 500': 20,  
    '500-1000': 29,  
    '1000-1500': 30,  
    '1500-2000': 44,  
    'Above 2000': 76  
};
/*******************a**********************************/
const total = Object.values(orderData).reduce((prev,next)=>prev+next)
console.log(total)
/***********************b*******************************/
const header = Object.keys(orderData)
console.log(header)
/*********************c****************************** */
const arry=[];
const response = header.map((item,index)=>{
    const obj ={
        
        'id':index +1,
        'order':item,
        'order percentage':((orderData[item]/total)*100).toFixed(2),
        'restaurant': "Punjabi Tadka"
    }
    arry.push(obj)
    
})
console.log(arry)