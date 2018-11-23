var Cache = require('../routes/cache');

describe("Cache Class", function () {
    var cache;

    beforeEach(function () {
        cache = new Cache();
    });

    afterEach(function () {
        cache.close();
        cache = null;
    });

    it('should exist', function () {
        expect(cache).not.toBeUndefined();
    });

    it('should set', function () {
        var res = cache.set('key','obj');
        expect(res).toBe(true);
    });

    it('should ttl', function () {
        cache.set('key','obj');
        var res = cache.ttl('key', 0);
        expect(res).toBe(true);
    });

    it('should setToken', function () {
        //cache.setToken('key','obj');
        cache.flush();


    });

    it('should get', function () {
        
    });

    it('should del', function () {
        
    });

    it('should flush', function () {
        
    });

});