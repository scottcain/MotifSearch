
define([
           'dojo/_base/declare',
           'dojo/_base/lang',
           'dojo/Deferred',
            'dijit/MenuItem',
           'JBrowse/Plugin',
           './View/SearchSeqDialog'
       ],
       function(
           declare,
           lang,
           Deferred,
           dijitMenuItem,
           JBrowsePlugin,
           SearchSeqDialog
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
        this._searchTrackCount = 0;

        var thisB = this;
        this.browser.afterMilestone('initView', function() {
            this.browser.addGlobalMenuItem( 'file', new dijitMenuItem(
                                           {
                                               label: 'Add motif search track',
                                               iconClass: 'dijitIconBookmark',
                                               onClick: lang.hitch(this, 'createSearchTrack')
                                           }));
        }, this );

    },

    createSearchTrack: function() {

        var searchDialog = new SearchSeqDialog();
        var thisB = this;
        searchDialog.show(
            function( searchParams ) {
                if( !searchParams )
                    return;

                var storeConf = {
                    browser: thisB.browser,
                    refSeq: thisB.browser.refSeq,
                    type: 'MotifSearch/Store/SeqFeature/MotifSearch',
                    searchParams: searchParams
                };
                var storeName = thisB.browser.addStoreConfig( undefined, storeConf );
                storeConf.name = storeName;
                var searchTrackConfig = {
                    type: 'JBrowse/View/Track/CanvasFeatures',
                    label: 'motif_search_track_' + (thisB._searchTrackCount++),
                    key: "Search  for "+ searchParams.matrix + " (min score:" + searchParams.minscore + ")",
                    metadata: {
                        category: 'Local tracks',
                        Description: "Contains all matches of the motif " + searchParams.matrix
                    },
                    store: storeName
                };

                // send out a message about how the user wants to create the new track
                thisB.browser.publish( '/jbrowse/v1/v/tracks/new', [searchTrackConfig] );

                // Open the track immediately
                thisB.browser.publish( '/jbrowse/v1/v/tracks/show', [searchTrackConfig] );
            });
}

});
});

