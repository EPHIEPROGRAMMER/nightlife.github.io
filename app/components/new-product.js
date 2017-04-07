import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
      title: this.get('title'),
      description: this.get('description'),
      value: this.get('value'),
      image: this.get('image')
    };
    this.sendAction('save', params);
    }
  }
});
