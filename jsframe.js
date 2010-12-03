/*JSFRAME by Jack Franklin
 * Find me online:
 *    www.jackfranklin.co.uk
 *    www.twitter.com/Jack_Franklin
 * And view this project's home page on Github:
 *    www/github.com/jackfranklin/??
 * Before using this, PLEASE READ THE README!
 */
/*CREDITS
 *    The CSS Framework I use daily is www.cssgrid.net so that is the framework
 *    I chose to use when creating JSFrame. So I owe huge thanks to Andy Taylor
 *    for creating cssgrid.net which lead me to creating JSFrame.
 */
 
 //lets go! 
 (function($) {
   $.fn.jsFrame = function(options) {
      var defaults = {};
      var options = $.extend({},defaults,options);
      var columns = {
         '1' : 'onecol',
         '2' : 'twocol',
         '3' : 'threecol', '4' : 'fourcol', '5' : 'fivecol', '6' : 'sixcol', '7' : 'sevencol', '8' : 'eightcol',
         '9' : 'ninecol', '10' : 'tencol', '11' : 'elevencol', '12' : 'twelvecol'
      };
      return this.each(function() {
         var $t = $(this),
            allRows = $t.find('.row'); //get all rows
         allRows.each(function() {
            var $th = $(this),
                allCols = $th.children('div'), //get the child divs
                lastCol = $th.children('div:last'), //get the last div
                colInf = $th.attr('rel'); //get the rel which contains the information
            lastCol.addClass('last'); //add the last class to the last div
            colInf = colInf.split('.'); //split the info at a period to get the individual bits
            for(var i = 0; i < colInf.length; i++) {
               allCols.eq(i).addClass(columns[colInf[i]]);
            };
            
         });
      });
   };
})(jQuery);

