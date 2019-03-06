//emitter object
function Emitter(){
    this.events={}
}

//method on, adds new type of event and its listener, if type exists, only adds listener
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

//method emit, searchs for the type of event, if exists, throws all listeners
Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(listener => {
            listener();
        });
    }
}

module.exports =Emitter