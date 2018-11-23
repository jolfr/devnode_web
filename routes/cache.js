const NodeCache = require('node-cache');
const stdTTL = 100;
const checkperiod = 120;


class Cache {

    /**
     * @constructor
     * Constructor for cache. Sets stdTTL and checkperiod to consts in cache.js
     */
    constructor() {
        this.cache = new NodeCache({ stdTTL: stdTTL, checkperiod: checkperiod});
        return this.cache;
    }

    /**
     * Set object to cache
     * @param {string} key - The key for retrieval
     * @param {obj} obj - The object to be retrieved
     * @return err or success
     */
    set(key, obj) {
        this.cache.set( key, obj, function ( err, success ) {
                if( !err && success ){
                    console.log('key-obj set');
                    return success;
                } else {
                    console.log('SET ERROR');
                    return err;
                }
            });
    }

    /**
     * Set token to cache. Tokens do not expire
     * @param {string} key - The key for retrieval
     * @param obj - The object to be retrieved
     * @return err or success
     */
    setToken(key, obj){
        this.set(key,obj);
        this.ttl(key,0); // sets key to never expire
    }

    /**
     * Get from cache
     * @param {string} key - The key for retrieval
     * @return obj if found, null if not
     */
    get(key) {
        this.cache.get( key, function( err, value ){
            if( !err ){
                if(value === undefined){
                    console.log('{' + key +'} not found');
                    return null;
                }else{
                    console.log('{' + key + '} : {' + value + '}');
                    return value;
                }
            } else {
                console.log('GET ERROR');
                return err;
            }
        });
    }

    /**
     * Delete a key-obj pair from cache
     * @param {string} key - The key for deletion
     * @return number of objects deleted
     */
    del(key) {
        this.cache.del( key, function( err, count ){
            if( !err ){
                console.log(count + ':{' + key + '} deleted');
                return count;
            } else {
                console.log('DELETE ERROR');
                return err;
            }
        });
    }

    /**
     * Change number of seconds until cache element expires NOTE: set ttl to 0 for no expiration
     * @param {string} key - The key for deletion
     * @param {int} ttl - number of seconds until object expires
     * @return true if changed, false otherwise
     */
    ttl(key, ttl) {
        this.cache.ttl( key, ttl, function( err, changed ){
            if( !err && changed){
                console.log('{' + key + '} ttl changed to ' + ttl + ' seconds');
                return changed;
            } else if ( !err) {
                console.log('ttl key not found');
                return changed;
            } else {
                console.log('TTL ERROR');
                return err;
            }
        });
    }


    /**
     * Gets the number of seconds until the object expires
     * @param {string} key - The key for the ttl
     * @return {int} time in ms until key expires
     */
    getTtl(key) {
        this.cache.getTtl(key, function ( err, ts) {
            if(!err){
                console.log('{' + key + '} expires in ' + ts + ' ms.');
                return ts;
            } else {
                console.log('{' + key + '} not found');
                return -1;
            }
        })
    }

    /**
     * Flush all data from cache
     */
    flush() {
        this.cache.flushAll();
    }

    /**
     * Close the cache
     */
    close() {
        this.cache.close();
    }
}

module.exports = {

}
