export const DateChanger=(time:number)=>{
    let date =new Date(time*1000).toLocaleTimeString()
    console.log(date)
    return date;
}