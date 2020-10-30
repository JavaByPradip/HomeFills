  var Currency = {
    rates: {"USD":1.0,"EUR":1.17443,"GBP":1.30112,"CAD":0.760356,"ARS":0.0129185,"AUD":0.71411,"BRL":0.178845,"CLP":0.00125185,"CNY":0.148676,"CYP":0.397899,"CZK":0.0430536,"DKK":0.157787,"EEK":0.0706676,"HKD":0.129021,"HUF":0.00323089,"ISK":0.0071876,"INR":0.0136416,"JMD":0.00691217,"JPY":0.00951062,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0468655,"NZD":0.6655,"NOK":0.108056,"PLN":0.26011,"SGD":0.736483,"SKK":21.5517,"SIT":175.439,"ZAR":0.0604843,"KRW":0.000871599,"SEK":0.11327,"CHF":1.09477,"TWD":0.0348133,"UYU":0.023453,"MYR":0.24096,"BSD":1.0,"CRC":0.00165936,"RON":0.240867,"PHP":0.0205617,"AED":0.272294,"VEB":0.000100125,"IDR":6.79804e-05,"TRY":0.126375,"THB":0.0320326,"TTD":0.147549,"ILS":0.296156,"SYP":0.0019497,"XCD":0.370025,"COP":0.000260529,"RUB":0.0128594,"HRK":0.155012,"KZT":0.00233035,"TZS":0.000431036,"XPT":859.362,"SAR":0.266667,"NIO":0.02883,"LAK":0.000108337,"OMR":2.60078,"AMD":0.00207631,"CDF":0.00051183,"KPW":0.00111105,"SPL":6.0,"KES":0.00921949,"ZWD":0.00276319,"KHR":0.00024264,"MVR":0.064935,"GTQ":0.128498,"BZD":0.495934,"BYR":3.88049e-05,"LYD":0.732587,"DZD":0.00775579,"BIF":0.000517556,"GIP":1.30112,"BOB":0.144698,"XOF":0.00179041,"STD":4.772e-05,"NGN":0.0026248,"PGK":0.285997,"ERN":0.0666667,"MWK":0.00132299,"CUP":0.0377358,"GMD":0.0193075,"CVE":0.0106505,"BTN":0.0136416,"XAF":0.00179041,"UGX":0.000269506,"MAD":0.108542,"MNT":0.000351474,"LSL":0.0604843,"XAG":24.17,"TOP":0.434301,"SHP":1.30112,"RSD":0.010001,"HTG":0.0158561,"MGA":0.000255917,"MZN":0.0138272,"FKP":1.30112,"BWP":0.0871867,"HNL":0.0406076,"PYG":0.000142629,"JEP":1.30112,"EGP":0.063691,"LBP":0.00066335,"ANG":0.558662,"WST":0.383297,"TVD":0.71411,"GYD":0.0047793,"GGP":1.30112,"NPR":0.0084862,"KMF":0.00238721,"IRR":2.37427e-05,"XPD":2342.3,"SRD":0.070658,"TMM":5.69803e-05,"SZL":0.0604843,"MOP":0.125263,"BMD":1.0,"XPF":0.00984171,"ETB":0.0267978,"JOD":1.41044,"MDL":0.059011,"MRO":0.00270321,"YER":0.0039945,"BAM":0.600476,"AWG":0.558659,"PEN":0.278552,"VEF":0.100125,"SLL":9.90602e-05,"KYD":1.21951,"AOA":0.00155457,"TND":0.364234,"TJS":0.0967482,"SCR":0.055299,"LKR":0.00541307,"DJF":0.00562535,"GNF":0.000102465,"VUV":0.00879361,"SDG":0.0180995,"IMP":1.30112,"GEL":0.309948,"FJD":0.470366,"DOP":0.0171056,"XDR":1.41312,"MUR":0.0252154,"MMK":0.000766143,"LRD":0.00506984,"BBD":0.5,"ZMK":4.95957e-05,"XAU":1897.93,"VND":4.30904e-05,"UAH":0.0352853,"TMT":0.284902,"IQD":0.000834437,"BGN":0.600476,"KGS":0.0125537,"RWF":0.00102527,"BHD":2.65957,"UZS":9.64353e-05,"PKR":0.00610493,"MKD":0.0190904,"AFN":0.0129969,"NAD":0.0604843,"BDT":0.0117879,"AZN":0.588589,"SOS":0.00173314,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.1233,"ALL":0.00947122,"BND":0.736483,"KWD":3.26799,"GHS":0.1723,"ZMW":0.0495957,"XBT":11323.1,"NTD":0.0337206,"BYN":0.388049,"CNH":0.148894,"MRU":0.0270321,"STN":0.04772,"VES":2.20235e-06,"MXV":0.307049},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };
