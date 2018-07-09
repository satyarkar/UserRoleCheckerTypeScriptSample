/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
var KARLAB;
(function (KARLAB) {
    var Utility;
    (function (Utility) {
        var WEBApi;
        (function (WEBApi) {
            /**
            * Returns organization url
            */
            function GetServerURL() {
                return Xrm.Utility.getGlobalContext().getClientUrl();
            }
            WEBApi.GetServerURL = GetServerURL;
            /**
             * Returns the path to the API
             */
            function GetApiPath() {
                return '/api/data/v9.0/';
            }
            WEBApi.GetApiPath = GetApiPath;
            /**
             * Syncronous method return collection of records base on search criteria
             * @param {queryStr} string that contains the search criteria to be applied on this query
             */
            function RetrieveRecordsSync(queryStr) {
                var plus = encodeURIComponent('+');
                var uri = encodeURI(KARLAB.Utility.WEBApi.GetServerURL() + queryStr);
                // custom encoding plus sign
                if (uri.indexOf('+') > -1) {
                    uri = uri.replace("+", plus);
                }
                var data = "";
                var req = new XMLHttpRequest();
                req.open("GET", uri, false);
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
                req.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            data = JSON.parse(this.response);
                        }
                        else {
                            alert(this.statusText);
                        }
                    }
                };
                req.send();
                return data;
            }
            WEBApi.RetrieveRecordsSync = RetrieveRecordsSync;
        })(WEBApi = Utility.WEBApi || (Utility.WEBApi = {}));
    })(Utility = KARLAB.Utility || (KARLAB.Utility = {}));
})(KARLAB || (KARLAB = {}));
//# sourceMappingURL=WEBApi.js.map