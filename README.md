# MotifSearch
JBrowse plugin - Finds sequence motifs with a Position Weight Matrix

Currently, this plugin has no configurable options.  In the future, I'd like to
support having the motifs read from a json file rather than being hard coded
into js/View/SearchSeqDialog.js.

## Install

* Clone repo into plugins folder in JBrowse and name the folder MotifSearch
* Add "plugins" : ["MotifSearch"] to jbrowse_conf.json.

## Adding your own list of motifs.

At the moment, this is a little tedious, as you have to edit js/View/SearchSeqDialog.js file
directly to change the list of motifs.  At the moment, this is what you need
to do:

* Find the "content.matrices = [" line in the code 
* Edit the json structure to remove the matrices you don't want and using
the same data structure, add the matrices you do want and save.

## Acknowledgements

We would like to thank Pierre Lindenbaum at l'institut du thorax in Nantes, 
France who posted this JavaScript note that got us thinking about writing 
this plugin for JBrowse: https://www.biostars.org/p/90823/

