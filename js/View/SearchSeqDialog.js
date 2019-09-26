
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


        content.matrices = [
      {
         "name" : "DAF-16_Furuyama_2000", //fixed
         "matrix" : {
            "A" : [4,4,4,1,0,1,0,0,0,22,0,10,8,3],
            "C" : [3,3,4,0,0,0,0,1,0,0,21,3,5,10],
            "G" : [9,7,12,1,0,24,0,0,0,2,0,6,3,1],
            "T" : [7,10,5,23,25,0,25,24,25,1,4,5,7,8]
         }
      },
      {
         //Looked at blackwell paper; the matrix isn't in it!
         //Blackwell, T. Keith, et al. "Formation of a monomeric DNA binding domain by Skn-1 bZIP and homeodomain elements." Science, vol. 266, no. 5185, 1994, p. 621+. Academic OneFile, go.galegroup.com.myaccess.library.utoronto.ca/ps/i.do?p=AONE&sw=w&u=utoronto_main&v=2.1&it=r&id=GALE%7CA15898437&asid=4850b6c11b606aac8307c04459c9ce1c. Accessed 14 Nov. 2016.
         "name" : "SKN-1_Blackwell_1994",
         "matrix" : {
            "A" : [6.25,17,14,7.25,14,0,0,33,0,1,13,12],
            "C" : [12.25,4,2,3.25,0,0,33,0,0,15,12,7],
            "G" : [3.25,2,3,1.25,19,0,0,0,0,9,2,2],
            "T" : [11.25,10,14,21.25,0,33,0,0,33,8,6,12]
         }
      },
      {
         "name" : "TRA-1_Zarkower_1993", //fixed
         "matrix" : {
            "A" : [4, 6, 2 ,5 ,7, 6, 6, 4,12,9, 5, 2,0, 0, 15,0 ,0 ,0 ,3,5,9,17,10],
            "C" : [12,5, 7 ,3,10,22,11,11,10,17,6, 0,1, 0, 1 ,0 ,0 ,5 ,33,8,7,5,4],
            "G" : [12,5, 5 ,8, 7, 3, 8,11,5, 11,2,34,36,37,7 ,42,42,4 ,3,13,10,10,15],
            "T" : [13,26,26,26,15,8,15,14,12,3, 29,6,5, 5, 19,0 ,0 ,33,3,16,15,10,13]
         }
      },
      {
         "name" : "ELT-2_McGhee_2007", //fixed
         "matrix" : {
            "A" : [0.74,0.28,0.07,0,1,0,1,0.97,0.19,0.54],
            "C" : [0.04,0.29,0.08,0,0,0,0,0,0.15,0.09],
            "G" : [0.13,0.13,0.08,1,0,0,0,0.02,0.53,0.2],
            "T" : [0.09,0.31,0.91,0,0,1,0,0.01,0.13,0.17]
         }
      },
      {
         "name" : "EGL-38_Zhang_2005", //fixed
         "matrix" : {
            "A" : [0,1,1,1,1,23,0,0,1,7,0,0,19],
            "C" : [10,18,1,13,14,2,20,0,17,0,7,16,0],
            "G" : [2,4,24,1,0,0,0,26,8,2,0,10,7],
            "T" : [14,3,0,11,11,1,6,0,0,17,19,0,0]
         }
      },
      {
         "name" : "MAB-3_Yi_1999", //fixed
         "matrix" : {
            "T" : [8,14,99,0,100,100,0,0,1,27,44,34,74],
            "C" : [3,0,1,0,0,0,0,100,19,0,0,13,8],
            "G" : [13,0,0,100,0,0,100,0,67,11,6,22,10],
            "A" : [76,86,0,0,0,0,0,0,13,62,50,29,8]
         }
      },
      {
         "name" : "CEH-10/TTX-3_Wenick_2004", //did not match JASPAR at all
                                             //checked against ref, fixed
         "matrix" : {
            "A" : [4,6,8,0,1,3,0,0,1,1,5,3,0,0,7,5],
            "C" : [0,0,0,0,0,0,0,6,2,3,4,1,0,1,1,0],
            "G" : [2,1,1,0,0,6,8,1,0,0,0,5,0,0,0,3],
            "T" : [3,2,0,9,8,0,1,2,6,5,0,0,9,8,1,1]
         }
      },
      {
         "name" : "PHA-4_Ao_2004_1", //fixed (supplimental matterials)
         "matrix" : {
            "A" : [0.117,0.117,0.497,0.079,0.003,0.003,0.003,0.003,0.003,0.079,0.231,0.534],
            "C" : [0.193,0.459,0.003,0.079,0.953,0.003,0.041,0.914,0.155,0.155,0.421,0.041],
            "G" : [0.307,0.231,0.231,0.838,0.003,0.117,0.003,0.079,0.041,0.421,0.117,0.003],
            "T" : [0.382,0.193,0.269,0.003,0.041,0.876,0.952,0.003,0.8,0.345,0.231,0.421]
         }
      },
      {
         "name" : "DAF-12_Ao_2004",//this looks nothing like the daf-12 in JASPAR
         "matrix" : {              //this is 9 long, it's 15 long
                       //but it does match M-2:pharyngeal muscle enhanscer in Ao. Mislabeled?
            "A" : [0.426,0.461,0.003,0.955,0.003,0.99,0.003,0.709,0.462],
            "C" : [0.003,0.003,0.99,0.039,0.814,0.003,0.955,0.003,0.285],
            "G" : [0.215,0.356,0.003,0.003,0.179,0.003,0.038,0.215,0.109],
            "T" : [0.356,0.179,0.003,0.003,0.003,0.003,0.003,0.074,0.144]
         }
      },
      {
         "name" : "PHA-4_Ao_2004_2", //fixed
         "matrix" : {
            "A" : [0.097,0.003,0.05,0.003,0.003,0.05,0.003,0.708,0.144,0.426],
            "C" : [0.003,0.003,0.003,0.614,0.003,0.05,0.755,0.144,0.332,0.286],
            "G" : [0.144,0.849,0.38,0.239,0.99,0.896,0.238,0.05,0.427,0.003],
            "T" : [0.755,0.144,0.567,0.144,0.003,0.003,0.003,0.097,0.097,0.285]
         }
      },
      {
         "name" : "PHA-4_Ao_2004_3", //fixed
         "matrix" : {
            "A" : [0.285,0.332,0.05,0.003,0.003,0.614,0.003,0.003,0.521],
            "C" : [0.003,0.097,0.003,0.144,0.943,0.285,0.943,0.99,0.144],
            "G" : [0.239,0.003,0.003,0.802,0.003,0.05,0.003,0.003,0.003],
            "T" : [0.473,0.568,0.943,0.05,0.05,0.05,0.05,0.003,0.332]
         }
      },
      {
         "name" : "PHA-4_Ao_2004_4", //fixed
         "matrix" : {
            "A" : [0.097,0.003,0.003,0.003,0.003,0.849,0.99,0.614],
            "C" : [0.144,0.755,0.097,0.896,0.99,0.003,0.003,0.05],
            "G" : [0.52,0.003,0.003,0.097,0.003,0.144,0.003,0.191],
            "T" : [0.238,0.238,0.896,0.003,0.003,0.003,0.003,0.144]
         }
      },
      {
         "name" : "PHA-4_Ao_2004_5",//fixed
         "matrix" : {
            "A" : [0.041,0.003,0.041,0.041,0.117,0.003,0.648,0.572,0.344,0.268,0.155],
            "C" : [0.231,0.801,0.763,0.003,0.041,0.953,0.269,0.307,0.346,0.194,0.307],
            "G" : [0.422,0.117,0.117,0.952,0.838,0.041,0.079,0.003,0.079,0.079,0.345],
            "T" : [0.307,0.079,0.078,0.003,0.003,0.003,0.003,0.117,0.231,0.459,0.193]
         }
      },
      {
         "name" : "PHA-4_Ao_2004_6", //fixed
         "matrix" : {
            "A" : [0.411,0.105,0.31,0.037,0.003,0.718,0.003,0.037,0.003,0.207,0.139,0.378],
            "C" : [0.003,0.31,0.003,0.922,0.99,0.003,0.071,0.037,0.208,0.241,0.31,0.14],
            "G" : [0.378,0.003,0.105,0.003,0.003,0.242,0.922,0.003,0.105,0.037,0.105,0.037],
            "T" : [0.208,0.582,0.582,0.037,0.003,0.037,0.003,0.922,0.684,0.514,0.446,0.446]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_1", //fixed
         "matrix" : {
            "A" : [0.003,0.003,0.003,0.04,0.003,0.003,0.113,0.259],
            "C" : [0.003,0.003,0.003,0.113,0.04,0.003,0.442,0.296],
            "G" : [0.003,0.99,0.003,0.186,0.003,0.99,0.296,0.223],
            "T" : [0.99,0.003,0.99,0.662,0.954,0.003,0.149,0.223]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_2", //fixed
         "matrix" : {
            "A" : [0.127,0.003,0.003,0.003,0.003,0.003,0.003,0.065],
            "C" : [0.25,0.003,0.003,0.003,0.003,0.003,0.003,0.682],
            "G" : [0.127,0.065,0.99,0.003,0.065,0.127,0.99,0.003],
            "T" : [0.497,0.928,0.003,0.99,0.928,0.867,0.003,0.25]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_3", //fixed
         "matrix" : {
            "A" : [0.435,0.034,0.867,0.003,0.867,0.127,0.003,0.65,0.466,0.249],
            "C" : [0.096,0.065,0.065,0.065,0.126,0.651,0.003,0.251,0.219,0.157],
            "G" : [0.281,0.898,0.003,0.929,0.003,0.096,0.99,0.065,0.065,0.343],
            "T" : [0.188,0.003,0.065,0.003,0.003,0.126,0.003,0.034,0.25,0.25]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_4", //fixed
         "matrix" : {
            "A" : [0.219,0.003,0.003,0.003,0.96,0.003,0.003,0.034,0.158],
            "C" : [0.065,0.712,0.158,0.281,0.003,0.959,0.743,0.065,0.003],
            "G" : [0.126,0.003,0.003,0.713,0.003,0.003,0.25,0.528,0.219],
            "T" : [0.59,0.281,0.836,0.003,0.034,0.034,0.003,0.373,0.62]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_5", //fixed
         "matrix" : {
            "A" : [0.497,0.435,0.528,0.466,0.62,0.713,0.188,0.342,0.003,0.219,0.003,0.497],
            "C" : [0.096,0.158,0.065,0.281,0.065,0.003,0.003,0.003,0.003,0.003,0.003,0.219],
            "G" : [0.281,0.342,0.312,0.188,0.188,0.219,0.805,0.003,0.99,0.774,0.99,0.188],
            "T" : [0.126,0.065,0.096,0.065,0.127,0.065,0.003,0.651,0.003,0.003,0.003,0.096]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_6", //fixed
         "matrix" : {
            "A" : [0.378,0.207,0.31,0.582,0.037,0.003,0.037,0.003,0.276,0.139,0.31,0.378],
            "C" : [0.105,0.037,0.275,0.071,0.071,0.412,0.684,0.003,0.003,0.105,0.037,0.207],
            "G" : [0.412,0.752,0.31,0.344,0.82,0.582,0.003,0.99,0.718,0.65,0.582,0.31],
            "T" : [0.105,0.003,0.105,0.003,0.071,0.003,0.275,0.003,0.003,0.105,0.071,0.105]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_7", //fixed
         "matrix" : {
            "A" : [0.352,0.003,0.003,0.003,0.032,0.003,0.003],
            "C" : [0.09,0.032,0.09,0.003,0.003,0.99,0.99],
            "G" : [0.003,0.003,0.003,0.003,0.119,0.003,0.003],
            "T" : [0.555,0.961,0.904,0.99,0.845,0.003,0.003]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_8", //fixed
         "matrix" : {
            "A" : [0.188,0.003,0.065,0.003,0.003,0.003,0.682,0.497],
            "C" : [0.003,0.867,0.065,0.805,0.003,0.003,0.188,0.003],
            "G" : [0.127,0.127,0.003,0.188,0.99,0.99,0.003,0.25],
            "T" : [0.682,0.003,0.867,0.003,0.003,0.003,0.127,0.25]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_9", //fixed
         "matrix" : {
            "A" : [0.185,0.211,0.029,0.003,0.003,0.912,0.029,0.003,0.315,0.341],
            "C" : [0.133,0.029,0.237,0.029,0.757,0.081,0.964,0.964,0.237,0.159],
            "G" : [0.211,0.341,0.003,0.029,0.185,0.003,0.003,0.029,0.185,0.393],
            "T" : [0.471,0.419,0.73,0.938,0.055,0.003,0.003,0.003,0.263,0.107]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_10", //fixed
         "matrix" : {
            "A" : [0.25,0.144,0.109,0.003,0.003,0.215,0.038,0.743,0.039],
            "C" : [0.039,0.144,0.038,0.039,0.955,0.038,0.814,0.039,0.955],
            "G" : [0.321,0.392,0.462,0.92,0.039,0.003,0.003,0.145,0.003],
            "T" : [0.391,0.32,0.391,0.038,0.003,0.744,0.144,0.074,0.003]
         }
      },
      {
         "name" : "PHA-4_Gaudet_2004_11", //fixed
         "matrix" : {
            "A" : [0.18,0.003,0.003,0.109,0.003,0.003,0.779,0.743,0.532],
            "C" : [0.003,0.497,0.039,0.003,0.955,0.99,0.179,0.003,0.18],
            "G" : [0.109,0.003,0.003,0.003,0.039,0.003,0.003,0.215,0.003],
            "T" : [0.708,0.497,0.955,0.885,0.003,0.003,0.039,0.039,0.285]
         }
      },
      {
         "name" : "HNF-6_Lannoy_1998", //fixed, I think the matrix was inferred from an alignment
         "matrix" : {
            "A" : [5,5,8,11,8,0,0,11,12,0,9,7,4,3],
            "C" : [3,1,1,0,0,0,12,1,0,0,1,0,3,3],
            "G" : [0,2,1,0,4,0,0,0,0,0,1,1,0,2],
            "T" : [4,4,4,1,0,12,0,0,0,12,1,4,5,4]
         }
      },
      {
         "name" : "CES-2_Metzstein_1999",  //fixed
         "matrix" : {
            "A" : [2,0,4,0,1,0,0],
            "C" : [0,3,0,0,0,0,1],
            "G" : [2,0,0,4,3,0,2],
            "T" : [0,1,0,0,0,1,1]
         }
      },
      {
         "name" : "DAF-19_Winkelbauer_2005", //couldn't find the matrix but the consensus in the paper is consistent with the matrix here.
         "matrix" : {
            "A" : [2,0,0,0,0,0,4,1,6,2,0,5,6,0],
            "C" : [0,0,1,0,6,6,1,0,0,0,4,1,0,6],
            "G" : [4,0,0,2,0,0,0,1,0,4,0,0,0,0],
            "T" : [0,6,5,4,0,0,1,4,0,0,2,0,0,0]
         }
      },
      {
         "name" : "DAF-19_Schafer_2003", //fixed
         "matrix" : {
            "A" : [0,0,0,0,0,0,4,0,1,0,0,3,4,0],
            "C" : [0,1,0,1,4,3,0,0,0,0,2,0,0,4],
            "G" : [4,0,0,1,0,0,0,1,3,4,0,0,0,0],
            "T" : [0,3,4,2,0,1,0,3,0,0,2,1,0,0]
         }
      },
      {
         "name" : "AST-1_Flames_2009", //fixed
         "matrix" : {
            "A" : [13,9,4,0,0,40,32,19],
            "C" : [1,20,30,0,0,0,0,0],
            "G" : [16,3,5,40,40,0,0,20],
            "T" : [10,8,1,0,0,0,8,1]
         }
      },
      {
         "name" : "PGM1_Smit_2008", //fixed
         "matrix" : {
            "A" : [5,7,0,14,2,3,0,0,4,3,0,10,14,14,0,9,1,1],
            "C" : [0,2,14,0,3,5,0,0,2,0,13,4,0,0,8,0,1,0],
            "G" : [1,5,0,0,8,6,0,14,0,2,0,0,0,0,0,3,3,1],
            "T" : [8,0,0,0,1,0,14,0,8,9,1,0,0,0,6,2,9,12]
         }
      },
      {
         "name" : "PUF-11_Koh_2009_1", //fixed
         "matrix" : {
            "A" : [8,11,4,0,0,0,11,28,28,2,20,14,6],
            "C" : [11,10,14,0,0,0,1,1,0,0,0,2,8],
            "G" : [3,1,1,0,29,0,17,0,1,0,7,7,9],
            "T" : [7,7,10,29,0,29,0,0,0,26,2,6,6]
         }
      },
      {
         "name" : "PUF-11_Koh_2009_2", //fixed
         "matrix" : {
            "A" : [6,9,0,0,0,0,21,4,12,19,1,20,14],
            "C" : [13,5,3,0,0,0,2,10,8,3,0,0,0],
            "G" : [1,1,0,0,27,0,4,2,0,0,1,7,3],
            "T" : [7,12,24,27,0,27,0,11,7,5,25,0,10]
         }
      },
      {
         "name" : "PUF-11_Koh_2009_3", //fixed
         "matrix" : {
            "A" : [9,2,2,0,0,0,6,16,13,14,5,6,10],
            "C" : [4,9,11,0,0,0,9,1,2,0,0,1,0],
            "G" : [1,0,0,0,18,0,1,1,2,3,0,8,7],
            "T" : [4,7,4,18,0,18,2,0,1,1,13,3,1]
         }
      },
      {
         "name" : "CES-box_Reece-Hoyes_2009", //fixed
         "matrix" : {
            "A" : [10,7,24,14,24,0,24,0,0,0,0,6,6],
            "C" : [3,5,0,10,0,24,0,0,0,0,0,6,6],
            "G" : [9,5,0,0,0,0,0,24,24,0,13,5,6],
            "T" : [2,7,0,0,0,0,0,0,0,24,11,7,6]
         }
      },
      {
         "name" : "MEX-motif_Jans_2009", //fixed
         "matrix" : {
            "A" : [10,2,0,2,0,13,31,5,1,0,21,2],
            "C" : [0,25,0,29,0,16,0,0,0,0,0,8],
            "G" : [0,4,31,0,31,2,0,26,30,31,4,21],
            "T" : [21,0,0,0,0,0,0,0,0,0,6,0]
         }
      },
      {
         "name" : "AWB-chemoreceptor-motif_Nokes_2009_1", //fixed
         "matrix" : {
            "A" : [4,0,4,5,0,0,3,0,1],
            "C" : [0,0,0,0,2,3,0,0,0],
            "G" : [1,0,0,0,0,1,2,5,3],
            "T" : [0,5,1,0,3,1,0,0,1]
         }
      },
      {
         "name" : "AWB-chemoreceptor-motif_Nokes_2009_2", //fixed
         "matrix" : {
            "A" : [0,0,3,6,0,0,0,4,2,0,2],
            "C" : [1,3,0,0,0,0,2,0,1,0,0],
            "G" : [2,1,0,0,0,0,4,0,3,4,0],
            "T" : [3,2,3,0,6,6,0,2,0,2,4]
         }
      },
      {
         "name" : "CEH-22_Berger_2006", //fixed
         "matrix" : {
            "A" : [0.2187,0.2004,0.2702,0.164,0.3014,0.4461,0.3323,0.0875,0.004,0.9357,0.0162,0.0038,0.0057,0.0775,0.9503,0.4688,0.5149,0.2793,0.1822,0.3681,0.312,0.129],
            "C" : [0.218,0.3718,0.2315,0.3316,0.1624,0.145,0.1589,0.713,0.8951,0.0101,0.9798,0.0028,0.1616,0.2729,0.0012,0.29,0.2098,0.1478,0.1732,0.2054,0.4527,0.0863],
            "G" : [0.0891,0.2506,0.2501,0.2069,0.2408,0.3045,0.3149,0.1937,0.0021,0.0005,0.0017,0.003,0.0007,0.6395,0.0082,0.2098,0.1541,0.2368,0.1967,0.1326,0.1102,0.4283],
            "T" : [0.474,0.177,0.2481,0.2973,0.2952,0.1042,0.1937,0.0056,0.0987,0.0534,0.002,0.9901,0.8318,0.01,0.0401,0.0313,0.1211,0.3359,0.4477,0.2938,0.1249,0.3562]
         }
      },
      {
         "name" : "HLH-1_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.1683,0.2102,0.2541,0.7082,0.0246,0.9236,0.1245,0.0185,0.0192,0.0199,0.1694,0.028,0.3051,0.3586,0.3311,0.318],
            "C" : [0.0999,0.3108,0.0768,0.0615,0.9276,0.0196,0.1397,0.7172,0.0373,0.0277,0.0794,0.6409,0.1249,0.1762,0.1935,0.2172],
            "G" : [0.3569,0.3423,0.6409,0.1133,0.0277,0.0373,0.7172,0.1397,0.0196,0.9276,0.0381,0.0768,0.4475,0.1938,0.3563,0.3567],
            "T" : [0.3747,0.1366,0.028,0.1169,0.0199,0.0192,0.0185,0.1245,0.9236,0.0246,0.7129,0.2541,0.1223,0.2711,0.1188,0.1079]
         }
      },
      {
         "name" : "HLH-11_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3201,0.2514,0.2255,0.2461,0.7315,0.2007,0.023,0.9494,0.0106,0.0491,0.0234,0.015,0.6092,0.1444,0.1857,0.2136],
            "C" : [0.1518,0.3122,0.2799,0.1427,0.079,0.0743,0.947,0.0145,0.046,0.8807,0.0651,0.0123,0.0228,0.2085,0.4172,0.1644],
            "G" : [0.1802,0.1257,0.1923,0.4074,0.1621,0.0165,0.0138,0.0155,0.9036,0.0509,0.0131,0.9303,0.1241,0.2038,0.263,0.3409],
            "T" : [0.3477,0.3105,0.302,0.2035,0.0273,0.7083,0.016,0.0205,0.0396,0.0192,0.8982,0.0421,0.2437,0.4431,0.1339,0.2808]
         }
      },
      {
         "name" : "HLH-25_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3849,0.3229,0.1358,0.3938,0.0086,0.2127,0.0037,0.1509,0.0033,0.0039,0.0051,0.0054,0.0127,0.1086,0.3146,0.2276],
            "C" : [0.1844,0.1879,0.1724,0.0493,0.9796,0.0149,0.8888,0.0045,0.009,0.002,0.0038,0.9421,0.8464,0.5248,0.2329,0.148],
            "G" : [0.2577,0.3193,0.483,0.5349,0.0057,0.751,0.0011,0.8437,0.0017,0.9913,0.1003,0.0051,0.0133,0.0845,0.1653,0.3178],
            "T" : [0.1728,0.1696,0.2086,0.0217,0.0059,0.0212,0.1061,0.0007,0.9858,0.0027,0.8906,0.0472,0.1273,0.2819,0.287,0.3064]
         }
      },
      {
         "name" : "HLH-26_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.2301,0.4159,0.2957,0.1898,0.4216,0.0097,0.8274,0.0084,0.0285,0.0121,0.0099,0.0166,0.0589,0.2472,0.3274,0.3462,0.3033],
            "C" : [0.23,0.1461,0.2049,0.0769,0.0145,0.9557,0.0111,0.97,0.0063,0.0335,0.0072,0.1955,0.6703,0.3142,0.1896,0.2282,0.0929],
            "G" : [0.2427,0.2239,0.1968,0.531,0.5564,0.0066,0.1152,0.0092,0.9586,0.0085,0.9716,0.0299,0.0352,0.1792,0.1722,0.2191,0.205],
            "T" : [0.2969,0.214,0.3024,0.2021,0.0073,0.0278,0.0461,0.0122,0.0063,0.9458,0.0112,0.7578,0.2355,0.2592,0.3105,0.2063,0.3985]
         }
      },
      {
         "name" : "HLH-27_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.4338,0.1386,0.3393,0.0185,0.2376,0.0057,0.1606,0.0069,0.0052,0.0051,0.0081,0.0095,0.0717,0.3936,0.2611],
            "C" : [0.1429,0.1718,0.0924,0.9472,0.0537,0.9186,0.0046,0.0091,0.0029,0.004,0.9443,0.867,0.6102,0.1913,0.1746],
            "G" : [0.2568,0.3031,0.5194,0.0183,0.6501,0.0015,0.8329,0.0016,0.986,0.0599,0.0035,0.0135,0.1252,0.1468,0.2859],
            "T" : [0.1664,0.3864,0.0487,0.0158,0.0583,0.074,0.0017,0.9822,0.0058,0.9307,0.0439,0.1098,0.1928,0.268,0.2782]
         }
      },
      {
         "name" : "HLH-29_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.2266,0.2881,0.3321,0.262,0.0552,0.8212,0.0201,0.032,0.0077,0.4662,0.0115,0.0346,0.0236,0.0583,0.3027,0.3056,0.4135],
            "C" : [0.291,0.1579,0.1076,0.3151,0.5411,0.0056,0.9296,0.0068,0.8521,0.0029,0.01,0.0109,0.0187,0.4759,0.3209,0.2373,0.1078],
            "G" : [0.2383,0.1862,0.382,0.1046,0.1325,0.1568,0.0032,0.9534,0.0029,0.5262,0.0059,0.9359,0.4915,0.0487,0.1108,0.1725,0.2389],
            "T" : [0.2439,0.3676,0.1782,0.3181,0.2709,0.0161,0.0469,0.0077,0.1371,0.0045,0.9723,0.0185,0.466,0.4169,0.2655,0.2845,0.2396]
         }
      },
      {
         "name" : "HLH-2/CND-1_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3362,0.1687,0.2361,0.6638,0.7283,0.0626,0.9454,0.0195,0.1997,0.0416,0.032,0.0201,0.0721,0.2235,0.3672,0.4011],
            "C" : [0.3248,0.2664,0.1272,0.1882,0.1864,0.8756,0.0145,0.0371,0.7561,0.0074,0.0169,0.0926,0.499,0.2998,0.2109,0.169],
            "G" : [0.1283,0.3813,0.3456,0.0708,0.0502,0.0224,0.0101,0.6017,0.0281,0.0123,0.9034,0.1155,0.1828,0.1101,0.1805,0.1905],
            "T" : [0.2106,0.1834,0.2909,0.077,0.035,0.0392,0.0298,0.3414,0.016,0.9385,0.0475,0.7715,0.2459,0.3664,0.2412,0.2391]
         }
      },
      {
         "name" : "HLH-2/HLH-10_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.1908,0.2924,0.1758,0.4492,0.3705,0.0068,0.9927,0.0006,0.0026,0.0019,0.0022,0.002,0.0237,0.2871,0.2446,0.2781,0.2328],
            "C" : [0.2897,0.2981,0.2556,0.2423,0.3801,0.9898,0.0015,0.8339,0.987,0.003,0.0016,0.0994,0.0987,0.3019,0.3949,0.1693,0.2325],
            "G" : [0.1869,0.2471,0.3537,0.1931,0.2303,0.0012,0.0021,0.1518,0.0095,0.0022,0.9909,0.083,0.1362,0.2444,0.1584,0.3087,0.3245],
            "T" : [0.3324,0.1623,0.2147,0.1152,0.0189,0.002,0.0036,0.0135,0.0007,0.9927,0.0052,0.8154,0.7413,0.1664,0.2019,0.2437,0.21]
         }
      },
      {
         "name" : "HLH-2/HLH-14_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.238,0.2063,0.5632,0.6355,0.0147,0.977,0.0039,0.0263,0.0059,0.0075,0.0065,0.0272,0.3441,0.348,0.2862,0.4913],
            "C" : [0.2511,0.1912,0.1175,0.1505,0.9697,0.0054,0.4121,0.9532,0.007,0.0056,0.1413,0.7231,0.2721,0.2567,0.1569,0.1632],
            "G" : [0.243,0.253,0.174,0.1934,0.0062,0.0072,0.327,0.0123,0.0096,0.9727,0.0849,0.0287,0.2737,0.2107,0.2736,0.1332],
            "T" : [0.2677,0.3493,0.145,0.0204,0.0093,0.0102,0.2568,0.008,0.9773,0.014,0.7671,0.2208,0.1099,0.1844,0.2831,0.2121]
         }
      },
      {
         "name" : "HLH-2/HLH-15_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3238,0.2582,0.4631,0.2129,0.0192,0.943,0.0042,0.0576,0.0132,0.0097,0.0583,0.0919,0.1383,0.1674,0.2982,0.0735],
            "C" : [0.1576,0.2203,0.4078,0.3863,0.9541,0.0079,0.3818,0.7898,0.0143,0.0129,0.2644,0.0331,0.4098,0.5514,0.5049,0.1212],
            "G" : [0.3541,0.3361,0.0608,0.3447,0.0089,0.0089,0.5464,0.1376,0.0111,0.9549,0.4242,0.7167,0.2406,0.1268,0.1277,0.197],
            "T" : [0.1643,0.1852,0.0681,0.0559,0.0176,0.04,0.0674,0.0148,0.9612,0.0222,0.2529,0.1581,0.2112,0.1541,0.069,0.6081]
         }
      },
      {
         "name" : "HLH-2/HLH-19_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.2196,0.2398,0.1741,0.5357,0.5614,0.0392,0.9459,0.0172,0.1061,0.0361,0.0246,0.022,0.0817,0.4026,0.2549,0.2684],
            "C" : [0.1287,0.2394,0.1088,0.1228,0.3201,0.9352,0.0155,0.097,0.5159,0.0248,0.0107,0.0637,0.3847,0.396,0.3284,0.2537],
            "G" : [0.316,0.2477,0.2398,0.2588,0.0882,0.0109,0.0249,0.6305,0.3682,0.0093,0.9228,0.3391,0.1417,0.0767,0.175,0.2304],
            "T" : [0.3355,0.2729,0.4771,0.0825,0.03,0.0145,0.0135,0.2551,0.0096,0.9297,0.0417,0.575,0.3917,0.1245,0.2415,0.2473]
         }
      },
      {
         "name" : "HLH-2/HLH-3_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3289,0.3223,0.1792,0.4992,0.4453,0.0049,0.9898,0.0008,0.0045,0.0073,0.0055,0.0023,0.0594,0.3543,0.4213,0.2169,0.2274],
            "C" : [0.2843,0.1345,0.1861,0.0631,0.4192,0.9883,0.0016,0.8476,0.9887,0.0027,0.0018,0.8468,0.2437,0.2281,0.2174,0.2577,0.3303],
            "G" : [0.2347,0.3646,0.2442,0.2956,0.1265,0.0026,0.0042,0.0292,0.0032,0.002,0.9881,0.0341,0.0779,0.197,0.2176,0.1254,0.147],
            "T" : [0.152,0.1783,0.3902,0.1419,0.0088,0.0041,0.0042,0.1223,0.0034,0.9878,0.0044,0.1166,0.6188,0.2204,0.1435,0.3998,0.2951]
         }
      },
      {
         "name" : "HLH-2/HLH-4_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.4464,0.5345,0.2843,0.5385,0.2284,0.006,0.9894,0.0008,0.0038,0.0047,0.003,0.0021,0.0803,0.2539,0.3649,0.248,0.1653],
            "C" : [0.2324,0.0827,0.0978,0.0073,0.2978,0.988,0.0019,0.9228,0.9905,0.0029,0.002,0.6979,0.1753,0.2804,0.1813,0.2369,0.3066],
            "G" : [0.1814,0.2686,0.0774,0.0152,0.1862,0.0017,0.0029,0.0551,0.0032,0.0021,0.9899,0.0442,0.0693,0.1912,0.2399,0.1822,0.2103],
            "T" : [0.1397,0.114,0.5403,0.4388,0.2873,0.0041,0.0056,0.0212,0.0022,0.9901,0.0049,0.2556,0.6748,0.2742,0.2137,0.3327,0.3176]
         }
      },
      {
         "name" : "HLH-2/HLH-8_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3313,0.1435,0.3983,0.6367,0.7731,0.0263,0.966,0.006,0.3587,0.0192,0.0073,0.0106,0.1302,0.2875,0.145,0.2892],
            "C" : [0.2131,0.3046,0.2872,0.1697,0.1637,0.9542,0.0106,0.0629,0.5716,0.0141,0.0151,0.0278,0.218,0.1919,0.1835,0.3927],
            "G" : [0.2258,0.2236,0.1781,0.1106,0.0497,0.0059,0.0117,0.0554,0.0662,0.0084,0.9571,0.7786,0.084,0.2367,0.2575,0.1361],
            "T" : [0.2296,0.328,0.1362,0.0828,0.0133,0.0134,0.0114,0.8755,0.0032,0.9582,0.0204,0.1827,0.5676,0.2837,0.4138,0.1817]
         }
      },
      {
         "name" : "HLH-2/LIN-32_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.2827,0.3976,0.2466,0.4729,0.6487,0.0114,0.9725,0.0023,0.1974,0.0078,0.0051,0.0025,0.0514,0.247,0.2272,0.2171],
            "C" : [0.2803,0.2966,0.1586,0.2336,0.2832,0.98,0.0032,0.1678,0.6324,0.0163,0.0033,0.0655,0.38,0.3509,0.2402,0.3378],
            "G" : [0.1748,0.1832,0.3579,0.2208,0.0655,0.0033,0.0163,0.6324,0.1678,0.0032,0.98,0.2832,0.0796,0.1783,0.1583,0.2491],
            "T" : [0.2621,0.1224,0.2367,0.0724,0.0025,0.0051,0.0078,0.1974,0.0023,0.9725,0.0114,0.6487,0.4888,0.2236,0.3741,0.1958]
         }
      },
      {
         "name" : "HLH-30_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3865,0.2187,0.3633,0.618,0.0554,0.0098,0.9457,0.0057,0.1327,0.0274,0.0156,0.8329,0.0088,0.364,0.3898,0.2815,0.2135],
            "C" : [0.1814,0.2472,0.113,0.0404,0.063,0.9671,0.0146,0.8522,0.0092,0.0121,0.0073,0.0485,0.6334,0.2198,0.1905,0.1014,0.252],
            "G" : [0.1671,0.3092,0.2096,0.236,0.0485,0.0073,0.0121,0.0092,0.8522,0.0146,0.9671,0.063,0.0098,0.1483,0.1808,0.2216,0.2408],
            "T" : [0.2647,0.2248,0.3139,0.1053,0.8329,0.0156,0.0274,0.1327,0.0057,0.9457,0.0098,0.0554,0.3477,0.2677,0.2387,0.3952,0.2935]
         }
      },
      {
         "name" : "MXL-1/MDL-1_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.164,0.3035,0.2812,0.4567,0.0772,0.0065,0.9821,0.0007,0.0221,0.0037,0.0016,0.1043,0.1159,0.4501,0.3298,0.196],
            "C" : [0.2257,0.188,0.1164,0.1286,0.4275,0.9896,0.0009,0.9642,0.0012,0.0148,0.001,0.4283,0.1969,0.1815,0.1956,0.2916],
            "G" : [0.1533,0.2306,0.27,0.2377,0.4219,0.002,0.0046,0.0011,0.9757,0.0004,0.9887,0.4116,0.323,0.1894,0.1703,0.2584],
            "T" : [0.4568,0.2777,0.3322,0.1768,0.0731,0.0016,0.0122,0.0337,0.0007,0.9809,0.0085,0.0555,0.364,0.1788,0.304,0.2538]
         }
      },
      {
         "name" : "MXL-3_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.1768,0.2868,0.2598,0.6723,0.2777,0.035,0.9718,0.0015,0.0435,0.0148,0.0026,0.02,0.1372,0.1393,0.2594,0.3171],
            "C" : [0.3218,0.1975,0.1422,0.0865,0.6052,0.9596,0.0019,0.9519,0.003,0.0114,0.0025,0.0969,0.2202,0.3887,0.2772,0.1054],
            "G" : [0.1992,0.2928,0.3032,0.1695,0.0969,0.0025,0.0114,0.003,0.9519,0.0019,0.9596,0.6052,0.093,0.1497,0.2173,0.3618],
            "T" : [0.302,0.2227,0.2946,0.0715,0.02,0.0026,0.0148,0.0435,0.0015,0.9718,0.035,0.2777,0.5494,0.3221,0.2459,0.2154]
         }
      },
      {
         "name" : "NSY-7_Lesch_2009", //fixed
         "matrix" : {
            "A" : [0.2475,0.264,0.2047,0.8557,0.0066,0.0044,0.0011,0.0621,0.9866,0.874,0.0628,0.0705,0.1892,0.1938],
            "C" : [0.0789,0.0588,0.0688,0.0533,0.9829,0.9738,0.0522,0.0014,0.0038,0.0225,0.7153,0.2009,0.2617,0.3604],
            "G" : [0.212,0.0997,0.222,0.014,0.0013,0.0111,0.0065,0.0019,0.0018,0.0882,0.1594,0.4667,0.2042,0.1858],
            "T" : [0.4614,0.5772,0.5043,0.0768,0.009,0.0106,0.9401,0.9344,0.0077,0.0151,0.0622,0.2616,0.3447,0.2598]
         }
      },
      {
         "name" : "REF-1_Grove_2009", //fixed
         "matrix" : {
            "A" : [0.3457,0.2681,0.5102,0.3448,0.2251,0.2222,0.0066,0.9622,0.0051,0.0126,0.0091,0.009,0.0082,0.2146,0.3017,0.3368,0.4989],
            "C" : [0.1376,0.3122,0.1799,0.2227,0.0308,0.0766,0.9798,0.0052,0.9651,0.0074,0.022,0.0058,0.4508,0.472,0.1936,0.0743,0.1342],
            "G" : [0.1508,0.2212,0.1055,0.1561,0.6779,0.6857,0.005,0.0259,0.0064,0.974,0.0127,0.976,0.0947,0.1007,0.1691,0.2045,0.1459],
            "T" : [0.3657,0.1983,0.2042,0.2762,0.066,0.0152,0.0084,0.0065,0.0231,0.0058,0.956,0.0091,0.4462,0.2125,0.3353,0.3841,0.2208]
         }
      },
      {
         "name" : "SLR-2_Kirienko_2010",  //fixed, and fixed the name of the gene; it was SIR-2
         "matrix" : {
            "A" : [1,1,0,0,0,0,0,0,0,0,0,1,1],
            "C" : [4,4,2,17,0,0,17,0,0,17,0,15,5],
            "G" : [0,10,0,0,0,17,0,16,0,0,0,0,1],
            "T" : [12,2,15,0,17,0,0,1,17,0,17,1,10]
         }
         }
        ];  //end matrices

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

                newarray[i]=custommatrix[i].split(/\s+/);
                for (var j=0; j<newarray[i].length; j++) {
                    newarray[i][j]= parseFloat(newarray[i][j]);
                }
            }
            matrixA = newarray[0];
            matrixC = newarray[1];
            matrixG = newarray[2];
            matrixT = newarray[3];
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
            minscore: min_score
        };
    },

    _fillActionBar: function ( actionBar ) {
        var thisB = this;

        new dButton({
                            label: 'Search',
                            iconClass: 'dijitIconBookmark',
                            onClick: function() {
                                var searchParams = thisB._getSearchParams();
                                thisB.callback( searchParams );
                                thisB.hide();
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
