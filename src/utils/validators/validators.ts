

export const required = (value: string) => {
    if (value) return undefined
    return "Field is required!!!"
}

export const maxLengthCreator = (maxLength:number) => (value:any) =>{
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
       else {return undefined}
}

