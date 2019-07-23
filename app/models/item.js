import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    publishedOn: DS.attr('date'),
    updatedOn: DS.attr('date'),
});
