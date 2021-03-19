<template>
<div class="my-12" style="transform: scale(1,1)">

  <svg id="worldmap"   height="600"></svg>



</div>
</template>

<script>

//const d3plus = require('d3plus')
const d3plus = Object.assign({},
    require('d3plus-geomap'),
    require('d3plus-axis'),
    require('d3plus-common'),
    require('d3plus-hierarchy'),
    require('d3plus-legend'),
    require('d3plus-network'),
    require('d3plus-plot'),
    require('d3plus-priestley'),
    require('d3plus-shape'),
    require('d3plus-text'),
    require('d3plus-timeline'),
    require('d3plus-tooltip'),
    require('d3plus-viz'),

);
// const d3 = Object.assign({},
//     require("d3"),
//     require("d3-queue"),
//     require("d3-array"),
//     require("d3-dsv"),
//     require("d3-scale-chromatic"),
//     require("d3-geo"),
//     require("d3-geo-projection"));

export default {
  name: "WorldMap",
  mounted() {
    this.initCountryCodeDict();
    fetch("http://172.104.134.155:3000/peerscountries")
        .then(response=>response.json()
            .then(data=>{
              let locs = data.result;
              let countData = [];
              for (let country in locs){
                let alpha3Code = this.$data['isoAlpha2to3Dict'][country];
                countData.push({ id: alpha3Code  ,count:locs[country]});
              }
              let chart = new d3plus.Geomap()
                  .config({
                    colorScalePosition:'bottom',
                    groupBy:'id',
                    colorScale:"count",
                    tiles:false,
                    ocean:"transparent",
                    zoom:true,
                    topojsonFill: "#cccccc"
                  })
                  .data(countData)
                  .label(function(d){
                     return  d.id+" : " +  d.count;
                  });
              chart.topojson("/data/worldtopo.json");
              chart.colorScaleConfig({color: [ "#6B6601","#ABA202", "#EBDF02", "#F7EB02", "#FEF102"]})
              chart.height(400);
              chart.select("#worldmap").render();
            })
        );
  },
  data: function(){
    return {

      isoAlpha2to3Dict:{},


    }
  },
  methods:{
    initCountryCodeDict: function(){

      // Create country iso code alpha 2 to alpha 3 dict
      // codes taken from https://github.com/andymeek/iso-country-codes-converter/blob/master/src/iso-country-code-converter.js
      var countryCodes= [{
        isoAlpha2Code: 'AF',
        isoAlpha3Code: 'AFG'
      }, {
        isoAlpha2Code: 'AL',
        isoAlpha3Code: 'ALB'
      }, {
        isoAlpha2Code: 'DZ',
        isoAlpha3Code: 'DZA'
      }, {
        isoAlpha2Code: 'AS',
        isoAlpha3Code: 'ASM'
      }, {
        isoAlpha2Code: 'AD',
        isoAlpha3Code: 'AND'
      }, {
        isoAlpha2Code: 'AO',
        isoAlpha3Code: 'AGO'
      }, {
        isoAlpha2Code: 'AI',
        isoAlpha3Code: 'AIA'
      }, {
        isoAlpha2Code: 'AQ',
        isoAlpha3Code: 'ATA'
      }, {
        isoAlpha2Code: 'AG',
        isoAlpha3Code: 'ATG'
      }, {
        isoAlpha2Code: 'AR',
        isoAlpha3Code: 'ARG'
      }, {
        isoAlpha2Code: 'AM',
        isoAlpha3Code: 'ARM'
      }, {
        isoAlpha2Code: 'AW',
        isoAlpha3Code: 'ABW'
      }, {
        isoAlpha2Code: 'AU',
        isoAlpha3Code: 'AUS'
      }, {
        isoAlpha2Code: 'AT',
        isoAlpha3Code: 'AUT'
      }, {
        isoAlpha2Code: 'AZ',
        isoAlpha3Code: 'AZE'
      }, {
        isoAlpha2Code: 'BS',
        isoAlpha3Code: 'BHS'
      }, {
        isoAlpha2Code: 'BH',
        isoAlpha3Code: 'BHR'
      }, {
        isoAlpha2Code: 'BD',
        isoAlpha3Code: 'BGD'
      }, {
        isoAlpha2Code: 'BB',
        isoAlpha3Code: 'BRB'
      }, {
        isoAlpha2Code: 'BY',
        isoAlpha3Code: 'BLR'
      }, {
        isoAlpha2Code: 'BE',
        isoAlpha3Code: 'BEL'
      }, {
        isoAlpha2Code: 'BZ',
        isoAlpha3Code: 'BLZ'
      }, {
        isoAlpha2Code: 'BJ',
        isoAlpha3Code: 'BEN'
      }, {
        isoAlpha2Code: 'BM',
        isoAlpha3Code: 'BMU'
      }, {
        isoAlpha2Code: 'BT',
        isoAlpha3Code: 'BTN'
      }, {
        isoAlpha2Code: 'BO',
        isoAlpha3Code: 'BOL'
      }, {
        isoAlpha2Code: 'BA',
        isoAlpha3Code: 'BIH'
      }, {
        isoAlpha2Code: 'BW',
        isoAlpha3Code: 'BWA'
      }, {
        isoAlpha2Code: 'BV',
        isoAlpha3Code: 'BVT'
      }, {
        isoAlpha2Code: 'BR',
        isoAlpha3Code: 'BRA'
      }, {
        isoAlpha2Code: 'IO',
        isoAlpha3Code: 'IOT'
      }, {
        isoAlpha2Code: 'VG',
        isoAlpha3Code: 'VGB'
      }, {
        isoAlpha2Code: 'BN',
        isoAlpha3Code: 'BRN'
      }, {
        isoAlpha2Code: 'BG',
        isoAlpha3Code: 'BGR'
      }, {
        isoAlpha2Code: 'BF',
        isoAlpha3Code: 'BFA'
      }, {
        isoAlpha2Code: 'BI',
        isoAlpha3Code: 'BDI'
      }, {
        isoAlpha2Code: 'KH',
        isoAlpha3Code: 'KHM'
      }, {
        isoAlpha2Code: 'CM',
        isoAlpha3Code: 'CMR'
      }, {
        isoAlpha2Code: 'CA',
        isoAlpha3Code: 'CAN'
      }, {
        isoAlpha2Code: 'CV',
        isoAlpha3Code: 'CPV'
      }, {
        isoAlpha2Code: 'KY',
        isoAlpha3Code: 'CYM'
      }, {
        isoAlpha2Code: 'CF',
        isoAlpha3Code: 'CAF'
      }, {
        isoAlpha2Code: 'TD',
        isoAlpha3Code: 'TCD'
      }, {
        isoAlpha2Code: 'CL',
        isoAlpha3Code: 'CHL'
      }, {
        isoAlpha2Code: 'CN',
        isoAlpha3Code: 'CHN'
      }, {
        isoAlpha2Code: 'CX',
        isoAlpha3Code: 'CXR'
      }, {
        isoAlpha2Code: 'CC',
        isoAlpha3Code: 'CCK'
      }, {
        isoAlpha2Code: 'CO',
        isoAlpha3Code: 'COL'
      }, {
        isoAlpha2Code: 'KM',
        isoAlpha3Code: 'COM'
      }, {
        isoAlpha2Code: 'CD',
        isoAlpha3Code: 'COD'
      }, {
        isoAlpha2Code: 'CG',
        isoAlpha3Code: 'COG'
      }, {
        isoAlpha2Code: 'CK',
        isoAlpha3Code: 'COK'
      }, {
        isoAlpha2Code: 'CR',
        isoAlpha3Code: 'CRI'
      }, {
        isoAlpha2Code: 'CI',
        isoAlpha3Code: 'CIV'
      }, {
        isoAlpha2Code: 'CU',
        isoAlpha3Code: 'CUB'
      }, {
        isoAlpha2Code: 'CY',
        isoAlpha3Code: 'CYP'
      }, {
        isoAlpha2Code: 'CZ',
        isoAlpha3Code: 'CZE'
      }, {
        isoAlpha2Code: 'DK',
        isoAlpha3Code: 'DNK'
      }, {
        isoAlpha2Code: 'DJ',
        isoAlpha3Code: 'DJI'
      }, {
        isoAlpha2Code: 'DM',
        isoAlpha3Code: 'DMA'
      }, {
        isoAlpha2Code: 'DO',
        isoAlpha3Code: 'DOM'
      }, {
        isoAlpha2Code: 'EC',
        isoAlpha3Code: 'ECU'
      }, {
        isoAlpha2Code: 'EG',
        isoAlpha3Code: 'EGY'
      }, {
        isoAlpha2Code: 'SV',
        isoAlpha3Code: 'SLV'
      }, {
        isoAlpha2Code: 'GQ',
        isoAlpha3Code: 'GNQ'
      }, {
        isoAlpha2Code: 'ER',
        isoAlpha3Code: 'ERI'
      }, {
        isoAlpha2Code: 'EE',
        isoAlpha3Code: 'EST'
      }, {
        isoAlpha2Code: 'ET',
        isoAlpha3Code: 'ETH'
      }, {
        isoAlpha2Code: 'FO',
        isoAlpha3Code: 'FRO'
      }, {
        isoAlpha2Code: 'FK',
        isoAlpha3Code: 'FLK'
      }, {
        isoAlpha2Code: 'FJ',
        isoAlpha3Code: 'FJI'
      }, {
        isoAlpha2Code: 'FI',
        isoAlpha3Code: 'FIN'
      }, {
        isoAlpha2Code: 'FR',
        isoAlpha3Code: 'FRA'
      }, {
        isoAlpha2Code: 'GF',
        isoAlpha3Code: 'GUF'
      }, {
        isoAlpha2Code: 'PF',
        isoAlpha3Code: 'PYF'
      }, {
        isoAlpha2Code: 'TF',
        isoAlpha3Code: 'ATF'
      }, {
        isoAlpha2Code: 'GA',
        isoAlpha3Code: 'GAB'
      }, {
        isoAlpha2Code: 'GM',
        isoAlpha3Code: 'GMB'
      }, {
        isoAlpha2Code: 'GE',
        isoAlpha3Code: 'GEO'
      }, {
        isoAlpha2Code: 'DE',
        isoAlpha3Code: 'DEU'
      }, {
        isoAlpha2Code: 'GH',
        isoAlpha3Code: 'GHA'
      }, {
        isoAlpha2Code: 'GI',
        isoAlpha3Code: 'GIB'
      }, {
        isoAlpha2Code: 'GR',
        isoAlpha3Code: 'GRC'
      }, {
        isoAlpha2Code: 'GL',
        isoAlpha3Code: 'GRL'
      }, {
        isoAlpha2Code: 'GD',
        isoAlpha3Code: 'GRD'
      }, {
        isoAlpha2Code: 'GP',
        isoAlpha3Code: 'GLP'
      }, {
        isoAlpha2Code: 'GU',
        isoAlpha3Code: 'GUM'
      }, {
        isoAlpha2Code: 'GT',
        isoAlpha3Code: 'GTM'
      }, {
        isoAlpha2Code: 'GN',
        isoAlpha3Code: 'GIN'
      }, {
        isoAlpha2Code: 'GW',
        isoAlpha3Code: 'GNB'
      }, {
        isoAlpha2Code: 'GY',
        isoAlpha3Code: 'GUY'
      }, {
        isoAlpha2Code: 'HT',
        isoAlpha3Code: 'HTI'
      }, {
        isoAlpha2Code: 'HM',
        isoAlpha3Code: 'HMD'
      }, {
        isoAlpha2Code: 'VA',
        isoAlpha3Code: 'VAT'
      }, {
        isoAlpha2Code: 'HN',
        isoAlpha3Code: 'HND'
      }, {
        isoAlpha2Code: 'HK',
        isoAlpha3Code: 'HKG'
      }, {
        isoAlpha2Code: 'HR',
        isoAlpha3Code: 'HRV'
      }, {
        isoAlpha2Code: 'HU',
        isoAlpha3Code: 'HUN'
      }, {
        isoAlpha2Code: 'IS',
        isoAlpha3Code: 'ISL'
      }, {
        isoAlpha2Code: 'IN',
        isoAlpha3Code: 'IND'
      }, {
        isoAlpha2Code: 'ID',
        isoAlpha3Code: 'IDN'
      }, {
        isoAlpha2Code: 'IR',
        isoAlpha3Code: 'IRN'
      }, {
        isoAlpha2Code: 'IQ',
        isoAlpha3Code: 'IRQ'
      }, {
        isoAlpha2Code: 'IE',
        isoAlpha3Code: 'IRL'
      }, {
        isoAlpha2Code: 'IL',
        isoAlpha3Code: 'ISR'
      }, {
        isoAlpha2Code: 'IT',
        isoAlpha3Code: 'ITA'
      }, {
        isoAlpha2Code: 'JM',
        isoAlpha3Code: 'JAM'
      }, {
        isoAlpha2Code: 'JP',
        isoAlpha3Code: 'JPN'
      }, {
        isoAlpha2Code: 'JO',
        isoAlpha3Code: 'JOR'
      }, {
        isoAlpha2Code: 'KZ',
        isoAlpha3Code: 'KAZ'
      }, {
        isoAlpha2Code: 'KE',
        isoAlpha3Code: 'KEN'
      }, {
        isoAlpha2Code: 'KI',
        isoAlpha3Code: 'KIR'
      }, {
        isoAlpha2Code: 'KP',
        isoAlpha3Code: 'PRK'
      }, {
        isoAlpha2Code: 'KR',
        isoAlpha3Code: 'KOR'
      }, {
        isoAlpha2Code: 'KW',
        isoAlpha3Code: 'KWT'
      }, {
        isoAlpha2Code: 'KG',
        isoAlpha3Code: 'KGZ'
      }, {
        isoAlpha2Code: 'LA',
        isoAlpha3Code: 'LAO'
      }, {
        isoAlpha2Code: 'LV',
        isoAlpha3Code: 'LVA'
      }, {
        isoAlpha2Code: 'LB',
        isoAlpha3Code: 'LBN'
      }, {
        isoAlpha2Code: 'LS',
        isoAlpha3Code: 'LSO'
      }, {
        isoAlpha2Code: 'LR',
        isoAlpha3Code: 'LBR'
      }, {
        isoAlpha2Code: 'LY',
        isoAlpha3Code: 'LBY'
      }, {
        isoAlpha2Code: 'LI',
        isoAlpha3Code: 'LIE'
      }, {
        isoAlpha2Code: 'LT',
        isoAlpha3Code: 'LTU'
      }, {
        isoAlpha2Code: 'LU',
        isoAlpha3Code: 'LUX'
      }, {
        isoAlpha2Code: 'MO',
        isoAlpha3Code: 'MAC'
      }, {
        isoAlpha2Code: 'MK',
        isoAlpha3Code: 'MKD'
      }, {
        isoAlpha2Code: 'MG',
        isoAlpha3Code: 'MDG'
      }, {
        isoAlpha2Code: 'MW',
        isoAlpha3Code: 'MWI'
      }, {
        isoAlpha2Code: 'MY',
        isoAlpha3Code: 'MYS'
      }, {
        isoAlpha2Code: 'MV',
        isoAlpha3Code: 'MDV'
      }, {
        isoAlpha2Code: 'ML',
        isoAlpha3Code: 'MLI'
      }, {
        isoAlpha2Code: 'MT',
        isoAlpha3Code: 'MLT'
      }, {
        isoAlpha2Code: 'MH',
        isoAlpha3Code: 'MHL'
      }, {
        isoAlpha2Code: 'MQ',
        isoAlpha3Code: 'MTQ'
      }, {
        isoAlpha2Code: 'MR',
        isoAlpha3Code: 'MRT'
      }, {
        isoAlpha2Code: 'MU',
        isoAlpha3Code: 'MUS'
      }, {
        isoAlpha2Code: 'YT',
        isoAlpha3Code: 'MYT'
      }, {
        isoAlpha2Code: 'MX',
        isoAlpha3Code: 'MEX'
      }, {
        isoAlpha2Code: 'FM',
        isoAlpha3Code: 'FSM'
      }, {
        isoAlpha2Code: 'MD',
        isoAlpha3Code: 'MDA'
      }, {
        isoAlpha2Code: 'MC',
        isoAlpha3Code: 'MCO'
      }, {
        isoAlpha2Code: 'MN',
        isoAlpha3Code: 'MNG'
      }, {
        isoAlpha2Code: 'MS',
        isoAlpha3Code: 'MSR'
      }, {
        isoAlpha2Code: 'MA',
        isoAlpha3Code: 'MAR'
      }, {
        isoAlpha2Code: 'MZ',
        isoAlpha3Code: 'MOZ'
      }, {
        isoAlpha2Code: 'MM',
        isoAlpha3Code: 'MMR'
      }, {
        isoAlpha2Code: 'NA',
        isoAlpha3Code: 'NAM'
      }, {
        isoAlpha2Code: 'NR',
        isoAlpha3Code: 'NRU'
      }, {
        isoAlpha2Code: 'NP',
        isoAlpha3Code: 'NPL'
      }, {
        isoAlpha2Code: 'AN',
        isoAlpha3Code: 'ANT'
      }, {
        isoAlpha2Code: 'NL',
        isoAlpha3Code: 'NLD'
      }, {
        isoAlpha2Code: 'NC',
        isoAlpha3Code: 'NCL'
      }, {
        isoAlpha2Code: 'NZ',
        isoAlpha3Code: 'NZL'
      }, {
        isoAlpha2Code: 'NI',
        isoAlpha3Code: 'NIC'
      }, {
        isoAlpha2Code: 'NE',
        isoAlpha3Code: 'NER'
      }, {
        isoAlpha2Code: 'NG',
        isoAlpha3Code: 'NGA'
      }, {
        isoAlpha2Code: 'NU',
        isoAlpha3Code: 'NIU'
      }, {
        isoAlpha2Code: 'NF',
        isoAlpha3Code: 'NFK'
      }, {
        isoAlpha2Code: 'MP',
        isoAlpha3Code: 'MNP'
      }, {
        isoAlpha2Code: 'NO',
        isoAlpha3Code: 'NOR'
      }, {
        isoAlpha2Code: 'OM',
        isoAlpha3Code: 'OMN'
      }, {
        isoAlpha2Code: 'PK',
        isoAlpha3Code: 'PAK'
      }, {
        isoAlpha2Code: 'PW',
        isoAlpha3Code: 'PLW'
      }, {
        isoAlpha2Code: 'PS',
        isoAlpha3Code: 'PSE'
      }, {
        isoAlpha2Code: 'PA',
        isoAlpha3Code: 'PAN'
      }, {
        isoAlpha2Code: 'PG',
        isoAlpha3Code: 'PNG'
      }, {
        isoAlpha2Code: 'PY',
        isoAlpha3Code: 'PRY'
      }, {
        isoAlpha2Code: 'PE',
        isoAlpha3Code: 'PER'
      }, {
        isoAlpha2Code: 'PH',
        isoAlpha3Code: 'PHL'
      }, {
        isoAlpha2Code: 'PN',
        isoAlpha3Code: 'PCN'
      }, {
        isoAlpha2Code: 'PL',
        isoAlpha3Code: 'POL'
      }, {
        isoAlpha2Code: 'PT',
        isoAlpha3Code: 'PRT'
      }, {
        isoAlpha2Code: 'PR',
        isoAlpha3Code: 'PRI'
      }, {
        isoAlpha2Code: 'QA',
        isoAlpha3Code: 'QAT'
      }, {
        isoAlpha2Code: 'RE',
        isoAlpha3Code: 'REU'
      }, {
        isoAlpha2Code: 'RO',
        isoAlpha3Code: 'ROU'
      }, {
        isoAlpha2Code: 'RU',
        isoAlpha3Code: 'RUS'
      }, {
        isoAlpha2Code: 'RW',
        isoAlpha3Code: 'RWA'
      }, {
        isoAlpha2Code: 'SH',
        isoAlpha3Code: 'SHN'
      }, {
        isoAlpha2Code: 'KN',
        isoAlpha3Code: 'KNA'
      }, {
        isoAlpha2Code: 'LC',
        isoAlpha3Code: 'LCA'
      }, {
        isoAlpha2Code: 'PM',
        isoAlpha3Code: 'SPM'
      }, {
        isoAlpha2Code: 'VC',
        isoAlpha3Code: 'VCT'
      }, {
        isoAlpha2Code: 'WS',
        isoAlpha3Code: 'WSM'
      }, {
        isoAlpha2Code: 'SM',
        isoAlpha3Code: 'SMR'
      }, {
        isoAlpha2Code: 'ST',
        isoAlpha3Code: 'STP'
      }, {
        isoAlpha2Code: 'SA',
        isoAlpha3Code: 'SAU'
      }, {
        isoAlpha2Code: 'SN',
        isoAlpha3Code: 'SEN'
      }, {
        isoAlpha2Code: 'CS',
        isoAlpha3Code: 'SCG'
      }, {
        isoAlpha2Code: 'SC',
        isoAlpha3Code: 'SYC'
      }, {
        isoAlpha2Code: 'SL',
        isoAlpha3Code: 'SLE'
      }, {
        isoAlpha2Code: 'SG',
        isoAlpha3Code: 'SGP'
      }, {
        isoAlpha2Code: 'SK',
        isoAlpha3Code: 'SVK'
      }, {
        isoAlpha2Code: 'SI',
        isoAlpha3Code: 'SVN'
      }, {
        isoAlpha2Code: 'SB',
        isoAlpha3Code: 'SLB'
      }, {
        isoAlpha2Code: 'SO',
        isoAlpha3Code: 'SOM'
      }, {
        isoAlpha2Code: 'ZA',
        isoAlpha3Code: 'ZAF'
      }, {
        isoAlpha2Code: 'GS',
        isoAlpha3Code: 'SGS'
      }, {
        isoAlpha2Code: 'ES',
        isoAlpha3Code: 'ESP'
      }, {
        isoAlpha2Code: 'LK',
        isoAlpha3Code: 'LKA'
      }, {
        isoAlpha2Code: 'SD',
        isoAlpha3Code: 'SDN'
      }, {
        isoAlpha2Code: 'SR',
        isoAlpha3Code: 'SUR'
      }, {
        isoAlpha2Code: 'SJ',
        isoAlpha3Code: 'SJM'
      }, {
        isoAlpha2Code: 'SZ',
        isoAlpha3Code: 'SWZ'
      }, {
        isoAlpha2Code: 'SE',
        isoAlpha3Code: 'SWE'
      }, {
        isoAlpha2Code: 'CH',
        isoAlpha3Code: 'CHE'
      }, {
        isoAlpha2Code: 'SY',
        isoAlpha3Code: 'SYR'
      }, {
        isoAlpha2Code: 'TW',
        isoAlpha3Code: 'TWN'
      }, {
        isoAlpha2Code: 'TJ',
        isoAlpha3Code: 'TJK'
      }, {
        isoAlpha2Code: 'TZ',
        isoAlpha3Code: 'TZA'
      }, {
        isoAlpha2Code: 'TH',
        isoAlpha3Code: 'THA'
      }, {
        isoAlpha2Code: 'TL',
        isoAlpha3Code: 'TLS'
      }, {
        isoAlpha2Code: 'TG',
        isoAlpha3Code: 'TGO'
      }, {
        isoAlpha2Code: 'TK',
        isoAlpha3Code: 'TKL'
      }, {
        isoAlpha2Code: 'TO',
        isoAlpha3Code: 'TON'
      }, {
        isoAlpha2Code: 'TT',
        isoAlpha3Code: 'TTO'
      }, {
        isoAlpha2Code: 'TN',
        isoAlpha3Code: 'TUN'
      }, {
        isoAlpha2Code: 'TR',
        isoAlpha3Code: 'TUR'
      }, {
        isoAlpha2Code: 'TM',
        isoAlpha3Code: 'TKM'
      }, {
        isoAlpha2Code: 'TC',
        isoAlpha3Code: 'TCA'
      }, {
        isoAlpha2Code: 'TV',
        isoAlpha3Code: 'TUV'
      }, {
        isoAlpha2Code: 'VI',
        isoAlpha3Code: 'VIR'
      }, {
        isoAlpha2Code: 'UG',
        isoAlpha3Code: 'UGA'
      }, {
        isoAlpha2Code: 'UA',
        isoAlpha3Code: 'UKR'
      }, {
        isoAlpha2Code: 'AE',
        isoAlpha3Code: 'ARE'
      }, {
        isoAlpha2Code: 'GB',
        isoAlpha3Code: 'GBR'
      }, {
        isoAlpha2Code: 'UM',
        isoAlpha3Code: 'UMI'
      }, {
        isoAlpha2Code: 'US',
        isoAlpha3Code: 'USA'
      }, {
        isoAlpha2Code: 'UY',
        isoAlpha3Code: 'URY'
      }, {
        isoAlpha2Code: 'UZ',
        isoAlpha3Code: 'UZB'
      }, {
        isoAlpha2Code: 'VU',
        isoAlpha3Code: 'VUT'
      }, {
        isoAlpha2Code: 'VE',
        isoAlpha3Code: 'VEN'
      }, {
        isoAlpha2Code: 'VN',
        isoAlpha3Code: 'VNM'
      }, {
        isoAlpha2Code: 'WF',
        isoAlpha3Code: 'WLF'
      }, {
        isoAlpha2Code: 'EH',
        isoAlpha3Code: 'ESH'
      }, {
        isoAlpha2Code: 'YE',
        isoAlpha3Code: 'YEM'
      }, {
        isoAlpha2Code: 'ZM',
        isoAlpha3Code: 'ZMB'
      }, {
        isoAlpha2Code: 'ZW',
        isoAlpha3Code: 'ZWE'
      }]

      for(let i = 0;i<countryCodes.length;i++){
        this.isoAlpha2to3Dict[countryCodes[i]['isoAlpha2Code']] = countryCodes[i]['isoAlpha3Code'];
      }

    }
  }

}
</script>

<style scoped>

</style>