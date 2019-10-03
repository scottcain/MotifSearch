
define([
        'dojo/_base/declare',
        'dojo/dom-construct',
        'dojo/aspect',
        'dijit/focus',
        'dijit/form/Button',
        'dijit/form/CheckBox',
        'dijit/form/RadioButton',
        'dijit/form/TextBox',
        'dijit/form/Select',
        'JBrowse/View/Dialog/WithActionBar'
    ],
    function(
        declare,
        dom,
        aspect,
        focus,
        dButton,
        dCheckBox,
        dRadioButton,
        dTextBox,
        dSelect,
        ActionBarDialog
    ) {

return declare( ActionBarDialog, {

    constructor: function() {
        var thisB = this;
        aspect.after( this, 'hide', function() {
              focus.curNode && focus.curNode.blur();
              setTimeout( function() { thisB.destroyRecursive(); }, 500 );
        });
    },

    _dialogContent: function () {
        var content = this.content = {};

        var container = dom.create('div', { className: 'search-dialog' } );

        var introdiv = dom.create('div', {
            className: 'search-dialog intro',
            innerHTML: 'This tool creates a track showing locations of the identified motif.'
        }, container );

        // Render enzyme select
//        var selectDiv = dom.create('div', {
//            className: "section"
//        }, container );


        //pull in matrices from an external json file
        //content.matrices =  JSON.parse( motifData );
        dojo.xhrGet({
            url: "/tools/genome/jbrowse/plugins/MotifSearch/js/View/sample_motifs.json",
            handleAs: "json",
            load: function(obj) {
                  /* here, obj will already be a JS object deserialized from the JSON response */
                  console.log(obj.matrices);
                  content.matrices = obj.matrices;
            },
            error: function(err) {
                console.log('the motif file couldnt be loaded'); 
            }
        });

        console.log(content.matrices);

        content.matrixbutton = [];

        var flexcontainer=dom.create('div',{className:'flex-container'},container);
        var radiocolone =dom.create('div',{className: 'colone'},flexcontainer);
        var radiocoltwo =dom.create('div',{className: 'coltwo'},flexcontainer);
        var radiocolthr =dom.create('div',{className: 'colthr'},flexcontainer);


        function makeRadio( args, parent ) {
            var label = dom.create('label', {}, parent);
            var radio = new dRadioButton( args).placeAt( label );
            dom.create('span', {innerHTML: args.label + "</br>" }, label);
            return radio;
        }
        for (var i =0;i<Math.round(content.matrices.length/3+0.5) ; i++) {
            var name = content.matrices[i].name;
            content.matrixbutton[name] = makeRadio( {name: 'matrix', value: name, label: name}, radiocolone);
        }
        for (var i = Math.round(content.matrices.length/3 +0.5); i<Math.round(2*content.matrices.length/3 +0.5); i++) {
            var name = content.matrices[i].name;
            content.matrixbutton[name] = makeRadio( {name: 'matrix', value: name, label: name}, radiocoltwo);
        }
        for (var i = Math.round(2*content.matrices.length/3 +0.5); i<content.matrices.length; i++) {
            var name = content.matrices[i].name;
            content.matrixbutton[name] = makeRadio( {name: 'matrix', value: name, label: name}, radiocolthr);
        }

        //console.log(content.matrices.length);

        var minscoreDiv = dom.create('div', {className: 'section',style:{position: 'relative'}}, radiocolone);

        content.minscorefield = new dTextBox( {name: 'minscore',style: 'width: 7em;',placeholder:'min score %'}, minscoreDiv  );

        var helpText1 = '<ul><li>Min score is the minimum percent match to the matrix.<li>Custom matrices require a name. Each row of the matrix in order A, C, G, T with one or more spaces between elements.</ul>';
        var helpText2 = '<ul><li>To see a track\'s matrix, check the track label\'s drop down menu.<li>Matrix search tracks do not survive page reloads.</ul>';

        var helpTextContainer1 = dom.create('div', {name:'helptext1', innerHTML: helpText1, style:{position: 'relative'}}, radiocolone); 
        var helpTextContainer2 = dom.create('div', {name:'helptext2', innerHTML: helpText2, style:{position: 'relative'}}, radiocoltwo);

        //minscoreDiv.appendChild(content.minscorefield.domNode);
        //dom.create( "label", {"for" : "minscore", innerHTML: "Minimum score"}, minscoreDiv);

        //text fields for custom matrix
        var customMatrixDiv = dom.create('div', {className: 'section',style:{position: 'relative'}}, radiocolthr); //to make it on the right side of the window
        var customMatrixNameDiv = dom.create('div', {className: 'section',style:{position: 'left'}}, customMatrixDiv);
        var customMatrixADiv = dom.create('div', {className: 'section',style:{position: 'left'}}, customMatrixDiv);
        var customMatrixCDiv = dom.create('div', {className: 'section',style:{position: 'left'}}, customMatrixDiv);
        var customMatrixGDiv = dom.create('div', {className: 'section',style:{position: 'left'}}, customMatrixDiv);
        var customMatrixTDiv = dom.create('div', {className: 'section',style:{position: 'left'}}, customMatrixDiv);
        content.custommatrixnamefield = new dTextBox( {name: 'custommatrixname',style: 'width: 14em;',placeholder:'custom name (required)'}, customMatrixNameDiv );
        content.custommatrixafield    = new dTextBox( {name: 'custommatrixa',style: 'width: 15em;',placeholder:'A:0 12 0 4...'}, customMatrixADiv );
        content.custummatrixcfield    = new dTextBox( {name: 'custummatrixc',style: 'width: 15em;',placeholder:'C:12 0 0 6...'}, customMatrixCDiv);
        content.custommatrixgfield    = new dTextBox( {name: 'custommatrixg',style: 'width: 15em;',placeholder:'G:0 0 12 0...'}, customMatrixGDiv);
        content.custommatrixtfield    = new dTextBox( {name: 'custommatrixt',style: 'width: 15em;',placeholder:'T:0 0 0 2...'}, customMatrixTDiv);


        return container;
    },

    _getSearchParams: function() {
        var content = this.content;

        var selected;
        var matrixA,matrixC,matrixT,matrixG;
        for (var i =0;i<content.matrices.length ; i++) {
            var name = content.matrices[i].name;
            //console.log(name);
            if (content.matrixbutton[name].checked) {
                selected = name;
                matrixA = content.matrices[i].matrix['A'];
                matrixC = content.matrices[i].matrix['C'];
                matrixT = content.matrices[i].matrix['T'];
                matrixG = content.matrices[i].matrix['G'];
                break;
            }
        }

        var nota = false;
        var noteq= false;

        if (content.custommatrixnamefield.get('value')) {
            selected = content.custommatrixnamefield.get('value');
            var custommatrix = [content.custommatrixafield.get('value'),
                                content.custummatrixcfield.get('value'),
                                content.custommatrixgfield.get('value'),
                                content.custommatrixtfield.get('value')];
            var newarray = {};

            for (var i=0;i<custommatrix.length; i++) {
                if (custommatrix[i].indexOf(':') >=0 ) { //eliminate leading label if present
                    custommatrix[i] = custommatrix[i].substring(custommatrix[i].indexOf(':')+1);
                }
                custommatrix[i] = custommatrix[i].trim();

                newarray[i]=custommatrix[i].split(/\s+/);
                for (var j=0; j<newarray[i].length; j++) {
                    newarray[i][j]= parseFloat(newarray[i][j]);
                    if (isNaN(newarray[i][j])) {
                        nota = true;;
                    }
                }
            }
            matrixA = newarray[0];
            matrixC = newarray[1];
            matrixG = newarray[2];
            matrixT = newarray[3];

            var alen = matrixA.length;
            if (alen != matrixC.length || alen!=matrixG.length || alen!=matrixT.length) {
                noteq = true;
            }

        }

        //console.log(matrixA);

        var min_score = (isNaN(content.minscorefield.get('value'))
                      || content.minscorefield.get('value') <= 0
                      || content.minscorefield.get('value') > 100)
                       ? 80 : content.minscorefield.get('value');

        return {
            matrix: selected,
            matrix_A: matrixA,
            matrix_C: matrixC,
            matrix_G: matrixG,
            matrix_T: matrixT,
            minscore: min_score,
            noteq : noteq,
            nota : nota
        };
    },

    _fillActionBar: function ( actionBar ) {
        var thisB = this;

        new dButton({
                            label: 'Search',
                            iconClass: 'dijitIconBookmark',
                            onClick: function() {
                                var searchParams = thisB._getSearchParams();
                                if (searchParams.nota) {
                                    alert('Something that is not a number was put in the matrix.');
                                }
                                else if (searchParams.noteq) {
                                    alert('The length of the rows of the matrix are not equal length.');
                                }
                                else {
                                    thisB.callback( searchParams );
                                    thisB.hide();
                                }
                            }
                        })
            .placeAt( actionBar );
        new dButton({
                            label: 'Cancel',
                            iconClass: 'dijitIconDelete',
                            onClick: function() {
                                thisB.callback( false );
                                thisB.hide();
                            }
                        })
            .placeAt( actionBar );
    },

    show: function ( callback ) {
        this.callback = callback || function() {};
        this.set( 'title', "Add motif search track");
        this.set( 'content', this._dialogContent() );
        this.inherited( arguments );
        focus.focus( this.closeButtonNode );
    }

});
});
