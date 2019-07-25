import Component from '@ember/component';

export default Component.extend({
    isEditing: false,
    isFinished: false,
    
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
