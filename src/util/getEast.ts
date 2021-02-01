const getEast = (ar:Array<[string,string]>,index:number):boolean => {
    if(ar.length === index +1) return true;
    return ar[index+1].includes('west')
}

export default getEast