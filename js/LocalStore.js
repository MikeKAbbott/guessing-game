function LocalStorage(){
    var self = this;
    self.storage = window.localStorage;


    self.clearStorage = function(){
        self.storage.clear();
    }

    self.showStorage = function(){
        console.log(self.storage);
        return self.storage;
    }

    self.storeItem = function(key, item){

        //add it to store if you can
        if(self.storage.setItem(key, item)){
            return true;
        }
        return false;
        
    }

    self.findItem = function(key){

        //check if it exist and return it if it does
        if(self.storage.key(key)){
            return self.storage.getItem(key);
        }

        //let the user know it doesn't exist
        console.log("Item doesn't exist");
        return false;
    }


    self.deleteItem = function(key){

        //check if theres an item
        if(self.storage.key(key)){

            //delete and let the user know what happened
            self.storage.removeItem(kwy);
            console.log("Item deleted");
            return true;
        }
        
        //can't delete the item
        console.log("Item doesn't exist");
        return false;
    }
}