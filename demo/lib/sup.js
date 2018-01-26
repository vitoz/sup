
function Sup() {
    
}



var SupViewModel = function () {
    this.create = function () {
        var self = {};
        self.data = {};
        
        self.changed = function (key, value) {
            
        };

        self.doUpdate = function (key, value) {
            self.data[key] = value;
            self.changed(key, value);
        };
        
        return self;
    }
}
