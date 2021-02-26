module.exports = function towelSort (matrix=[]) {
    let array = [];
    if (matrix.length > 0){
            array = matrix.map((item, index) => (index==0 || index%2==0)? item.sort((a,b) => a-b ): item.sort((a,b) => b-a));
            let f = []
            return f.concat(...array)
    }
    return array
  }
