import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

const FOOBAR_ARRAY = [undefined, undefined, undefined, undefined, undefined, undefined, 'foobar', undefined];

Template.test.onCreated(function() {
  // Save a document to play with
  const doc = new Document();
  const id = doc.save();
  // Persist the doc id to instance for later use
  this.docId = id;
});

Template.test.helpers({
  // The array we save to doc, for viewing in template
  arrayToSave() {
    return JSON.stringify(FOOBAR_ARRAY, null, 4);
  },
  // Print a stringified version of our doc
  doc() {
    const doc = Document.findOne(Template.instance().docId);
    return JSON.stringify(doc.raw(), null, 4);
  },
});

Template.test.events({
  'click button'(event, instance) {
    // Save our Foobar Array to document
    const doc = Document.findOne(instance.docId);
    doc.values = FOOBAR_ARRAY;
    doc.save();
  },
});
