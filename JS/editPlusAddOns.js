EasyEdit.plugins.addPageHeading = {
    const pageName = EasyEditAssetManager._currentAsset.attr.name;
    const pageHeading = document.createElement('h1');
    const h1Placer = document.querySelector('.ees_viperContent');
    pageHeading.style = 'color:#005eb8;font-size:2rem';
    pageHeading.textContent = pageName;
    h1Placer.insertAdjacentElement('afterbegin',pageHeading);
};

EasyEdit.plugins.addPageHeading = {

    // Initialise the plugin
    init: function(){
      var self = this;
   
      // Add a function to the after ees load event
      EasyEditEventManager.bind('EasyEditAfterLoad',self.addLastUpdatedBy);
    },
      
    // Add last updated element to the information box
    addLastUpdatedBy: function(){
      // Get the current asset
      EasyEditAssetManager.getCurrentAsset(function(asset){
        // Append some HTML before the 'trash' button in the information box
        jQuery('#ees_assetInfoInner').append('<div class="row clearfix updatedby"><span class="label">Updated by</span><span class="data" id="ees_assetLastUpdatedBy">' + asset.attribute('updated_username') + '</span></div>');
      });
    }
  };