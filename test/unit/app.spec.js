describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('sedes', function(){
            expect(app.generateMessage('sedes')).toEqual({vowel: 2, palindrome: true});
        });
        it('atumammamuta', function(){
            expect(app.generateMessage('atumammamuta')).toEqual({vowel: 6, palindrome: true});
        });
        it('grzegorz', function(){
            expect(app.generateMessage('grzegorz')).toEqual({vowel: 2, palindrome: false});
        });
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function(){
                spyOn(app, 'isPalindrome');
                app.isPalindrome('zakopanenapokaz');
            });
            it('Should call isPalindrome function',function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('zakopanenapokaz');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.callThrough();
                app.isPalindrome('zakopanenapokaz');
            });
            it('Should call isPalindrome function'+'when call to lower case is call', function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('zakopanenapokaz');
            });
        });

        describe('and.returnValue', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('Should call isPalindrome and say true', function(){
                pointer=app.isPalindrome('zakopanenapokaz');
                expect(pointer).toEqual(true);
            });
            it('Shoud call generateMessage and say true', function(){
                pointer=app.generateMessage('zakopanenapokaz');
                expect(pointer).toEqual({vowel: 7, palindrome: true});
            });
        });

        describe('and.callFake', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'isPalindrome').add.callFake(function(str){
                    var temp=str.toLowerCase(),
                        length=temp.length;
                    if(str === ''){
                        return false;
                    }
                    var halfLength=(length%2 == 0)? (halfLength/2) : ((halfLength/2)+1);
                    for(var i=0; i<halfLength; i++){
                        if(temp[i] !== temp.slice(-1-i)[0]){
                            return false;
                        }
                    }
                    return true;
                });
                it('Should call isPalindrome fake function', function(){
                    pointer=app.isPalindrome('zakopanenapokaz');
                    expect(pointer).toBe('zakopanenapokaz');
                });
                it('Shoud call generateMessage fake function', function(){
                    pointer=app.isPalindrome('zakopanenapokaz');
                    expect(pointer).toEqual({vowel: 7, palindrome: true});
                });
            });
        });

        describe('calls.count()', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.callThrough()
            });
            it('Should call isPalindrome calls', function(){
                pointer=app.isPalindrome('zakopanenapokaz');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('Should call generateMessage calls', function(){
                pointer=app.isPalindrome('zakopanenapokaz');
                expect(app.isPalindrome.calls.count()).toBe(2);
            })
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function() {
                spyOn(app, 'vowelCount');
                app.vowelCount('zakopanenapokaz');
            });
            it('Should call vowelCount function', function(){
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('zakopanenapokaz');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.callThrough();
                app.vowelCount('zakopanenapokaz');
            });
            it('Should call vowelCount function'+'when called to lover case is call', function(){
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('zakopanenapokaz');
            });
        });

        describe('and.returnValue', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.returnValue(7);
            });
            it('Should call vowelCount and say true', function(){
                pointer=app.vowelCount('zakopanenapokaz');
                expect(pointer).toEqual(7);
            });
            it('Should call generateMessage and say true', function(){
                pointer=app.generateMessage('zakopanenapokaz');
                expect(pointer).toEqual({vowel: 7, palindrome: true});
            });
        });

        describe('and.callFake', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.callFake(function(str){
                    var list='zakopaneZAKOPANE',
                        count=0;
                    for(var i= 0; i<str.length; i++){
                        if(list.indexOf(str[i]) !== -1){
                            count++;
                        }
                    }
                    return count;
                });
                it('Should call vowelCount fake function', function(){
                    pointer=app.vowelCount('zakopanenapokaz');
                    expect(pointer).toBe('zakopanenapokaz');
                });
                it('Should call generateMessage fake function', function(){
                    pointer=app.generateMessage('zakopanenapokaz');
                    expect(pointer).toEqual({vowel: 7, palindrome: true});
                });
            });
        });

        describe('calls.count()', function () {
            var pointer;
            beforeAll(function(){
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it('Should call vowelCount fake function', function(){
                pointer=app.vowelCount('zakopanenapokaz');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('Should call generateMessage fake function', function(){
                pointer=app.generateMessage('zakopanenapokaz');
                expect(app.vowelCount.calls.count()).toBe(2);
            });
        });
    });
});

