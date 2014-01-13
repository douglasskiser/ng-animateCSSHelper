describe('Unit Test: animateCSSHelper directive', function() {
    var $compile, $rootScope;
    beforeEach(module('animateCSSHelper'));
    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    
    it('should add an animated class to the element', function() {
        var element = $compile('<div animated></div>')($rootScope);
        expect(element.hasClass('animated')).toBe(true);
    });
    
    it('should add class matching animated options', function() {
        var element = $compile('<div animated="bounce"></div>')($rootScope);
        expect(element.hasClass('bounce')).toBe(true);
    });
});