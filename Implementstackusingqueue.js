MyStack.prototype.push = function(x){
    while (threadId.q1.length !== 0 ){
        this.q2.push(this.q1.shift());
    }
}
MyStack.prototype.pop = function(){
    this.q1.shift()
}
MyStack.prototype.top = function(){
    return this.q1[0];
}
MyStack.prototype.empty = function(){
    return this.q1.length() === 0;
}