Array.prototype.isEqual = function(arr) {

    if(this.length !== arr.length){
        return false;
    }
    for(let i = 0; i < arr.length;i++){
        if(arr[i] !== this[i]){
            return false;
        }
    }
    return true;
}