import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  itemTitle: '',
  itemDescription: '',
  isDisabled: empty('itemTitle'),
  isEditing: false,
  sortBy: true,
  
  actions: {
    submitForm(){
      let item = this.store.createRecord('item', {
        title: this.itemTitle,
        description: this.itemDescription,
        publishedOn: new Date(),
        updatedOn: null,
      });
      item.save();
      this.set('itemTitle', '');
      this.set('itemDescription', '');
  },

    deleteItem(item) {
      this.store.findRecord('item', item.id, { backgroundReload: false }).then(function(item) {
        item.destroyRecord();
      });
    },

    editingItem() {
      this.toggleProperty('isEditing');
    },

    cancelEdit(item){
      item.rollbackAttributes();
      this.set('isEditing', false);
    },

    updateItem(item){
      this.store.findRecord('item', item.id, { backgroundReload: false }).then(function(item){
        item.set('title', item.title);
        item.set('description', item.description);
        item.set('updatedOn', new Date());
      });
    },
  },
});
