import ICell from '../interfaces/ICell';
import getEast from './getEast'
import getSouth from './getSouth'

export default function reShaped(ar:Array<[string,string]>, width:number, height:number):ICell[][]{
    let cells = [];
    for(let i =0 ; i < height; i++){
        let rows = [];
        for(let j = 0; j < width; j++){
            const currentIndex = (i * width) + j 
            rows.push({
                north: ar[currentIndex].includes('north') ? true : false,
                west: ar[currentIndex].includes('west') ? true : false,
                east: getEast(ar,currentIndex),
                south:getSouth(ar, currentIndex, width),
                key:`t-${currentIndex}`,
                index:currentIndex
            })
        }
        cells.push(rows)
    }
    return cells
}
