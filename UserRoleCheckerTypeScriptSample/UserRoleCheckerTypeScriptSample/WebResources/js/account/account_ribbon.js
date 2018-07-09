var KARLAB;
(function (KARLAB) {
    var account;
    (function (account) {
        var Ui;
        (function (Ui) {
            var RibbonEvents;
            (function (RibbonEvents) {
                /**
                * Returns true if user has System Administrator OR Schedule Manager role, otherwise false
                */
                function ClcikMeEnableRules() {
                    // Get roles name from the config entity, hard coded here for testing .
                    var configValue = "System Administrator,Schedule Manager";
                    return KARLAB.Utility.Common.IsUserHasRoles(configValue.split(","));
                }
                RibbonEvents.ClcikMeEnableRules = ClcikMeEnableRules;
            })(RibbonEvents = Ui.RibbonEvents || (Ui.RibbonEvents = {}));
        })(Ui = account.Ui || (account.Ui = {}));
    })(account = KARLAB.account || (KARLAB.account = {}));
})(KARLAB || (KARLAB = {}));
//# sourceMappingURL=account_ribbon.js.map