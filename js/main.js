require({cache:{"JBrowse/Plugin":function(){define("JBrowse/Plugin",["dojo/_base/declare","JBrowse/Component"],function(a,b){return a(b,{constructor:function(a){this.name=a.name,this.cssLoaded=a.cssLoaded,this._finalizeConfig(a.config),console.log("loading MotifSearch pluging")},_defaultConfig:function(){return{baseUrl:"/plugins/"+this.name}}})})},"MotifSearch/View/SearchSeqDialog":function(){define(["dojo/_base/declare","dojo/dom-construct","dojo/aspect","dijit/focus","dijit/form/Button","dijit/form/CheckBox","dijit/form/RadioButton","dijit/form/TextBox","dijit/form/Select","JBrowse/View/Dialog/WithActionBar"],function(a,b,c,d,e,f,g,h,i,j){return a(j,{constructor:function(){var a=this;c.after(this,"hide",function(){d.curNode&&d.curNode.blur(),setTimeout(function(){a.destroyRecursive()},500)})},_dialogContent:function(){function k(a,c){var d=b.create("label",{},c),e=new g(a).placeAt(d);return b.create("span",{innerHTML:a.label+"</br>"},d),e}var a=this.content={},c=b.create("div",{className:"search-dialog"});b.create("div",{className:"search-dialog intro",innerHTML:"This tool creates a track showing locations of the identified motif."},c);a.matrices=[{name:"DAF-16_Furuyama_2000",matrix:{A:[4,4,4,1,0,1,0,0,0,22,0,10,8,3],C:[3,3,4,0,0,0,0,1,0,0,21,3,5,10],G:[9,7,12,1,0,24,0,0,0,2,0,6,3,1],T:[7,10,5,23,25,0,25,24,25,1,4,5,7,8]}},{name:"SKN-1_Blackwell_1994",matrix:{A:[6.25,17,14,7.25,14,0,0,33,0,1,13,12],C:[12.25,4,2,3.25,0,0,33,0,0,15,12,7],G:[3.25,2,3,1.25,19,0,0,0,0,9,2,2],T:[11.25,10,14,21.25,0,33,0,0,33,8,6,12]}},{name:"TRA-1_Zarkower_1993",matrix:{A:[4,6,2,5,7,6,6,4,12,9,5,2,0,0,15,0,0,0,3,5,9,17,10],C:[12,5,7,3,10,22,11,11,10,17,6,0,1,0,1,0,0,5,33,8,7,5,4],G:[12,5,5,8,7,3,8,11,5,11,2,34,36,37,7,42,42,4,3,13,10,10,15],T:[13,26,26,26,15,8,15,14,12,3,29,6,5,5,19,0,0,33,3,16,15,10,13]}},{name:"ELT-2_McGhee_2007",matrix:{A:[.74,.28,.07,0,1,0,1,.97,.19,.54],C:[.04,.29,.08,0,0,0,0,0,.15,.09],G:[.13,.13,.08,1,0,0,0,.02,.53,.2],T:[.09,.31,.91,0,0,1,0,.01,.13,.17]}},{name:"EGL-38_Zhang_2005",matrix:{A:[0,1,1,1,1,23,0,0,1,7,0,0,19],C:[10,18,1,13,14,2,20,0,17,0,7,16,0],G:[2,4,24,1,0,0,0,26,8,2,0,10,7],T:[14,3,0,11,11,1,6,0,0,17,19,0,0]}},{name:"MAB-3_Yi_1999",matrix:{T:[8,14,99,0,100,100,0,0,1,27,44,34,74],C:[3,0,1,0,0,0,0,100,19,0,0,13,8],G:[13,0,0,100,0,0,100,0,67,11,6,22,10],A:[76,86,0,0,0,0,0,0,13,62,50,29,8]}},{name:"CEH-10/TTX-3_Wenick_2004",matrix:{A:[4,6,8,0,1,3,0,0,1,1,5,3,0,0,7,5],C:[0,0,0,0,0,0,0,6,2,3,4,1,0,1,1,0],G:[2,1,1,0,0,6,8,1,0,0,0,5,0,0,0,3],T:[3,2,0,9,8,0,1,2,6,5,0,0,9,8,1,1]}},{name:"PHA-4_Ao_2004_1",matrix:{A:[.117,.117,.497,.079,.003,.003,.003,.003,.003,.079,.231,.534],C:[.193,.459,.003,.079,.953,.003,.041,.914,.155,.155,.421,.041],G:[.307,.231,.231,.838,.003,.117,.003,.079,.041,.421,.117,.003],T:[.382,.193,.269,.003,.041,.876,.952,.003,.8,.345,.231,.421]}},{name:"DAF-12_Ao_2004",matrix:{A:[.426,.461,.003,.955,.003,.99,.003,.709,.462],C:[.003,.003,.99,.039,.814,.003,.955,.003,.285],G:[.215,.356,.003,.003,.179,.003,.038,.215,.109],T:[.356,.179,.003,.003,.003,.003,.003,.074,.144]}},{name:"PHA-4_Ao_2004_2",matrix:{A:[.097,.003,.05,.003,.003,.05,.003,.708,.144,.426],C:[.003,.003,.003,.614,.003,.05,.755,.144,.332,.286],G:[.144,.849,.38,.239,.99,.896,.238,.05,.427,.003],T:[.755,.144,.567,.144,.003,.003,.003,.097,.097,.285]}},{name:"PHA-4_Ao_2004_3",matrix:{A:[.285,.332,.05,.003,.003,.614,.003,.003,.521],C:[.003,.097,.003,.144,.943,.285,.943,.99,.144],G:[.239,.003,.003,.802,.003,.05,.003,.003,.003],T:[.473,.568,.943,.05,.05,.05,.05,.003,.332]}},{name:"PHA-4_Ao_2004_4",matrix:{A:[.097,.003,.003,.003,.003,.849,.99,.614],C:[.144,.755,.097,.896,.99,.003,.003,.05],G:[.52,.003,.003,.097,.003,.144,.003,.191],T:[.238,.238,.896,.003,.003,.003,.003,.144]}},{name:"PHA-4_Ao_2004_5",matrix:{A:[.041,.003,.041,.041,.117,.003,.648,.572,.344,.268,.155],C:[.231,.801,.763,.003,.041,.953,.269,.307,.346,.194,.307],G:[.422,.117,.117,.952,.838,.041,.079,.003,.079,.079,.345],T:[.307,.079,.078,.003,.003,.003,.003,.117,.231,.459,.193]}},{name:"PHA-4_Ao_2004_6",matrix:{A:[.411,.105,.31,.037,.003,.718,.003,.037,.003,.207,.139,.378],C:[.003,.31,.003,.922,.99,.003,.071,.037,.208,.241,.31,.14],G:[.378,.003,.105,.003,.003,.242,.922,.003,.105,.037,.105,.037],T:[.208,.582,.582,.037,.003,.037,.003,.922,.684,.514,.446,.446]}},{name:"PHA-4_Gaudet_2004_1",matrix:{A:[.003,.003,.003,.04,.003,.003,.113,.259],C:[.003,.003,.003,.113,.04,.003,.442,.296],G:[.003,.99,.003,.186,.003,.99,.296,.223],T:[.99,.003,.99,.662,.954,.003,.149,.223]}},{name:"PHA-4_Gaudet_2004_2",matrix:{A:[.127,.003,.003,.003,.003,.003,.003,.065],C:[.25,.003,.003,.003,.003,.003,.003,.682],G:[.127,.065,.99,.003,.065,.127,.99,.003],T:[.497,.928,.003,.99,.928,.867,.003,.25]}},{name:"PHA-4_Gaudet_2004_3",matrix:{A:[.435,.034,.867,.003,.867,.127,.003,.65,.466,.249],C:[.096,.065,.065,.065,.126,.651,.003,.251,.219,.157],G:[.281,.898,.003,.929,.003,.096,.99,.065,.065,.343],T:[.188,.003,.065,.003,.003,.126,.003,.034,.25,.25]}},{name:"PHA-4_Gaudet_2004_4",matrix:{A:[.219,.003,.003,.003,.96,.003,.003,.034,.158],C:[.065,.712,.158,.281,.003,.959,.743,.065,.003],G:[.126,.003,.003,.713,.003,.003,.25,.528,.219],T:[.59,.281,.836,.003,.034,.034,.003,.373,.62]}},{name:"PHA-4_Gaudet_2004_5",matrix:{A:[.497,.435,.528,.466,.62,.713,.188,.342,.003,.219,.003,.497],C:[.096,.158,.065,.281,.065,.003,.003,.003,.003,.003,.003,.219],G:[.281,.342,.312,.188,.188,.219,.805,.003,.99,.774,.99,.188],T:[.126,.065,.096,.065,.127,.065,.003,.651,.003,.003,.003,.096]}},{name:"PHA-4_Gaudet_2004_6",matrix:{A:[.378,.207,.31,.582,.037,.003,.037,.003,.276,.139,.31,.378],C:[.105,.037,.275,.071,.071,.412,.684,.003,.003,.105,.037,.207],G:[.412,.752,.31,.344,.82,.582,.003,.99,.718,.65,.582,.31],T:[.105,.003,.105,.003,.071,.003,.275,.003,.003,.105,.071,.105]}},{name:"PHA-4_Gaudet_2004_7",matrix:{A:[.352,.003,.003,.003,.032,.003,.003],C:[.09,.032,.09,.003,.003,.99,.99],G:[.003,.003,.003,.003,.119,.003,.003],T:[.555,.961,.904,.99,.845,.003,.003]}},{name:"PHA-4_Gaudet_2004_8",matrix:{A:[.188,.003,.065,.003,.003,.003,.682,.497],C:[.003,.867,.065,.805,.003,.003,.188,.003],G:[.127,.127,.003,.188,.99,.99,.003,.25],T:[.682,.003,.867,.003,.003,.003,.127,.25]}},{name:"PHA-4_Gaudet_2004_9",matrix:{A:[.185,.211,.029,.003,.003,.912,.029,.003,.315,.341],C:[.133,.029,.237,.029,.757,.081,.964,.964,.237,.159],G:[.211,.341,.003,.029,.185,.003,.003,.029,.185,.393],T:[.471,.419,.73,.938,.055,.003,.003,.003,.263,.107]}},{name:"PHA-4_Gaudet_2004_10",matrix:{A:[.25,.144,.109,.003,.003,.215,.038,.743,.039],C:[.039,.144,.038,.039,.955,.038,.814,.039,.955],G:[.321,.392,.462,.92,.039,.003,.003,.145,.003],T:[.391,.32,.391,.038,.003,.744,.144,.074,.003]}},{name:"PHA-4_Gaudet_2004_11",matrix:{A:[.18,.003,.003,.109,.003,.003,.779,.743,.532],C:[.003,.497,.039,.003,.955,.99,.179,.003,.18],G:[.109,.003,.003,.003,.039,.003,.003,.215,.003],T:[.708,.497,.955,.885,.003,.003,.039,.039,.285]}},{name:"HNF-6_Lannoy_1998",matrix:{A:[5,5,8,11,8,0,0,11,12,0,9,7,4,3],C:[3,1,1,0,0,0,12,1,0,0,1,0,3,3],G:[0,2,1,0,4,0,0,0,0,0,1,1,0,2],T:[4,4,4,1,0,12,0,0,0,12,1,4,5,4]}},{name:"CES-2_Metzstein_1999",matrix:{A:[2,0,4,0,1,0,0],C:[0,3,0,0,0,0,1],G:[2,0,0,4,3,0,2],T:[0,1,0,0,0,1,1]}},{name:"DAF-19_Winkelbauer_2005",matrix:{A:[2,0,0,0,0,0,4,1,6,2,0,5,6,0],C:[0,0,1,0,6,6,1,0,0,0,4,1,0,6],G:[4,0,0,2,0,0,0,1,0,4,0,0,0,0],T:[0,6,5,4,0,0,1,4,0,0,2,0,0,0]}},{name:"DAF-19_Schafer_2003",matrix:{A:[0,0,0,0,0,0,4,0,1,0,0,3,4,0],C:[0,1,0,1,4,3,0,0,0,0,2,0,0,4],G:[4,0,0,1,0,0,0,1,3,4,0,0,0,0],T:[0,3,4,2,0,1,0,3,0,0,2,1,0,0]}},{name:"AST-1_Flames_2009",matrix:{A:[13,9,4,0,0,40,32,19],C:[1,20,30,0,0,0,0,0],G:[16,3,5,40,40,0,0,20],T:[10,8,1,0,0,0,8,1]}},{name:"PGM1_Smit_2008",matrix:{A:[5,7,0,14,2,3,0,0,4,3,0,10,14,14,0,9,1,1],C:[0,2,14,0,3,5,0,0,2,0,13,4,0,0,8,0,1,0],G:[1,5,0,0,8,6,0,14,0,2,0,0,0,0,0,3,3,1],T:[8,0,0,0,1,0,14,0,8,9,1,0,0,0,6,2,9,12]}},{name:"PUF-11_Koh_2009_1",matrix:{A:[8,11,4,0,0,0,11,28,28,2,20,14,6],C:[11,10,14,0,0,0,1,1,0,0,0,2,8],G:[3,1,1,0,29,0,17,0,1,0,7,7,9],T:[7,7,10,29,0,29,0,0,0,26,2,6,6]}},{name:"PUF-11_Koh_2009_2",matrix:{A:[6,9,0,0,0,0,21,4,12,19,1,20,14],C:[13,5,3,0,0,0,2,10,8,3,0,0,0],G:[1,1,0,0,27,0,4,2,0,0,1,7,3],T:[7,12,24,27,0,27,0,11,7,5,25,0,10]}},{name:"PUF-11_Koh_2009_3",matrix:{A:[9,2,2,0,0,0,6,16,13,14,5,6,10],C:[4,9,11,0,0,0,9,1,2,0,0,1,0],G:[1,0,0,0,18,0,1,1,2,3,0,8,7],T:[4,7,4,18,0,18,2,0,1,1,13,3,1]}},{name:"CES-box_Reece-Hoyes_2009",matrix:{A:[10,7,24,14,24,0,24,0,0,0,0,6,6],C:[3,5,0,10,0,24,0,0,0,0,0,6,6],G:[9,5,0,0,0,0,0,24,24,0,13,5,6],T:[2,7,0,0,0,0,0,0,0,24,11,7,6]}},{name:"MEX-motif_Jans_2009",matrix:{A:[10,2,0,2,0,13,31,5,1,0,21,2],C:[0,25,0,29,0,16,0,0,0,0,0,8],G:[0,4,31,0,31,2,0,26,30,31,4,21],T:[21,0,0,0,0,0,0,0,0,0,6,0]}},{name:"AWB-chemoreceptor-motif_Nokes_2009_1",matrix:{A:[4,0,4,5,0,0,3,0,1],C:[0,0,0,0,2,3,0,0,0],G:[1,0,0,0,0,1,2,5,3],T:[0,5,1,0,3,1,0,0,1]}},{name:"AWB-chemoreceptor-motif_Nokes_2009_2",matrix:{A:[0,0,3,6,0,0,0,4,2,0,2],C:[1,3,0,0,0,0,2,0,1,0,0],G:[2,1,0,0,0,0,4,0,3,4,0],T:[3,2,3,0,6,6,0,2,0,2,4]}},{name:"CEH-22_Berger_2006",matrix:{A:[.2187,.2004,.2702,.164,.3014,.4461,.3323,.0875,.004,.9357,.0162,.0038,.0057,.0775,.9503,.4688,.5149,.2793,.1822,.3681,.312,.129],C:[.218,.3718,.2315,.3316,.1624,.145,.1589,.713,.8951,.0101,.9798,.0028,.1616,.2729,.0012,.29,.2098,.1478,.1732,.2054,.4527,.0863],G:[.0891,.2506,.2501,.2069,.2408,.3045,.3149,.1937,.0021,5e-4,.0017,.003,7e-4,.6395,.0082,.2098,.1541,.2368,.1967,.1326,.1102,.4283],T:[.474,.177,.2481,.2973,.2952,.1042,.1937,.0056,.0987,.0534,.002,.9901,.8318,.01,.0401,.0313,.1211,.3359,.4477,.2938,.1249,.3562]}},{name:"HLH-1_Grove_2009",matrix:{A:[.1683,.2102,.2541,.7082,.0246,.9236,.1245,.0185,.0192,.0199,.1694,.028,.3051,.3586,.3311,.318],C:[.0999,.3108,.0768,.0615,.9276,.0196,.1397,.7172,.0373,.0277,.0794,.6409,.1249,.1762,.1935,.2172],G:[.3569,.3423,.6409,.1133,.0277,.0373,.7172,.1397,.0196,.9276,.0381,.0768,.4475,.1938,.3563,.3567],T:[.3747,.1366,.028,.1169,.0199,.0192,.0185,.1245,.9236,.0246,.7129,.2541,.1223,.2711,.1188,.1079]}},{name:"HLH-11_Grove_2009",matrix:{A:[.3201,.2514,.2255,.2461,.7315,.2007,.023,.9494,.0106,.0491,.0234,.015,.6092,.1444,.1857,.2136],C:[.1518,.3122,.2799,.1427,.079,.0743,.947,.0145,.046,.8807,.0651,.0123,.0228,.2085,.4172,.1644],G:[.1802,.1257,.1923,.4074,.1621,.0165,.0138,.0155,.9036,.0509,.0131,.9303,.1241,.2038,.263,.3409],T:[.3477,.3105,.302,.2035,.0273,.7083,.016,.0205,.0396,.0192,.8982,.0421,.2437,.4431,.1339,.2808]}},{name:"HLH-25_Grove_2009",matrix:{A:[.3849,.3229,.1358,.3938,.0086,.2127,.0037,.1509,.0033,.0039,.0051,.0054,.0127,.1086,.3146,.2276],C:[.1844,.1879,.1724,.0493,.9796,.0149,.8888,.0045,.009,.002,.0038,.9421,.8464,.5248,.2329,.148],G:[.2577,.3193,.483,.5349,.0057,.751,.0011,.8437,.0017,.9913,.1003,.0051,.0133,.0845,.1653,.3178],T:[.1728,.1696,.2086,.0217,.0059,.0212,.1061,7e-4,.9858,.0027,.8906,.0472,.1273,.2819,.287,.3064]}},{name:"HLH-26_Grove_2009",matrix:{A:[.2301,.4159,.2957,.1898,.4216,.0097,.8274,.0084,.0285,.0121,.0099,.0166,.0589,.2472,.3274,.3462,.3033],C:[.23,.1461,.2049,.0769,.0145,.9557,.0111,.97,.0063,.0335,.0072,.1955,.6703,.3142,.1896,.2282,.0929],G:[.2427,.2239,.1968,.531,.5564,.0066,.1152,.0092,.9586,.0085,.9716,.0299,.0352,.1792,.1722,.2191,.205],T:[.2969,.214,.3024,.2021,.0073,.0278,.0461,.0122,.0063,.9458,.0112,.7578,.2355,.2592,.3105,.2063,.3985]}},{name:"HLH-27_Grove_2009",matrix:{A:[.4338,.1386,.3393,.0185,.2376,.0057,.1606,.0069,.0052,.0051,.0081,.0095,.0717,.3936,.2611],C:[.1429,.1718,.0924,.9472,.0537,.9186,.0046,.0091,.0029,.004,.9443,.867,.6102,.1913,.1746],G:[.2568,.3031,.5194,.0183,.6501,.0015,.8329,.0016,.986,.0599,.0035,.0135,.1252,.1468,.2859],T:[.1664,.3864,.0487,.0158,.0583,.074,.0017,.9822,.0058,.9307,.0439,.1098,.1928,.268,.2782]}},{name:"HLH-29_Grove_2009",matrix:{A:[.2266,.2881,.3321,.262,.0552,.8212,.0201,.032,.0077,.4662,.0115,.0346,.0236,.0583,.3027,.3056,.4135],C:[.291,.1579,.1076,.3151,.5411,.0056,.9296,.0068,.8521,.0029,.01,.0109,.0187,.4759,.3209,.2373,.1078],G:[.2383,.1862,.382,.1046,.1325,.1568,.0032,.9534,.0029,.5262,.0059,.9359,.4915,.0487,.1108,.1725,.2389],T:[.2439,.3676,.1782,.3181,.2709,.0161,.0469,.0077,.1371,.0045,.9723,.0185,.466,.4169,.2655,.2845,.2396]}},{name:"HLH-2/CND-1_Grove_2009",matrix:{A:[.3362,.1687,.2361,.6638,.7283,.0626,.9454,.0195,.1997,.0416,.032,.0201,.0721,.2235,.3672,.4011],C:[.3248,.2664,.1272,.1882,.1864,.8756,.0145,.0371,.7561,.0074,.0169,.0926,.499,.2998,.2109,.169],G:[.1283,.3813,.3456,.0708,.0502,.0224,.0101,.6017,.0281,.0123,.9034,.1155,.1828,.1101,.1805,.1905],T:[.2106,.1834,.2909,.077,.035,.0392,.0298,.3414,.016,.9385,.0475,.7715,.2459,.3664,.2412,.2391]}},{name:"HLH-2/HLH-10_Grove_2009",matrix:{A:[.1908,.2924,.1758,.4492,.3705,.0068,.9927,6e-4,.0026,.0019,.0022,.002,.0237,.2871,.2446,.2781,.2328],C:[.2897,.2981,.2556,.2423,.3801,.9898,.0015,.8339,.987,.003,.0016,.0994,.0987,.3019,.3949,.1693,.2325],G:[.1869,.2471,.3537,.1931,.2303,.0012,.0021,.1518,.0095,.0022,.9909,.083,.1362,.2444,.1584,.3087,.3245],T:[.3324,.1623,.2147,.1152,.0189,.002,.0036,.0135,7e-4,.9927,.0052,.8154,.7413,.1664,.2019,.2437,.21]}},{name:"HLH-2/HLH-14_Grove_2009",matrix:{A:[.238,.2063,.5632,.6355,.0147,.977,.0039,.0263,.0059,.0075,.0065,.0272,.3441,.348,.2862,.4913],C:[.2511,.1912,.1175,.1505,.9697,.0054,.4121,.9532,.007,.0056,.1413,.7231,.2721,.2567,.1569,.1632],G:[.243,.253,.174,.1934,.0062,.0072,.327,.0123,.0096,.9727,.0849,.0287,.2737,.2107,.2736,.1332],T:[.2677,.3493,.145,.0204,.0093,.0102,.2568,.008,.9773,.014,.7671,.2208,.1099,.1844,.2831,.2121]}},{name:"HLH-2/HLH-15_Grove_2009",matrix:{A:[.3238,.2582,.4631,.2129,.0192,.943,.0042,.0576,.0132,.0097,.0583,.0919,.1383,.1674,.2982,.0735],C:[.1576,.2203,.4078,.3863,.9541,.0079,.3818,.7898,.0143,.0129,.2644,.0331,.4098,.5514,.5049,.1212],G:[.3541,.3361,.0608,.3447,.0089,.0089,.5464,.1376,.0111,.9549,.4242,.7167,.2406,.1268,.1277,.197],T:[.1643,.1852,.0681,.0559,.0176,.04,.0674,.0148,.9612,.0222,.2529,.1581,.2112,.1541,.069,.6081]}},{name:"HLH-2/HLH-19_Grove_2009",matrix:{A:[.2196,.2398,.1741,.5357,.5614,.0392,.9459,.0172,.1061,.0361,.0246,.022,.0817,.4026,.2549,.2684],C:[.1287,.2394,.1088,.1228,.3201,.9352,.0155,.097,.5159,.0248,.0107,.0637,.3847,.396,.3284,.2537],G:[.316,.2477,.2398,.2588,.0882,.0109,.0249,.6305,.3682,.0093,.9228,.3391,.1417,.0767,.175,.2304],T:[.3355,.2729,.4771,.0825,.03,.0145,.0135,.2551,.0096,.9297,.0417,.575,.3917,.1245,.2415,.2473]}},{name:"HLH-2/HLH-3_Grove_2009",matrix:{A:[.3289,.3223,.1792,.4992,.4453,.0049,.9898,8e-4,.0045,.0073,.0055,.0023,.0594,.3543,.4213,.2169,.2274],C:[.2843,.1345,.1861,.0631,.4192,.9883,.0016,.8476,.9887,.0027,.0018,.8468,.2437,.2281,.2174,.2577,.3303],G:[.2347,.3646,.2442,.2956,.1265,.0026,.0042,.0292,.0032,.002,.9881,.0341,.0779,.197,.2176,.1254,.147],T:[.152,.1783,.3902,.1419,.0088,.0041,.0042,.1223,.0034,.9878,.0044,.1166,.6188,.2204,.1435,.3998,.2951]}},{name:"HLH-2/HLH-4_Grove_2009",matrix:{A:[.4464,.5345,.2843,.5385,.2284,.006,.9894,8e-4,.0038,.0047,.003,.0021,.0803,.2539,.3649,.248,.1653],C:[.2324,.0827,.0978,.0073,.2978,.988,.0019,.9228,.9905,.0029,.002,.6979,.1753,.2804,.1813,.2369,.3066],G:[.1814,.2686,.0774,.0152,.1862,.0017,.0029,.0551,.0032,.0021,.9899,.0442,.0693,.1912,.2399,.1822,.2103],T:[.1397,.114,.5403,.4388,.2873,.0041,.0056,.0212,.0022,.9901,.0049,.2556,.6748,.2742,.2137,.3327,.3176]}},{name:"HLH-2/HLH-8_Grove_2009",matrix:{A:[.3313,.1435,.3983,.6367,.7731,.0263,.966,.006,.3587,.0192,.0073,.0106,.1302,.2875,.145,.2892],C:[.2131,.3046,.2872,.1697,.1637,.9542,.0106,.0629,.5716,.0141,.0151,.0278,.218,.1919,.1835,.3927],G:[.2258,.2236,.1781,.1106,.0497,.0059,.0117,.0554,.0662,.0084,.9571,.7786,.084,.2367,.2575,.1361],T:[.2296,.328,.1362,.0828,.0133,.0134,.0114,.8755,.0032,.9582,.0204,.1827,.5676,.2837,.4138,.1817]}},{name:"HLH-2/LIN-32_Grove_2009",matrix:{A:[.2827,.3976,.2466,.4729,.6487,.0114,.9725,.0023,.1974,.0078,.0051,.0025,.0514,.247,.2272,.2171],C:[.2803,.2966,.1586,.2336,.2832,.98,.0032,.1678,.6324,.0163,.0033,.0655,.38,.3509,.2402,.3378],G:[.1748,.1832,.3579,.2208,.0655,.0033,.0163,.6324,.1678,.0032,.98,.2832,.0796,.1783,.1583,.2491],T:[.2621,.1224,.2367,.0724,.0025,.0051,.0078,.1974,.0023,.9725,.0114,.6487,.4888,.2236,.3741,.1958]}},{name:"HLH-30_Grove_2009",matrix:{A:[.3865,.2187,.3633,.618,.0554,.0098,.9457,.0057,.1327,.0274,.0156,.8329,.0088,.364,.3898,.2815,.2135],C:[.1814,.2472,.113,.0404,.063,.9671,.0146,.8522,.0092,.0121,.0073,.0485,.6334,.2198,.1905,.1014,.252],G:[.1671,.3092,.2096,.236,.0485,.0073,.0121,.0092,.8522,.0146,.9671,.063,.0098,.1483,.1808,.2216,.2408],T:[.2647,.2248,.3139,.1053,.8329,.0156,.0274,.1327,.0057,.9457,.0098,.0554,.3477,.2677,.2387,.3952,.2935]}},{name:"MXL-1/MDL-1_Grove_2009",matrix:{A:[.164,.3035,.2812,.4567,.0772,.0065,.9821,7e-4,.0221,.0037,.0016,.1043,.1159,.4501,.3298,.196],C:[.2257,.188,.1164,.1286,.4275,.9896,9e-4,.9642,.0012,.0148,.001,.4283,.1969,.1815,.1956,.2916],G:[.1533,.2306,.27,.2377,.4219,.002,.0046,.0011,.9757,4e-4,.9887,.4116,.323,.1894,.1703,.2584],T:[.4568,.2777,.3322,.1768,.0731,.0016,.0122,.0337,7e-4,.9809,.0085,.0555,.364,.1788,.304,.2538]}},{name:"MXL-3_Grove_2009",matrix:{A:[.1768,.2868,.2598,.6723,.2777,.035,.9718,.0015,.0435,.0148,.0026,.02,.1372,.1393,.2594,.3171],C:[.3218,.1975,.1422,.0865,.6052,.9596,.0019,.9519,.003,.0114,.0025,.0969,.2202,.3887,.2772,.1054],G:[.1992,.2928,.3032,.1695,.0969,.0025,.0114,.003,.9519,.0019,.9596,.6052,.093,.1497,.2173,.3618],T:[.302,.2227,.2946,.0715,.02,.0026,.0148,.0435,.0015,.9718,.035,.2777,.5494,.3221,.2459,.2154]}},{name:"NSY-7_Lesch_2009",matrix:{A:[.2475,.264,.2047,.8557,.0066,.0044,.0011,.0621,.9866,.874,.0628,.0705,.1892,.1938],C:[.0789,.0588,.0688,.0533,.9829,.9738,.0522,.0014,.0038,.0225,.7153,.2009,.2617,.3604],G:[.212,.0997,.222,.014,.0013,.0111,.0065,.0019,.0018,.0882,.1594,.4667,.2042,.1858],T:[.4614,.5772,.5043,.0768,.009,.0106,.9401,.9344,.0077,.0151,.0622,.2616,.3447,.2598]}},{name:"REF-1_Grove_2009",matrix:{A:[.3457,.2681,.5102,.3448,.2251,.2222,.0066,.9622,.0051,.0126,.0091,.009,.0082,.2146,.3017,.3368,.4989],C:[.1376,.3122,.1799,.2227,.0308,.0766,.9798,.0052,.9651,.0074,.022,.0058,.4508,.472,.1936,.0743,.1342],G:[.1508,.2212,.1055,.1561,.6779,.6857,.005,.0259,.0064,.974,.0127,.976,.0947,.1007,.1691,.2045,.1459],T:[.3657,.1983,.2042,.2762,.066,.0152,.0084,.0065,.0231,.0058,.956,.0091,.4462,.2125,.3353,.3841,.2208]}},{name:"SLR-2_Kirienko_2010",matrix:{A:[1,1,0,0,0,0,0,0,0,0,0,1,1],C:[4,4,2,17,0,0,17,0,0,17,0,15,5],G:[0,10,0,0,0,17,0,16,0,0,0,0,1],T:[12,2,15,0,17,0,0,1,17,0,17,1,10]}}],a.matrixbutton=[];for(var e=b.create("div",{className:"flex-container"},c),f=b.create("div",{className:"colone"},e),i=b.create("div",{className:"coltwo"},e),j=b.create("div",{className:"colthr"},e),l=0;l<Math.round(a.matrices.length/3+.5);l++){var m=a.matrices[l].name;a.matrixbutton[m]=k({name:"matrix",value:m,label:m},f)}for(var l=Math.round(a.matrices.length/3+.5);l<Math.round(2*a.matrices.length/3+.5);l++){var m=a.matrices[l].name;a.matrixbutton[m]=k({name:"matrix",value:m,label:m},i)}for(var l=Math.round(2*a.matrices.length/3+.5);l<a.matrices.length;l++){var m=a.matrices[l].name;a.matrixbutton[m]=k({name:"matrix",value:m,label:m},j)}var n=b.create("div",{className:"section",style:{position:"relative"}},f);a.minscorefield=new h({name:"minscore",style:"width: 7em;",placeholder:"min score %"},n);var o=b.create("div",{className:"section",style:{position:"relative"}},j),p=b.create("div",{className:"section",style:{position:"left"}},o),q=b.create("div",{className:"section",style:{position:"left"}},o),r=b.create("div",{className:"section",style:{position:"left"}},o),s=b.create("div",{className:"section",style:{position:"left"}},o),t=b.create("div",{className:"section",style:{position:"left"}},o);return a.custommatrixnamefield=new h({name:"custommatrixname",style:"width: 14em;",placeholder:"custom name"},p),a.custommatrixafield=new h({name:"custommatrixa",style:"width: 15em;",placeholder:"A:0 12 0 4..."},q),a.custummatrixcfield=new h({name:"custummatrixc",style:"width: 15em;",placeholder:"C:12 0 0 6..."},r),a.custommatrixgfield=new h({name:"custommatrixg",style:"width: 15em;",placeholder:"G:0 0 12 0..."},s),a.custommatrixtfield=new h({name:"custommatrixt",style:"width: 15em;",placeholder:"T:0 0 0 2..."},t),c},_getSearchParams:function(){for(var b,c,d,e,f,a=this.content,g=0;g<a.matrices.length;g++){var h=a.matrices[g].name;if(a.matrixbutton[h].checked){b=h,c=a.matrices[g].matrix.A,d=a.matrices[g].matrix.C,e=a.matrices[g].matrix.T,f=a.matrices[g].matrix.G;break}}if(a.custommatrixnamefield.get("value")){b=a.custommatrixnamefield.get("value");for(var i=[a.custommatrixafield.get("value"),a.custummatrixcfield.get("value"),a.custommatrixgfield.get("value"),a.custommatrixtfield.get("value")],j={},g=0;g<i.length;g++){i[g].indexOf(":")>=0&&(i[g]=customermatrix[g].substring(i[g].indexOf(":")+1)),j[g]=i[g].split(" ");for(var k=0;k<j[g].length;k++)j[g][k]=parseFloat(j[g][k])}c=j[0],d=j[1],f=j[2],e=j[3]}var l=isNaN(a.minscorefield.get("value"))||a.minscorefield.get("value")<=0||a.minscorefield.get("value")>100?80:a.minscorefield.get("value");return{matrix:b,matrix_A:c,matrix_C:d,matrix_G:f,matrix_T:e,minscore:l}},_fillActionBar:function(a){var b=this;new e({label:"Search",iconClass:"dijitIconBookmark",onClick:function(){var a=b._getSearchParams();b.callback(a),b.hide()}}).placeAt(a),new e({label:"Cancel",iconClass:"dijitIconDelete",onClick:function(){b.callback(!1),b.hide()}}).placeAt(a)},show:function(a){this.callback=a||function(){},this.set("title","Add motif search track"),this.set("content",this._dialogContent()),this.inherited(arguments),d.focus(this.closeButtonNode)}})})},"MotifSearch/Store/SeqFeature/MotifSearch":function(){define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","JBrowse/Store/SeqFeature","JBrowse/Model/SimpleFeature","JBrowse/Errors","JBrowse/Util"],function(a,b,c,d,e,f,g){return a(d,{constructor:function(a){this.searchParams=a.searchParams},_defaultConfig:function(){return g.deepUpdate(dojo.clone(this.inherited(arguments)),{regionSizeLimit:5e5})},getFeatures:function(a,b,d,e){var g=c.mixin({orig:{start:a.start,end:a.end}},this.searchParams,a.searchParams),h=a.end-a.start;if(h>this.config.regionSizeLimit)throw new f.DataOverflow("Region too large to search");var i=this;this.browser.getStore("refseqs",function(c){c?c.getReferenceSequence(a,function(c){i.doSearch(a,c,g,b),d()},e):d()})},doSearch:function(a,c,d,e){for(var f=[d.matrix_A,d.matrix_C,d.matrix_G,d.matrix_T],h=f[0].length,i=[new Array(h),new Array(h),new Array(h),new Array(h)],j=[.32,.18,.18,.32],k=0;k<h;++k){for(var l=0,m=0;m<4;++m)l+=f[m][k];for(var m=0;m<4;++m){var n=f[m][k],o=Math.log2((n+Math.sqrt(l)*j[m])/(l+Math.sqrt(l))/j[m]);i[m][k]=o}}for(var p=0,q=0,k=0;k<h;k++){for(var r=-1e3,s=1e3,m=0;m<4;m++)r<i[m][k]&&(r=i[m][k]),s>i[m][k]&&(s=i[m][k]);p+=r,q+=s}var t=d.minscore,u=p-(1-t/100)*(p-q),v=[];v.push([c,1]),v.push([g.revcom(c),-1]),b.forEach(v,function(b){this._searchSequence(a,b[0],b[1],i,t,p,q,u,e)},this)},_searchSequence:function(a,b,c,d,f,g,h,i,j){for(var k=a.start,l=a.end,m=d[0].length,p=0;p<b.length-m+1;p++){for(var q=b.substring(p,p+m),r=0,s=d[0].length,t=0;t<s;t++){var u=-1;switch(q.charAt(t)){case"a":case"A":u=0;break;case"c":case"C":u=1;break;case"t":case"T":u=3;break;case"g":case"G":u=2}u!=-1&&(r+=d[u][t])}if(r>i){var v=100*(1-(g-r)/(g-h)),w=q,x=c>0?k+p:l-(p+m),y=c>0?k+(p+m):l-p,z=new e({data:{start:x,end:y,searchMatch:w,rawscore:r,relscore:v,strand:c},id:[x,y,w].join(",")});j(z)}}}})})}}}),define("MotifSearch/main",["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dijit/MenuItem","JBrowse/Plugin","./View/SearchSeqDialog"],function(a,b,c,d,e,f){return a(e,{constructor:function(a){this._searchTrackCount=0;this.browser.afterMilestone("initView",function(){this.browser.addGlobalMenuItem("file",new d({label:"Add motif search track",iconClass:"dijitIconBookmark",onClick:b.hitch(this,"createSearchTrack")}))},this)},createSearchTrack:function(){var a=new f,b=this;a.show(function(a){if(a){var c={browser:b.browser,refSeq:b.browser.refSeq,type:"MotifSearch/Store/SeqFeature/MotifSearch",searchParams:a},d=b.browser.addStoreConfig(void 0,c);c.name=d;var e={type:"JBrowse/View/Track/CanvasFeatures",label:"search_track_"+b._searchTrackCount++,key:"Search  for "+a.matrix+" (min score:"+a.minscore+")",metadata:{category:"Local tracks",Description:"Contains all matches of the motif "+a.matrix},store:d};b.browser.publish("/jbrowse/v1/v/tracks/new",[e]),b.browser.publish("/jbrowse/v1/v/tracks/show",[e])}})}})});
