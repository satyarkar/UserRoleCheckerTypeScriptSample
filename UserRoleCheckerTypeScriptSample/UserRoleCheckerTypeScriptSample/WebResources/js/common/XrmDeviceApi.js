var KARLAB;
(function (KARLAB) {
    var Utility;
    (function (Utility) {
        var XrmDeviceApi;
        (function (XrmDeviceApi) {
            /**
            * Method to open dilog box(device camera, file browser) and update the entity image using Xrm WebApi
            * @param {recordId} Guid Entity record Guid
            * @param {entityType} string Entity logical name
            */
            function CaptureEntityImage(recordId, entityType) {
                if (recordId == null || entityType == null)
                    return;
                Xrm.Device.pickFile().then(function success(result) {
                    if (result != null) {
                        Xrm.WebApi.updateRecord(entityType, recordId, { "entityimage": result[0].fileContent }).then(function (result) {
                            Xrm.Navigation.openAlertDialog({ "text": "Done!" }).then(function () {
                                Xrm.Navigation.openForm({ "entityId": recordId, "entityName": entityType, "openInNewWindow": false });
                            });
                        }, function (error) {
                            Xrm.Navigation.openErrorDialog({ "message": "We couldn't update the record. Error Message: " + error.message });
                        });
                    }
                }, function (error) {
                    Xrm.Navigation.openErrorDialog({ "message": "We couldn't pick the file. Error Message: " + error.message });
                });
            }
            XrmDeviceApi.CaptureEntityImage = CaptureEntityImage;
        })(XrmDeviceApi = Utility.XrmDeviceApi || (Utility.XrmDeviceApi = {}));
    })(Utility = KARLAB.Utility || (KARLAB.Utility = {}));
})(KARLAB || (KARLAB = {}));
//# sourceMappingURL=XrmDeviceApi.js.map