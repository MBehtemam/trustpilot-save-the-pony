interface ICell{
    north:boolean,
    west:boolean,
    east:boolean,
    south:boolean,
    key:string,
    index:number,
    [propName: string]: any;
}
export default ICell