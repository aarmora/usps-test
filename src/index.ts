import fetch from 'node-fetch';

(async () => {
    const response = await fetch("https://tools.usps.com/tools/app/ziplookup/zipByAddress", {
        "headers": {
          "accept": "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "pragma": "no-cache",
          "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
        //   "cookie": "TLTSID=0471f00a3816161e950b00e0ed96ae55; NSC_uppmt-usvf-ofx=ffffffff3b2237bc45525d5f4f58455e445a4a4212d3; _gcl_au=1.1.2115733649.1650509082; mab_usps=81; _gid=GA1.2.870845731.1650509082; _dc_gtm_UA-80133954-3=1; _session_UA-80133954-3=true; _ga=GA1.1.1940137696.1650509082; _ga=GA1.3.1940137696.1650509082; _gid=GA1.3.870845731.1650509082; _gat_GSA_ENOR0=1; _rdt_uuid=1650509082388.a609708c-30f6-4913-825a-2959be97e41c; _uetsid=ff0e2c60c11c11ec871adbb9d3b14fc8; _uetvid=ff0e41c0c11c11ec9f437bae304d1fd9; _scid=9c7e7523-b93c-43eb-91f3-01a51fe396d6; _pin_unauth=dWlkPVpqWXhNR1E1WW1RdE5EVXlPUzAwT1dRd0xUZzFOMkl0WTJRek1tUTJZVEZrWkROaQ; _ga_3NXP3C8S9V=GS1.1.1650509081.1.0.1650509082.0; mdLogger=false; kampyleUserSession=1650509082703; kampyleUserSessionsCount=1; kampyleSessionPageCounter=1; _sctr=1|1650434400000",
          "Referer": "https://tools.usps.com/zip-code-lookup.htm?byaddress",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "companyName=&address1=5898+Bracken+Ct&address2=&city=Eagle&state=ID&urbanCode=&zip=",
        "method": "POST"
      });

      const json = await response.json();

      console.log('json', json);


})();