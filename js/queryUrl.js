~function (pro) {
    pro.queryURLParameter = function () {
        var obj = {},
            reg = /([^?=&#]+)(?:=([^?=&#]+)?)/g;
        this.replace(reg, function () {
            var key = arguments[1],
                value = arguments[2] || null;
            obj[key] = value;
        })
        return obj;
    }
}(String.prototype)
var url = "https://www.bilibili.com/stu/?id=1024&name='刘永红'&age=22#student";
// console.log(url.queryURLParameter());{id: "1024", name: "'刘永红'", age: "22"}
