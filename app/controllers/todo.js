import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  itemTitle: '',
  itemDescription: '',
  isDisabled: empty('itemTitle'),

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

    updateItem(item){
      let itemTitle = this.get('itemTitle');
      let itemDescription = this.get('itemDescription');
      this.store.findRecord('item', item.id, { backgroundReload: false }).then(function(item){
        item.set('title', itemTitle);
        item.set('description', itemDescription);
        item.set('updatedOn', new Date());
      });
    },
  },
});
