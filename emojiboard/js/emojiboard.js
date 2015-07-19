/*! jMinEmoji v1.0.0 | (c) 2014 RodrigoPolo.com | https://github.com/rodrigopolo/minEmoji/blob/master/LICENSE */
(function($){
    var is_safari = (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 && navigator.userAgent.indexOf('Android') == -1);
    var emoji = {
        "\ud83d\ude04":0,"\ud83d\ude03":1,"\ud83d\ude00":2,"\ud83d\ude0a":3,"\u263a\ufe0f":4,"\ud83d\ude09":5,"\ud83d\ude0d":6,"\ud83d\ude18":7,"\ud83d\ude1a":8,"\ud83d\ude17":9,"\ud83d\ude19":10,"\ud83d\ude1c":11,"\ud83d\ude1d":12,"\ud83d\ude1b":13,"\ud83d\ude33":14,"\ud83d\ude01":15,"\ud83d\ude14":16,"\ud83d\ude0c":17,"\ud83d\ude12":18,"\ud83d\ude1e":19,"\ud83d\ude23":20,"\ud83d\ude22":21,"\ud83d\ude02":22,"\ud83d\ude2d":23,"\ud83d\ude2a":24,"\ud83d\ude25":25,"\ud83d\ude30":26,"\ud83d\ude05":27,"\ud83d\ude13":28,"\ud83d\ude29":29,"\ud83d\ude2b":30,"\ud83d\ude28":31,"\ud83d\ude31":32,"\ud83d\ude20":33,"\ud83d\ude21":34,"\ud83d\ude24":35,"\ud83d\ude16":36,"\ud83d\ude06":37,"\ud83d\ude0b":38,"\ud83d\ude37":39,"\ud83d\ude0e":40,"\ud83d\ude34":41,"\ud83d\ude35":42,"\ud83d\ude32":43,"\ud83d\ude1f":44,"\ud83d\ude26":45,"\ud83d\ude27":46,"\ud83d\ude08":47,"\ud83d\udc7f":48,"\ud83d\ude2e":49,"\ud83d\ude2c":50,"\ud83d\ude10":51,"\ud83d\ude15":52,"\ud83d\ude2f":53,"\ud83d\ude36":54,"\ud83d\ude07":55,"\ud83d\ude0f":56,"\ud83d\ude11":57,"\ud83d\udc72":58,"\ud83d\udc73":59,"\ud83d\udc6e":60,"\ud83d\udc77":61,"\ud83d\udc82":62,"\ud83d\udc76":63,"\ud83d\udc66":64,"\ud83d\udc67":65,"\ud83d\udc68":66,"\ud83d\udc69":67,"\ud83d\udc74":68,"\ud83d\udc75":69,"\ud83d\udc71":70,"\ud83d\udc7c":71,"\ud83d\udc78":72,"\ud83d\ude3a":73,"\ud83d\ude38":74,"\ud83d\ude3b":75,"\ud83d\ude3d":76,"\ud83d\ude3c":77,"\ud83d\ude40":78,"\ud83d\ude3f":79,"\ud83d\ude39":80,"\ud83d\ude3e":81,"\ud83d\udc79":82,"\ud83d\udc7a":83,"\ud83d\ude48":84,"\ud83d\ude49":85,"\ud83d\ude4a":86,"\ud83d\udc80":87,"\ud83d\udc7d":88,"\ud83d\udca9":89,"\ud83d\udd25":90,"\u2728":91,"\ud83c\udf1f":92,"\ud83d\udcab":93,"\ud83d\udca5":94,"\ud83d\udca2":95,"\ud83d\udca6":96,"\ud83d\udca7":97,"\ud83d\udca4":98,"\ud83d\udca8":99,        "\ud83d\udc42":100,"\ud83d\udc40":101,"\ud83d\udc43":102,"\ud83d\udc45":103,"\ud83d\udc44":104,"\ud83d\udc4d":105,"\ud83d\udc4e":106,"\ud83d\udc4c":107,"\ud83d\udc4a":108,"\u270a":109,"\u270c\ufe0f":110,"\ud83d\udc4b":111,"\u270b":112,"\ud83d\udc50":113,"\ud83d\udc46":114,"\ud83d\udc47":115,"\ud83d\udc49":116,"\ud83d\udc48":117,"\ud83d\ude4c":118,"\ud83d\ude4f":119,"\u261d\ufe0f":120,"\ud83d\udc4f":121,"\ud83d\udcaa":122,"\ud83d\udeb6":123,"\ud83c\udfc3":124,"\ud83d\udc83":125,"\ud83d\udc6b":126,"\ud83d\udc6a":127,"\ud83d\udc6c":128,"\ud83d\udc6d":129,"\ud83d\udc8f":130,"\ud83d\udc91":131,"\ud83d\udc6f":132,"\ud83d\ude46":133,"\ud83d\ude45":134,"\ud83d\udc81":135,"\ud83d\ude4b":136,"\ud83d\udc86":137,"\ud83d\udc87":138,"\ud83d\udc85":139,"\ud83d\udc70":140,"\ud83d\ude4e":141,"\ud83d\ude4d":142,"\ud83d\ude47":143,"\ud83c\udfa9":144,"\ud83d\udc51":145,"\ud83d\udc52":146,"\ud83d\udc5f":147,"\ud83d\udc5e":148,"\ud83d\udc61":149,"\ud83d\udc60":150,"\ud83d\udc62":151,"\ud83d\udc55":152,"\ud83d\udc54":153,"\ud83d\udc5a":154,"\ud83d\udc57":155,"\ud83c\udfbd":156,"\ud83d\udc56":157,"\ud83d\udc58":158,"\ud83d\udc59":159,"\ud83d\udcbc":160,"\ud83d\udc5c":161,"\ud83d\udc5d":162,"\ud83d\udc5b":163,"\ud83d\udc53":164,"\ud83c\udf80":165,"\ud83c\udf02":166,"\ud83d\udc84":167,"\ud83d\udc9b":168,"\ud83d\udc99":169,"\ud83d\udc9c":170,"\ud83d\udc9a":171,"\u2764\ufe0f":172,"\ud83d\udc94":173,"\ud83d\udc97":174,"\ud83d\udc93":175,"\ud83d\udc95":176,"\ud83d\udc96":177,"\ud83d\udc9e":178,"\ud83d\udc98":179,"\ud83d\udc8c":180,"\ud83d\udc8b":181,"\ud83d\udc8d":182,"\ud83d\udc8e":183,"\ud83d\udc64":184,"\ud83d\udc65":185,"\ud83d\udcac":186,"\ud83d\udc63":187,"\ud83d\udcad":188,"\ud83d\udc36":189,"\ud83d\udc3a":190,"\ud83d\udc31":191,"\ud83d\udc2d":192,"\ud83d\udc39":193,"\ud83d\udc30":194,"\ud83d\udc38":195,"\ud83d\udc2f":196,"\ud83d\udc28":197,"\ud83d\udc3b":198,"\ud83d\udc37":199,        "\ud83d\udc3d":200,"\ud83d\udc2e":201,"\ud83d\udc17":202,"\ud83d\udc35":203,"\ud83d\udc12":204,"\ud83d\udc34":205,"\ud83d\udc11":206,"\ud83d\udc18":207,"\ud83d\udc3c":208,"\ud83d\udc27":209,"\ud83d\udc26":210,"\ud83d\udc24":211,"\ud83d\udc25":212,"\ud83d\udc23":213,"\ud83d\udc14":214,"\ud83d\udc0d":215,"\ud83d\udc22":216,"\ud83d\udc1b":217,"\ud83d\udc1d":218,"\ud83d\udc1c":219,"\ud83d\udc1e":220,"\ud83d\udc0c":221,"\ud83d\udc19":222,"\ud83d\udc1a":223,"\ud83d\udc20":224,"\ud83d\udc1f":225,"\ud83d\udc2c":226,"\ud83d\udc33":227,"\ud83d\udc0b":228,"\ud83d\udc04":229,"\ud83d\udc0f":230,"\ud83d\udc00":231,"\ud83d\udc03":232,"\ud83d\udc05":233,"\ud83d\udc07":234,"\ud83d\udc09":235,"\ud83d\udc0e":236,"\ud83d\udc10":237,"\ud83d\udc13":238,"\ud83d\udc15":239,"\ud83d\udc16":240,"\ud83d\udc01":241,"\ud83d\udc02":242,"\ud83d\udc32":243,"\ud83d\udc21":244,"\ud83d\udc0a":245,"\ud83d\udc2b":246,"\ud83d\udc2a":247,"\ud83d\udc06":248,"\ud83d\udc08":249,"\ud83d\udc29":250,"\ud83d\udc3e":251,"\ud83d\udc90":252,"\ud83c\udf38":253,"\ud83c\udf37":254,"\ud83c\udf40":255,"\ud83c\udf39":256,"\ud83c\udf3b":257,"\ud83c\udf3a":258,"\ud83c\udf41":259,"\ud83c\udf43":260,"\ud83c\udf42":261,"\ud83c\udf3f":262,"\ud83c\udf3e":263,"\ud83c\udf44":264,"\ud83c\udf35":265,"\ud83c\udf34":266,"\ud83c\udf32":267,"\ud83c\udf33":268,"\ud83c\udf30":269,"\ud83c\udf31":270,"\ud83c\udf3c":271,"\ud83c\udf10":272,"\ud83c\udf1e":273,"\ud83c\udf1d":274,"\ud83c\udf1a":275,"\ud83c\udf11":276,"\ud83c\udf12":277,"\ud83c\udf13":278,"\ud83c\udf14":279,"\ud83c\udf15":280,"\ud83c\udf16":281,"\ud83c\udf17":282,"\ud83c\udf18":283,"\ud83c\udf1c":284,"\ud83c\udf1b":285,"\ud83c\udf19":286,"\ud83c\udf0d":287,"\ud83c\udf0e":288,"\ud83c\udf0f":289,"\ud83c\udf0b":290,"\ud83c\udf0c":291,"\ud83c\udf20":292,"\u2b50\ufe0f":293,"\u2600\ufe0f":294,"\u26c5\ufe0f":295,"\u2601\ufe0f":296,"\u26a1\ufe0f":297,"\u2614\ufe0f":298,"\u2744\ufe0f":299,        "\u26c4\ufe0f":300,"\ud83c\udf00":301,"\ud83c\udf01":302,"\ud83c\udf08":303,"\ud83c\udf0a":304,"\ud83c\udf8d":305,"\ud83d\udc9d":306,"\ud83c\udf8e":307,"\ud83c\udf92":308,"\ud83c\udf93":309,"\ud83c\udf8f":310,"\ud83c\udf86":311,"\ud83c\udf87":312,"\ud83c\udf90":313,"\ud83c\udf91":314,"\ud83c\udf83":315,"\ud83d\udc7b":316,"\ud83c\udf85":317,"\ud83c\udf84":318,"\ud83c\udf81":319,"\ud83c\udf8b":320,"\ud83c\udf89":321,"\ud83c\udf8a":322,"\ud83c\udf88":323,"\ud83c\udf8c":324,"\ud83d\udd2e":325,"\ud83c\udfa5":326,"\ud83d\udcf7":327,"\ud83d\udcf9":328,"\ud83d\udcfc":329,"\ud83d\udcbf":330,"\ud83d\udcc0":331,"\ud83d\udcbd":332,"\ud83d\udcbe":333,"\ud83d\udcbb":334,"\ud83d\udcf1":335,"\u260e\ufe0f":336,"\ud83d\udcde":337,"\ud83d\udcdf":338,"\ud83d\udce0":339,"\ud83d\udce1":340,"\ud83d\udcfa":341,"\ud83d\udcfb":342,"\ud83d\udd0a":343,"\ud83d\udd09":344,"\ud83d\udd08":345,"\ud83d\udd07":346,"\ud83d\udd14":347,"\ud83d\udd15":348,"\ud83d\udce2":349,"\ud83d\udce3":350,"\u23f3":351,"\u231b\ufe0f":352,"\u23f0":353,"\u231a\ufe0f":354,"\ud83d\udd13":355,"\ud83d\udd12":356,"\ud83d\udd0f":357,"\ud83d\udd10":358,"\ud83d\udd11":359,"\ud83d\udd0e":360,"\ud83d\udca1":361,"\ud83d\udd26":362,"\ud83d\udd06":363,"\ud83d\udd05":364,"\ud83d\udd0c":365,"\ud83d\udd0b":366,"\ud83d\udd0d":367,"\ud83d\udec1":368,"\ud83d\udec0":369,"\ud83d\udebf":370,"\ud83d\udebd":371,"\ud83d\udd27":372,"\ud83d\udd29":373,"\ud83d\udd28":374,"\ud83d\udeaa":375,"\ud83d\udeac":376,"\ud83d\udca3":377,"\ud83d\udd2b":378,"\ud83d\udd2a":379,"\ud83d\udc8a":380,"\ud83d\udc89":381,"\ud83d\udcb0":382,"\ud83d\udcb4":383,"\ud83d\udcb5":384,"\ud83d\udcb7":385,"\ud83d\udcb6":386,"\ud83d\udcb3":387,"\ud83d\udcb8":388,"\ud83d\udcf2":389,"\ud83d\udce7":390,"\ud83d\udce5":391,"\ud83d\udce4":392,"\u2709\ufe0f":393,"\ud83d\udce9":394,"\ud83d\udce8":395,"\ud83d\udcef":396,"\ud83d\udceb":397,"\ud83d\udcea":398,"\ud83d\udcec":399,        "\ud83d\udced":400,"\ud83d\udcee":401,"\ud83d\udce6":402,"\ud83d\udcdd":403,"\ud83d\udcc4":404,"\ud83d\udcc3":405,"\ud83d\udcd1":406,"\ud83d\udcca":407,"\ud83d\udcc8":408,"\ud83d\udcc9":409,"\ud83d\udcdc":410,"\ud83d\udccb":411,"\ud83d\udcc5":412,"\ud83d\udcc6":413,"\ud83d\udcc7":414,"\ud83d\udcc1":415,"\ud83d\udcc2":416,"\u2702\ufe0f":417,"\ud83d\udccc":418,"\ud83d\udcce":419,"\u2712\ufe0f":420,"\u270f\ufe0f":421,"\ud83d\udccf":422,"\ud83d\udcd0":423,"\ud83d\udcd5":424,"\ud83d\udcd7":425,"\ud83d\udcd8":426,"\ud83d\udcd9":427,"\ud83d\udcd3":428,"\ud83d\udcd4":429,"\ud83d\udcd2":430,"\ud83d\udcda":431,"\ud83d\udcd6":432,"\ud83d\udd16":433,"\ud83d\udcdb":434,"\ud83d\udd2c":435,"\ud83d\udd2d":436,"\ud83d\udcf0":437,"\ud83c\udfa8":438,"\ud83c\udfac":439,"\ud83c\udfa4":440,"\ud83c\udfa7":441,"\ud83c\udfbc":442,"\ud83c\udfb5":443,"\ud83c\udfb6":444,"\ud83c\udfb9":445,"\ud83c\udfbb":446,"\ud83c\udfba":447,"\ud83c\udfb7":448,"\ud83c\udfb8":449,"\ud83d\udc7e":450,"\ud83c\udfae":451,"\ud83c\udccf":452,"\ud83c\udfb4":453,"\ud83c\udc04\ufe0f":454,"\ud83c\udfb2":455,"\ud83c\udfaf":456,"\ud83c\udfc8":457,"\ud83c\udfc0":458,"\u26bd\ufe0f":459,"\u26be\ufe0f":460,"\ud83c\udfbe":461,"\ud83c\udfb1":462,"\ud83c\udfc9":463,"\ud83c\udfb3":464,"\u26f3\ufe0f":465,"\ud83d\udeb5":466,"\ud83d\udeb4":467,"\ud83c\udfc1":468,"\ud83c\udfc7":469,"\ud83c\udfc6":470,"\ud83c\udfbf":471,"\ud83c\udfc2":472,"\ud83c\udfca":473,"\ud83c\udfc4":474,"\ud83c\udfa3":475,"\u2615\ufe0f":476,"\ud83c\udf75":477,"\ud83c\udf76":478,"\ud83c\udf7c":479,"\ud83c\udf7a":480,"\ud83c\udf7b":481,"\ud83c\udf78":482,"\ud83c\udf79":483,"\ud83c\udf77":484,"\ud83c\udf74":485,"\ud83c\udf55":486,"\ud83c\udf54":487,"\ud83c\udf5f":488,"\ud83c\udf57":489,"\ud83c\udf56":490,"\ud83c\udf5d":491,"\ud83c\udf5b":492,"\ud83c\udf64":493,"\ud83c\udf71":494,"\ud83c\udf63":495,"\ud83c\udf65":496,"\ud83c\udf59":497,"\ud83c\udf58":498,"\ud83c\udf5a":499,      "\ud83c\udf5c":500,"\ud83c\udf72":501,"\ud83c\udf62":502,"\ud83c\udf61":503,"\ud83c\udf73":504,"\ud83c\udf5e":505,"\ud83c\udf69":506,"\ud83c\udf6e":507,"\ud83c\udf66":508,"\ud83c\udf68":509,"\ud83c\udf67":510,"\ud83c\udf82":511,"\ud83c\udf70":512,"\ud83c\udf6a":513,"\ud83c\udf6b":514,"\ud83c\udf6c":515,"\ud83c\udf6d":516,"\ud83c\udf6f":517,"\ud83c\udf4e":518,"\ud83c\udf4f":519,"\ud83c\udf4a":520,"\ud83c\udf4b":521,"\ud83c\udf52":522,"\ud83c\udf47":523,"\ud83c\udf49":524,"\ud83c\udf53":525,"\ud83c\udf51":526,"\ud83c\udf48":527,"\ud83c\udf4c":528,"\ud83c\udf50":529,"\ud83c\udf4d":530,"\ud83c\udf60":531,"\ud83c\udf46":532,"\ud83c\udf45":533,"\ud83c\udf3d":534,"\ud83c\udfe0":535,"\ud83c\udfe1":536,"\ud83c\udfeb":537,"\ud83c\udfe2":538,"\ud83c\udfe3":539,"\ud83c\udfe5":540,"\ud83c\udfe6":541,"\ud83c\udfea":542,"\ud83c\udfe9":543,"\ud83c\udfe8":544,"\ud83d\udc92":545,"\u26ea\ufe0f":546,"\ud83c\udfec":547,"\ud83c\udfe4":548,"\ud83c\udf07":549,"\ud83c\udf06":550,"\ud83c\udfef":551,"\ud83c\udff0":552,"\u26fa\ufe0f":553,"\ud83c\udfed":554,"\ud83d\uddfc":555,"\ud83d\uddfe":556,"\ud83d\uddfb":557,"\ud83c\udf04":558,"\ud83c\udf05":559,"\ud83c\udf03":560,"\ud83d\uddfd":561,"\ud83c\udf09":562,"\ud83c\udfa0":563,"\ud83c\udfa1":564,"\u26f2\ufe0f":565,"\ud83c\udfa2":566,"\ud83d\udea2":567,"\u26f5\ufe0f":568,"\ud83d\udea4":569,"\ud83d\udea3":570,"\u2693\ufe0f":571,"\ud83d\ude80":572,"\u2708\ufe0f":573,"\ud83d\udcba":574,"\ud83d\ude81":575,"\ud83d\ude82":576,"\ud83d\ude8a":577,"\ud83d\ude89":578,"\ud83d\ude9e":579,"\ud83d\ude86":580,"\ud83d\ude84":581,"\ud83d\ude85":582,"\ud83d\ude88":583,"\ud83d\ude87":584,"\ud83d\ude9d":585,"\ud83d\ude8b":586,"\ud83d\ude83":587,"\ud83d\ude8e":588,"\ud83d\ude8c":589,"\ud83d\ude8d":590,"\ud83d\ude99":591,"\ud83d\ude98":592,"\ud83d\ude97":593,"\ud83d\ude95":594,"\ud83d\ude96":595,"\ud83d\ude9b":596,"\ud83d\ude9a":597,"\ud83d\udea8":598,"\ud83d\ude93":599,        "\ud83d\ude94":600,"\ud83d\ude92":601,"\ud83d\ude91":602,"\ud83d\ude90":603,"\ud83d\udeb2":604,"\ud83d\udea1":605,"\ud83d\ude9f":606,"\ud83d\udea0":607,"\ud83d\ude9c":608,"\ud83d\udc88":609,"\ud83d\ude8f":610,"\ud83c\udfab":611,"\ud83d\udea6":612,"\ud83d\udea5":613,"\u26a0\ufe0f":614,"\ud83d\udea7":615,"\ud83d\udd30":616,"\u26fd\ufe0f":617,"\ud83c\udfee":618,"\ud83c\udfb0":619,"\u2668\ufe0f":620,"\ud83d\uddff":621,"\ud83c\udfaa":622,"\ud83c\udfad":623,"\ud83d\udccd":624,"\ud83d\udea9":625,"\ud83c\uddef\ud83c\uddf5":626,"\ud83c\uddf0\ud83c\uddf7":627,"\ud83c\udde9\ud83c\uddea":628,"\ud83c\udde8\ud83c\uddf3":629,"\ud83c\uddfa\ud83c\uddf8":630,"\ud83c\uddeb\ud83c\uddf7":631,"\ud83c\uddea\ud83c\uddf8":632,"\ud83c\uddee\ud83c\uddf9":633,"\ud83c\uddf7\ud83c\uddfa":634,"\ud83c\uddec\ud83c\udde7":635,"1\u20e3":636,"2\u20e3":637,"3\u20e3":638,"4\u20e3":639,"5\u20e3":640,"6\u20e3":641,"7\u20e3":642,"8\u20e3":643,"9\u20e3":644,"0\u20e3":645,"\ud83d\udd1f":646,"\ud83d\udd22":647,"\u0023\u20e3":648,"\ud83d\udd23":649,"\u2b06\ufe0f":650,"\u2b07\ufe0f":651,"\u2b05\ufe0f":652,"\u27a1\ufe0f":653,"\ud83d\udd20":654,"\ud83d\udd21":655,"\ud83d\udd24":656,"\u2197\ufe0f":657,"\u2196\ufe0f":658,"\u2198\ufe0f":659,"\u2199\ufe0f":660,"\u2194\ufe0f":661,"\u2195\ufe0f":662,"\ud83d\udd04":663,"\u25c0\ufe0f":664,"\u25b6\ufe0f":665,"\ud83d\udd3c":666,"\ud83d\udd3d":667,"\u21a9\ufe0f":668,"\u21aa\ufe0f":669,"\u2139\ufe0f":670,"\u23ea":671,"\u23e9":672,"\u23eb":673,"\u23ec":674,"\u2935\ufe0f":675,"\u2934\ufe0f":676,"\ud83c\udd97":677,"\ud83d\udd00":678,"\ud83d\udd01":679,"\ud83d\udd02":680,"\ud83c\udd95":681,"\ud83c\udd99":682,"\ud83c\udd92":683,"\ud83c\udd93":684,"\ud83c\udd96":685,"\ud83d\udcf6":686,"\ud83c\udfa6":687,"\ud83c\ude01":688,"\ud83c\ude2f\ufe0f":689,"\ud83c\ude33":690,"\ud83c\ude35":691,"\ud83c\ude34":692,"\ud83c\ude32":693,"\ud83c\ude50":694,"\ud83c\ude39":695,"\ud83c\ude3a":696,"\ud83c\ude36":697,"\ud83c\ude1a\ufe0f":698,"\ud83d\udebb":699,      "\ud83d\udeb9":700,"\ud83d\udeba":701,"\ud83d\udebc":702,"\ud83d\udebe":703,"\ud83d\udeb0":704,"\ud83d\udeae":705,"\ud83c\udd7f\ufe0f":706,"\u267f\ufe0f":707,"\ud83d\udead":708,"\ud83c\ude37":709,"\ud83c\ude38":710,"\ud83c\ude02":711,"\u24c2\ufe0f":712,"\ud83d\udec2":713,"\ud83d\udec4":714,"\ud83d\udec5":715,"\ud83d\udec3":716,"\ud83c\ude51":717,"\u3299\ufe0f":718,"\u3297\ufe0f":719,"\ud83c\udd91":720,"\ud83c\udd98":721,"\ud83c\udd94":722,"\ud83d\udeab":723,"\ud83d\udd1e":724,"\ud83d\udcf5":725,"\ud83d\udeaf":726,"\ud83d\udeb1":727,"\ud83d\udeb3":728,"\ud83d\udeb7":729,"\ud83d\udeb8":730,"\u26d4\ufe0f":731,"\u2733\ufe0f":732,"\u2747\ufe0f":733,"\u274e":734,"\u2705":735,"\u2734\ufe0f":736,"\ud83d\udc9f":737,"\ud83c\udd9a":738,"\ud83d\udcf3":739,"\ud83d\udcf4":740,"\ud83c\udd70":741,"\ud83c\udd71":742,"\ud83c\udd8e":743,"\ud83c\udd7e":744,"\ud83d\udca0":745,"\u27bf":746,"\u267b\ufe0f":747,"\u2648\ufe0f":748,"\u2649\ufe0f":749,"\u264a\ufe0f":750,"\u264b\ufe0f":751,"\u264c\ufe0f":752,"\u264d\ufe0f":753,"\u264e\ufe0f":754,"\u264f\ufe0f":755,"\u2650\ufe0f":756,"\u2651\ufe0f":757,"\u2652\ufe0f":758,"\u2653\ufe0f":759,"\u26ce":760,"\ud83d\udd2f":761,"\ud83c\udfe7":762,"\ud83d\udcb9":763,"\ud83d\udcb2":764,"\ud83d\udcb1":765,"\u00a9":766,"\u00ae":767,"\u2122":768,"\u274c":769,"\u203c\ufe0f":770,"\u2049\ufe0f":771,"\u2757\ufe0f":772,"\u2753":773,"\u2755":774,"\u2754":775,"\u2b55\ufe0f":776,"\ud83d\udd1d":777,"\ud83d\udd1a":778,"\ud83d\udd19":779,"\ud83d\udd1b":780,"\ud83d\udd1c":781,"\ud83d\udd03":782,"\ud83d\udd5b":783,"\ud83d\udd67":784,"\ud83d\udd50":785,"\ud83d\udd5c":786,"\ud83d\udd51":787,"\ud83d\udd5d":788,"\ud83d\udd52":789,"\ud83d\udd5e":790,"\ud83d\udd53":791,"\ud83d\udd5f":792,"\ud83d\udd54":793,"\ud83d\udd60":794,"\ud83d\udd55":795,"\ud83d\udd56":796,"\ud83d\udd57":797,"\ud83d\udd58":798,"\ud83d\udd59":799,        "\ud83d\udd5a":800,"\ud83d\udd61":801,"\ud83d\udd62":802,"\ud83d\udd63":803,"\ud83d\udd64":804,"\ud83d\udd65":805,"\ud83d\udd66":806,"\u2716\ufe0f":807,"\u2795":808,"\u2796":809,"\u2797":810,"\u2660\ufe0f":811,"\u2665\ufe0f":812,"\u2663\ufe0f":813,"\u2666\ufe0f":814,"\ud83d\udcae":815,"\ud83d\udcaf":816,"\u2714\ufe0f":817,"\u2611\ufe0f":818,"\ud83d\udd18":819,"\ud83d\udd17":820,"\u27b0":821,"\u3030":822,"\u303d\ufe0f":823,"\ud83d\udd31":824,"\u25fc\ufe0f":825,"\u25fb\ufe0f":826,"\u25fe\ufe0f":827,"\u25fd\ufe0f":828,"\u25aa\ufe0f":829,"\u25ab\ufe0f":830,"\ud83d\udd3a":831,"\ud83d\udd32":832,"\ud83d\udd33":833,"\u26ab\ufe0f":834,"\u26aa\ufe0f":835,"\ud83d\udd34":836,"\ud83d\udd35":837,"\ud83d\udd3b":838,"\u2b1c\ufe0f":839,"\u2b1b\ufe0f":840,"\ud83d\udd36":841,"\ud83d\udd37":842,"\ud83d\udd38":843,"\ud83d\udd39":844
        ,"\u263a":4,"\u270c":110,"\u261d":120,"\u2764":172,"\u2b50":293,"\u2600":294,"\u26c5":295,"\u2601":296,"\u26a1":297,"\u2614":298,"\u2744":299,"\u26c4":300,"\u260e":336,"\u231b":352,"\u231a":354,"\u2709":393,"\u2702":417,"\u2712":420,"\u270f":421,"\ud83c\udc04":454,"\u26bd":459,"\u26be":460,"\u26f3":465,"\u2615":476,"\u26ea":546,"\u26fa":553,"\u26f2":565,"\u26f5":568,"\u2693":571,"\u2708":573,"\u26a0":614,"\u26fd":617,"\u2668":620,"\u2b06":650,"\u2b07":651,"\u2b05":652,"\u27a1":653,"\u2197":657,"\u2196":658,"\u2198":659,"\u2199":660,"\u2194":661,"\u2195":662,"\u25c0":664,"\u25b6":665,"\u21a9":668,"\u21aa":669,"\u2139":670,"\u2935":675,"\u2934":676,"\ud83c\ude2f":689,"\ud83c\ude1a":698,"\ud83c\udd7f":706,"\u267f":707,"\u24c2":712,"\u3299":718,"\u3297":719,"\u26d4":731,"\u2733":732,"\u2747":733,"\u2734":736,"\u267b":747,"\u2648":748,"\u2649":749,"\u264a":750,"\u264b":751,"\u264c":752,"\u264d":753,"\u264e":754,"\u264f":755,"\u2650":756,"\u2651":757,"\u2652":758,"\u2653":759,"\u203c":770,"\u2049":771,"\u2757":772,"\u2b55":776,"\u2716":807,"\u2660":811,"\u2665":812,"\u2663":813,"\u2666":814,"\u2714":817,"\u2611":818,"\u303d":823,"\u25fc":825,"\u25fb":826,"\u25fe":827,"\u25fd":828,"\u25aa":829,"\u25ab":830,"\u26ab":834,"\u26aa":835,"\u2b1c":839,"\u2b1b":840
    };
    var regx_arr=[];
    for(var k in emoji){
        regx_arr.push(k);
    }
    var regx = new RegExp('(' + regx_arr.join('|') + ')', 'g');
    regx_arr = null;
    function ei(s,ons){
        return s.replace(regx, function (a, b) {
            return '<img src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" style="vertical-align: middle;" class="em emj'+emoji[b]+'" data-char="'+a+'"/>';
        });
    }
    $.fn.minEmoji = function(on_safari){
        return this.each(function() {
            $(this).html(ei($(this).html(),on_safari))
        });
    };
})(jQuery);

/* EmojiBoard - https://github.com/hughstephens/emojiboard */
function emojiboard(el) {

    this.rendered = false;
    this.modal = null;
    this.input = el;
    this.btn = null;
    this.$documentBody = $("body").first();
    this.parent = this.input.parent();

    this.render();
    this.renderSampleModal();
}

emojiboard.prototype.renderSampleModal = function () {

    if ($("#tabs-container-sample").length !== 0) {
        return;
    }

    this.$documentBody.append('<div id="tabs-container-sample"><ul class="tabs"></ul></div>');
    this.input.trigger("ek.sample-container-rendered");

    var $container = $("#tabs-container-sample"),
        $tabs = $container.find(".tabs"),
        _i = 1,
        current,
        html,
        self = this;

    $("<button/>").attr({
        "class": "close",
        "type": "button"
    }).html('<span aria-hidden="true">×</span><span class="sr-only"></span>').prependTo($container);

    if ($container.attr("rendered")) {
        return;
    }

    for (var group in emojiboard_emojis) {
        if (!emojiboard_emojis.hasOwnProperty(group)) continue;
        current = "";
        html = "";

        if (_i == 1) current = "current";
        $tabs.append('<li class="tab-link ' + current + '" data-tab="tab-' + _i + '">' + group + '</li>');
        emojiboard_emojis[group].forEach(function (item) {
            html += "<span>" + item + "</span>";
        });
        $tabs.after($("<div/>").html(html).attr({
            id: "tab-" + _i,
            class: "tab-content " + current
        }));
        _i++;
    }

    $container.attr({
        rendered: true
    });
    // use https://github.com/rodrigopolo/minEmoji to display images
    $(".tab-content").minEmoji();
};

emojiboard.prototype.btnClick = function (event) {

    event.preventDefault();

    var self = this,
        hash = new Array(5).join().replace(/(.|$)/g, function () {
            return ((Math.random() * 36) | 0).toString(36);
        }),
        position = this.input.position();

    if (!self.rendered) {
        self.modal = $("<div/>")
            .html($("#tabs-container-sample").clone().attr({
                id: hash
            }))
            .attr({
                class: "emoji-menu"
            })
            .css({
                top: (position.top + this.input.height() + 8) + "px",
                left: "0px"
            }).appendTo(this.parent);


        $('#' + hash + ' ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('#' + hash + ' ul.tabs li').removeClass('current');
            $('#' + hash + ' .tab-content').removeClass('current');

            $(this).addClass('current');
            $('#' + hash + ' #' + tab_id).addClass('current');
        });
        self.rendered = true;

        $("html").click(function (e) {
            if ($(e.target).closest(".emoji-menu").length == 0 && $(e.target).closest(".modal-btn").length == 0) {
                self.modal.hide();
                self.input.trigger("ek.modal-window-hide");
            }
        });

        $('#' + hash + ' .em').click(function () {
            var character = $(this).attr("data-char"),
                caretPos = self.input[0].selectionStart,
                prevText = self.input.val();

            self.input.val(prevText.substring(0, caretPos) + character + prevText.substring(caretPos));
        });

        self.parent.find(".close").first().click(function (event) {
            event.preventDefault();
            self.modal.hide();
        });

        self.input.trigger("ek.modal-window-rendered");
    } else {
        self.modal.show();
    }
    self.input.trigger("ek.modal-window-show");
};

emojiboard.prototype.render = function () {
    var self = this;

    if(self.input.attr("data-rendered") == "true") return false;
    this.btn = $("<button/>")
        .html('<img src="data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==" style="vertical-align: middle;" class="em emj1">')
        .css({
            "vertical-align": "top",
            "margin": 0
        })
        .attr({
            class: "modal-btn"
        });

    this.btn.click(self.btnClick.bind(self));
    this.input.after(this.btn);
    this.input.css({
        "min-height": "19px"
    });
    this.input.attr({"data-rendered": true});
    this.parent.css({position: "relative"});
};

(function ($) {
    // jQuery plugin wrapper
    $.fn.emojiboard = function () {
        return this.each(function () {
            new emojiboard($(this))
        });
    };
})(jQuery);