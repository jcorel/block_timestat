/**
 */

define(['jquery', 'block_timestat/screentime', 'core/ajax'], function($, screentime, ajax) {
  return {
    init: function(registerid) {
      $.screentime({
        fields: [
          {
            name: 'content',
            selector: 'body'
          }
        ],
        percentOnScreen: "10%",
        googleAnalytics: false,
        reportInterval: 15,
        callback: function(data, log) {
          ajax.call([{
            methodname: 'block_timestat_update_register',
            args: {
              timespent: log.content,
              registerid: registerid
            }
          }]);
        }
      });
    }
  };
});