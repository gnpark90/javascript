// オブジェクトのインスタンスにtoStringメソッドを定義
const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(customObject.toString()); // => "custom value"