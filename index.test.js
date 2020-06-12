var isMe = require('./index');
 
describe('Testing isMe', function(){
    it('should return true passing Jorge', function(){
        expect(isMe('Jorge')).toBeTruthy();
    });
 
    it('should return false passing Google', function(){
        expect(isMe('Google')).toBeFalsy();
    });
});