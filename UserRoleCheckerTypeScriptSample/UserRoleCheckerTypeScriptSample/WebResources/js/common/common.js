/// <reference path="../../../node_modules/@types/xrm/index.d.ts" />
var KARLAB;
(function (KARLAB) {
    var Utility;
    (function (Utility) {
        var Common;
        (function (Common) {
            /**
             * Return true if loggedin user role match with one of given roles name
             * @param {rolesToVerify} Array that contains the user roles name to be verify with the user's security roles
             */
            function IsUserHasRoles(rolesToVerify) {
                var matchingRoles = [];
                if (rolesToVerify.length == 0)
                    return false;
                var currentUserRoles = Xrm.Utility.getGlobalContext().userSettings.securityRoles;
                var userRolesName = KARLAB.Utility.Common.GetRolesName(currentUserRoles);
                if (userRolesName.length == 0)
                    return false;
                rolesToVerify.forEach(function (e1) { return userRolesName.forEach(function (e2) {
                    if (e1 == e2) {
                        matchingRoles.push(e1);
                    }
                }); });
                return matchingRoles.length > 0;
            }
            Common.IsUserHasRoles = IsUserHasRoles;
            /**
             * Return collection of role name for the given role ids
             * @param {currentUserRolesId} Array that contains the user role ids to be applied on this query to search roles
             */
            function GetRolesName(currentUserRolesId) {
                var rolesName = [];
                var filters = "&$filter";
                for (var i = 0; i < currentUserRolesId.length; i++) {
                    i == 0 ? filters += "=" : filters += " or ";
                    filters += "roleid eq " + currentUserRolesId[i];
                }
                var queryStrg = KARLAB.Utility.WEBApi.GetApiPath() + "roles?$select=name" + filters;
                var results = KARLAB.Utility.WEBApi.RetrieveRecordsSync(queryStrg);
                if (results.value != null && results.value.length > 0) {
                    for (var i = 0; i < results.value.length; i++) {
                        rolesName.push(results.value[i]["name"]);
                    }
                }
                return rolesName;
            }
            Common.GetRolesName = GetRolesName;
        })(Common = Utility.Common || (Utility.Common = {}));
    })(Utility = KARLAB.Utility || (KARLAB.Utility = {}));
})(KARLAB || (KARLAB = {}));
//# sourceMappingURL=common.js.map