/**
 * Created by . on 2018/6/6.
 */
$(function () {
    var formData = {
        project: ['SNG140ICR1', 'SNG140ICR2'],
        p2: [{n:'SNG140ICR1'},{n:'SNG140ICR2'}],
        centre: {
            SNG140ICR1: ['Site01-成都军区1', 'Site01-成都军区2'],
            SNG140ICR2: ['Site01-成都军区1', 'Site01-成都军区2']
        },
        select: [2,3,4,5,6],
        c: '123'
    };
    way.set('formData',formData)
    way.watchAll(function(selector, value) {
        console.log("Something changed.", {
            selector: selector,
            value: value
        });
    });
});