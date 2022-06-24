export const onKeyDown = (keyName:string,func:()=>void ) => (e:KeyboardEvent)=>e.key === keyName && func();

export const toDateString = (date:Date)=>{
    const days = (`0${date.getDate()}`).slice(-2);
    const month =(`0${date.getMonth()+1}`).slice(-2);
    const year = date.getFullYear();
    return (`${year}-${month}-${days}`);
}