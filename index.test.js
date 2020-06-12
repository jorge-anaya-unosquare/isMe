var isMe = require('./index');
 
describe('Testing isMe', function(){
    it('should return true passing Jorge', function(){
        expect(isGeo('Geo')).toBeTruthy();
    });
 
    it('should return false passing Google', function(){
        expect(isGeo('Google')).toBeFalsy();
    });
});