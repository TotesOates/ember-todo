import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    isEditing: false,
    isFinished: false,
    publishedTime: computed('item.publishedOn', function() {
        let cleanUp = this.item.publishedOn.toString().split(' ');
        return `${cleanUp[0]} ${cleanUp[1]} ${cleanUp[2]} ${cleanUp[3]} at ${cleanUp[4]}`
    }),

    actions: {
        updateItem(){
            this.updateItem();
            this.set('isEditing', false);
        },
        itemEditing(){
            this.toggleProperty('isEditing');
        },
        cancelEdit(){
            this.cancelEdit();
            this.set('isEditing', false);
        },
    }
});
