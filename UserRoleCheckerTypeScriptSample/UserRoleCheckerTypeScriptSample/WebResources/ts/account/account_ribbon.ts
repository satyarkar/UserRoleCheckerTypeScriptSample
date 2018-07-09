namespace KARLAB.account.Ui.RibbonEvents {

    /**
    * Returns true if user has System Administrator OR Schedule Manager role, otherwise false
    */

    export function ClcikMeEnableRules() {
        // Get roles name from the config entity, hard coded here for testing .
        var configValue = "System Administrator,Schedule Manager";
        return KARLAB.Utility.Common.IsUserHasRoles(configValue.split(","));
    }
}