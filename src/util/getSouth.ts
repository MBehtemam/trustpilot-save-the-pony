const getSouth = (ar:Array<[string,string]>,index:number, width:number):boolean => {
    if(ar.length <= index + width) return true;
    return ar[index + width].includes('north')
}

export default getSouth