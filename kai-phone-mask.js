const maskList=[{cc:"+247",cm:"+247 ####",regex:"^\\+247\\d{0,4}"},{cc:"+290",cm:"+290 ####",regex:"^\\+290\\d{0,4}"},{cc:"+290",cm:"+290 ####",regex:"^\\+290\\d{0,4}"},{cc:"+683",cm:"+683 ####",regex:"^\\+683\\d{0,4}"},{cc:"+690",cm:"+690 ####",regex:"^\\+690\\d{0,4}"},{cc:"+500",cm:"+500 #####",regex:"^\\+500\\d{0,5}"},{cc:"+676",cm:"+676 #####",regex:"^\\+676\\d{0,5}"},{cc:"+677",cm:"+677 ### ####",regex:"^\\+677\\d{0,3}\\d{0,4}"},{cc:"+678",cm:"+678 ## #####",regex:"^\\+678\\d{0,2}\\d{0,5}"},{cc:"+688",cm:"+688 2####",regex:"^\\+6882\\d{0,4}"},{cc:"+49",cm:"+49 ### ### #####",regex:"^\\+49\\d{0,3}\\d{0,3}\\d{0,5}"},{cc:"+682",cm:"+682 ## ###",regex:"^\\+682\\d{0,2}\\d{0,3}"},{cc:"+686",cm:"+686 ## ###",regex:"^\\+686\\d{0,2}\\d{0,3}"},{cc:"+688",cm:"+688 90####",regex:"^\\+68890\\d{0,4}"},{cc:"+95",cm:"+95 ### ### ###",regex:"^\\+95\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+298",cm:"+298 ### ###",regex:"^\\+298\\d{0,3}\\d{0,3}"},{cc:"+376",cm:"+376 ### ###",regex:"^\\+376\\d{0,3}\\d{0,3}"},{cc:"+387",cm:"+387 ## ### ###",regex:"^\\+387\\d{0,9}"},{cc:"+508",cm:"+508 ## ####",regex:"^\\+508\\d{0,2}\\d{0,4}"},{cc:"+597",cm:"+597 ### ####",regex:"^\\+597\\d{0,3}\\d{0,4}"},{cc:"+672",cm:"+672 1## ###",regex:"^\\+6721\\d{0,2}\\d{0,3}"},{cc:"+672",cm:"+672 3## ###",regex:"^\\+6723\\d{0,2}\\d{0,3}"},{cc:"+681",cm:"+681 ## ####",regex:"^\\+681\\d{0,2}\\d{0,4}"},{cc:"+685",cm:"+685 ## ####",regex:"^\\+685\\d{0,2}\\d{0,4}"},{cc:"+687",cm:"+687 ## ####",regex:"^\\+687\\d{0,2}\\d{0,4}"},{cc:"+850",cm:"+850 ### ### ###",regex:"^\\+850\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+230",cm:"+230 ### ####",regex:"^\\+230\\d{0,3}\\d{0,4}"},{cc:"+239",cm:"+239 ## #####",regex:"^\\+239\\d{0,2}\\d{0,5}"},{cc:"+245",cm:"+245 # ######",regex:"^\\+245\\d{0,1}\\d{0,6}"},{cc:"+246",cm:"+246 ### ####",regex:"^\\+246\\d{0,3}\\d{0,4}"},{cc:"+263",cm:"+263 # ######",regex:"^\\+263\\d{0,1}\\d{0,6}"},{cc:"+269",cm:"+269 ## #####",regex:"^\\+269\\d{0,2}\\d{0,5}"},{cc:"+297",cm:"+297 ### ####",regex:"^\\+297\\d{0,3}\\d{0,4}"},{cc:"+299",cm:"+299 ## ## ##",regex:"^\\+299\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+354",cm:"+354 ### ####",regex:"^\\+354\\d{0,3}\\d{0,4}"},{cc:"+372",cm:"+372 ### ####",regex:"^\\+372\\d{0,3}\\d{0,4}"},{cc:"+387",cm:"+387 ## #####",regex:"^\\+387\\d{0,2}\\d{0,5}"},{cc:"+49",cm:"+49 ### ## ##",regex:"^\\+49\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+501",cm:"+501 ### ####",regex:"^\\+501\\d{0,3}\\d{0,4}"},{cc:"+507",cm:"+507 ### ####",regex:"^\\+507\\d{0,3}\\d{0,4}"},{cc:"+592",cm:"+592 ### ####",regex:"^\\+592\\d{0,3}\\d{0,4}"},{cc:"+597",cm:"+597 ### ####",regex:"^\\+597\\d{0,3}\\d{0,4}"},{cc:"+599",cm:"+599 #### ####",regex:"^\\+599\\d{0,4}\\d{0,4}"},{cc:"+60",cm:"+60 ### ### ####",regex:"^\\+60\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+62",cm:"+62 ### ### ## ###",regex:"^\\+62\\d{0,13}"},{cc:"+65",cm:"+65 #### ####",regex:"^\\+65\\d{0,4}\\d{0,4}"},{cc:"+670",cm:"+670 ### ####",regex:"^\\+670\\d{0,3}\\d{0,4}"},{cc:"+673",cm:"+673 ### ####",regex:"^\\+673\\d{0,3}\\d{0,4}"},{cc:"+674",cm:"+674 ### ####",regex:"^\\+674\\d{0,3}\\d{0,4}"},{cc:"+677",cm:"+677 ### ####",regex:"^\\+677\\d{0,3}\\d{0,4}"},{cc:"+678",cm:"+678 ## #####",regex:"^\\+678\\d{0,2}\\d{0,5}"},{cc:"+679",cm:"+679 ## #####",regex:"^\\+679\\d{0,2}\\d{0,5}"},{cc:"+680",cm:"+680 ### ####",regex:"^\\+680\\d{0,3}\\d{0,4}"},{cc:"+689",cm:"+689 ## ## ##",regex:"^\\+689\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+691",cm:"+691 ### ####",regex:"^\\+691\\d{0,3}\\d{0,4}"},{cc:"+692",cm:"+692 ### ####",regex:"^\\+692\\d{0,3}\\d{0,4}"},{cc:"+95",cm:"+95 # ### ###",regex:"^\\+95\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+960",cm:"+960 ### ####",regex:"^\\+960\\d{0,3}\\d{0,4}"},{cc:"+220",cm:"+220 ### ## ##",regex:"^\\+220\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+232",cm:"+232 ## ######",regex:"^\\+232\\d{0,2}\\d{0,6}"},{cc:"+233",cm:"+233 ### ### ###",regex:"^\\+233\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+234",cm:"+234 ### ### ####",regex:"^\\+234\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+235",cm:"+235 ## ## ## ##",regex:"^\\+235\\d{0,2}\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+237",cm:"+237 #### ####",regex:"^\\+237\\d{0,4}\\d{0,4}"},{cc:"+238",cm:"+238 ### ## ##",regex:"^\\+238\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+248",cm:"+248 # ### ###",regex:"^\\+248\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+252",cm:"+252 ## ### ###",regex:"^\\+252\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+252",cm:"+252 # ### ###",regex:"^\\+252\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+265",cm:"+265 1 #### ####",regex:"^\\+2651\\d{0,4}\\d{0,4}"},{cc:"+291",cm:"+291 # ### ###",regex:"^\\+291\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+350",cm:"+350 ### #####",regex:"^\\+350\\d{0,3}\\d{0,5}"},{cc:"+356",cm:"+356 #### ####",regex:"^\\+356\\d{0,4}\\d{0,4}"},{cc:"+372",cm:"+372 ### ####",regex:"^\\+372\\d{0,3}\\d{0,4}"},{cc:"+373",cm:"+373 #### ####",regex:"^\\+373\\d{0,4}\\d{0,4}"},{cc:"+47",cm:"+47 ### ## ###",regex:"^\\+47\\d{0,3}\\d{0,2}\\d{0,3}"},{cc:"+49",cm:"+49 ### ## ###",regex:"^\\+49\\d{0,3}\\d{0,2}\\d{0,3}"},{cc:"+504",cm:"+504 #### ####",regex:"^\\+504\\d{0,4}\\d{0,4}"},{cc:"+505",cm:"+505 #### ####",regex:"^\\+505\\d{0,4}\\d{0,4}"},{cc:"+506",cm:"+506 #### ####",regex:"^\\+506\\d{0,4}\\d{0,4}"},{cc:"+52",cm:"+52 ### ### ####",regex:"^\\+52\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+53",cm:"+53 # ### ####",regex:"^\\+53\\d{0,1}\\d{0,3}\\d{0,4}"},{cc:"+599",cm:"+599 9### ####",regex:"^\\+5999\\d{0,3}\\d{0,4}"},{cc:"+60",cm:"+60 ## ### ###",regex:"^\\+60\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+62",cm:"+62 ## ### ###",regex:"^\\+62\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+64",cm:"+64 ### ### ###",regex:"^\\+64\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+66",cm:"+66 ## ### #####",regex:"^\\+66\\d{0,10}"},{cc:"+670",cm:"+670 ### ####",regex:"^\\+670\\d{0,3}\\d{0,4}"},{cc:"+673",cm:"+673 ### ####",regex:"^\\+673\\d{0,3}\\d{0,4}"},{cc:"+674",cm:"+674 ### ####",regex:"^\\+674\\d{0,3}\\d{0,4}"},{cc:"+677",cm:"+677 ### ####",regex:"^\\+677\\d{0,3}\\d{0,4}"},{cc:"+678",cm:"+678 ## #####",regex:"^\\+678\\d{0,2}\\d{0,5}"},{cc:"+679",cm:"+679 ## #####",regex:"^\\+679\\d{0,2}\\d{0,5}"},{cc:"+680",cm:"+680 ### ####",regex:"^\\+680\\d{0,3}\\d{0,4}"},{cc:"+689",cm:"+689 ## ## ##",regex:"^\\+689\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+691",cm:"+691 ### ####",regex:"^\\+691\\d{0,3}\\d{0,4}"},{cc:"+692",cm:"+692 ### ####",regex:"^\\+692\\d{0,3}\\d{0,4}"},{cc:"+95",cm:"+95 # ### ###",regex:"^\\+95\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+960",cm:"+960 ### ####",regex:"^\\+960\\d{0,3}\\d{0,4}"},{cc:"+220",cm:"+220 ### ## ##",regex:"^\\+220\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+232",cm:"+232 ## ######",regex:"^\\+232\\d{0,2}\\d{0,6}"},{cc:"+233",cm:"+233 ### ### ###",regex:"^\\+233\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+234",cm:"+234 ### ### ####",regex:"^\\+234\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+235",cm:"+235 ## ## ## ##",regex:"^\\+235\\d{0,2}\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+237",cm:"+237 #### ####",regex:"^\\+237\\d{0,4}\\d{0,4}"},{cc:"+238",cm:"+238 ### ## ##",regex:"^\\+238\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+248",cm:"+248 # ### ###",regex:"^\\+248\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+252",cm:"+252 # ### ###",regex:"^\\+252\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+252",cm:"+252 # ### ###",regex:"^\\+252\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+265",cm:"+265 1 #### ####",regex:"^\\+2651\\d{0,4}\\d{0,4}"},{cc:"+291",cm:"+291 # ### ###",regex:"^\\+291\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+350",cm:"+350 ### #####",regex:"^\\+350\\d{0,3}\\d{0,5}"},{cc:"+356",cm:"+356 #### ####",regex:"^\\+356\\d{0,4}\\d{0,4}"},{cc:"+372",cm:"+372 ### ####",regex:"^\\+372\\d{0,3}\\d{0,4}"},{cc:"+373",cm:"+373 #### ####",regex:"^\\+373\\d{0,4}\\d{0,4}"},{cc:"+47",cm:"+47 ### ## ###",regex:"^\\+47\\d{0,3}\\d{0,2}\\d{0,3}"},{cc:"+49",cm:"+49 ### ## ###",regex:"^\\+49\\d{0,3}\\d{0,2}\\d{0,3}"},{cc:"+504",cm:"+504 #### ####",regex:"^\\+504\\d{0,4}\\d{0,4}"},{cc:"+505",cm:"+505 #### ####",regex:"^\\+505\\d{0,4}\\d{0,4}"},{cc:"+506",cm:"+506 #### ####",regex:"^\\+506\\d{0,4}\\d{0,4}"},{cc:"+52",cm:"+52 ### ### ####",regex:"^\\+52\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+53",cm:"+53 # ### ####",regex:"^\\+53\\d{0,1}\\d{0,3}\\d{0,4}"},{cc:"+599",cm:"+599 9### ####",regex:"^\\+5999\\d{0,3}\\d{0,4}"},{cc:"+60",cm:"+60 ## ### ###",regex:"^\\+60\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+62",cm:"+62 ## ### ###",regex:"^\\+62\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+64",cm:"+64 ### ### ###",regex:"^\\+64\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+66",cm:"+66 ## ### #####",regex:"^\\+66\\d{0,10}"},{cc:"+675",cm:"+675 ### ## ###",regex:"^\\+675\\d{0,3}\\d{0,2}\\d{0,3}"},{cc:"+81",cm:"+81 ## #### ####",regex:"^\\+81\\d{0,2}\\d{0,4}\\d{0,4}"},{cc:"+82",cm:"+82 ## ### ####",regex:"^\\+82\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+84",cm:"+84 ### #### ###",regex:"^\\+84\\d{0,3}\\d{0,4}\\d{0,3}"},{cc:"+850",cm:"+850 ### ### ###",regex:"^\\+850\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+855",cm:"+855 ## ### ###",regex:"^\\+855\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+856",cm:"+856 ## ### ###",regex:"^\\+856\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+880",cm:"+880 ## ### ###",regex:"^\\+880\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+93",cm:"+93 ## ### ####",regex:"^\\+93\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+94",cm:"+94 ## ### ####",regex:"^\\+94\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+961",cm:"+961 # ### ###",regex:"^\\+961\\d{0,1}\\d{0,3}\\d{0,3}"},{cc:"+966",cm:"+966 5 #### ####",regex:"^\\+9665\\d{0,4}\\d{0,4}"},{cc:"+967",cm:"+967 ### ### ###",regex:"^\\+967\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+968",cm:"+968 ## ### ###",regex:"^\\+968\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+971",cm:"+971 5# ### ####",regex:"^\\+9715\\d{0,1}\\d{0,3}\\d{0,4}"},{cc:"+972",cm:"+972 5# ### ####",regex:"^\\+9725\\d{0,1}\\d{0,3}\\d{0,4}"},{cc:"+975",cm:"+975 17 ### ###",regex:"^\\+97517\\d{0,3}\\d{0,3}"},{cc:"+976",cm:"+976 ## ## ####",regex:"^\\+976\\d{0,2}\\d{0,2}\\d{0,4}"},{cc:"+977",cm:"+977 ## ### ###",regex:"^\\+977\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+993",cm:"+993 # ### ####",regex:"^\\+993\\d{0,1}\\d{0,3}\\d{0,4}"},{cc:"+20",cm:"+20 ### ### ####",regex:"^\\+20\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+211",cm:"+211 ## ### ####",regex:"^\\+211\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+212",cm:"+212 ## #### ###",regex:"^\\+212\\d{0,2}\\d{0,4}\\d{0,3}"},{cc:"+213",cm:"+213 ## ### ####",regex:"^\\+213\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+218",cm:"+218 21 ### ####",regex:"^\\+21821\\d{0,3}\\d{0,4}"},{cc:"+221",cm:"+221 ## ### ####",regex:"^\\+221\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+233",cm:"+233 ### ### ###",regex:"^\\+233\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+235",cm:"+235 ## ## ## ##",regex:"^\\+235\\d{0,2}\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+240",cm:"+240 ## ### ####",regex:"^\\+240\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+242",cm:"+242 ## ### ####",regex:"^\\+242\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+243",cm:"+243 ### ### ###",regex:"^\\+243\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+244",cm:"+244 ### ### ###",regex:"^\\+244\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+249",cm:"+249 ## ### ####",regex:"^\\+249\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+250",cm:"+250 ### ### ###",regex:"^\\+250\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+251",cm:"+251 ## ### ####",regex:"^\\+251\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+253",cm:"+253 ## ## ## ##",regex:"^\\+253\\d{0,2}\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+255",cm:"+255 ## ### ####",regex:"^\\+255\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+256",cm:"+256 ### ### ###",regex:"^\\+256\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+260",cm:"+260 ## ### ####",regex:"^\\+260\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+261",cm:"+261 ## ## #####",regex:"^\\+261\\d{0,2}\\d{0,2}\\d{0,5}"},{cc:"+264",cm:"+264 ## ### ####",regex:"^\\+264\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+265",cm:"+265 1 #### ####",regex:"^\\+2651\\d{0,4}\\d{0,4}"},{cc:"+30",cm:"+30 ### ### ####",regex:"^\\+30\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+351",cm:"+351 ## ### ####",regex:"^\\+351\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+352",cm:"+352 ### ### ###",regex:"^\\+352\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+353",cm:"+353 ### ### ###",regex:"^\\+353\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+355",cm:"+355 ### ### ###",regex:"^\\+355\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+359",cm:"+359 ### ### ###",regex:"^\\+359\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+377",cm:"+377 ### ### ###",regex:"^\\+377\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+378",cm:"+378 #### ######",regex:"^\\+378\\d{0,4}\\d{0,6}"},{cc:"+381",cm:"+381 ## ### ####",regex:"^\\+381\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+39",cm:"+39 ### #### ###",regex:"^\\+39\\d{0,3}\\d{0,4}\\d{0,3}"},{cc:"+420",cm:"+420 ### ### ###",regex:"^\\+420\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+421",cm:"+421 ### ### ###",regex:"^\\+421\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+43",cm:"+43 ### ### ####",regex:"^\\+43\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+44",cm:"+44 ## #### ####",regex:"^\\+44\\d{0,2}\\d{0,4}\\d{0,4}"},{cc:"+49",cm:"+49 ### ### ####",regex:"^\\+49\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+52",cm:"+52 ### ### ####",regex:"^\\+52\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+54",cm:"+54 ### ### ####",regex:"^\\+54\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+55",cm:"+55 ## 9#### ####",regex:"^\\+55\\d{0,2}9\\d{0,4}\\d{0,4}"},{cc:"+55",cm:"+55 ## #### ####",regex:"^\\+55\\d{0,2}\\d{0,4}\\d{0,4}"},{cc:"+55",cm:"+55 ## 7### ####",regex:"^\\+55\\d{0,2}7\\d{0,3}\\d{0,4}"},{cc:"+57",cm:"+57 ### ### ####",regex:"^\\+57\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+58",cm:"+58 ### ### ####",regex:"^\\+58\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+590",cm:"+590 ### ### ###",regex:"^\\+590\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+593",cm:"+593 ## ### ####",regex:"^\\+593\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+595",cm:"+595 ### ### ###",regex:"^\\+595\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+598",cm:"+598 # ### ## ##",regex:"^\\+598\\d{0,1}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+62",cm:"+62 8## ### ####",regex:"^\\+628\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+63",cm:"+63 ### ### ####",regex:"^\\+63\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+64",cm:"+64 ### ### ###",regex:"^\\+64\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+7",cm:"+7 ### ### ## ##",regex:"^\\+7\\d{0,3}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+7",cm:"+7 6## ### ## ##",regex:"^\\+76\\d{0,2}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+7",cm:"+7 7## ### ## ##",regex:"^\\+77\\d{0,2}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+81",cm:"+81 ## #### ####",regex:"^\\+81\\d{0,2}\\d{0,4}\\d{0,4}"},{cc:"+84",cm:"+84 ### #### ###",regex:"^\\+84\\d{0,3}\\d{0,4}\\d{0,3}"},{cc:"+86",cm:"+86 ### ##### #####",regex:"^\\+86\\d{0,13}"},{cc:"+90",cm:"+90 ### ### ####",regex:"^\\+90\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+91",cm:"+91 #### ### ###",regex:"^\\+91\\d{0,4}\\d{0,3}\\d{0,3}"},{cc:"+92",cm:"+92 ### ### ####",regex:"^\\+92\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+962",cm:"+962 # #### ####",regex:"^\\+962\\d{0,1}\\d{0,4}\\d{0,4}"},{cc:"+963",cm:"+963 ## #### ###",regex:"^\\+963\\d{0,2}\\d{0,4}\\d{0,3}"},{cc:"+966",cm:"+966 5 #### ####",regex:"^\\+9665\\d{0,4}\\d{0,4}"},{cc:"+967",cm:"+967 ### ### ###",regex:"^\\+967\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+970",cm:"+970 ## ### ####",regex:"^\\+970\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+971",cm:"+971 5# ### ####",regex:"^\\+9715\\d{0,1}\\d{0,3}\\d{0,4}"},{cc:"+972",cm:"+972 5# ### ####",regex:"^\\+9725\\d{0,1}\\d{0,3}\\d{0,4}"},{cc:"+98",cm:"+98 ### ### ####",regex:"^\\+98\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+992",cm:"+992 ## ### ####",regex:"^\\+992\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+995",cm:"+995 ### ### ###",regex:"^\\+995\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+996",cm:"+996 ### ### ###",regex:"^\\+996\\d{0,3}\\d{0,3}\\d{0,3}"},{cc:"+998",cm:"+998 ## ### ####",regex:"^\\+998\\d{0,2}\\d{0,3}\\d{0,4}"},{cc:"+234",cm:"+234 ### ### ####",regex:"^\\+234\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+234",cm:"+234 ### ### ####",regex:"^\\+234\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+375",cm:"+375 ## ### ## ##",regex:"^\\+375\\d{0,2}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+380",cm:"+380 ## ### ## ##",regex:"^\\+380\\d{0,2}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+423",cm:"+423 ### ### ####",regex:"^\\+423\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+49",cm:"+49 #### ### ####",regex:"^\\+49\\d{0,4}\\d{0,3}\\d{0,4}"},{cc:"+596",cm:"+596 ### ## ## ##",regex:"^\\+596\\d{0,3}\\d{0,2}\\d{0,2}\\d{0,2}"},{cc:"+850",cm:"+850 ### #### ###",regex:"^\\+850\\d{0,3}\\d{0,4}\\d{0,3}"},{cc:"+850",cm:"+850 191 ### ####",regex:"^\\+850191\\d{0,3}\\d{0,4}"},{cc:"+856",cm:"+856 20## ### ###",regex:"^\\+85620\\d{0,2}\\d{0,3}\\d{0,3}"},{cc:"+86",cm:"+86 ### ##### #####",regex:"^\\+86\\d{0,13}"},{cc:"+964",cm:"+964 ### ### ####",regex:"^\\+964\\d{0,3}\\d{0,3}\\d{0,4}"},{cc:"+994",cm:"+994 ## ### ## ##",regex:"^\\+994\\d{0,2}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+358",cm:"+358 ### ### ## ##",regex:"^\\+358\\d{0,3}\\d{0,3}\\d{0,2}\\d{0,2}"},{cc:"+62",cm:"+62 8## ### ## ###",regex:"^\\+628\\d{0,2}\\d{0,3}\\d{0,2}\\d{0,3}"},{cc:"+86",cm:"+86 ## ##### #####",regex:"^\\+86\\d{0,2}\\d{0,5}\\d{0,5}"},{cc:"+850",cm:"+850 #### #############",regex:"^\\+850\\d{0,17}"}],defaultMatrix="+###############";function findClosestMask(c){for(const d of maskList){if(new RegExp(d.regex).test(c))return d}return null}const vanillaMaskInput=c=>{function d(){let c=defaultMatrix,d={},e="",r="";maskList.forEach((m=>{r=m.cc,e=this.value.replace(/[\s#-)(]/g,""),e.startsWith(r)&&(d=findClosestMask(e),c=d.cm)}));let m=0,g=this.value.replace(/\D/g,"");this.value=c.replace(/(?!\+)./g,(function(c){return/[#\d]/.test(c)&&m<g.length?g.charAt(m++):m>=g.length?"":c})),this.lfMask=c!==defaultMatrix?{mask:d,completed:!0,valid:!0,raw:this.value.substring(d.cc.length)}:{mask:d,completed:!1,valid:!1}}return document.querySelectorAll(c).forEach((c=>{c.value||(c.value="+"),c.addEventListener("input",d),c.addEventListener("focus",d),c.addEventListener("blur",d)})),this};

// Автоматически инициализируем маску и добавляем обработчик blur
var Webflow = Webflow || [];
Webflow.push(function() {
    // Используем нативный селектор Webflow для полей телефона
    vanillaMaskInput('input[type="tel"]');

    // Получаем все формы на странице
    var $forms = $('form');
    
    $forms.each(function() {
        var $form = $(this);
        var $tel = $form.find('input[type="tel"]');
        
        // Добавляем кастомную валидацию
        $form.on('submit', function(e) {
            if ($tel.length && (!$tel[0].lfMask || !$tel[0].lfMask.valid)) {
                e.preventDefault();
                e.stopPropagation();
                // Показываем ошибку в стиле Webflow
                $tel.siblings('.w-form-fail').show();
                return false;
            }
            return true;
        });

        // Обработчик изменения значения в поле
        $tel.on('blur', function(e) {
            var input = e.target;
            if (input.lfMask && input.lfMask.valid) {
                const countryCode = input.lfMask.mask.cc;
                const rawPhone = input.lfMask.raw;
                
                // Обновляем значение для отправки
                input.value = `${countryCode}${rawPhone.replace(/\s/g, '')}`;
                
                // Скрываем сообщение об ошибке если есть
                $(input).siblings('.w-form-fail').hide();
            }
        });
    });
});