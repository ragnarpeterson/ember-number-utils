import formatBytes from 'ember-number-utils/utils/format_bytes';
import formatCount from 'ember-number-utils/utils/format_count';
import Em from 'ember';

export default {
  name: 'ember-number-utils',

  initialize: function() {
    Em.Handlebars.helper('format-bytes', formatBytes);
    Em.Handlebars.helper('format-count', formatCount);
  }
};
