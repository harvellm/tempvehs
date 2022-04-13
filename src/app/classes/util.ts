export class Util {
    static arrayRemove:any = (arr:any, value:any) =>{ 
    
        return arr.filter(function(ele:any){ 
            return ele != value; 
        });
    }
}
