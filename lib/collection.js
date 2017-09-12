import { Class } from 'meteor/jagi:astronomy';

Documents = new Mongo.Collection('documents');

Document = Class.create({
  name: 'Document',
  collection: Documents,
  secured: false,
  fields: {
    values: {
      type: Object,
      default: function() {
        return [];
      },
      validators: [
        { type: 'array' }
      ]
    }
  }
});
